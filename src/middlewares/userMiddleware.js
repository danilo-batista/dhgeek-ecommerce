const jwt  = require("jsonwebtoken");

const validationToken = (req,res,next) =>{
    const {token} = req.cookies;

    if(!token){
      return res.redirect("/usuario/logar");
    }
  
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded);

      } catch (err) {
        console.log(err);
        res.cookie("token", "");
        return res.redirect("/usuario/logar");
      }

    next();
}

module.exports = {
    validationToken
}