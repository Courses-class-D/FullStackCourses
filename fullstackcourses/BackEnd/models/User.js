const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type: String,
        required : true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
// let getUser = cb => {
//     User.find({}, function(err, docs) {
//       if (err) {
//         console.log("ERR:", err);
//       }
//       console.log("DOCS:", docs);
//       cb(docs);
//     });
//   };

module.exports =User=mongoose.model('users',UserSchema)

