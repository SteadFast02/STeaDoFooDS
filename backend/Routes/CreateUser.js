const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const jwtSecret = "SteadFastIsAlsoKnowIsAch@lGupta9630"
// Create User
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").optional().isLength({ min: 5 }),
    body("password","Incorrect Password").optional().isLength({ min: 5 }),
  ],
  async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()});
    }

    const salt =await bcrypt.genSalt(10);
    let setPassword = await bcrypt.hash(req.body.password,salt)
    try {
      await User.create({
        name: req.body.name,
        password: setPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
    //   console.log(error);
      res.json({ success: false });
    }
  }
);

// Login User
router.post("/loginuser",
    [
        body("email").isEmail(),
        body("password","Incorrect Password").optional().isLength({ min: 5 }),
    ],async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({errors:errors.array()});
        }

    let email=req.body.email;  
      try {
        
        let userData=await User.findOne({email});
        // console.log(userData)
        if(!userData)
        {
        // console.log("Error1")
            return res.status(400).json({errors:"Try logging with correct credentials"});
        }
        const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare)
        {
        // console.log("Error2")
            return res.status(400).json({errors:"Try logging with correct credentials"});
        }

        const data = {
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret)

        return res.json({success: true,authToken:authToken});
      } 
      catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
  );


module.exports = router;
