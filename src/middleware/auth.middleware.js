
const jwt = require("jsonwebtoken")


const verifyToken = (req , res , next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        
        if (!token) {
            return res.status(401).json({ msg: "Token is required" });
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log(req.user);
            return next(); // Call next only if token verification is successful
        } catch (error) {
            return res.status(400).json({ msg: "Invalid token" });
        }
    }

    return res.status(401).json({ msg: "Authorization header is missing or invalid" });

}

module.exports =verifyToken