const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
    const instruments = await models.findAll();
    res.status(200).json(instruments);
};

async function getById(req, res) {
    const id = getIdParam(req);
    const instrument = await models.instrument.findByPk(id);
    if (instrument) {
        res.status(200).json(instrument);
    }
    else {
        res.status(404).send('404 - Not found');
    }
};

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`);
    }
    else {
        await models.instrument.create(req.body);
        res.status(201).end();
    }
};

async function update(req, res) {
    const id = getIdParam(req);

    if (req.body.id === id) {
        await models.instrument.update(req.body, {
            where: {
                id: id
            }
        });
        res.status(200).end();
    }
    else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
    }
};

async function remove(req, res) {
    const id = getIdParam(req);
    await models.instrument.destory({
        where: {
            id: id
        }
    });
    res.status(200).end();
};

models.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}