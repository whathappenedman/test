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


## Files
[working accross filesystems](https://learn.microsoft.com/en-us/windows/wsl/filesystems)