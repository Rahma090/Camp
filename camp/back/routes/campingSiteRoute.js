const SiteController = require('../controllers/campingSite/offers')
const ExtraController = require('../controllers/campingSite/extras')
const SiteRouter = require('express').Router()

//add offer
SiteRouter.post('/offer', SiteController.newOffer)
//Update offer
SiteRouter.put('/updateOffer/:id', SiteController.updateOffer)
//Delete offer
SiteRouter.delete('/deleteOffer/:id', SiteController.deleteOffer)

//add extra
SiteRouter.post('/extra', ExtraController.newExtra)
//Update extra
SiteRouter.put('/updateExtra/:id', ExtraController.updateExtra)
//Delete extra
SiteRouter.delete('/deleteExtra/:id', ExtraController.deleteExtra)

module.exports = SiteRouter