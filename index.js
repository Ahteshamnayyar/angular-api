import express from 'express';
import bodyParser from 'body-parser'
import userRoute from './routes/users.js'
import orderRoute from './routes/orders.js'
import productRoute from './routes/products.js'
import cors from 'cors';

let corsOptions = {
    origin: ['http://localhost:4200']
}


const app = express();

const PORT = 5000




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