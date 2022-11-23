there are some good basic micro kernels out there. this validates my idea.

a microkernel can run a hypervisor, dedicated server apps
phone,securepi, even desktop

https://microkerneldude.org/2008/04/03/microkernels-vs-hypervisors/
https://news.ycombinator.com/item?id=9735358
https://news.ycombinator.com/item?id=33670177

# OS Funding
I can fund this and get other on board
I said 10 domains, 15 guys each, $1mil per domain
1-2 leads, rest is researchers grants accross globe.
basically 50k for them avg, but some more and some less based on global distribution

so 1 vote block per 50 devs
I have 3 votes(150)
3 corporate sponsers
    each has 50 but expert devs so 10 mil

thats 6 for corporate 3+3

then 4-6 makes up some combination of governmEtn and academic
again 50 devs full.

7/9 vote to remove any corporate or public entity.
pending replacment.
this is a 100 mil job.

microkernel(interrupt,scheduler,messages)
open boot,open isa,boot loader
filesystem

critical DRIVERS (network, io)
critical firmware (disk, fde)

coreutils? (terminal/bash) if can afford
userland netwrking stack/pf

crypto lib

-----

systemd/basic system things to have an os

wayland/pipewire (out of scope)
userlan apps (out of scope)


## 10 teams
### kernel:
kernel
isa/bios/hw/fs
critical drivers(ethernet,sim,wifi,ble)
sec/adv/hypervisor
gpu/accelartors

### OS:
system stuff(systemd,os init, root process)
userland networking(fw,networkstack)
process isolation (users,processes)
coreutils(terminal,bash)
basic userland

this can be two seperate 15 man teams to start
eventually i want 10 15 man teams from me
and 450 from industry
need only 250-300 to cover it,
so extra can do scope creep into crytpo libs and runtimes and some package repos
and good docs and tools
rest is going to be more split, but userland stuff
login, window, graphics,
seperate browswer intiative too



# inbox
Micro kernel
Just find it with $10mil grant.
1 mil per year. Solicit more.
Open source rosc5.
Think of it as a hyper visor.
Separate vms
Or think of it as embedded device controller.
Or just running few custom servers.
Pass through gpu to userland. Works for my phone and for commercial.
On the other hand have browser.
Then os issue is all that’s left.