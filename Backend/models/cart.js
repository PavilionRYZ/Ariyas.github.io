// create a schema for cart items 
const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
      },
      cartItems: [
        {
          name: {
            type: String,
            required: true
          },
          quantity: {
            type: Number,
            required: true
          },
          image: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
          }
        }
      ],
});

module.exports = mongoose.model('Cart', cartSchema);