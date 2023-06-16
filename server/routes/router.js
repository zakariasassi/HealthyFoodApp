const express = require('express');
const router = express.Router();



const Admins = require('../controller/AdminController')
const Categorys = require('../controller/CategorysController')
const Meals = require('../controller/MealsController')
const UserController = require('../controller/UsersController')




const crypto = require('crypto');


const multer = require('multer');
const path = require('path');
const fs = require('fs');

const createUploadsDirectory = () => {
  const uploadsDir = './uploads';
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }
};

createUploadsDirectory();
// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); // Specify the directory to save the uploaded images
    },
    filename: function (req, file, cb) {
      cb(null, crypto.randomUUID() + path.extname(file.originalname)); // Rename the file with a unique name (timestamp + original extension)
    }
  });

// File filter for image uploads
const fileFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Only image files are allowed'), false); // Reject the file
    }
  };




router.post('/addadmin' ,  Admins.createnewadmin)
router.post('/loginadmin' ,  Admins.loginadmin)
router.get('/getAlladmins' ,  Admins.getAlladmins)
router.delete('/deleteadmin/:id' , Admins.deleteadmin)




router.post('/createCategory' , Categorys.createCategory)
router.get('/getAllCategories' , Categorys.getAllCategories)
router.get('/getCategoryById/:id' , Categorys.getCategoryById)
router.delete('/deleteCategory/:id' , Categorys.deleteCategory)




const upload = multer({ storage: storage, fileFilter: fileFilter });


router.post('/createFoodItem' , upload.single('image') , Meals.createFoodItem)
router.get('/getAllFoodItems' , Meals.getAllFoodItems)
router.put('/updateFoodItem/:id' , Meals.updateFoodItem)
router.delete('/deleteFoodItem/:id' , Meals.deleteFoodItem)







// Create a new user
router.post('/users', UserController.createUser);

// Get all users
router.get('/users', UserController.getAllUsers);

// Get a user by ID
router.get('/users/:id', UserController.getUserById);

// Update a user
router.put('/users/:id', UserController.updateUser);

// Delete a user
router.delete('/users/:id', UserController.deleteUser);

// User login
router.post('/login', UserController.login);

// User signup
router.post('/signup', UserController.signup);

// Forgot password
router.post('/forgot-password', UserController.forgotPassword);



module.exports = router