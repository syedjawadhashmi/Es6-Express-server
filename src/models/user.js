import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, '5 characters long at least'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, '10 characters long at least'],
  }
}, { timestamps: true });

 

const User = mongoose.model('User', UserSchema);

export default User;