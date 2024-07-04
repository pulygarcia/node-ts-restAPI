import mongoose from "mongoose";
import colors from 'colors'

export const db = async () => {
    //console.log('DB connection');
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);

        console.log(colors.bgGreen('Connected successfully to Database'));
    } catch (error:any) {
        console.log(colors.bgRed(error.message));
        process.exit(1);
    }
}