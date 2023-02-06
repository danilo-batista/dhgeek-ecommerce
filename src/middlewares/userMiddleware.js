const { jwt } = require("jsonwebtoken");

const validationToken = (req,res,next) =>{
    try {

      if(localStorage.getItem("token") === null){
        return res.redirect("/usuario/login")
      }
        
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded);

      } catch (err) {
        localStorage.getItem("token", "");
        return res.redirect("/logar")
      }

    next();
}

module.exports = {
    validationToken
}