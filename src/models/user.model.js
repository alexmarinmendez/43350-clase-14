import mongoose from "mongoose"

const userCollection = 'users'

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: String
})

export const userModel = mongoose.model(userCollection, userSchema)

