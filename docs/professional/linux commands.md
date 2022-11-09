# Basic Security and Setup
## Update pakcages
```
sudo apt update 
sudo apt upgrade
sudo apt install nodejs npm nginx git 
sudo apt install htop screen ranger openssh-server?
```
git? vs code? vim? zshomg  

## SSH
```
shh dev@ip  
view server key finger print ssh-keygen -l -f /etc/ssh/  ssh_host_ecdsa_key.pub  
```
 1. disalow root
 2. change port  
 3. cert only  
https://www.raspberrypi.com/documentation/computers/remote-access.html
## Firewall

### UFW
```
ufw status
ufw enable
ufw allow ssh
```
### iptables
### fail2ban
 - crowdsec

## Log and Monitor
 autoupdate  
priometheus

## Users and Permission
webmin?
### User accounts and groups
### File permission
### SElinux

## Optimizations
no swap?  

## Dev Optimizations
alias file from git  

## Automations
 - init script (update,ssh,firewall,users,autoupdates)
 - make image?
 - ansible


takes creds and repo url. deploy npm install 

# Deploy Apps

## Nginx Conf
nginx conf drop and make service 
Change the log_format in /etc/nginx.conf to
```
log_format  main  '$remote_addr $http_x_forwarded_for [$time_iso8601] '
				  '$status $request_length $body_bytes_sent $request_time $upstream_response_time '
				'"$request" "$http_referer" $ssl_protocol/$ssl_cipher $ssl_ciphers';
```
and enable it in access_log  /var/log/nginx/access.log main;
Then you can see how much time it takes to serve each individual request and whether it uses CPU-intensive SSL cipher. Once you know the most heavy-load URLs - you should have a better idea why they are slow.  

run and chron nodemon and nginx

api fuzz/ load test

## git
## node
```
npm install
sudo npm install -g nodemon
```

# Linux
users  
permissions
[jobs/session] (https://www.tecmint.com/keep-remote-ssh-sessions-running-after-disconnection/)  
iptables  
pipe  
ip/whoami/dig/systemd/etc/nano/vi/git .... linux commmand cheatshee  
ls/grep/awk/pipe ... basic bash  
selinux tutorial  
ssh,screen,git  
proc management  

## scp
```scp public master@172.18.191.18:/home/master/app```


## random
```
ip a
whoami
who

dig url +short
whois url
netscan?
```

//local stuff
vs ssh
vs file system

## bash
grep/awk
https://stackoverflow.com/questions/26642938/piping-ip-address-from-dig-to-whois
https://stackoverflow.com/questions/14093452/grep-only-the-first-match-and-stop

here documents https://www.pietrorea.com/2022/01/28/reclaiming-the-lost-art-of-linux-server-administration

dig +short x.s19.io | grep '^[.0-9]*$' -m 1 | xargs whois | grep -E 'org-name|OrgName'
 
wget
wget -qO- www.google.com


ip
use arch wiki for example ssh fail2ban
https://wiki.archlinux.org/title/security
also see if there is a fedora or debian wiki

## rsync
https://tylersguides.com/guides/rsync-backups/
## ranger
https://superuser.com/questions/1043806/how-to-exit-the-ranger-file-explorer-back-to-command-prompt-but-keep-the-current
ctrl s, ctrl d

https://www.rootusers.com/23-hardening-tips-to-secure-your-linux-server/
check git for guide on linux secuyring


# further

firecracker
 - [fly.io]()
 - [aws blogpost](https://aws.amazon.com/blogs/aws/firecracker-lightweight-virtualization-for-serverless-computing/)
