module.exports = {
  apps: [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy: {
    production: {
      user: "ubuntu",
      key: "/home/jordanlumley/Documents/atlas_crm_dev.pem",
      host: [
        "34.202.214.255"
      ],
      ref: "origin/master",
      repo: "https://github.com/jordan-lumley/pm2test.git",
      path: "/home/ubuntu/apps/pm2test",
      "post-deploy": "npm install;",
      "post-deploy": 'npm install && pm2 reload ecosystem.config.js --env production',
      "pre-setup": ''
    }
  }
};
