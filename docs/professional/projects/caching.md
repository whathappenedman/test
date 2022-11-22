read from firebase only first.
the obviously have local in mem object
write to that and to db
this is only for the tab/session.


the read from local in memeory store
and firebase updates on that store

make that in mem store pesisten per device:
- local storage easy only for dev
- indexdb, first real solution(same origin)
- cache api, web requests

eventually have some policy to fetch older items from r2,bunny
encrypted with userkey or ideally cloud function auth otkens too.
this gets moved into persistent store, your new changes are updated once per day? then have sperate files like beyond 1 week then dailies from this week.
then reforumulate or compact them on a weekly basis?