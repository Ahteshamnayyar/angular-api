import express from 'express';
const orderRoute = express.Router();
import{v4 as uuidv4} from 'uuid'


// let orders=[
//     {
//     orderID:1,
//     userID:2,
//     orderDate:'4-6-2024',
//     totalAmount: 2000,
//     orderStatus:'Delivered'
// },
// {
//     orderID:1,
//     userID:1,
//     orderDate:'4-7-2024',
//     totalAmount: 1000,
//     orderStatus:'Delivered'
// },
// {
//     orderID:1,
//     userID:1,
//     orderDate:'4-8-2024',
//     totalAmount: 3300,
//     orderStatus:'Delivered'
// },
// {
//     orderID:1,
//     userID:1,
//     orderDate:'4-5-2024',
//     totalAmount: 500,
//     orderStatus:'Delivered'
    
//     }


// ]

let orders=[];

orderRoute.get("/",(req,res)=> res.send(orders));

orderRoute.post("/",(req,res)=>{

    let order = req.body;
    orders.push({...order,orderID: uuidv4()});
    res.send(orders);
});

orderRoute.delete("/:orderID",(req,res)=>{
    let{orderID} =req.params;
    orders = orders.filter((order)=>order.orderID!=orderID)
    res.send(orders);} )

export default orderRoute;