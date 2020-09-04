const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var corsOptions = {
    origin: "http:localhost:8080"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded( {extended: true}));

const db = require('./app/models');

db.sequelize.sync();


//test now
const Task = db.Task;
const t = {
    title: "awesome",
    note: "note",
    complete: false
}

Task.create(t)
    .then(data => {
        console.log("succeed");
    })
    .catch(err => {
        console.log("message:" + err.message);
    });

    //------------------------------------------------------------------------
app.get("/", (req, res) => {
    res.json({ message: "Welcome"});
});

require('./app/routes/turorial.routes')(app);
const categoriesRouter = require('./app/routes/categoriesRouter');
//app.use('/', categoriesRouter);
require('./app/routes/categoriesRouter')(app);

//app.use("/", require('./app/routes/testRouter'));
require('./app/routes/testRouter')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`); 
});