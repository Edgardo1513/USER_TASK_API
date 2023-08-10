const Tasks = require('../models/tasks.model');
const TasksCategories = require('../models/tasksCategories.model');


//CREATE  MULTIPLE TASKS
const createTasks  = async (req, res) => {

    try {
        
     // all getting the information from the body
     const newTasks = req.body; 

     // everything to send to create with the information obtained 
     const result = await Tasks.create(newTasks);
    
     // all respond that the action has been performed.    
     res.status(201).json(result);

    // catch error if everything goes wrong
    } catch (error) {     
         res.status(400).json(error);
    } 
 }

// GET ALL TASKS 
 const getTasks = async (req, res) => {    
   
    try {
  
      // all fetch all users
     const tasks = await TasksCategories.findAll({
    attributes: { exclude: ["taskId"] }, // Excluding "taskId" from the result
      include: { model: Tasks }, // Including the associated "Tasks" model
    });
     // all Reply to customer
     res.status(201).json(tasks);

     // catch error if everything goes wrong
     } catch (error) {         
         res.status(400).json(error);
    } 
 };

//GET TASKS BY ID
const getTaskById = async (req, res) => {
    try {
     const { id } = req.params;
     const task = await TasksCategories.findByPk(id, {
        
        attributes: { exclude: ["taskId"] }, // Excluding "taskId" from the result
        include: { model: Tasks }, // Including the associated "Tasks" model
      });
        
        
     
     res.status(201).json(task);
    } catch (error) {
        res.status(400).json(error);
    }
};

// UPDATE TASKS BY ID
const updateTasks  = async (req, res) => {
    try { 
    // all get user id
    const {id} = req.params;

    // all get the body with the information 
    const {title, description, completed} = req.body;

    // all make the query to update
    const tasks = await Tasks.update( 
       { title, description, completed },
       { 
        where: {id},
    });

    // all Reply to customer
    res.status(204).send();

    // catch error if everything goes wrong
    } catch (error) {
        res.status(400).json(error);
    }
};

// DELETE TASKS BY ID
const deleteTasks = async (req, res) => {
    try { 
    // all get route id
    const {id} = req.params;
    // all delete in database
    await Tasks.destroy({ 
        where: {id}, 
    });

    // all Reply to customer
    res.status(204).send();

    // catch error if everything goes wrong
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    createTasks,
    getTasks,
    getTaskById,
    updateTasks,
    deleteTasks
};