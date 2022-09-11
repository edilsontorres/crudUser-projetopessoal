import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { User } from "../modules/User";

export const listUser = async (req:Request, res:Response)=>{
    let list = await User.findAll();

    res.json({});
}