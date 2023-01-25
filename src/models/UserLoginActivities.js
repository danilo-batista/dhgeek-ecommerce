module.exports = (sequelize, DataTypes) => {
    const UserLoginActivities = sequelize.define(
        'UserLoginActivities',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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

    UserLoginActivities.associate = (models) => {
        UserLoginActivities.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
    };

    return UserLoginActivities;
};