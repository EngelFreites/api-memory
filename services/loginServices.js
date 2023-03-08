const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Level = require('../models/levels')

class servicesLogin{

  constructor (){
    this.user = User
    this.level = Level
  }


  async login (body) {
    const {email, password} = body

    const user = await User.findOne({email})
    const onceLevel = await Level.findOne({level_number: 1})

    const passwordDescode = user === null
      ? false
      : await bcrypt.compare(password, user.passwordHash)

    
    if(!(user && passwordDescode)){
      return({error: 'Usuario o Contraseña incorrecta'})
    }

    if(user.level_unkled.length === 0){
      user.level_unkled.push(onceLevel.level_number)
    }
  

    const userForToken = {
      id: user._id,
      email: user.email,
      user: user.name
    }

    const token = jwt.sign(userForToken, '1691997')


    const userLogined = {
      nickName: user.nickName,
      email: user.email,
      level_unkled: user.level_unkled,
      token

    }

    return userLogined
  }
}

module.exports = servicesLogin