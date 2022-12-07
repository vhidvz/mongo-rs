// If on a linux server, use the hostname provided by the docker compose file
// e.g. HOSTNAME = mongodb-primary, mongo-secondary-1, mongo-secondary-2, mongo-arbiter

// If on MacOS add the following to your /etc/hosts file.
// 127.0.0.1  mongodb-primary
// 127.0.0.1  mongo-secondary-1
// 127.0.0.1  mongo-secondary-2
// 127.0.0.1  mongo-arbiter
// And use localhost as the HOSTNAME
mongoose.connect(
  "mongodb://<HOSTNAME>:27017,<HOSTNAME>:27018,<HOSTNAME>:27019/<DBNAME>",
  {
    useNewUrlParser: true,
    useFindAndModify: false, // optional
    useCreateIndex: true,
    replicaSet: "rs0", // We use this from the entrypoint in the docker-compose file
  }
);
