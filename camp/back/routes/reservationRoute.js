const ReservationController = require('../controllers/reservation/getReservation')
const CancelResrvationController = require ('../controllers/reservation/cancelReservation')
const reservationRouter = require('express').Router()

//get reservation

reservationRouter.get('/reservationsListe', ReservationController.allReservations)    
reservationRouter.get('/reservation/:id', ReservationController.oneReservation);

// cancel reservation
reservationRouter.put('/cancelReservation/:id', CancelResrvationController.cancelReservation)

module.exports = reservationRouter;