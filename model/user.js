import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    password: String,
    email: String,
    firstName: String,
    lastName: String
})

export default mongoose.model('user', userSchema)