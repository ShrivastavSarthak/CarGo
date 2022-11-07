const express = require('express')
const router= express.Router()
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Login } = require('@mui/icons-material')
const fetchuser= require('../middleware/fetchuser')
const JWT_SECRET = "I KNOW U DON'T KNOW"



//------->ROUTE 1:        CREATE  A USER USING: POST "/api/auth/createuser". DOESN'T REQUIRE AUTHENTICATION.
// In the sq. bracket u enter your all validations to be required.
router.post('/createuser',[
    body('name','length of the name must me equal or greater then 3').isLength({min :3}),
    body('email','Invalid user').isEmail(),
    body('password','length of the password must me equal or greater then 6').isLength({min :6})
] ,async(req, res) => {

  // IF THERE ARE ANY ERROR, ALL BAD REQUESTS..
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // CHECK WEATHER THE EMAIL IS EXIST OR NOT
    try {
      
    let user = await User.findOne({email : req.body.email})
    if (user) {
      return res.status(400).json({error: "user already exists"})
    }

    const salt=await bcrypt.genSalt(10)//                  BY THIS WE CREATE A HASH FUNCTION 
    const secPass=await bcrypt.hash(req.body.password,salt); //<----------------------------------------------------------------


    // CREATING NEW USER
     user =await User.create({ //here u will fetch the data in  THUNDER CLIENT........
      name: req.body.name,
      email: req.body.email,
      password: secPass,    
    })
    const data = {
      user:{
        id: user.id
      }
    }
    const Auth_Token= jwt.sign(data,JWT_SECRET)

    

        res.json(Auth_Token)

      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occur")
      }
})


//------->ROUTE 2: Authenticate  A USER USING: POST "/api/auth/login". DOESN'T REQUIRE AUTHENTICATION.

router.post('/login',[
 body('email','Invalid user').isEmail(),
  body('password','length of the password must me equal or greater then 6').exists()
] ,async(req, res) => {
   // IF THERE ARE ANY ERROR, ALL BAD REQUESTS..
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password}=req.body
  try {
    let user =await User.findOne({ email})
    if(!user){
      return res.status(400).json({error:"user not found"})
    }


    const passwordcomp = await bcrypt.compare(password, user.password)
    if(!passwordcomp){

      return res.status(400).json({error:"password not match"})
    }

    const data = {
      user:{
        id: user.id
      }
    }
    const Auth_Token= jwt.sign(data,JWT_SECRET)
    res.json({Auth_Token})
    
  } catch (error) {
    
      console.error(error.message);
      res.status(500).send("Some error occur")
    
    
  }


})





//------->ROUTE 3: Authenticate  A USER USING: POST "/api/auth/getuser".  REQUIRE AUTHENTICATION.

router.post('/getuser',fetchuser,async(req, res) => {
  try {
    userId= req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)


    
  }  catch (error) {
    
    console.error(error.message);
    res.status(500).send("Some error occur")
  
  
}
})




module.exports = router