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
    addTask: (req, res) => {
        const title = req.body.title;
        const note = req.body.note;
        const complete = req.body.complete;
        const CategoryId = req.body.CategoryId;
        models.Task.create({
                title: title,
                note: note,
                complete: complete,
                CategoryId: CategoryId
            })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "create task error"
                });
            });
    },
    updateTask: (req, res) => {
        const complete = req.body.complete;
        const num = req.body.id;
        models.Task.update({
                complete: complete
            }, {
                where: {
                    id: num
                }
            })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "update task error"
                });
            });
    },
    deleteTask: (req, res) => {
        const id = req.body.id;
        models.Task.destroy({
                where: {
                    id: id
                }
            })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "delete task error"
                });
            });
    }
}