use a service.
firebase
supertokens/clerk
keycloak


need to write the algos and flow
and support social sign ins
security
owasp

then you need auth servers
keep in pg but need closer for example if in hetzner
need auth servers/cache on edge
to hold sessions at least but also to send salt

basically this is the flow im thinking
user sends email gets salt and nonce
salt protects me and nonce is basic challeneg response for passive replays
also allow like 2 seconds timestamp check. tighten if local (us->us)
what to do for session hijack/steal
session replay?
maybe use session id and jwt/refresh

so on sign up i send you salt you send salted+hashed,
this protects me from db dump and your original password plaintext
but the salted hashed password is basically the password.
on logins we are sending nonnce too for C/R.

but this has a flaw. shocking!
https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
^^ points out that if someone steals salted hashed from db
they cannot log in as user (i.e. because u need password!)
but if im trying to do challeneg response with hashed pw it wont work
client sends me h(h(s+pw)+nonce) and i have to keep h(s+pw)
and someone can log in with that
vs if client send pw and i compare with h(s+pw)
im confused
where as if i salt privatley or double salt
client send me  pw+nonce i need pw. yea its not compatibel 
yea i dont think you can do challenge response without storing the pw
better to send pw and compare to hashed pw in db
maybe look into srp(secure remote pw) but at this point just do pw over the wire
need some expertise after that.
so basically back to sending pw plaintext and preventing replay cus can CR
or send salt but no CR and dont need to keep pw in db
so no CR option.

also no problem with jwt just use a bloom filter and have one node process keeping it up to date.
def not in black list go ahead, possible go long way to db.
