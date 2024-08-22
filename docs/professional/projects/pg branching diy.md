-------------------------------------
basically use sqitch for git shcemas and use ci cd to publish on some infra using the same basedb/wal and can add streamin/logical replication to keep up to date but tis complicated and extra
at least can do schema migration and branch from point in time, no option to remerge
----------------------------------------

User
i see cloud/dbas providers offer dataabse branching for postgres databases. is there some way i can replicate this functionality myself

Use Git for Schema Changes: sqitch or flyway. (need to write migrations probably)

Spinning Up Clones: Fpg_dump and pg_restore to clone your database. This is resource-intensive 

Logical Replication: can be used to create a branching effect by replicating changes from a "master" database to a "branch" database. It's more suitable for continuous replication rather than discrete branching.

Use Containers: Combine this with a version-controlled schema migration tool, and you can create isolated environments that imitate branches. Each branch of your application code can have a matching PostgreSQL container with the schema and data at that branch's state.

Third-party Tools: Consider third-party tools like Postgres.ai Database Lab or pg_clone to simplify the cloning/branching process. These tools can help create thin clones of your database, making the branching process much more efficient and less resource-intensive.

Automate: Regardless of the method chosen, automate the process as much as possible. Use CI/CD pipelines to integrate database migrations and cloning into your development workflow, ensuring that database branches are created, updated, and destroyed as needed automatically.