import express from 'express';
const userRoute = express.Router();
import{v4 as uuidv4} from 'uuid'

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

// Adding users to our mock database
let users = [];
//getting list of users from the mock data
userRoute.get("/",(req,res)=>{
  res.send(users);
})

userRoute.post('/', (req, res) => {
    let user = req.body;

    users.push({ ...user, ID: uuidv4() });

    res.send(users);
})  

userRoute.delete('/:ID', (req, res) => {
  let { ID} = req.params;

  users = users.filter((user) => user.ID !== ID)

  res.send(users);
});

export default userRoute

