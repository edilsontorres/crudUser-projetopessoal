// IMPORTANDO DEPENDENCIAS NESCESSÁRIAS PARA EXECUÇÃO DAS FUNÇÕES
import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instanses/pg';


// TYPE PARA CONEXÃO COM O BANCO DE DADOS
export interface UsersInstances extends Model {
    id: number,
    name: string,
    email: string,
    age: number
}


// SEQUELIZER FUNÇÃO 'USER' PARA TER ACESSO AO DB E CRIAR A CONEXÃO USANDO O TYPE PRÉ-DEFINIDO 
export const User = sequelize.define<UsersInstances>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    tableName: 'users',
    timestamps: false
});

