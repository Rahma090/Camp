const reservations = require ('../../models/Client/reservation')

const cancelReservation = async (req, res) => {
    try {
        const {reservationId} = req.params
        const status = req.body.reservation
        await reservations.update({
            where: {reservationId}
        })
        res.status(200).json(status)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = {cancelReservation}