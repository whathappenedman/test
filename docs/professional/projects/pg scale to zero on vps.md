on hetzner cloud vm or any provider.
can use ansible/terraform or docker image to pull pg
then use base backup and wal-g streaming.
and reupdate base as needed? maybe even daily.

so on startup hits the worker.
worker spins up server, pulls image or ansible/terraform
seperatly pulls base and wal.
should take 1-2 min or less iA
since its concurrent downloads on ssd servers.
figure out what that cold start time is and then aggresively sleep
dont want to rely on hetzner sanpshot so try s3
well walg can write to ssh or local so, hetzner volume should work
can also try the sanpshot option too iguess.
s3, hetzner volume, snapshot
maybe snapshot for base image and base backup?
then only s3 for wal. test it out 
get it under 1 minute would be sick.