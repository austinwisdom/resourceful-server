require("dotenv").config()
import express, {Express, Request, Response} from 'express';
import { connectToDatabase } from './db/conn';
const app: Express = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");

const { PORT } = process.env


const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static("./public"));


const userRoutes = require('./routes/userRoutes')
const resourcesRoutes = require('./routes/resourcesRoutes')

connectToDatabase()
    .then(() => {
        app.get('/', (req, res) => {
            res.status(200).send("Welcome to the API!")
        })
        app.use("/users", userRoutes);
        app.use("/resources", resourcesRoutes);

        app.listen(8080, () => {
            console.log(`Server started at http://localhost:8080`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
