module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
        'Contact',
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
            message: {
                type: DataTypes.TEXT,
                allowNull: false
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
            underscored: true,
            freezeTableName: true,
            tableName: 'contact'
        });

    return Contact;
};