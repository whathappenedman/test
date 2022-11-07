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

# V1 (static site, jamstack)
git push
nginx/caddy (already deployed sever) (only ssh)
dns api
cdn, object 

# V2 
one click auto scale
adapters(hetzner,linode,s3...)
docker image
monitoring, node, pm2, analytics??


user story
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
have failover to 2 clouds, rr dns, fast dens failover. dual cdn.
pitch to hetzner, ovh, linode, vultr, bunny for sponsorship

# Later (maybe not this project)
poketbasse, memcached
auth and simple db
websockets or new thing (sse)
