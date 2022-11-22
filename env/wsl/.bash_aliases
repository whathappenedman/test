## notes u dirty boy
# org my home dir(.config), rename this with - not _

#aliases
alias testfoo="echo foo-foo"
alias cls="clear"

alias ipp="curl icanhazip.com"

alias backup='cd ~ && cp -vu `cat .backup` /mnt/c/Users/Mustafa/p/env/wsl && cd -'
# only works on windows, requires setup
# add grep at end to print new info
alias backup-notes='backup && rclone sync -P "/mnt/c/Users/Mustafa/p" b2-secret:windows/p --exclude-from /mnt/c/Users/Mustafa/p/.rcloneignore'
alias bakn='backup && backup-notes'

# git aliases
alias gs="git status"
alias ga.="git add . && gs"
alias gp="git push"
alias gce="git commit -am 'auto-alias'"
alias gcep="gce && git push"

# Functions
nano() { /bin/nano `realpath $@`; }

# CD Path
export CDPATH=.:/mnt/c/Users/Mustafa/:/mnt/c/Users/Mustafa/p/code/:/mnt/c/Users/Mustafa/p/code/projects/

# History
HISTSIZE=10000
HISTFILESIZE=100000
HISTCONTROL=ignoreboth:erasedups
