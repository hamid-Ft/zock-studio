module.exports = {
  apps: [{
    name: 'moon-studio',
    script: 'npm',
    args: 'run start',
    env: {
      PORT: 3001,
      NODE_ENV: 'production'
    },
    watch:true
  }]
};
