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
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            birthday: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            cpf: {
                type: DataTypes.STRING(11),
                allowNull: false
            },
            rg: {
                type: DataTypes.STRING(9),
                allowNull: false
            },
            typeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
            underscored: true,
            freezeTableName: true,
            tableName: 'user'
        });

    User.associate = (models) => {
        [
            User.belongsTo(models.UserTypes, {
                foreignKey: 'typeId',
                as: 'type'
            }),
            User.hasMany(models.Address, {
                foreignKey: 'userId',
                as: 'user'
            }),
            User.hasMany(models.UserLoginActivities, {
                foreignKey: 'userId',
                as: 'user'
            })
        ]
    };

    return User;
};