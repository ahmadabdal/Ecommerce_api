const router = require('express').Router();
const User = require('../models/User');

const bcrypt = require("bcrypt");



// regisret API

router.post('/register', async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            userId: req.body.userId,
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
        });

    
        const user = await newUser.save();
       return res.status(200).json(
            [user,
              "registered successfully"
            ])
    } catch(err){
        console.log (err)
        res.status(500).json(err)
    }
    
});

// Login API
router.post('/login', async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email })
        !user && res.status(400).json("Wrong credentials");

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(422).json("Incorrect Password")

        const { password, ...user_detail } = user._doc;
        return res.status(200).json(
            {
                user_detail,
                message:"logged in successfully"
            }
        );
    } catch(err){
        res.status(500).json(err);
    }
    

    });


module.exports = router;