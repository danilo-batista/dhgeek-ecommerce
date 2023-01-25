module.exports = (sequelize, DataTypes) => {
    const ProductPromotions = sequelize.define(
        'ProductPromotions',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            discount: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            promotionalPrice: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: false
            },
            paymentsConditions: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            paymentsValues: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: false
            },
            paymentsFee: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            paymentsShipping: {
                type: DataTypes.FLOAT(4, 2),
                allowNull: false
            },
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'product',
                    key: 'id'
                }
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
            tableName: 'product_promotions'
        }
    );

    ProductPromotions.associate = (models) => {
        ProductPromotions.belongsTo(models.Product, {
            foreignKey: 'productId',
            as: 'product'
        })
    };

    return ProductPromotions;
}