import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import colors from 'colors'
import { db } from './config/db';

import itemsRoutes from './routes/itemsRoutes'
import ticketsRoutes from './routes/ticketsRoutes'

//allow reading enviornment variables
dotenv.config();

const app = express();
app.use(express.json()); //this allow to read the req.body as a json

//DB connection
db();

//Cors config
const whiteList = process.argv.includes('--postman') ? [process.env.FRONTEND_URL, undefined] : [process.env.FRONTEND_URL];

// Define the type for the origin callback function
type OriginCallback = (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void; //allow is an optional parameter.

// Define corsOptions with explicit types
const corsOptions: { origin: OriginCallback } = {
  origin: function (origin, callback) {
    //console.log(origin); // depurate
    if (whiteList.includes(origin)) {
      // allow
      callback(null, true);
    } else {
      // dont allow
      callback(new Error('CORS Error'), false);
    }
  }
};

app.use(cors(corsOptions));

//routes
app.use('/api/menu', itemsRoutes);
app.use('/api/tickets', ticketsRoutes);


//define port
const PORT = process.env.PORT || 4000;

//start application
app.listen(PORT, () => {
    console.log(colors.bgBlue.bold(`App running in Port ${PORT}`));
})