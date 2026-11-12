module.exports = {
  apps: [
    // --- APP STACK ---
    {
      name: "fseda-backend",
      script: "backend/server.ts",
      interpreter: "tsx",
      cwd: "/var/www/fseda.org",
      env: {
        NODE_ENV: "production",
        PORT: 5001,
        MONGO_URI: "mongodb://127.0.0.1:27017/fseda",
        REDIS_URL: "redis://127.0.0.1:6379"
      }
    },
    {
      name: "fseda-newsletter",
      script: "server/server.js",
      cwd: "/var/www/fseda.org",
      env: {
        NODE_ENV: "production",
        PORT: 5001,
        REDIS_URL: "redis://127.0.0.1:6379"
      }
    },

    // --- WILDDUCK MAIL ARSENAL ---
    {
      name: "wildduck-core",
      script: "server.js",
      cwd: "/var/www/wildduck",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "wildduck-haraka",
      script: "index.js",
      cwd: "/var/www/haraka",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "wildduck-zonemta",
      script: "app.js",
      cwd: "/var/www/zone-mta",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "wildduck-webmail",
      script: "server.js",
      cwd: "/var/www/webmail",
      env: { PORT: 3001}
    }
  ]
};
