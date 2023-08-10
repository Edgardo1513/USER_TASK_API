const Users = require('./users.model');
const Tasks = require('./tasks.model');
const Categories = require('./categories.model');
const TasksCategories = require('./tasksCategories.model');

const initModels = () => {
      
    Tasks.belongsTo(Users, {foreignKey: 'userId'});
    Users.hasMany(Tasks, {foreignKey: 'userId'});

    TasksCategories.belongsTo(Tasks, {foreignKey: 'taskId'});
    Tasks.hasMany(TasksCategories, {foreignKey: 'taskId'});
    
    TasksCategories.belongsTo(Categories, {foreignKey: 'categoryId'});
    Categories.hasMany(TasksCategories, {foreignKey: 'categoryId'});
};

module.exports = initModels;