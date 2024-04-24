import express from 'express'
const productRoute = express.Router();
import{v4 as uuidv4} from 'uuid';
import Products from '../models/product-model.js';

// let products =[
//     {
//        productId:1,
//        productName:'Laptop' ,
//        description:'Apple',
//        price:900,
//        stock_quantity:50,
//     },
//     {
//         productId:2,
//         productName:'Iphone' ,
//         description:'15pro',
//         price:1200,
//         stock_quantity:100,
//      },
//      {
//         productId:3,
//         productName:'Samsung Tv' ,
//         description:'LED TV',
//         price:2000,
//         stock_quantity:1000,
//      },
//      {
//         productId:4,
//         productName:'Tab' ,
//         description:'15',
//         price:700,
//         stock_quantity:150,
//      }

// ]

//let products =[]

productRoute.get('/', async (req,res)=> {
try{
  const _Products = await Products.find();
  res.status(200).json(_Products);
}
catch(error){
res.status(500).json({message: error.message});
}
});

productRoute.post('/', async (req,res)=>{

   // let product = req.body;
   // products.push({...product,productId:uuidv4()});
   // res.send(products);
   try{
     const _Products = await Products.create(req.body);
     res.status(200).json(_Products);

   }
   catch(error){
      res.status(400).json({message:error.message});
   }

})

productRoute.delete('/:productId',async (req,res)=>{

   // let{productId}=req.params;
   // products = products.filter((product)=>
   //    product.productId != productId)
   //    res.send(products);
try{
   const productId =req.params.productId; 
   const deletedRecord = await Products.findByIdAndDelete(productId);
   const _Products = await Products.find();
   res.status(200).json(_Products)

}
catch(error){
   res.status(400).json({message:error.message});

}

   });

  


export default productRoute;