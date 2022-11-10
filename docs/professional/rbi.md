# TO DO
first get real linux, not hyperv (pi)
test from there 
try vnc first (maybe xvnc)
    bandwidth, performance
then get x-forwarding, x2go, vnc with only browser
then virtualize
also test this first doing linux(latpop) to linux (pi)
then do one side linux virt
then try windows on bare then virt
try other x servers on windows (xming)

tbf vnc will probably be good enough
then try kasm web for refrence and rustdesk (instant audiuo, good video)
also there is quacamole

# Existing options

## Traditional
VNC
    uses gpu on server
    try no desktop just one browser app
X-Forwarding
    uses gpu on client
x2go
no machine
Remmenia (maint ending)
[RustDesk](https://github.com/rustdesk/rustdesk)

# Modern 
   ## Wayland:

As of 2020, there are several projects that use these methods to provide GUI access to remote computers. The compositor Weston provides an RDP backend. GNOME has a remote desktop server that supports VNC. WayVNC is a VNC server that works with compositors, like Sway, based on the wlroots library. Waypipe works with all Wayland compositors and offers almost-transparent application forwarding, like ssh -X. 

### [GNOME RDP](https://wiki.gnome.org/Projects/Mutter/RemoteDesktop) 
    using pipewire, wayland and flatpak

Mighty
parsec
open-stream.net
cf teams

# Broswer based
BrowserBox[HN RBI using headless chrome](https://news.ycombinator.com/item?id=27180813)
    comenmts are good, project is dead


pupetter
playright?

# APP Streaming
I want a no js browser local 
and a  js browser with rbi (youtube,discord) running remote

cloud flare teams rbi
https://open-stream.net/
https://www.kasmweb.com/community-edition 

https://www.google.com/search?q=applicaiton+streaming+open+source&ei=W09rY96hD729kPIP_tmqqAo&ved=0ahUKEwieu4jdwqD7AhW9HkQIHf6sCqUQ4dUDCA8&uact=5&oq=applicaiton+streaming+open+source&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQHhANMgUIABCGAzIFCAAQhgMyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoGCAAQBxAeOggIABAIEAcQHkoECE0YAUoECEEYAEoECEYYAFCbCliFEmCRFGgBcAF4AIABWogB9wOSAQE4mAEAoAEByAEIwAEB&sclient=gws-wiz-serp

https://github.com/kasmtech/KasmVNC?__hstc=&__hssc=&hsCtaTracking=5647b03d-8cb1-41f9-af4d-4bf4b1692a5b%7C3382cb29-bf73-4c56-b7a6-d8e975e39fce

x11 gui forwarding gave me alot of problems
also vnc options.
