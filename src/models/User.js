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
            // não adicionar os atributos (updatedAt, createdAt)
            timestamps: true,

            /* não permite deletar do banco, mas inseri na coluna deletedAt a data da exclusão se o timestamps estiver ativado */
            paranoid: true,

            // não adiciona camelcase para atributos gerados automaticamente
            // então se definirmos updatedAt ele será criado como updated_at
            underscored: true,

            // para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente
            // como permanencia para permanencium ative a opção como true
            freezeTableName: true,

            // definindo o nome da sua tabela
            tableName: 'user'
        });
    return User;
};