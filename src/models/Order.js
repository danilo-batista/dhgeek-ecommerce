/** Verificar por que não está fazendo a associação com Product_Promotions. */

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        'Order',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            cartId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'cart',
                    key: 'id'
                }
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            deliveryDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            totalPrice: {
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
            tableName: 'order'
        });

    Order.associate = (models) => {
        [
            Order.belongsTo(models.Cart, {
                foreignKey: 'cartId',
                as: 'cart'
            }),
            Order.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            })
        ]
    };

    return Order;

}