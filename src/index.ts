import express, {Express, Request, Response} from 'express';
require("dotenv").config()
const { PORT } = process.env

const app: Express = express();

app.get('/', (_req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(PORT, ()=> {
console.log(`[Server]: I am running at https://localhost:${PORT}`);
});