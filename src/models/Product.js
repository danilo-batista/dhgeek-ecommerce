module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            slug: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            title: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            category: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            department: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            productionBanner: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            manufacturer: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            brand: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            character: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            material: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            weight: {
                type: DataTypes.FLOAT(4, 2),
                allowNull: false
            },
            height: {
                type: DataTypes.FLOAT(4, 2),
                allowNull: false
            },
            width: {
                type: DataTypes.FLOAT(4, 2),
                allowNull: false
            },
            depth: {
                type: DataTypes.FLOAT(4, 2),
                allowNull: false
            },
            fullPrice: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull: false
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            timestamps: true,
            paranoid: true,
            underscored: false,
            freezeTableName: true,
            tableName: 'product'
        });

    Product.associate = (models) => {
        [
            Product.hasMany(models.ProductImages, {
                foreignKey: 'productId',
                as: 'productImages'
            }),
            Product.hasMany(models.ProductPromotions, {
                foreignKey: 'productId',
                as: 'productPromotions'
            })
        ]
    };

    return Product;
};