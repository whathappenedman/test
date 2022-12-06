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