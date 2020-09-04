module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define('Category', {
        title: DataTypes.STRING
    });
    return Category;
};