const userRoutes = require('./userRoutes')
const levelRoutes = require('./levelRoutes')
const loginRoutes = require('./loginRoutes')
const routesApp = (app) =>{
  app.use('/api/users', userRoutes)
  app.use('/api/levels', levelRoutes)
  app.use('/api/login', loginRoutes )
}

module.exports = routesApp