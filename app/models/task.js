module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        note: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    })
    
    return Task;
};