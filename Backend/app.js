import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './src/config/mongooseConfig.js';
import ShorturlRouter from './src/routes/shorturlRoutes.js';
import { errorHandler} from './src/utils/errorHandler.js';

const app = express();
dotenv.config();
connectToMongoDB();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api/shorturl', ShorturlRouter);

app.use( errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on the PORT ${PORT}`)
})