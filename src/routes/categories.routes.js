const express = require("express");
const { Router } = require("express");
const { 
    createTasksCategories,
    getTasksCategories, 
    getTaskCategoryById, 
    updateTaskCategory, 
    deleteTaskCategory 
} = require('../controllers/categories.controllers')
const router = Router();


 //************** CRUD ***************/

//! ************ READ **************/

router.get('/api/v1/taskscategories', getTasksCategories); 

 router.get('/api/v1/taskcategory/:id', getTaskCategoryById );



//! *********** CREATE **************/

router.post('/api/v1/taskscategories', createTasksCategories);



 //! ************* UPDATE **********/

router.put('/api/v1/taskcategory/:id', updateTaskCategory);



//! ************* DELETE **********/

router.delete('/api/v1/taskcategory/:id', deleteTaskCategory);


module.exports = router;