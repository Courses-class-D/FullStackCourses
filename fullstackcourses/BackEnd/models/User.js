const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.connect('mongodb+srv://hadeel:5682165@coursescluster-wekvq.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
.then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));

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

