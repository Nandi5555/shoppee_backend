const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Path to sequelize config

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',  // Explicitly define table name if needed
  timestamps: true,    // Adds createdAt and updatedAt columns
});

module.exports = User;
