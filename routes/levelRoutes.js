const express = require('express')
const router = express.Router()

const LevelServices = require('../services/levelServices')

const level = new LevelServices ()

router.get('/', async(req, res) =>{
  const allLevels = await level.get()
  
  res.status(200).json(allLevels)
})

router.get('/:number', async (req, res) => {
  const number = Number(req.params.number)

  const oneLevel = await level.getOne(number)

  res.status(200).json(oneLevel)
})

router.post('/', async (req, res) =>{
  const body = req.body

  const newLevel = await level.create(body)

  res.status(201).json(newLevel)
})

module.exports = router