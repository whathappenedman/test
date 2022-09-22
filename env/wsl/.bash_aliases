#aliases
alias testfoo="echo foo-foo"
alias cls="clear"

alias ipp="curl icanhazip.com"

alias backup='cd ~ && cp -vu `cat .backup` /mnt/c/Users/Mustafa/p/env/wsl && cd -'


# git aliases
alias gs="git status"
alias gp="git push"
alias gce="git commit -m 'auto-alias'"

# Functions
nano() { /bin/nano `realpath $1`; }

# CD Path
export CDPATH=.:/mnt/c/Users/Mustafa/:/mnt/c/Users/Mustafa/p/code/

# History
HISTSIZE=5000
HISTFILESIZE=10000
