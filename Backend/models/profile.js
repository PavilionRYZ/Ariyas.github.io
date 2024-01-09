// create a schema for profile additional details
const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
      },
      gender:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
      },
        age:{
            type:Number,
            required:true,
            trim:true,
            maxlength:50
        },
       phonrNumber:{
        type:Number,
        required:true,
        trim:true,
        maxlength:50
       },

});
module.exports = mongoose.model('Profile', profileSchema);
