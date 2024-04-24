import express from 'express';
const userRoute = express.Router();
//import{v4 as uuidv4} from 'uuid'
import  Users  from '../models/user-model.js';
//const Users = require('../models/user-model')

//const User = require('../models/model');
//mock user data
// let users= [
//     { 
//       ID:1,
//       NAME:'Tom',
//       MOBILE:123,
//       CITY:'Houston',
//       EMAIL: '123@gmail.com',
//       STATUS: 'Active'
//   },
//   { 
//     ID:2,
//     NAME:'Harry',
//     MOBILE:456,
//     CITY:'Hamshpire',
//     EMAIL: '456@gmail.com',
//     STATUS: 'Pending'
// },
// { 
//   ID:3,
//   NAME:'Monty',
//   MOBILE:789,
//   CITY:'Holland',
//   EMAIL: '789@gmail.com',
//   STATUS: 'Active'
// },
// { 
//   ID:4,
//   NAME:'Johnny',
//   MOBILE:1011,
//   CITY:'Hungary',
//   EMAIL: '1011@gmail.com',
//   STATUS: 'Active'
// }
// ]
// const dataSchema = new mongoose.Schema({
//   name: {
//       required: true,
//       type: String
//   },
//   age: {
//       required: true,
//       type: Number
//   }
// })

//mongoose.model('Data', userSchema)

//Get API
userRoute.get("/",async (req,res)=>{
  // res.send(users);
  try{
    const _Users = await Users.find();
    res.status(200).json(_Users)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

//Post API
userRoute.post('/',  async (req, res) => {

  try{
    const _Users = await Users.create(req.body);
    res.status(201).json(_Users);
  }

  catch (error) {
    res.status(400).json({message: error.message})
}

  
    /*let user = {...req.body, ID: uuidv4() } ;
    users.push(user);

    const data = new Model({
      name: req.body.NAME,
      age: req.body.MOBILE
  })

    res.send(users);

    try {

      const dataToSave =  data.save();
      res.status(200).json(user)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }*/
})  

userRoute.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Users.findByIdAndDelete(id)
     const _Users = await Users.find();
    res.status(200).json(_Users)
}
catch (error) {
    res.status(400).json({ message: error.message })
}
});

export default userRoute

