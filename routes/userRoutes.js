const UserServices = require('../services/userServices')
const express = require('express')

const router = express.Router()
const User = new UserServices()

router.post('/', async (req, res) =>{
  const body = req.body
  try {
    const newUser = await User.createUser(body)

    res.status(201).json(newUser)
  }catch (e) {

    console.log(e.name)

    res.status(406).json({ error: 'the nickName and email must be unique'})
  }
})


router.get('/', async (req, res) =>{

  try{
    const allUsers = await User.getAll()
    
    res.status(200).json(allUsers)
  }catch (e) {
    console.log(e)
  }
})


router.delete('/:id', async (req, res) =>{

  const {id} =  req.params
  try{
    await User.delete(id)

    res.status(200).json({
      message: 'User deleted'
    })
  }catch(e){}
})
module.exports = router