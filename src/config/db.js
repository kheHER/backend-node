import mongoose from "mongoose";
import { URL_DATABASE_DEV, URL_DATABASE_PRODUCT } from "./globlaykey.js";

mongoose.connect(URL_DATABASE_DEV).then(()=>{
    console.log('Connected Database!');
}).catch((err)=>{
    console.log(err);
})