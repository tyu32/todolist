const Sequelize = require('sequelize');
const { applyExtraSetup } = require('../sequelize/extra-setup')

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'postgres',
    port: 5432,
    dialect: 'postgres',  // mysql, postgres, sqlite and mssql
    username: 'postgres',
    password: 'Qwe123123@',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});

const modelDefiners = [
    require('../sequelize/models/user.model'),
    require('../sequelize/models/instrument.model'),
    require('../sequelize/models/orchestra.model'),
]

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;
