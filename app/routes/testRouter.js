// const express = require('express');
// router = express.Router();
// const {tt, bb}  = require('../controllers/testController');

// router.post("/test", bb)

// app.use("/", router)

// module.exports = app;
const {tt, bb} = require('../controllers/testController')
const { createCategory } = require('../controllers/categoriesController')

module.exports = app => {
    const express = require("express")
    var router = express.Router();
    console.log("hi");
    
    router.post("/test", createCategory)

    app.use("/", router);
}