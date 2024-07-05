import dotenv from 'dotenv';
import colors from 'colors'
import { db } from "../config/db";
import Items from '../models/item.model'
import { items } from './items';

//allow dotenv so that can read to connect with db below
dotenv.config();

db();//connection

//fill or destroy the data, execute depending on the command
async function seeder(){
  try {
    await Items.insertMany(items);

    console.log(colors.bgCyan('DB was filled correctly'));
    
    process.exit();
  } catch (error:any) {
    console.log(colors.bgRed.white.bold(error.message));
    process.exit(1);
  }
}

async function destroy(){
  try {
    await Items.deleteMany();

    console.log(colors.cyan('DB was cleaned correctly'));
    
    process.exit();
  } catch (error:any) {
    console.log(colors.bgRed.white.bold(error.message));

    process.exit(1);
  }
}


//console.log(process.argv);  <---  print arguments of command line that are sended to the script executor
process.argv[2] == '--import' ? seeder() : destroy();