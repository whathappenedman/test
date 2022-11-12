# self hosted cli

git push to self hosted nginx or other
Server: nginx conf, caddy
Object: k.v -> push to bunny or aws
DNS: auto domain (namecheap, route53)
all from cli, people can add their own adapters
deploy to s3 and hetzner, linode
docker with node, nginx, monitoring (grafana,umami)
basic autoscale 
u had this idea, like reccomend 3 options
1 node, 3 node mediuem size, 3-4 large
covers most need and auto config gui.

## motivation
real jam stack. real static one click
AGAINST CENTRALIZATION
AGAINST VENDOR LOCK IN
    next was jam but, next was node.
    now its vercel edge functions
against edge
    cold start issue solved and does have cost and eprf benefits
    but this beenfits hyper scalers the most. and more lock in
    edge doesnt work unless ur db is also distributed if you need db


# V1 (static site, jamstack)
git push
nginx/caddy (already deployed sever) (only ssh)
dns api
cdn, object 

# V2 (mostly static, basic node functionality or ssr, isr)
one click deploy or scale
    docker image
    ansible, terraform
adapters(hetzner,linode,s3, bunny, namecheap,gandi)
move fonts to cdn too, no google
monitoring, node, pm2, analytics??

## Next - ssg vs no server
next says cant:

    Image Optimization (default loader)
    Internationalized Routing
    API Routes
    Rewrites
    Redirects
    Headers
    Middleware
    Incremental Static Regeneration
    fallback: true
    getServerSideProps

https://nextjs.org/docs/advanced-features/static-html-export#unsupported-features

without server.
ill do headers/rewries,redirect,
some middlewear,isr,ssr,api: adv mode disclaimer. load considerations

use key cdn performance too to test from diff cloud locaitons
https://nextjs.org/docs/advanced-features/static-html-export


# user story
pick provioders
pick scale
deploy from git
object storage
admin dashboard
simple and quick sites. like limited in scope. no large projects
demo, quick, sample, lightweight, static, simple
like this sever just send ur initial html (<5kb)
all else is cahced or cdn. no realy server routes, just for analytics and monitoring/beacon
so 1gbps server is like 50k rps x 3 servers x 10userfactor is over a million users. enough for most needs
still with node and v2 as long as not all ssr and more flexible 20xuser factor thing (5%)
maybe 2 more nodes can still hit that 1 million.
have failover to 2 clouds, rr dns, fast dens failover. dual cdn.
pitch to hetzner, ovh, linode, vultr, bunny for sponsorship
basically once this stops one lcik working u can hire a team of devs

# Later (maybe not this project)
poketbasse, memcached
auth and simple db
websockets or new thing (sse)?? nahh
some use cases:
forum, basic ecomm, blog, contact us + info
t.o.s, gdpr, 
if you use it donate 
$10 once
$5 monthly
$100+ once

this is used by my web dev bussiness
and dz