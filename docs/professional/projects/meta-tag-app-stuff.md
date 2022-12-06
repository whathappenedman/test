seperate vpn from browser and windows asap!!!
manage the security concners!!

put open ai whisper
just rcodrd and dictate your htougths 
can have a palistani assitant go through
it just clip your links!


just need archiver
liek link weed added
screenoshot
OR VIDEO!

and can refer later later, just tag it.


tag before notes
ui, cloud db

then app and full ui

then compressor/crawler

then db
then! caching
 THEN MAKE YUOUR OWN NOTE EDITOR
 
 
 VOICE TO WHISPER auto extract tags!
 can add links in here and auto turn into notes!
 
 input?
 link
 picture
 
 on phone use share(need ios app)
 
 on desktop can just have windows open at first
 but id want a bookmarklet minimum
 then an extention or desktop app damn on all platforms
 
 so pwa (andoid share) and bookmarklet(should work well enough)
	???with browser ext(chrom,ff)
 ios app and safari extention
	then here can consider moving past just ui and clouddb (meaning no cahcnig, no db, no custom complex,blocks notes)
	and still need compressor, whisper,ocr crawler (can optimize and go on device for e2e)
	and need yt rss
		then dev blog rss
	bascially dont waste time thinking about blocks
 android app
 native apps
 
 
 
 
 try just html?
 how is rtf represented
 try copying between apps some rtf
 some md?
 
 bascially just show some text areas and show text in it
 use the editable trick and inspect i ndevtools?
 
i want to opensource some stuff
maybe 


what are my user stoires
add
search by tag
view cwertain lists

bascially do a smiple block(whats is that rtf? md?)
with a links add on 
with an embed add on (images,pdfs)
with heading toc 
all of those are static and seperate from main text area
define custom block lay out for more TA
like 1 to the side
so this is just simple not blocks yet
need to grab hashtags tho and ats
something for tagging, and something for headings
auto indent lists
seperate render for collapsing? shoukld be built in to lib already
just missing color and lists do something custom like #! then popup like 2-3 ommansds simple.
need to design on mobile ui


so just get an defualt editor and have added psudo blocks (links,attachments,toc)
what i need/want built into this editor is
collapse of bullets/headings
# headings
#! color/bold/italic
hot linking
second column of notes thatsd it! for v1

# competition
https://getpolarized.io/
archivebox too

input types
video
	yt,tiktok,insta/fb,vimeo, rumble?, streamable
links (smart??) at least verified to work with archiver, generate png/pdf, eventually just store html and css to recreate so not img
	hn,reddit(old),twitter(threadunroller),stack,wiki,ig(image posts)/fb,


input options
web (desktop)
url copy and paste, BOOkmarkelt
file picer(take pic)
PASTE PIC
share dialog, (android yes, ios app)(desktop??)

bookmarkelt:
https://joeldare.com/creating_a_drag_and_drop_bookmarklet.html

---------------------------
okay roadmap! 12/1/22

yt tag 
video (all sites) add from web(desktop/android pwa) and bookmarklet
add comments/posts -> iArchive support or archive.is too
	bookamkrs basic
	
		api to expose for ytdlp(firebase issue) -> ytdlp integration (cut price if other users use)
	
	rss ui	(just dumb, no caching, no pubsub) (maybe if works on cf then do)(yea just use sqlite on cf and cf fucntions to rss)

basic yttag $3
rss is $5 (include pic tag lite)
premium is $7-$15
maybe 7 for data 15 for public
and its the same plan as other

pic tag/voice ($3 "lite", $5 inlude basic yttag, premium data $7, customer facing $15, teams/remove branding $20)
[GET TILL HERE IN YOUR 90 DAY PLAN IA]
simple note (note in yttag too)
kanban
		custom power up workflows -> zapier iftt etc integrations

included in any paid plan of other two
or $3 standalone

-----------------
so final is 
$3 lite or basic yttag (prolly need to go cheaper)
$5 on gets the other lite. for yt its rss for pic its "unlim" and includes notes
so like $3 plan is temp and basic and not ocmbined
first real plan is $5 (yt-dlp api, back up to rsync of choice, limited ocr, trasncribe less 100min)
$7 plan is more data (full upload, video backup, 3-5 public list,)
$ 15 is customer facing 
$ 25 teams, remove branding, autodl rss, unlim storage podcast peopel will pay for it like 2-3 accounts on podcast, media, news teams 

### BOTH PLATFORMS ###

more platforms 
ios app, web extention (IOS COST devlicense and hardware)

premium features (public lists, send to client, rbac, password protect)
billing
e2e testing, monitoriong

SOFT LAUNCH POSSIBLE
### END BOTH PLATFORMS ###


avif
whisper -> auto tag
tesseract -> auto tag
crawler	
(all above, integrate to ec2 and hetzner costs)

caching ideas
DB choices/pubsub
e2e signal

search service(full video transcripts, fts for large notes?)

al this is doable in one year with job even
4 segments of 150hrs each 
10hrs a week even working, thats 1 year. and soft launch in half anyways.
and can get paki guys or mx to work. ask bilal z or maaz. mashallah

------------------------------------------
ONLY IF MAKING PAPER!
------------------------------------------
block editor
open backend/api so can use your own backing store(archiver,ytdlp on nas,localdb/webui)
bussiness options like not basic i mean monday, roadmap, sso
messaging, email

archiver projects (weblinks,yt-dlp ui,)

dev utils/blog tracker
search app
dz
1 click deploy app
news mockup
sm

________________________________
FUTURE PLANS
________________________________

ar/vr/ai
	like do the overlay ocr thing and n dimensional anal
	
news -> news prod
restaurants -> perma culture        -> products
			-> clothes -> fragrance -> products
									-> logistics -> backhaul network
gaming/ar/vr/ai
	 ->	thinktannk -> school/news
	 -> laywers
	 
makersshop -> keyboards
			-> robotics
						-> x
						
			tutoring
					schools
							aalim
			ilm catalogue and digitize
				wiki fiqh

pops -> all pop businesses 
	 -> dc/logisitcs
						-> contractors/constructions/architect
								-> mining
								-> sats
i can do all this in 5 years
10 to frutition. before 40 come on lest go!

start browser and foss kernal non profit
and sec pi and eva





-------------------------
monitoring too for employees

screencaps
	windows then linux
	avif enc, send over wire, assemble at home to video
	also webcam? 
ping/speedtest
sleep/power/errorlogs
security status/installed programs/everything/windirstat
basic config/security auditing





# Notes on GPU
v100 from ovh
rtx 6000 (2018) from linode
hard to tell which is better.

amazon has some deals! can get t4 g4dn on spot or reserved for good price compared to linode.

first have top benchmark t4 vs v100 vs 6000
but assuming t4, then on spot can get it from ~100/month

v100 and 6000 have similar cuda and tensor, but i think 6000 is one gen newer. it has much less double precision tho. 


either way just use hetzner to start then can use t4 spot for whisper. have to do alot of testing

so just start with hetzner because avif prolly wont happen on gpu anyways.
then wire it up to aws g4dn? on spot for the t4s for whisper, after testing. 
yea i can bring it after launch. just need avif enc and on server should be good, otherwise fall back to jpeg till fix
https://www.reddit.com/r/AV1/comments/fq4p0j/can_av1_encoding_be_efficiently_gpu_accelerated/