module.exports = ({ env }) => ({
  url: env('HEROKU_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7a9342b9ddc534b278e3a8a323ba35c5'),
    },
  },
});
