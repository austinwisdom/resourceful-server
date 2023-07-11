import { ObjectId } from "mongodb";
import { collections } from "../db/conn";
import express, { Request, Response} from "express";
import Users from "../models/users";
const axios = require("axios");
const mongo = require("mongodb");
const bcrypt = require("bcryptjs");

const getUser = async (_req:Request, res:Response) => { 
    try {
        const users = (await collections.users!.find({}).toArray()) as Users[]
 
         res.status(200).send(users);
     } catch (error) {
         res.status(500).send((error as Error).message);
     }
}

const signUp = async (req: Request, res: Response) => { 
    try {
        const { firstName, lastName, email, userName, password } = req.body;
        if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.userName || !req.body.password) {
            return res
              .status(400)
              .send({message: "Please fill in all fields"});
            }

        const uniqueEmail = await collections.users!.findOne({ email: email });
        if (uniqueEmail) {
            return res.status(404).send({ message: "User already exists" });
        }

        const uniqueUserName = await collections.users!.findOne({ userName: userName });
        if (uniqueUserName) {
            return res.status(404).send({ message: "User already exists" });
        }
 
        const encryptedPassword =  await bcrypt.hash(password, 10)
    
        const newUser = {
            firstName,
            lastName,
            email,
            userName,
            password: encryptedPassword,
        }
        
        const user = await collections.users!.insertOne(newUser);
        res.status(201).json({message: "User created successfully."})
        
    } catch {
        (error: Error) => {
        res.status(500).json({ message: "Unable to create new user", error });
        }}
}

const signIn = () => { 
    
}
 module.exports = { signUp, signIn, getUser }