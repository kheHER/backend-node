import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5001;
const URL_DATABASE_PRODUCT = process.env.URL_DATABASE_PRODUCT || "";
const URL_DATABASE_DEV = process.env.URL_DATABASE_DEV || "";
const SECREAT_KEY = process.env.SECREAT_KEY;


export {PORT,URL_DATABASE_DEV,URL_DATABASE_PRODUCT,SECREAT_KEY}