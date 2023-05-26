import mongoose from 'mongoose'
import bcryp from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timespamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryp.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User
