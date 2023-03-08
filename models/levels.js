const { Schema, model} = require('mongoose')


const levelsSchema = new Schema ({
  level_number: Number,
  time: Number,
  carts: Object,
  users:[{
    type:Schema.Types.ObjectId,
    ref:'Users'
  }]
})

levelsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    returnedObject.id = returnedObject._id,
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Level = model('Level', levelsSchema)

module.exports = Level