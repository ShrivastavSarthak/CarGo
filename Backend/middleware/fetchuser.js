const jwt = require('jsonwebtoken')
const JWT_SECRET = "I KNOW U DON'T KNOW"


const fetchuser = (req,res,next) =>{
        // GET THE USER  FROM JWT TOKENAND ADD ID TO REQ OBJECT
        const token =req.header('auth-token')//<----------------------------------------------------------------auth-token is a name of header 
        if(!token){
            res.status(401).send({error : "access denied"})
        }
        try {
            const data = jwt.verify(token,JWT_SECRET)
        req.user=data.user
        next()
        } catch (error) {
            res.send(401).send({error : "access denied"})
        }
}


module.exports=fetchuser