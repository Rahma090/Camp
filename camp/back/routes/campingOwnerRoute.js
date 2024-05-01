const OwnerController = require('../controllers/campingOwner/logIn')
const ownerRouter = require('express').Router()

//login
ownerRouter.post('/register', OwnerController.signUp)
ownerRouter.post('/logIn', OwnerController.logIn)

module.exports = ownerRouter