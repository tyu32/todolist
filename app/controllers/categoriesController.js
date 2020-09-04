const Sequelize = require('sequelize');
const models = require('../models');
// const services = require('../services/services');

module.exports = {
    getAllCategories: () => {
        return models.Category.findAll();
    },
    getCategory: (id) => {
        return models.Category.findOne({
            where: {
                id: id
            }
        });
    },
    createCategory: (req, res) => {
        console.log("createCategory");
        
        // return models.Category.create({
        //     title: req.query.title
        // });
        models.Category.create({
            title: req.body.title
        })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message || "create category error"});
        });
    },
    deleteCategory: (req, res) => {
        console.log("+++++++++++++++++++++++++++++++++++++++++++");
        
        // return models.Category.destroy({
        //     where: {
        //         id: req.query.id
        //     }

        // })
        const id = req.body.id
        models.Category.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({ message: `Category with id: ${id} was deleted.`});
            }
            else {
                res.send({ message: err.message || `Category with id: ${id} was not deleted.`})
            }
        })
        .catch(err => { res.status(500).send({ message: err.message || `Server error while deleting Category with id: ${id}!` })})
    }
 }