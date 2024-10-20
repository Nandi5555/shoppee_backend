const { Sequelize } = require('sequelize');

// For production, use the DATABASE_URL from the environment variables
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This is often needed for cloud-based PostgreSQL services
      rejectUnauthorized: false // If using a self-signed certificate
    }
  },
});

module.exports = sequelize;
