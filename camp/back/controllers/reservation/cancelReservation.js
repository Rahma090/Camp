const reservations = require ('../../models/Client/reservation')

const cancelReservation = async (req, res) => {
    try {
        const reservationId = req.params
        const cancel = req.body.status
        await reservations.update(
           {status: cancel},
            {where: {reservationId}
        })
        res.status(200).json(cancel)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = {cancelReservation}