import {mongoose} from 'mongoose'

const userSchema = new mongoose.Schema({
    
    // id:{
    //     required: true,
    //     type: Number
    // },

    name: {
        required: true,
        type: String
    },
    city:{
        required: true,
        type: String
    },
    mobile: {
        required: true,
        type: Number
    },
    email:{
        required: true,
        type: String
    },
    
    status:{
        required: true,
        type: String
    }

})
//const Users = mongoose.model('Users', userSchema)

//export default userSchema
export default mongoose.model('Users', userSchema);
//module.exports = Users;