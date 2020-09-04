const Sequelize = require('sequelize');
const models = require('../models');

module.exports = {
    getTasks: () => {
        return models.Task.findAll({
            include: [
                {
                    model: models.User,
                    require: true,
                },

                {
                    model: models.Category,
                    require: true
                }
            ]
        });
    },

    createTask: (title, notes, completed, CategoryId, UserId) => {
        return models.Task.create({
            title, notes, completed, CategoryId, UserId
        });
    },

    updateTask: (status, id) => {
        return models.Task.update({
            completed: status,
        }, {
            where: {
                id
            }
        });
    },

    deleteTask: (id) => {
        return models.Task.destory({
            where: { id }
        });
    },

    getUser: (userName) => {
        return models.User.findOne({
            where: { userName }
        });
    },

    getUsers: () => {
        return models.User.findAll();
    },

    createUser: (firstName, lastName, userName, email, password) => {
        return models.User.create({
            firstName, lastName, userName, email, password
        });
    },

    deleteUser: (id) => {
        return models.User.destory({
            where: { id }
        });
    },

    getCategories: () => {
        return models.Category.findAll();
    }
}