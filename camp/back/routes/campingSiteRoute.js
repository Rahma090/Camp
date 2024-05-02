const SiteController = require('../controllers/campingSite/addOffer')
const Site = require('../controllers/campingSite/updateOffer')
const SiteRouter = require('express').Router()

//add
SiteRouter.post('/offer', SiteController.newOffer)
//Update
SiteRouter.put('/update/:id', Site.updateOffer)


module.exports = SiteRouter