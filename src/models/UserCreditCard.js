module.exports = (sequelize, DataTypes) => {
    const UserCreditCard = sequelize.define(
        'UserCreditCard',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            number: {
                type: DataTypes.STRING(16),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            validityMonth: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            validityYear: {
                type: DataTypes.STRING(4),
                allowNull: false
            },
            cvv: {
                type: DataTypes.STRING(3),
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
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
            underscored: true,
            freezeTableName: true,
            tableName: 'user_credit_card'
        });

    UserCreditCard.associate = (models) => {
        UserCreditCard.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
    };

    return UserCreditCard;
};