const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Medication = sequelize.define('Medication', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dosage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Medications',
    timestamps: false
});

module.exports = Medication;
