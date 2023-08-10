const Users = require('../models/users.model');

// CREATE MULTIPLE USERS
//INSERT INTO users (username, email, password) VALUES ('edgard', 'edgard@gmail.com', '1234');
const createUsers  = async (req, res) => {  

    try {
  
     // all getting the information from the body
     const newUser = req.body; 
 
     // everything to send to create with the information obtained 
     const result = await Users.create(newUser);
   
     // all respond that the action has been performed.    
     res.status(201).json(result);
    
    // catch error if everything goes wrong
    } catch (error) {
     
         res.status(400).json(error);
    } 
 }

 // GET ALL USERS 
 const getUsers = async (req, res) => {    
   
    try {
  
      // all fetch all users
      //SELECT * FROM users;
     const users = await Users.findAll({
        attributes: {
            exclude: ["password"],
        },           
                
     });
 
     // all Reply to customer
     res.status(200).json(users);

     // catch error if everything goes wrong
     } catch (error) {         
         res.status(400).json(error);
    } 
 };

// GET USERS BY ID
const getUsersById = async (req, res) => {

    try {

     const { id } = req.params;
     //SELECT * FROM users WHERE users.id = 1;
     const user = await Users.findByPk(id, {
          
        attributes: {
            exclude: ["password"],
        },
                           
     });
     
     res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

// UPDATE USERS BY ID
const updateUsers  = async (req, res) => {
    try { 
    // all get user id
    const {id} = req.params;

    // all get the body with the information 
    const {username, email} = req.body;

    // all make the query to update
    const user = await Users.update( 
       { username, email},
       {
        where: {id},
    });

    // all Reply to customer
    res.status(204).send(user);

    // catch error if everything goes wrong
    } catch (error) {
        res.status(400).json(error);
    }
};

// DELETE USERS BY ID
const deleteUsers = async (req, res) => {
    try { 
    // all get route id
    const {id} = req.params;
    // all delete in database
    await Users.destroy({ 
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
    createUsers,
    getUsers,
    getUsersById,
    updateUsers,
    deleteUsers,
};