const TasksCategories = require('../models/tasksCategories.model');

// CREATE MULTIPLE USERS
//INSERT INTO users (username, email, password) VALUES ('edgard', 'edgard@gmail.com', '1234');
const createTasksCategories  = async (req, res) => {  

    try {
  
     // all getting the information from the body
     const {tasksId, categoryId} = req.body; 
 
     // everything to send to create with the information obtained 
     const result = await TasksCategories.create("taskId", "categoryId");
   
     // all respond that the action has been performed.    
     res.status(201).json(result);
    
    // catch error if everything goes wrong
    } catch (error) {
     
         res.status(400).json(error);
    } 
 }

 // GET ALL Categories 
 const getTasksCategories = async (req, res) => {    
   
    try {
  
      // all fetch all users
      //SELECT * FROM users;
     const taskcategory = await TasksCategories.findAll();
 
     // all Reply to customer
     res.status(200).json(taskcategory);

     // catch error if everything goes wrong
     } catch (error) {         
         res.status(400).json(error);
    } 
 };

// GET USERS BY ID
const getTaskCategoryById = async (req, res) => {

    try {

     const { id } = req.params;
     //SELECT * FROM users WHERE users.id = 1;
     const taskcategory = await TasksCategories.findByPk(id);
     
     res.status(200).json(taskcategory);
    } catch (error) {
        res.status(400).json(error);
    }
};

// UPDATE USERS BY ID
const updateTaskCategory  = async (req, res) => {
    try { 
    // all get user id
    const {id} = req.params;

    // all get the body with the information 
    const {name} = req.body;

    // all make the query to update
    const taskcategory = await TasksCategories.update( 
       {name},
       {
        where: {id},
    });

    // all Reply to customer
    res.status(204).json(taskcategory);

    // catch error if everything goes wrong
    } catch (error) {
        res.status(400).json(error);
    }
};

// DELETE USERS BY ID
const deleteTaskCategory = async (req, res) => {
    try { 
    // all get route id
    const {id} = req.params;
    // all delete in database
   const taskcategory = await TasksCategories.destroy({ 
        where: {id}, 
    });

    // all Reply to customer
    res.status(204).json(taskcategory);

    // catch error if everything goes wrong
    } catch (error) {
        res.status(400).json(error);
    }
};



module.exports = {
    createTasksCategories,
    getTasksCategories,
    getTaskCategoryById,
    updateTaskCategory,
    deleteTaskCategory,
};