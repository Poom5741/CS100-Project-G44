module.exports = {
  apps: [
    {
      name: 'my-website',
      script: 'app.js',
      instances: 'max',
      exec_mode: 'cluster',
      watch: true,
      ignore_watch: ['node_modules', 'public'],
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
