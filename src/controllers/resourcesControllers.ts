import { ObjectId } from "mongodb";
import { collections } from "../db/conn";
import express, { Request, Response, NextFunction} from "express";
import Resources from "../models/resources";
const mongo = require("mongodb");

const getResources = async (req:Request, res:Response) => { 
    try {
        const resources = (
            await collections.resources!
            .find({category: req.params.category.toLowerCase(), subcategory: req.params.subcategory.toLowerCase()}).toArray()) as Resources[]
         res.status(200).send(resources);
     } catch (error) {
         res.status(500).send((error as Error).message);
     }
}

module.exports = { getResources }