module.exports = (sequelize, DataTypes) => {
    const UserTypes = sequelize.define(
        'UserTypes',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING(80),
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
            underscored: true,
            freezeTableName: true,
            tableName: 'user_types'
        });

    UserTypes.associate = (models) => {
        User.hasOne(models.User, {
            as: 'user'
        })
    };

    return UserTypes;
};