const Sequelize = require('sequelize');
const models = require('../models');
const services = require('../services/services');

 module.exports = {
    getTasks: (categoryId) => {
        return models.Task.findAll({
            where: {
                CategoryId: CategoryId
            }
        });
    },
 }