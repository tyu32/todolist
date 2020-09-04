module.exports=(sequelize, Sequelize) => {
    const TodoItem = sequelize.define(
        "todoItem",
        {
            idString: {
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.STRING
            },
            listId: {
                type: Sequelize.STRING
            },
            done: {
                type: Sequelize.BOOLEAN
            }
        }
    );
    return TodoItem;
};