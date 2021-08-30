const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const Product = require('./product');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
})

userSchema.plugin(passportLocalMongoose);
//from passport documentation
// humne sabse pehle user ka schema define kiya as userSchema aur fir local mongoose ko 
// plugin karwa diya taki voh behind the scene saari hashing vaghera kar de

const User = mongoose.model('User', userSchema);

module.exports = User;