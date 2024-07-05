import express from 'express';
import dotenv from 'dotenv'
import colors from 'colors'
import { db } from './config/db';

import itemsRoutes from './routes/itemsRoutes'

//allow reading enviornment variables
dotenv.config();

const app = express();
app.use(express.json()); //this allow to read the req.body as a json

//DB connection
db();

//routes example
app.use('/api/menu', itemsRoutes);


//define port
const PORT = process.env.PORT || 4000;

//start application
app.listen(PORT, () => {
    console.log(colors.bgBlue.bold(`App running in Port ${PORT}`));
})