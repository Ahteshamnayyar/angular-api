import {mongoose} from 'mongoose'

const orderSchema = new mongoose.Schema({
    userID: {
        required: true,
        type : Number
    },
    orderDate:{
        required: true,
        type : String
    },
   totalAmount:{
    required: true,
    type : Number
   },
   orderStatus: {
    required: true,
    type : String

   }
})

//export default orderSchema
export default mongoose.model('Orders', orderSchema);