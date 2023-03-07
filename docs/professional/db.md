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
