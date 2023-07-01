const express = require('express');
const router = express.Router();



const Admins = require('../controller/AdminController')
const Categorys = require('../controller/CategorysController')
const Meals = require('../controller/MealsController')
const UserController = require('../controller/UsersController')
const InfoController = require('../controller/InfoController')
const Counts = require('../controller/CountsController')


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
router.post('/updateadmin' , Admins.updateadmin)




router.post('/createCategory' , Categorys.createCategory)
router.get('/getAllCategories' , Categorys.getAllCategories)
router.get('/getCategoryById/:id' , Categorys.getCategoryById)
router.delete('/deleteCategory/:id' , Categorys.deleteCategory)




const upload = multer({ storage: storage, fileFilter: fileFilter });


router.post('/createFoodItem'  , upload.single('image') , Meals.createFoodItem)
router.get('/getAllFoodItems' , Meals.getAllFoodItems)
router.put('/updateFoodItem/:id' , Meals.updateFoodItem)
router.delete('/deleteFoodItem/:id' , Meals.deleteFoodItem)
router.get('/getmealsbycategory/:name' , Meals.getmealsbycategory)
router.get('/getLastFoodIteam'  , Meals.getLastFoodIteam)

router.post('/addnewinfo'  , InfoController.addnewinfo)
router.get('/getallinfo'  ,  InfoController.getallinfo)


router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.post('/login', UserController.login);
router.post('/signup', UserController.signup);
router.post('/forgot-password', UserController.forgotPassword);
router.get('/getLastUsers' , UserController.getLastUsers)







router.get("/getuserscounts" , Counts.getuserscount )
router.get("/getmealscount" , Counts.mealscount )
router.get("/getcategorycounr" , Counts.categoryscount )
router.get("/getinfocount" , Counts.countinfiramtions )




module.exports = router