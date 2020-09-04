module.exports = app => {
    const express = require("express");
    var router = express.Router();

    const {
        createCategory,
        deleteCategory
    } = require('../controllers/categoriesController');

    router.post("/Category", createCategory);
    router.delete('/Category', deleteCategory);
    app.use("/", router)
}