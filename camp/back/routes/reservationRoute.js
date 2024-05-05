const ReservationController = require('../controllers/reservation/getReservation')

const reservationRouter = require('express').Router()

//get reservation

reservationRouter.get('/reservationsListe', ReservationController.allReservations)    
reservationRouter.get('/reservation/:id', ReservationController.oneReservation);

module.exports = reservationRouter;