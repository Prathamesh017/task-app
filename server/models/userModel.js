import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required:true
  },
})

export const UserModel = mongoose.model('UserModel', UserSchema )