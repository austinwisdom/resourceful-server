import { ObjectId } from "mongodb";
import { collections } from "../db/conn";
import express, { Request, Response} from "express";
import Users from "../models/users";
const axios = require("axios");
const mongo = require("mongodb")

const getUser = async (_req:Request, res:Response) => { 
    try {
        const users = (await collections.users!.find({}).toArray()) as Users[]
 
         res.status(200).send(users);
     } catch (error) {
         res.status(500).send((error as Error).message);
     }
}

const signUp = async () => { 

}

const signIn = () => { 

}
 module.exports = { signUp, signIn, getUser }