const jwt  = require("jsonwebtoken");
const database = require('../models/index');

const validationToken = async (req,res,next) =>{
    const {token} = req.cookies;

    if(!token){
      return res.redirect("/usuario/logar");
    }
  
    try{
        const decoded = jwt.verify(token, process.env.SECRET, (err, userInfo)=>{
          if(err){
            res.status(403).end();
            return;
          }
          req.userInfo = userInfo;
          next();
        });
        
      } catch (err) {
        console.log(err);
        res.cookie("token", "");
        return res.redirect("/usuario/logar");
      }

  
    
}

const validationAdmin = async (req,res,next) =>{
  const {id} = req.userInfo;

  const user = await database.User.findByPk(id, {
    include:[{
      model: database.UserTypes,
      as: "user_types",
      required : true
    }]
  });

  if(user.typeId == 1){
    next();
  }else{
    return res.redirect("/");
  }
}

module.exports = {
    validationToken,
    validationAdmin
}