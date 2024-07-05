import express from 'express';
import dotenv from 'dotenv'
import colors from 'colors'
import {  getAllItems, findItemByID } from "./services/items.services";
import { db } from './config/db';

//allow reading enviornment variables
dotenv.config();

const app = express();
app.use(express.json()); //this allow to read the req.body as a json

//DB connection
db();

//routes example
app.get('/api/menu', getAllItems);

app.get('/api/menu/:id', findItemByID)


//define port
const PORT = process.env.PORT || 4000;

//start application
app.listen(PORT, () => {
    console.log(colors.bgBlue.bold(`App running in Port ${PORT}`));
})