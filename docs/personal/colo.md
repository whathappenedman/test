# Hardware

## PDU
individual power and on off w web gui for individual power consumtion
so basically switched pdu
but u want some always on ports too cus like need to keep
firewall on to allow reaching pdu. unless its lower in rack
## Top of Rack Switch
probably managed but also an unmanaged one idk
redundancy?
Patch Pnael? 

So I want 4 switches, 2 for redundancy but also x2 cus 
i dont want to physically segment management network.

### Managment VLAN
all can be 1u
csico 4948s is nice and cheap used for 1gb ($60-$200)
management interface can be just 1gbps
and put in two pikvms into each server? or use ipmi built in
either way each manageemnt switch connects to each of 2 router sbc with vpn access
and 4g and seperate internal dc lan. 
pdus also connect here.
arista 7050s

## Firewall (if more than once divce/need lan/ unportected stuff)

## KVM, ipmi PI interal VPN
BliKVM PCIe
https://www.youtube.com/watch?v=cVWF3u-y-Zg
total is $200 100 pcie >100 pi. if ipmi just one 
other wise to for prolly 300.
need poe for these though
and base build out will be:
2 web servers and 2 db servers and maybe 2 internal and 2 firewall?
so 8 x 2 = 16 just need a 24port poe to start
can be dumb as will have  dedicated sbc routers with modem and plug into tor switch


# Logistics
need to pay for:
rack
power
internet


# Loadout
## $400 just intro (1gbps, not redundant powe, 15 amp)
PDU 1k
Managed switch 1k
2U Server (only pikvm cus direct to managed switch)
UPS 1k
UPS
## $2400 2yr (10gbps, redundant 30amps)
full rack

PDU
PDU
TOP Managed Switch - take dc input and is managed and splits and dhcps
TOP Managed Switch - LAN
TOP Managed Switch - LAN
internal managment poe
internal managment poe
SBC (two routers)
FIREWALL - cant put in front of webservers so only for db and gpu and storage
FIREWALL - lot of extra space/cost for what? dont want to have fw be managment switch firewal? 

UPS
UPS
UPS
UPS

### Alt
PDU (1.5)
PDU (1.5)
TOP Managed Switch - take dc input and is managed and splits and dhcps (3)
TOP Managed Switch - LAN and Router/FW (3)
TOP Managed Switch - LAN and Router/FW (3)
internal managment poe (1)
internal managment poe (1)
SBC (two routers) (1)

UPS
UPS (3)
UPS
UPS (3)
so 20k for all extra ract stuff.

either case have 20u min usable
so like
4 2u (2web, 2db, 2 int but shared in another 2u 2 node in web)
that leaves 4 4u which is like either storage or gpu
if going to second rack then one rack is all networking/ups
and that will be able to supoprt at least 2 pure compute racks
which is a now actually 4x space 

so bascially at least 100k per rack now five yea makes sens too anyways for rest
so 300k for 3 locations
can pay slaries and monthlies from income
but need 300k stacked.
so 100k users thats 1gbit can handle anyways.
so yea just use cloud till i can afford.
