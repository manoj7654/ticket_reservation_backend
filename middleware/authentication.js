const jwt=require("jsonwebtoken")
require("dotenv").config()
const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,process.env.key)
        if(decode){
            const userId=decode.userId
            req.body.userId=userId
            next()
        }else{
            res.send({message:"Please Login Again"})
        }
       
    }else{
        res.send({message:"Please Login First"})
    }

}
module.exports={authenticate}