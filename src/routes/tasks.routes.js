const express = require("express");
const { Router } = require("express");
const { 
    createTasks,
    getTasks, 
    getTaskById, 
    updateTasks , 
    deleteTasks 
} = require('../controllers/tasks.controllers')
const router = Router();


 //************** CRUD ***************/

//! ************ READ **************/

router.get('/api/v1/tasks', getTasks); 

 router.get('/api/v1/task/:id', getTaskById );



//! *********** CREATE **************/

router.post('/api/v1/tasks', createTasks);



 //! ************* UPDATE **********/

router.put('/api/v1/task/:id', updateTasks);



//! ************* DELETE **********/

router.delete('/api/v1/task/:id', deleteTasks);


module.exports = router;