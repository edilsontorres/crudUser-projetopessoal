// IMPORTANDO DEPENDENCIAS NESCESSÁRIAS PARA EXECUÇÃO DAS FUNÇÕES
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

// CRIANDO CONEXÃO COM O BANCO DE DADOS ATRAVÉS DO ARQUIVO DE VARIÁVEL DE AMBIENTE
dotenv.config();

export const sequelize = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
        dialect: 'postgres',
        port: parseInt(process.env.PG_PORT as string)
    }
);