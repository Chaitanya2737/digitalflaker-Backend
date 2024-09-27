const jwt =  require("jsonwebtoken")
const bcrypyt = require('bcryptjs');
const User = require("../model/user.model");
const register =async (req , res) => {
    try {
        const {email ,password , name} = req.body;
        const checkUserExist = await User.findOne({email});
        if (checkUserExist) {
            res.status(200).json({msg:"User already exist"})
        }
        const hashedPassword =  await bcrypyt.hash(password , 10);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        
        const userWithoutPassword = await User.findById(user._id).select('-password');
        
        const token = jwt.sign({userWithoutPassword} , process.env.JWT_SECRET);
      
        return res.status(200).json({msg : "user resgister successfully" , token})
    } catch (error) {
        return res.status(500).json({msg : "error" , error})
    }
}

module.exports = register