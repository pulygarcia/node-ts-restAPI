import express from 'express';
import cors, { CorsOptions } from 'cors';
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

//Cors config
const whiteList = process.argv[1] === '--postman' ? [process.env.FRONTEND_URL, undefined] : [process.env.FRONTEND_URL];

// Define the type for the origin callback function
type OriginCallback = (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void; //allow is an optional parameter.

// Define corsOptions with explicit types
const corsOptions: { origin: OriginCallback } = {
  origin: function(origin, callback) {
    if (whiteList.includes(origin)) {
      // Allow the connection
      callback(null, true);
    } else {
      // Don't allow
      callback(new Error('Error de CORS'), false);
    }
  }
};

app.use(cors(corsOptions));

//routes example
app.use('/api/menu', itemsRoutes);


//define port
const PORT = process.env.PORT || 4000;

//start application
app.listen(PORT, () => {
    console.log(colors.bgBlue.bold(`App running in Port ${PORT}`));
})