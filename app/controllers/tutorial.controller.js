const db = require('./../models');
const Tutorial = db.tutorials;
//What's this?
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log("tutorial.controller - create");
    
    if (!req.body.title) {
        res.status(400).send({ message: "Content cannot be empty!"
      });
      console.log("req.body"+req.body);
      

        //return;
    }

    console.log("req.body.description");
    console.log(req.body.description);

    const new_tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    Tutorial.create(new_tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Server error while creating Tutorial record"});
        });
};

exports.findAll = (req, res) => {
    console.log("tutorial.controller - findAll.");
    
    var condition = null;
    if (req.query) {
        console.log(`title: ${req.query.title}.`);
        const title = req.query.title;
        condition = title ? {
            title: {
                [Op.iLike]: `%${title}%`
            }
        } : null;
    }

    Tutorial.findAll({ where: condition })
        .then(data => {res.send(data)})
        .catch(err => { 
            res.status(500).send({ message: err.message } || "Server error while getting all Tutorials" );
    })
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findByPk(id)
        .then(data => { res.send(data); })
        .catch(err => { res.status(500).send({ message: err.message || `Server error while retrieving Tutoral with ${id}!` }) });
};

exports.update=(req, res) => {
    const id=req.params.id;
    console.log(`tutorial.controller - update, id: ${req.body.id}.`)
  
    Tutorial.update(req.body, { where: { id: id } })
      .then(num => {
        if (num==1) {
          res.send({ message: `Tutorial with id: ${id} was updated successfully.` });
        }
        else {
          res.send({ message: `Tutorial update with id: ${id} failed!` });
        }
      })
      .catch(err => { res.status(500).send({ message: err.message || "Server error while updating Tutorial with id: `${id}`!" }) });
  };
  
  exports.delete=(req, res) => {
    const id=req.params.id;
    Tutorial.destroy({ where: {id: id}})
      .then(num => {
        if (num==1) {
          res.send({ message: `Tutorial with id: ${id} was deleted successfully.` });
        }
        else {
          res.send({ message: err.message || `Tutorial delete with id: ${id} failed!` });
        }
      })
      .catch(err => { res.status(500).send({ message: err.message || "Server error while deleting Tutorial with id: `${id}`!" }) }); 
  }
  
  exports.deleteAll=(req, res) => {
    Tutorial.destroy({ where: {}, truncate: false })
      .then(num => { res.send({ message: `Deleted: ${num} Tutorial records.` }) })
      .catch(err => { res.status(500).send({ message: err.message || "Server error while deleting all Tutorials!" }) }); 
  };
  
  exports.findAllPublished=(req, res) => {
    Tutorial.findAll({ where: { published: true } })
      .then(data => { res.send(data); })
      .catch(err => { res.status(500).send({ message: err.message || "Server error while retrieveing all Tutorials!" }) }); 
  };
  