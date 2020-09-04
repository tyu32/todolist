// const express = require("express");
// const router = express.Router();

// const {
//     getAllCategories,
//     getCategory,
//     createCategory,
//     deleteCategory
// } = require('../controllers/categoriesController');
// console.log("for fun");
// console.log(createCategory);



// router.post('/addCategory', createCategory);
// router.delete('/deleteCategory', deleteCategory);

// module.exports = router;


module.exports = app => {
    const express = require("express");
    var router = express.Router();

const {
    getAllCategories,
    getCategory,
    createCategory,
    deleteCategory
} = require('../controllers/categoriesController');

router.post("/Category", createCategory);
router.delete('/Category', deleteCategory);
app.use("/", router)
}