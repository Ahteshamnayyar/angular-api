import express from 'express';
import bodyParser from 'body-parser'
import {mongoose} from 'mongoose'
import userRoute from './routes/users.js'
import orderRoute from './routes/orders.js'
import productRoute from './routes/products.js'
import cors from 'cors';
import dotenv from 'dotenv';
import { config } from 'dotenv';

// Load environment variables from .env file
dotenv.config();



let corsOptions = {
    origin: ['http://localhost:4200']
}


const app = express();

const PORT = 5000

// Access the environment variable DATABASE_URL
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection
//const database = mongoose.connect(mongoString);

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})




app.use(bodyParser.json());
app.use(cors(corsOptions));

//app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send("Hello From HomePAGE");
})
app.get('/test', (req, res)=>res.send("Test"));
app.use('/users',userRoute);
app.use('/orders',orderRoute);
app.use('/products',productRoute);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));