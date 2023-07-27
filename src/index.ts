require("dotenv").config()
import express, {Express, Request, Response} from 'express';
import { connectToDatabase } from './db/conn';
const app: Express = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");

const { PORT } = process.env || 8080


const corsOptions = {
    origin:["https://resourceful.tips", "http://localhost:5173"],
    credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static("./public"));


const userRoutes = require('./routes/userRoutes')
const resourcesRoutes = require('./routes/resourcesRoutes')
app.get('/', (_req, res) => {
    res.status(200).send("Welcome to the API!")
})

connectToDatabase()
    .then(() => {
        app.use("/users", userRoutes);
        app.use("/resources", resourcesRoutes);

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
