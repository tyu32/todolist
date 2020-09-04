module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethod: {
            associate: function(models) {
                User.hasMany(models.Task);
            }
        }
    });
    return User;
};