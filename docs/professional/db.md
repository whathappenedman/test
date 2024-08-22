# APP specific
## tag app:
- yttag/tik/ig/ -- (VIDEO)
    - metadata(title,url,date,tags)
    - timestamps/notes
- comments/snippits
    - metadata(title,url,date,tags)
    - link to image/obj
    - notes(webclipper -> html+css)
- pic/voice tag
    - metadata + desc
    - link to object
    - notes

### Sharing?
just seperate owner and domain like

private user or shared workspace/domain or public access
eventaully need rbac lol



## note/card app
- simple note
    - metadata (**owned blocks** or **subdocs**)
    - just document with sections
        - shadow/scratch/links
    -  some overlap with timestap+note concept
complex note
    - same as above but with columns/blocks
    - but for this you want to decompose into blocks
    - like can dupe embed and link blocks
card
    - metadata(tags,info) + desc

## SO what?
so all of these decompose into metadata and notes for tag app

and for notes its metadata(card) or long documents or blocks.

i like this so basically like metadata/indexs/toplevel data arrays. all in one and all cacheable in mem. like under 5mb.
then spread out notes and blocks into another db tier or what. worst case that 5mb can def use indexdb or even local storage. 
and no reason not to use dynamo for objects


# General
also need pub/sub and crawler(just metadata)
and ocr on images is a note and so is transcript for short voice memos
for longer videos this requires a full search db


# 2/16/23
https://news.ycombinator.com/item?id=34812527
lots in the comments/snippitsbasically for most apps can just get a $20 hetzner
even at 160gb thats for many cases enough (1-2mb epr user) 
thats iver 10k user even for yttag at 5mb and u add in notes later or use dynamo
this is even with pg, can also use sqlite
and you just need 1 for sqlite with replication to s3
or just 2 for pg 1 master and one hot failover


# SQLITE (serparte file)
https://news.ycombinator.com/item?id=34812527
https://news.ycombinator.com/item?id=34813298 (how to run)
more notes https://news.ycombinator.com/item?id=33975635 on how to run



# hardware/tuning (seperate file)
https://news.ycombinator.com/item?id=25956670
alot in comments too but also main blog post

have raid/pool/fs considerations
levl 1 tech software raid/ hardware raid is dead
zfs stores checksum with block

https://vadosware.io/post/everything-ive-seen-on-optimizing-postgres-on-zfs-on-linux/


# 3/29/2024

looked alot into pg and rdbms
they say bad to have table per user?
so if i have a users/vidoes/user<->video assoc table
this will save alot on db size. user data (user+assoc) will be .5mb
	alot less data to sync, can potentiall out source video table to kv (dynamo/cf)
search is more complicated and need hella indexes:
	assoc table (userid+time?) if not userid+???
	video table (id, id+channel?, tsvec(title+org))
	also how to do search on video things without mega joins?

if i just use the db as a backing store and do search client side this can be aovided
but now additonal complexity for client side sync?


------------------------------
before adding bmark type
------------------------------
search/get on:
tag/playlist
	tag table has uid+tag idx, get video ids(subset), join vidtable, return or tsvector search
title
	assoc table has uid idx, get video ids, join vidtable, return or tsvector search
channel
get all/recent
	asssoc on id, return all vids; tag table on uid+tag idx

can use http caching on client for easy boost.
just cache from every sunday? (wahtever lowest util day is)
so u pull 1 till then by using last mod
then you pull 2 from date-0, and that can be cached.
same for video id info i guess, yea have a redis instance caching the vid infos
while building the old bundle and fill it in then. add item modify too to assoc table 
all deb operations looks the same form except tag thats the only one ill have a switch
do decide to do server search? need websoeckts and reltime before getting off server search


tag table
	uid,tag,bmrkT,bmrkID
	idx (uid+tag)
		replace tag with tag id and store just all tags in user table?
assoc table
	uid,mod,create,bmrkT,bmrkID
	idx (uid+mod)
		maybe worth it just to keep tags in here
		can do another index to uid+tag
		that will get me all vids under a tag
ytvid tabel
	id,title,channel(author),desc
	idx (id+tsvector(title,channel),channel)
	
need to handle the case videos themselves are updated
	make an idx on vID in assoc table
and tags are sitll messy

also u totally forgot about list ordering. that can be json in assoc table?
for prototyping have a simpler/less optimized dtaa model
maybe just bmark full video info+(tags + ordering in tag)
figure out db last i guess
------------------------------
with adding bmark type or moving tags into json?
------------------------------
for tags just have same tablle but keep it all in one row per user with jsonb.
{"all-tags" : [tag1,tag2,tag3],
"tag1" : [xxx, xxy,xxz,aab]}


make user stories damnit
add
remove
edit
view by tag(untagged,inbox,tag recent)
view recent all
view pinned
makes alot of sense to keep array of tags and sort on client,
search all,under tag,under author, by Btype by title,channel,tag