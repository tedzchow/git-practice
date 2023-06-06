const User=require('../model/User');
const jwt=require('jsonwebtoken');
const keys=require('../config/keys');

exports.registeruser=(req,res)=>{
    const error={};
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            error.email='Email is already exists.';
            res.status(400).json(error);
        }
        else{
            const newuser=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            newuser.save()
                .then(result=>res.json(result))
                .catch(err=>console.log(err));
        }
     })
}
exports.loginuser=(req,res)=>{
    const error={};
    User.findOne({email:req.body.email})
        .then(user=>{
            if(user){
                if(user.password===req.body.password){
                    const payload={id:user.id,name:user.name};
                    jwt.sign(
                        payload,
                        keys.secretOrkey,
                        {expiresIn: 3600},
                        (err,token)=>{
                                return res.json({
                                success:true,
                                token: 'Bearer '+token
                            });
                        }
                    )
                }else{
                    error.password='password is wrong.';
                    return res.status(400).json(error);
                }
            }else{
                error.email='email is wrong.';
                return res.status(400).json(error);
            }
        })
}
