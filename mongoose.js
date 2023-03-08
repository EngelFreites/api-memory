const mongoose = require('mongoose')


mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://engel:1691997@cluster0.tqxkwbp.mongodb.net/puzzel?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  
  .then(() => {
    console.log(`data base conected`)
  }).catch(e => {
    console.log(e)
  })


