module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '57bf0b891600d44c84d3a909f9c51544'),
  },
});
