# How to manage secrets

## Must Read
https://stackoverflow.com/questions/4129631/linux-securing-environment-variables
https://12factor.net/config tl,dr env vars are per deployment! not in code

# Files
git config/cred
ssh
rclone
db

[can use ssh passphrase cached in agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)
https://security.stackexchange.com/questions/183636/ssh-keygen-what-is-the-passphrase-for
same with rclone.
basically passwrod gets used once at login and then stored in mem
always do fde too, can also do root perms for sudo


# Notes
config files can be read from disk, on server scope them to user
env vars

okay have config files enc at rest then with login,
config is decrypted into memory
but need to scope to user/process memory

for server send over shh same way?
need to really learn about users and permissions
then something like firejail

consider threat model and also seperate converns
so admin/dev/deploy is higher priveege
than node process running npm packages

so db key might get leaked, if web server is compromised (node process)
but its a diff computer that runs ansible/terraform and controls all infra



