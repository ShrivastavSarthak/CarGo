const express = require('express')
const router= express.Router()
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
const bcrypt= require('bcryptjs')

// CREATE  A USER USING: POST "/api/auth/createuser". DOESN'T REQUIRE AUTHENTICATION.

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



     user =await User.create({ //here u will fetch the data in  THUNDER CLIENT........
      name: req.body.name,
      email: req.body.email,
      password: secPass,    
    })

        res.json(user)
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occur")
      }
})


module.exports = router