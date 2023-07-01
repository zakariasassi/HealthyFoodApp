
const Meals = require('../model/Meals')
const Info = require('../model/Info')
const Users = require('../model/Users')
const Categorys = require('../model/Categorys')






exports.getuserscount = async (req , res ) => {
    await Users.findAndCountAll().then(resulte => {
        res.json({count : resulte.count})
    }).catch( err => {
        console.log(err)
    })
}

exports.categoryscount = async (req , res ) => {
    await Categorys.findAndCountAll().then(resulte => {
        res.json({count : resulte.count})
    }).catch( err => {
        console.log(err)
    })
}

exports.mealscount = async (req , res ) => {
    await Meals.findAndCountAll().then(resulte => {
        res.json({count : resulte.count})
    }).catch( err => {
        console.log(err)
    })
}


exports.countinfiramtions = async (req , res ) => {
    await Info.findAndCountAll().then(resulte => {
        res.json({count : resulte.count})
    }).catch( err => {
        console.log(err)
    })
}