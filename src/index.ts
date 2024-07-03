import express from 'express';
import {  getAllPosts, findPostByID } from "./services/posts.services";
import { db } from './config/db';

const app = express();
app.use(express.json()); //this allow to read the req.body as a json

//DB connection
db();

//routes example
app.get('/api/posts', getAllPosts);

app.get('/api/posts/:id', findPostByID)


//define port
const PORT = process.env.PORT || 4000;

//start application
app.listen(PORT, () => {
    console.log(`App running in Port ${PORT}`);
})