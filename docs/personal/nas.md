# TODO
test cpu
test mobo
install windows
check power
check drives in case, stas, smart, stress, temp
sleep, hibernate, wol
then put drives in case(shuk)
power up from what curcit/breaker
measure power draw

now its sage 2 not same week
## linux and nas
decide what file system to use and nfs vs samba
so like 4 options min (nfs/samba + ntfs/ext4)
and check if works on windows like direct read not through share
c states c8?

## step 3
https://www.snapraid.it/faq#enc
snap raid, enc, pool, smartools/power
then temps, fan dust
sleep

qbit/sonar/radar/vpn/ytdlp/node/nginx/jellyfin/uptime/dns
now see what sleep/power/network+sonarr
then decide pi. still need pi regardless
mergerfs annd all disk spinning
then i can dokcer it all
b2, rsync

worst case just run sonar on nas and just eat the sleep. do manual search sometimes big deal. and write something that wakes it on sonarr schedule duh lol. all other stuff can be on pi, cus it can copy over later. and my web app can handle that anyways

# Services

## always on
sonarr/radarr
qbitorrent
vpn out!
ytdlp downloader!
website archiver!
ping/uptime!
ntfy.sh!

## server
plex,emby,jellyfin
nas
snapraid
own/nxtcloud
grafana (internet, hd space, io, on/sleep, errors)

alt search, alt photos, alt maps
alt s3

gpu things (stabel dif, voice, ocr, speech recog, hugging face)
home assistant

vms
web browser default/work
web browser sec/clean state (bank,hide)
remote apps?

### db
weather
ip/geo
maps?
wiki
busscraper 

## always on - network
dns(sec/https)
pihole
vpn in

mitm proxy for redirect?
or just proxy
firewall

# Notes

## Sleep issue
need to test that
post on sonarr discord - sleeping nfs issue
maybe use qbitweb api to pause, wake nfs,, resume
sonar doesnt seem to be able to handle it, it will stall
os level fix too, on linux try unmounting and see if sonarr will still dl
either way whould be totally solvable. 
https://forums.sonarr.tv/t/sonarr-hangs-when-nfs-share-is-unavaliable/30877
media managment setting adv
okay so i can use jacket to cache too.

so like max returns 100 thats should cover prime time,
then another hundred in the morning. so basically 
can wake server every 4 hours out side of night time.

yea fuck all this. just wake it outside of prime time if not already on every 4 hours aside from night
so lets say sleeps at 2am. day work from 8-5 and prime time on at 6 till 12
so actually just dont do anything. 

## yt-dlp
yt-dlp on pi
this has two endpoint, one is behind nginx at home through vpn or tunnel
another is cf pages -> free cloud db, read from there
put all my other shit behind nginx, (sonarr,radarr,jacket,qbit,yt-dlp,dashboards,ha,misc) ^70ea02


# Future

get hba pcie not sata expander
it is said expanders are unreliable
can get hot swap too with sas ports
lsi 16i or 8i (internal or e for external)

can buy 846 supermicro
or get a shelf.
but that is once i  have a normal nas filled with 10 drives.

cus the cost of the upgrade to 24 is min
500 chasis, 200 hba maybe x2
so like 1g. also fans, new psu?

then drives right so like
12 x 200 min is like 2500 so like min 5k budget
to jump past filling up to 10
5 default and then the 3x5.25 -> 5x3.5 hot swap (just cus easy to replace, stil power off)
so i have 3 maybe ill add 1.
after job add 6, so 1.2k
then reasses. 5k is alot lol 
some guy say qnap 2480

going shelf option or qnap option is interesting
and u want a pdu with web gui (smart power strip but also delivery)
basically u want 30 amp but iof not still liek a half rack
with power monitoring

## Hardware
 - [Fractal 7 cases](https://www.amazon.com/Fractal-Design-Aluminum-Tempered-Computer/dp/B08146GB6Y/ref=sr_1_1?keywords=fractal%2Bdefine%2B7%2Bxl&qid=1667350631&qu=eyJxc2MiOiIyLjM5IiwicXNhIjoiMS40NSIsInFzcCI6IjAuNTAifQ%3D%3D&sprefix=fractal%2Bdefine%2B%2Caps%2C135&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&th=1)
 
        Can do dual system actually so thjats something
- R5
    
        need to buy hella brakcets tho

- [large but easier to hotswap](https://www.newegg.com/black-thermaltake-core-w200-xl-atx-dual-system-super-tower/p/N82E16811133308)

prefer above but if needed hotsawp options:

[hot swap 4 bay in 5.25](https://www.amazon.com/StarTech-com-Aluminum-Trayless-Mobile-Backplane/dp/B00OUSU8MI/ref=dp_prsubs_3?pd_rd_w=Gz7U3&content-id=amzn1.sym.ec3cee7c-6bd8-496a-8166-4fdb6d51cad1&pf_rd_p=ec3cee7c-6bd8-496a-8166-4fdb6d51cad1&pf_rd_r=3JE8VGYZ7BB4AWRTYAT4&pd_rd_wg=KwUXS&pd_rd_r=f9649681-3d94-4ff3-aaeb-19d673bc2623&pd_rd_i=B00OUSU8MI&psc=1)
r5 and 7 both work

[reddit post](https://www.reddit.com/r/htpc/comments/or33pq/any_good_atx_cases_with_10x_35_hdd_bays/)