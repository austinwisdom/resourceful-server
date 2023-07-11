require("dotenv").config()
import express, {Express, Request, Response} from 'express';
import { connectToDatabase } from './db/conn';
const app: Express = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");

const { PORT } = process.env

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const userRoutes = require('./routes/userRoutes')

connectToDatabase()
    .then(() => {
        app.use("/users", userRoutes);

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
