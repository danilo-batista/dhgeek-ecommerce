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
            tableName: 'user_types'
        });
    return UserTypes;
};