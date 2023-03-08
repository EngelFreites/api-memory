const express = require('express')
const servicesLogin = require('../services/loginServices')
const router = express.Router()

const login = new servicesLogin()

router.post('/', async(req, res) =>{
  const body = req.body
  const userLoged = await login.login(body)

  res.status(200).json(userLoged)
})

module.exports = router