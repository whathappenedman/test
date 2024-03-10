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