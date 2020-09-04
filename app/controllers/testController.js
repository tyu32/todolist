//const { bodyParse } = require('body-parser');

module.exports = {
    tt: (req, res) => {
        res.send("boiu");
    },
    bb: (req, res) => {
        const result = req.body;
        res.send(result.title)
    }
}