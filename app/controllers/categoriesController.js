const models = require('../models');
//const { Json } = require('sequelize/types/lib/utils');

module.exports = {
    createCategory: (req, res) => {
        console.log(req.body);
        models.Category.create({
            title: req.body.data.title
        })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message || "create category error"});
        });
    },
    deleteCategory: (req, res) => {
        //var test = Json.stringify(req.body)
        console.log("delete category: "+req.body.id);
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