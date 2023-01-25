/* */
module.exports = (sequelize, DataTypes) => {
    /* nomeDoModel = sequelize.define("alias-mesmoDoModel", cols, config); */
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(80),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            firstName: {
                type: DataTypes.STRING(40),
                allowNull: true
            },
            lastName: {
                type: DataTypes.STRING(40),
                allowNull: true
            },
            birthday: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            cpf: {
                type: DataTypes.STRING(11),
                allowNull: true
            },
            rg: {
                type: DataTypes.STRING(9),
                allowNull: true
            },
            avatar: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            typeId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'user_types',
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
            tableName: 'user'
        });

    User.associate = (models) => {
        [
            User.belongsTo(models.UserTypes, {
                foreignKey: 'typeId',
                as: 'user_types'
            }),
            User.hasMany(models.Address, {
                foreignKey: 'userId',
                as: 'address'
            }),
            User.hasMany(models.UserLoginActivities, {
                foreignKey: 'userId',
                as: 'userLoginActivities'

            }),
            User.hasMany(models.UserCreditCard, {
                foreignKey: 'userId',
                as: 'userCreditCard'
            })
        ]
    };

    return User;
};