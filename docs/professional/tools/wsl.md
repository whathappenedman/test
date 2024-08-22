## RPC Error
ping 8.8.8.8 -f -l 1392
Incrementing or decrementing by 10, when I arrived at the right number, just add 28 (header size) so 1392 + 28 = 1420

Then list the interfaces

netsh interface ipv4 show subinterface
In my case the WSL interface is vEthernet (WSL) so I ran:

 netsh int ipv4 set subinterface "vEthernet (WSL)" mtu=1420 store=persistent
At the end I ended up changing only the MTU of the VPN Ethernet device, without modifying the "vEthernet (WSL)"

https://github.com/microsoft/WSL/issues/7345
https://github.com/microsoft/WSL/issues/6264

## High CPU
caused by wslg, can disable for temp solution
or try win+ctrl+shift+B to reset graphics, or toggle monitor states?
[Fix](https://tkacz.pro/wsl-fix-vmmem-high-cpu-usage/)
[on of many gihub issues](https://github.com/microsoft/WSL/issues/6982)


## Files
[working accross filesystems](https://learn.microsoft.com/en-us/windows/wsl/filesystems)


# network/vpn issues
2 problems. mtu and dns and maybe ipv6
curl -v --dns-ipv4-addr 8.8.8.8 --ipv4 https://ollama.ai/install.sh
https://github.com/microsoft/WSL/issues/4698#issuecomment-1598038161
 ip link set dev eth0 mtu 1230
 set mtu in wsl on eth0
 there also seems to be some dns issue 
 cus that command doesnt work without dns flag
 oc actually it does its just ipv4 flag
 strange cus -v shows ipv4 addresses
 
 need to learn some netowrking!


## dns issues
change etc/resolv.conf to not be default
