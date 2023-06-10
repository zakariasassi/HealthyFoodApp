const express = require('express');
const router = express.Router();

const Admins = require('../controller/AdminController')



router.post('/addadmin' ,  Admins.createnewadmin)
router.post('/loginadmin' ,  Admins.loginadmin)






module.exports = router