const reservations = require ('../../models/Client/reservation')

const removeReservation = async (req, res) => {
    try {
        const {reservationId} = req.body
        await reservations.destroy({
            where: {reservationId}
        })
        res.status(200).json({message: 'Reservation deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = {removeReservation}