import { ObjectId } from "mongodb";
import { collections } from "../db/conn";
import express, { Request, Response} from "express";
import Resources from "../models/resources";
const mongo = require("mongodb");

const getResources = async (req:Request, res:Response) => { 
    try {
        const resources = (
            await collections.resources!
            .find({category: req.params.category}).toArray()) as Resources[]
         res.status(200).json(resources);
     } catch (error) {
         res.status(500).send((error as Error).message);
     }
}

module.exports = { getResources }