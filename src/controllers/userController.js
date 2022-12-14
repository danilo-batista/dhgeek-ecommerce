const userController = {
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