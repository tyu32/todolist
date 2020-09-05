const models = require('../models');

module.exports = {
    createCategory: (req, res) => {
        models.Category.create({
            title: req.body.title
        })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message || "create category error"});
        });
    },
    deleteCategory: (req, res) => {
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