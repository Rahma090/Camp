const OwnerController = require('../controllers/campingOwner/logIn')
const ProfileOwnerController = require('../controllers/campingOwner/updateProfile')
const ownerRouter = require('express').Router()

//login
ownerRouter.post('/register', OwnerController.signUp)
ownerRouter.post('/logIn', OwnerController.logIn)

//update owner
ownerRouter.put('/updateProfile/:id', ProfileOwnerController.updateProfile)

module.exports = ownerRouter