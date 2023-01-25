module.exports = (sequelize, DataTypes) => {
    const ProductImages = sequelize.define(
        'ProductImages',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            path: {
                type: DataTypes.STRING(40),
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
            tableName: 'product_images'
        }
    );

    ProductImages.associate = (models) => {
        ProductImages.belongsTo(models.Product, {
            foreignKey: 'productId',
            as: 'product'
        })
    };

    return ProductImages;
}
