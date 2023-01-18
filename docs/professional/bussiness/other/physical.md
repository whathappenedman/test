# 1st Device
has the p2p vpn/io mux and can plug into authenticator
prototype is just all of it boot leg
- so 3 zeros with carrier or custom pcb with eth chips for p2p
- 3 cm4 (offline, controller(authenticator), server) (can start on this asap)
- muxer 
    - (ps2 kb/mouse, eth switc, line in/out, video in/out (usb c or dp and webcam))
    - power in as well, all switched too
    - 7 things (2 power, 1 eth, 2 kb/mouse, sound out, video out)
- minisofrum or sff/itx 
- all in the size and dancase a4?

so all 3 component devices can be build independantly and sold first
namely, the secp2p and the authenticator. and a ps2 and line in and usb/eth switch

this is first device.
ideal version you pull out the authenticator and its a locked down husk.

# 2nd device
this will be only sold on enterprise or with huge premium?
beasue it needs to plug into or fill the space with the frist a4
I want it to have a nas(hdd) part, a gpu part (upto 2), and compute
this is a server. it can do passthrough gaming and get muxed out but generally
its all over eth or somethign faster? doesnt have to connect either tho
so have a1 gpu model and a 2 gpu model both still use the same dedi case, watercooled
then there is also a dedi compute/power block then a dedi nas block


# Authenticator (cm4 is overkill)
start with a really paired down linux
but eventaully want full custom
just running ui and 1st party apps. all else is just x2go from other connected processor
so auth(rfid,ndf but chal/res), comms (email,sms,voice,msg), 
    control panel or basic apps (like puspose built we control the code fully)

# p2p VPN 
ethernet wont work well over gpio just google rpi gpio eth and ull see
just a custom pcb can do all this tbh, eth+singlecore <-> memory+singlecore <-> eth+singlecore
can plug this into the io mux and the cm4s; all connected to one board. 
if you pull the auth cm4 out, so to come out the keys on secp2p (can be embedded but encrypted) 
cant tap the trace cus its analog. pcb trace, can send fde key to offline cm4 or to dev cm4
can send encypted kb input staright to userland server on main x86 device too like over the net.
might as well add a firewall somehwere
thats another standalone right? like the mitm blackbox thing?
so maybe thats standalone too like nas+computed blade and peopel want that gamin one too. 
yea so like on desk:
1, 1+1(gamin and compute passthroguh optional with ssd nas). or all 4 on desk not a three optional
off desk
1 on desk maybe 1+1 on desk
then 1 off desk (nas or gaming) or both
so 
single main ! (sell first)

gaming full ! (sell pre built water cool blocks)
nas + compute(home server) small just fw and streaming and light services ! (sell pre buillt with software)

nas !
compute daddy + gpu for ml? (vms) can conneect to three nas or 2 nas and one gaming or 1 nas and one nas lite and 1 gaming

single or dual gpu standalone for connect to compute daddy
nas full standalone for connect to compute daddy
compute daddy or dual socket
power/ cooling (4th block)

dont need nas+compute lite


# I/O mux