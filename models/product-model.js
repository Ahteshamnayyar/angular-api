import { mongoose } from "mongoose";

let productSchema = new mongoose.Schema({
  productName: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },

  price: {
    required: true,
    type: Number,
  },
  stock_quantity: {
    required: true,
    type: Number,
  },
});

export default mongoose.model('Products',productSchema);
