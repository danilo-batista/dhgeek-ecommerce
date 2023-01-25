const database = require('../models/index');
const User = require('../models/User');

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
    }
};

module.exports = userController;