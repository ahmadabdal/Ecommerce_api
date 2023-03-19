const User = require("../models/User");

// Updete user profile
module.exports.update = async (req, res) => {

    let {id } = req.body.userId;
    console.log(req.body.userId);
 
 
   try {
 
     const user = await User.findOne({userId:id});
 
     if(user){
         if(req.body.password){
             const salt = await bcrypt.genSalt(10);
             req.body.password = await bcrypt.hash(req.body.password, salt)
         }
         try {
             const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                 $set: req.body,
             },
             { new: true}
             );
             return res.status(200).json({updatedUser,
             message: "User Updated Successfully"}
                 );
         } catch (err){
             console.log(err);
             return res.status(500).json(err);
         }
     } else {
        
         return res.status(401).json("You can only update your profile")
     }
 
 
  }catch(err){
     console.log(err)
  }
     
 };