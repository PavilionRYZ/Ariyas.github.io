// create a tags schema for product tag 
const mongoose = require('mongoose');
const tagsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:2000
    }, 
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }],

});

module.exports = mongoose.model('Tags', tagsSchema);