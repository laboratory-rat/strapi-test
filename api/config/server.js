module.exports = ({ env }) => ({
  host: env('API_HOST', '0.0.0.0'),
  port: env.int('API_PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7a9342b9ddc534b278e3a8a323ba35c5'),
    },
  },
});
