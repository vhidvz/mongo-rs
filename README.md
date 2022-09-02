# Mongo-RS

Mongo replication set with three nodes, run and start with docker compose:

```sh
sh ./docker.sh
```

Add this lines to `/etc/hosts`:

```sh
127.0.0.1    mongo1
127.0.0.1    mongo2
127.0.0.1    mongo3
```

## Connection

`mongodb://mongo1:27017,mongo2:27018,mongo3:27019/?authSource=admin&readPreference=primary&ssl=false&replicaSet=rs0`
