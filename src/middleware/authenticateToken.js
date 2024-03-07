

 const jwt = require("jsonwebtoken")

const authenticateToken = async(req,res,next)=>{
    const authHeader = req.headers["authorization"];
    console.log(authHeader)
    const token = authHeader && authHeader.split(" ")[1]
  
    if (token == null) return res.sendStatus(401)
     console.log(token)
    jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
        if(err) {
            console.log(err)   
            return res.sendStatus(403)

        }
        req.user=user;
        next()
    });





}


module.exports = authenticateToken;