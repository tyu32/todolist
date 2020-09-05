const dbConfig = require('../config/db.config');
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        console.log(path.join(__dirname, file));
        var model = require(path.join(__dirname, file))(sequelize, Sequelize);
        db[model.name] = model;
    })

const Task = db.Task;
const Category = db.Category;

Category.hasMany(Task);
Task.belongsTo(Category);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;