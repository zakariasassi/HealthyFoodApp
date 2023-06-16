const express = require('express');
const router = express.Router();

const Admins = require('../controller/AdminController')
const Categorys = require('../controller/CategorysController')



router.post('/addadmin' ,  Admins.createnewadmin)
router.post('/loginadmin' ,  Admins.loginadmin)
router.get('/getAlladmins' ,  Admins.getAlladmins)
router.delete('/deleteadmin/:id' , Admins.deleteadmin)




router.post('/createCategory' , Categorys.createCategory)
router.get('/getAllCategories' , Categorys.getAllCategories)
router.get('/getCategoryById/:id' , Categorys.getCategoryById)
router.delete('/deleteCategory/:id' , Categorys.deleteCategory)




module.exports = router