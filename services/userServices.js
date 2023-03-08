const User = require('../models/users')
const bcrypt = require('bcrypt')

class UserServices {
  constructor () {
    this.user = User
  }

  async getAll () {

    const allUsers = await User.find({})

    return allUsers
  }


  async createUser (body){

    const { name, nickName, email, password} = body

    const saltOnRound = 10

    const passwordHash = await bcrypt.hash(password, saltOnRound)

    const newUser = new User({
      name,
      nickName,
      email,
      passwordHash, 
      points: 0
    })

    const userSaved = await newUser.save()

    return userSaved
  }

  async delete (id){

    const deleteUser = await User.findByIdAndDelete(id)

    return deleteUser
  }
}

module.exports = UserServices