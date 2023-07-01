const Admins = require('../model/Admins')


exports.createnewadmin  = async (req , res ) => {

    const {username , password  , fullname , email , phone } = req.body  

    if ( !username || !password , !fullname || !email , !phone ) {
        res.json({
            message : 'الرجاء ادخال البيانات'
        })
    }else{
        await Admins.create({
            username,
            password ,
            fullname,
            email , 
            phone
        }).then( resulte => {
            if(resulte) {
                res.json({
                    message : 'تم انشاء حساب المستخدم ',
                    state : 1
                    
                })
            }else{
                res.json({
                    message : '  فشل انشاء حساب المستخدم ',
                    state : 0
                    
                })   
            }
        }).catch(err => {
            console.log(err)
            res.json({
                message : '  فشل انشاء حساب المستخدم ',
                state : 0
                
            })   
        })
    }
 }



 exports.loginadmin = async (req, res) => {
    const {username , password} = req.body
    await Admins.findOne({
        where : {
            username : username
        }
    }).then(( resulte ) => {
            console.log(resulte)
            if(resulte.password === password) {
                Admins.update({
                    last_login : Date.now()
                },

                {
                    where : {
                        id : resulte.id
                    }
                }
                
                )


                res.json({
                    message : 'تمت مصادقة الحساب',
                    state : 1
                    
                }) 
          
         }else{
            res.json({
                message : 'كلمة المرور خطآ',
                state : 1
                
            }) 
         }
    } ).catch ( err => {
        console.log(err)
        res.json({
            message : 'قشلت مصادقة الحساب',
            state : 0
            
        }) 
    })
 }




 exports.getAlladmins = async (req, res) => {

    try {
        await Admins.findAll().then( data => {
            res.status(200).json({
                admins : data , 
                state : 1 
            })
        })
    } catch (error) {
        console.log(error)
    }
 }




 exports.deleteadmin = async (req, res) => {
    const {id} = req.params

    await Admins.destroy({
        where : {
            id : id
        }
    }).then(() => {
        res.status(200)
    })

 }



 exports.updateadmin = async  ( req , res ) => {
    const {username , password  , fullname , email , phone , id } = req.body  

    if ( !username || !password , !fullname || !email , !phone ) {
        res.json({
            message : 'الرجاء ادخال البيانات'
        })
    }else{
        await Admins.update({
            username,
            password ,
            fullname,
            email , 
            phone
        },
        {
            where : {
                id : id
            }
        }).then( resulte => {
            if(resulte) {
                res.json({
                    message : 'تم تحديث حساب المستخدم ',
                    state : 1
                    
                })
            }else{
                res.json({
                    message : '  فشل تحديث حساب المستخدم ',
                    state : 0
                    
                })   
            }
        }).catch(err => {
            console.log(err)
            res.json({
                message : '  فشل تحديث حساب المستخدم ',
                state : 0
                
            })   
        })
    }

 }