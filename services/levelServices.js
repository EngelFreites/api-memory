const Level = require('../models/levels')

class LevelServices {
  constructor () {
   this.level = Level
  }

  async get (){
    const allLevels = await Level.find({})

    return allLevels
  }

  async getOne (number) {
    const levelNumber = number

    const level = await Level.findOne({ level_number: levelNumber})

    return level
  }

  async create (body) {
    const newLevel =  new Level (body)
  
    const levelSaved =  await newLevel.save()

    return levelSaved
  }

}

module.exports = LevelServices