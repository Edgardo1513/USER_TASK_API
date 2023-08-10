const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Tasks = db.define("tasks", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
      is_complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,           
        },
        userId: {
            type: DataTypes.INTEGER,
        }   
    },
    {
        timestamps: false,
    }
    );
    
    module.exports = Tasks;
