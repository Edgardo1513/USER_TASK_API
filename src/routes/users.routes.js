const express = require("express");
const { Router } = require("express");
const { 
    createUsers,
    getUsers, 
    getUsersById, 
    updateUsers , 
    deleteUsers 
} = require('../controllers/users.controllers')
const router = Router();


 //************** CRUD ***************/

//! ************ READ **************/

router.get('/api/v1/users', getUsers); 

 router.get('/api/v1/user/:id', getUsersById );



//! *********** CREATE **************/

router.post('/api/v1/users', createUsers);



 //! ************* UPDATE **********/

router.put('/api/v1/user/:id', updateUsers);



//! ************* DELETE **********/

router.delete('/api/v1/user/:id', deleteUsers);


module.exports = router;