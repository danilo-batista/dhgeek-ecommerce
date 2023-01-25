module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define(
        'Address',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            cep: {
                type: DataTypes.STRING(8),
                allowNull: false
            },
            address: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            city: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            uf: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            complement: {
                type: DataTypes.STRING(40),
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
            underscored: false,
            freezeTableName: true,
            tableName: 'address'
        });

    Address.associate = (models) => {
        Address.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
    };

    return Address;
};