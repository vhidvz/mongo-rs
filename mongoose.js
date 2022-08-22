// If on a linux server, use the hostname provided by the docker compose file
// e.g. HOSTNAME = mongo1, mongo2, mongo3

// If on MacOS add the following to your /etc/hosts file.
// 127.0.0.1  mongo1
// 127.0.0.1  mongo2
// 127.0.0.1  mongo3
// And use localhost as the HOSTNAME
mongoose.connect('mongodb://<HOSTNAME>:27017,<HOSTNAME>:27018,<HOSTNAME>:27019/<DBNAME>', {
  useNewUrlParser : true,
  useFindAndModify: false, // optional
  useCreateIndex  : true,
  replicaSet      : 'rs0', // We use this from the entrypoint in the docker-compose file
})