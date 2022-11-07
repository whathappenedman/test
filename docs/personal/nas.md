# TODO
test cpu
test mobo
install windows
check power
check drives in case, stas, smart, stress

now its mixed
check drives shucked
linux
decide what file system to use and nfs vs samba
so like 4 options min (nfs/samba + ntfs/ext4)
and check if works on windows like direct read not through share
c states c8?

https://www.snapraid.it/faq#enc
snap raid, enc, pool, smartools/power
then temps, fan dust
sleep
qbit/sonar/radar/vpn/ytdlp/node/nginx/jellyfin/uptime/dns
now see what sleep/power/network+sonarr
then decide pi. still need pi regardless
mergerfs annd all file spinning
then i can dokcer it all
b2, rsync

# Services

## always on
sonarr/radarr
qbitorrent
vpn out!
ytdlp downloader!
website archiver!
ping/uptime!

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
put all my other shit behind nginx, (sonarr,radarr,jacket,qbit,yt-dlp,dashboards,ha,misc)