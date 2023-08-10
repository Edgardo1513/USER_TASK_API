const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const TasksCategories = db.define("tasksCategories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,    
    },
    taskId: {
        type: DataTypes.INTEGER,        
    },
    categoryId: {
        type: DataTypes.INTEGER,        
    }   
},
{
    timestamps: false,
}
);

module.exports = TasksCategories;