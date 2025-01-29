 const jwt = require("jsonwebtoken");

 exports.identifer = async (req, res, next) =>{

    let token ;

    if( req.headers.client === "not browser") {
        token = req.headers.authorization
    }

    else{
        token = req.cookies['Authorization']
    }

    if(!token){
        res.status(403).json({sucess : false , message: "Unauthorized" })
    }

    try {  
        const studentToken = token.split('')[1];
        const decode = jwt.verify(studentToken , process.env.Secret_key);
       if( decode){ 
        req.user = decode;
        next()
    } else{
        throw new Error("Invalid/expired Token")
    }
        
    } catch (error) {
         console.log(error)
    }
 }