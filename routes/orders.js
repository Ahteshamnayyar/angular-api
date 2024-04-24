import express from 'express';
const orderRoute = express.Router();
import{v4 as uuidv4} from 'uuid'
import Orders from '../models/order-model.js';


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

//let orders=[];

orderRoute.get("/", async (req,res)=> {

try{
    const _Orders = await Orders.find();
    res.status(200).json(_Orders);

}
catch(error){
    res.status(500).json({message: error.message})
}
});


orderRoute.post("/", async (req,res)=>{

    try{
        const _Orders = await Orders.create(req.body);
        res.status(201).json(_Orders);
      }
    
      catch(error){
        res.status(400).json({message: error.message})
    }
});

orderRoute.delete("/:orderId", async (req,res)=>{
    // let{orderID} =req.params;
    // orders = orders.filter((order)=>order.orderID!=orderID)
    // //orders.save();
    // res.send(orders);} )
try{
    let orderId = req.params.orderId;
    let deletedRecord = await Orders.findByIdAndDelete(orderId);
    let _Orders = await Orders.find();

    res.status(200).json(_Orders);
}
catch(error){
    res.status(400).json({message: error.message})
}


});

export default orderRoute