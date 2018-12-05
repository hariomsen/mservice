
// simple configuration file

// database parameters
const dbSettings = {
    db: process.env.DB || 'movies',
    servers: (process.env.DB_SERVERS) ? process.env.DB_SERVERS.split(' ') : [
      '127.0.0.1:27017'
    ],
    dbParameters: () => ({
      w: 'majority',
      wtimeout: 10000,
      j: true,
      readPreference: 'ReadPreference.SECONDARY_PREFERRED',
      native_parser: false,
     
    }),
    serverParameters: () => ({
      autoReconnect: true,
      poolSize: 10,
      socketoptions: {
        keepAlive: 300,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000
      },
      useNewUrlParser: true
    }),
  }
  
  // server parameters
  const serverSettings = {
    port: process.env.PORT || 3000
  }
  
  module.exports = Object.assign({}, { dbSettings, serverSettings })