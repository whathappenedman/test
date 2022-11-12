# How to manage secrets

## Must Read
https://stackoverflow.com/questions/4129631/linux-securing-environment-variables
https://12factor.net/config tl,dr env vars are per deployment! not in code

# Files
git config/cred
ssh
rclone

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



