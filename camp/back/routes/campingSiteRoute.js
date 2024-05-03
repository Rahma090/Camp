const AddSiteController = require('../controllers/campingSite/addOffer')
const UpdateSiteController = require('../controllers/campingSite/updateOffer')
const DeleteSiteController = require('../controllers/campingSite/deleteOffer')
const SiteRouter = require('express').Router()

//add
SiteRouter.post('/offer', AddSiteController.newOffer)
//Update
SiteRouter.put('/update/:id', UpdateSiteController.updateOffer)
//Delete
SiteRouter.delete('/delete/:id', DeleteSiteController.deleteOffer)


module.exports = SiteRouter