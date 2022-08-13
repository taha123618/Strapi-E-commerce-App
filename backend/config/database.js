const path = require("path");

// CONNECTION FOR SQL-LITE BY DEFAULT IN STRAPI
// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });

// Connect STRAPI to postgreSQL

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost2"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "test"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Altafbhai123@"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost2"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "test"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Altafbhai123@"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  },
});

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        socketPath: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
      },
      options: {},
    },
  },
});

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Altafbhai123@"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
