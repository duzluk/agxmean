const jwt=require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });
module.exports =(req,res,next)=>{
    console.log(process.env.SECRET_WORD)

    const token=req.headers['authorization'] || req.body.token || req.query.token
    if(token){
        jwt.verify(token,'process.env.SECRET_WORD',(error,decoded)=>{
            if(error){
                res.json({
                    status:false,
                    message:'Failed to authenticate token.'
                })
            }
            else {
                req.decode=decoded;
                next();
            }
        })
    }
    else{
        res.json({
            status:false,
            message:'No token provided'
        })
    }
}