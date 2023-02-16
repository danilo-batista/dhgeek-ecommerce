const database = require('../models/index');

const productController = {
    getProducts: async (req, res) => {
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
            // res.status(200).render('buscar-produto', { productData: productsList });
            res.status(200).render('showcase', { productData: productsList });
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },

    getProductById: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await database.Product.findByPk(id,
                {
                    include: [{
                        model: database.ProductImages,
                        as: 'productImages',
                        required: true,
                    },
                    {
                        model: database.ProductPromotions,
                        as: 'productPromotions',
                        required: true
                    }]
                });
            res.status(200).render('produto', { productData: product });

        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },

    getProductsByCategory: async (req, res) => {
        const { category } = req.params;
        try {
            const productsList = await database.Product.findAll(
                {
                    where: {
                        category: req.params.category
                    },
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
            res.status(200).render('showcase', { productData: productsList });

        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },

    getProductsByName: async (req, res) => {
        const { name } = req.params;
        try {
            const productsList = await database.Product.findAll(
                {
                    where: {
                        name: req.params.name
                    },
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
            res.status(200).render('buscar-produto', { productData: productsList });

        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },

    dashboardProduct: async (req, res) => {
        return res.render("dashboard/products")
    },

    renderPageUpdate: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await database.Product.findOne({
                where: {
                    id
                }
            })

            return res.render("dashboard/updateProduct", { product });
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },

    createProduct: async (req, res) => {
        try {
            const product = await database.Product.create({
                name: req.body.name,
                slug: req.body.slug,
                title: req.body.title,
                category: req.body.category,
                department: req.body.department,
                productionBanner: req.files.productionBanner[0].filename,
                description: req.body.description,
                manufacturer: req.body.manufacturer,
                brand: req.body.brand,
                character: req.body.character,
                material: req.body.material,
                weight: req.body.weight,
                height: req.body.height,
                width: req.body.width,
                depth: req.body.depth,
                fullPrice: req.body.fullPrice
            });

            const productImg = await database.ProductImages.create({
                path: req.files.path[0].filename,
                productId: product.id
            })

            const promotions = await database.ProductPromotions.create({
                discount: req.body.discount, 
                promotionalPrice: req.body.promotionalPrice,
                paymentsConditions: req.body.paymentsConditions,
                paymentsValues: req.body.paymentsValues,
                paymentsFee: "sem juros",
                paymentsShipping: req.body.paymentsShipping,
                productId: product.id

            })

            return res.redirect("/home");
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await database.Product.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.redirect("/home");
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    },

    updateProduct: async (req, res) => {
        const {path, productionBanner} = req.files;
        try {
            const product = await database.Product.findByPk(req.params.id,
                {
                    include: [{
                        model: database.ProductImages,
                        as: 'productImages',
                        required: true,
                    },
                    {
                        model: database.ProductPromotions,
                        as: 'productPromotions',
                        required: true
                    }]
                });
            
            const imgProduct = await database.ProductImages.findOne({where:{productId: req.params.id}});

             await database.Product.update(
                {
                    name: req.body.name,
                    slug: req.body.slug,
                    title: req.body.title,
                    category: req.body.category,
                    department: req.body.department,
                    description: req.body.description,
                    manufacturer: req.body.manufacturer,
                    brand: req.body.brand,
                    character: req.body.character,
                    material: req.body.material,
                    weight: req.body.weight,
                    height: req.body.height,
                    width: req.body.width,
                    depth: req.body.depth,
                    fullPrice: req.body.fullPrice
                },
                {
                    where: {
                        id: req.params.id
                    }
                });

                
                await database.ProductPromotions.update({
                    discount: req.body.discount, 
                    promotionalPrice: req.body.promotionalPrice,
                    paymentsConditions: req.body.paymentsConditions,
                    paymentsValues: req.body.paymentsValues,
                    paymentsShipping: req.body.paymentsShipping,
                },
                {
                    where:{
                        productId: req.params.id
                    }
                })
                product.productionBanner = productionBanner[0].filename;
                imgProduct.path = path[0].filename;
                
                await product.save();
                await imgProduct.save();


            return res.redirect("/home");
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }

    }
}

module.exports = productController;