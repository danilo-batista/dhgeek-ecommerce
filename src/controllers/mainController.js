const database = require('../models/index');

const mainController = {
    home: async (req, res) => {
        try {
            const productsList = await database.Product.findAll(
                {   
                    order: [['id', 'ASC']],
                    include: [{
                        model: database.ProductImages,
                        as: 'productImages',
                        required: true
                    },
                    {
                        model: database.ProductPromotions,
                        as: 'productPromotions',
                        required: true
                    }]
                });
            
            // const {id} = req.userInfo;
            // const user = await database.User.findByPk(id, {
            //     include:[{
            //         model: database.UserTypes,
            //         as: "user_types",
            //         required : true
            //         }]
            //     });

            return res.render('../views/home', { productData: productsList });
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },
    otherHome: async (req, res) => {
        try {
            const productsList = await database.Product.findAll(
                {   
                    order: [['id', 'ASC']],
                    include: [{
                        model: database.ProductImages,
                        as: 'productImages',
                        required: true
                    },
                    {
                        model: database.ProductPromotions,
                        as: 'productPromotions',
                        required: true
                    }]
                });
            
            const {id} = req.userInfo;
            const user = await database.User.findByPk(id, {
                 include:[{
                    model: database.UserTypes,
                     as: "user_types",
                     required : true
                     }]
                 });

            return res.render('../views/home/homeLogada', { productData: productsList, user });
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
}}

module.exports = mainController;

