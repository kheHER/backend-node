
import express from 'express';
import cors from 'cors';    //ເອີ້ນຫາໄຟ໌ຂອງ cors
import bodyParser from 'body-parser';   //ເອີ້ນຫາໄຟ໌ຂອງ body-parser
import './config/db.js'
import {PORT} from './config/globlaykey.js';
import router from './router/index.js';



const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true,limit: '500mb',parameterLimit:500}));
app.use(bodyParser.urlencoded({extended: true, limit: '500mb',parameterLimit:500}));
app.use('/api/v1',router);



//const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`);
});