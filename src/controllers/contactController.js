const database = require('../models/index');

const contactController = {
    getMessages: (req, res) => {
        database.Contact.findAll(
            {
                order: [['email', 'ASC']]
            }
        )
            .then((data) => { res.json(data); })
    }
};

module.exports = contactController;

