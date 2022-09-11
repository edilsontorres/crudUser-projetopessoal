import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instanses/pg';

export interface UsersInstances extends Model {
    id: number,
    name: string,
    email: string,
    age: number
}

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

