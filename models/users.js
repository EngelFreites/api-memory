const {Schema, model} = require('mongoose')



const userSchema = new Schema({
  name: String,
  nickName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  passwordHash: String,
  level_unkled:[{
    type: String,
    ref: 'Level'
  }
  ],
  points: Number
})


userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    returnedObject.id = returnedObject._id,
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})


const User = model('User', userSchema)

module.exports = User