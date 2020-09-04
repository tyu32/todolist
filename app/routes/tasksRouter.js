module.exports = app => {
    const express = require("express");
    var router = express.Router();

    const {
        addTask,
        updateTask,
        deleteTask
    } = require('../controllers/tasksController');

    router.post("/Task", addTask);
    router.put("/Task", updateTask);
    router.delete("/Task", deleteTask);

    app.use("/", router);
}