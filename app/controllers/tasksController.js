const models = require('../models');

module.exports = {
    addTask: (req, res) => {
        const title = req.body.title;
        const note = req.body.note;
        //const complete = req.body.complete;
        const complete = false;
        const CategoryId = req.body.cId;
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
        console.log("id: " + req.body.id);
        var result
        models.Task.findOne({
                where: {
                    id: req.body.id
                }
            })
            .then(
                (data) => {
                    console.log(data)
                    complete = !data.complete
                    var a = {}
                    a.complete = complete
                    a.id = req.body.id
                    return a;
                }
            ).then(
                (a) => {
                    models.Task.update({
                        complete: a.complete
                    }, {
                        where: {
                            id: a.id
                        }
                    })
                    .then(data => res.send(data))
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "update task error"
                        });
                    });
                }
                
            );
        // if (result === null) {
        //     console.log('Not found!');
        // } else {
        //     console.log(result instanceof models.Task); // true
        //     console.log(result); // 'My Title'
        // }
        // //const complete = result.complete ? false : true;
        // console.log("comple: " + complete);
        // const num = req.body.id;
        
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