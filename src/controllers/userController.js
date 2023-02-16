const database = require('../models/index');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
    getUsers: (req, res) => {
        database.User.findAll(
            {
                order: [['id', 'ASC']],
                include: [{
                    model: database.Address,
                    as: 'address',
                    required: true
                },
                {
                    model: database.UserCreditCard,
                    as: 'userCreditCard',
                    required: true
                },
                {
                    model: database.UserLoginActivities,
                    as: 'userLoginActivities',
                    required: true
                }]
            }
        ).then((data) => { res.json(data); });
    },
    createUser: async (req,res) =>{
        const { email, password } = req.body;
        try {
            const passwordCript = await bcrypt.hash(password, 10)
            const user = await database.User.create({
                email,
                password: passwordCript,
                typeId: 3
            })
            
            //return res.send(user);
            res.redirect("/usuario/logar");


        } catch (err) {
            return res.status(500).send({message:err.message})
        }
    },
    loginUser: async (req, res) =>{
        const { email, password } = req.body;
        console.log(email, password)
        console.log(req.body)
        try {
            const user = await database.User.findOne({
                where:{email}
            })

            if(user){
                const passwordValid = bcrypt.compare(password, user.password);
                if(passwordValid){
                    const token = jwt.sign({
                        id: user.id,
                        email: user.email
                    },
                    process.env.SECRET, {expiresIn: "24h"});
                    res.cookie("token", token);
                    //return res.status(200).send({message:"Login feito com sucesso", token});
                    return res.redirect("/home")
                }else{
                    return res.status(404).send({message:"Usuário ou senha."});
                }
            }else{
                return res.status(404).send({message:"Usuário ou senha."});
            }

            
        } catch (err) {
            return res.status(500).send({message:err.message});
        }
    },
    dashboardUser: async (req,res) =>{
        res.render("../views/dashboard/pessoal");
    },



    /** This methods below will be update soon. */
    cadastrar: (req, res) => {
        res.render('cadastrar');
    },

    logar: (req, res) => {
        res.render('logar');
    },

    recuperar: (req, res) => {
        res.render('recuperar');
    },
};

module.exports = userController;