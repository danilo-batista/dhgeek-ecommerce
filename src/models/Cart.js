/** Verificar por que não está fazendo a associação com Product_Promotions. */

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
        'Cart',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
            productPromotionsId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                // references: {
                //     model: 'productPromotions',
                //     key: 'id'
                // }
            },
            productQuantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            subTotalPrice: {
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
            tableName: 'cart'
        });

    Cart.associate = (models) => {
        [
            Cart.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product'
            }),
            // Cart.belongsTo(models.ProductPromotions, {
            //     foreignKey: 'productPromotionsId',
            //     as: 'promotion'
            // })
        ]
    };

    return Cart;

}