const database = require('../models/index');

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