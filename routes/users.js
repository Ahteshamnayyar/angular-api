import express from 'express';
const userRoute = express.Router();
import Users from '../models/user-model.js';

//Get API
userRoute.get("/", async (req, res) => {  
  try {
    const _Users = await Users.find();
    res.status(200).json(_Users)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Post API
userRoute.post('/', async (req, res) => {
  try {    
    const _Users = await Users.create(req.body);
    res.status(201).json(_Users);
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//API for Update
userRoute.put('/', async (req, res) => {
  const id = req.body._id;
  const userObj = { ...req.body, lastModified: new Date() }

  try {
    const userTrans = await Users.findByIdAndUpdate(id, userObj, { new: true });

    if (!userTrans) {
      return res.status(404).json({ error: 'User not found' });
    }
    const _Users = await Users.find();
    res.status(201).json(_Users);
  } catch (error) {
    console.error('Error updating User:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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

