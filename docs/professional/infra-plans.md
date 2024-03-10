# high level

CDN
	bunny, fallback to awscf
Web servers
	nginx
		websockets
	nodes
	jobs/queues
	redis
	auth
DB
Object store
	r2,b2 fallback to s3
	
-----------------------------------------
# main

auth is a nightmare
you dont want to start hosting unless revenue

first thing to migrate probably is db
postgres on hetzner.
still use firebase auth 
stay on cf functions

then you have to move auth and functions
first thing will be setting up ngnix local to terminate tls
and monitoring it and auto scale and nomad
then and node workers too and redis cache and nchan and ws
all on auto
can do queues and pub/sub/realtime
then youd want to finally handle auth
gotcha is firebase doesnt let you export user creds looks at aws how to migrate from firebase guide

but then have local redis for sessions and for sending salt and local node for nonce.
need a process to make sure stufs up to update varaibles () and restore
minaly for redis cache or nonce node

so start on cloud
focus on ui and features and use cloud
then implement caching client side
600b x 10,000 = 5MB or less on client.
when doing yt feeds then maybe put that in its own pg and start form there.
also can try logging on my own. 

need to make sure firebase works with cf/bunny
and test clerk (speed/global dist/simultaneous logins) or something or supabase cus its all pg

# Hardware
start with cloud
move to hetzner
move to 10gbps.io and he fmt2
move to colo proper


#TODO
make sure can put cf as dns but not proxy all subdomains
but still point to wrangler
need to deal with bunny/index (probably not viable)
firebase and clerk as well and email and sns

cleerk needs addon for simultaneous sessions


256 byte max length for email
254 + <>
254 octets, less chars for higher byte uft
so 256 bytes + 4 bytes (32bit) salt
300bytes per user for caching salts+usernames
so 300MB for 1mil users. prolly more like
whathappenedman+youtubetaggingapp@gmail.com
so 44 char is 44 bytes in asci. so 60 == 1/5th ofr 300
so 60MB for million so nothing.

for sessions, ipv4/6 is 32/128 bit so 4/16
so 20*5 + (128bit session id) + (jwt/refresh)
100+16*3*2 = ~ 200 bytes
200MB for million users so all in all 1GB is plenty for redis session and auth cache.