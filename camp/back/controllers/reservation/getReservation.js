const reservation = require ('../../models/Client/reservation')

const allReservations = async (req, res) => {
    try {
        const campingSiteId = req.params.id
        const reservations = await reservation.findAll(
            {where:{campingSiteId}})
            
        res.status(200).json(reservations)
    } catch (error) {
        res.status(500).json(error)
    }
}

const oneReservation = async (req, res) => {
    const id = req.params.id
    const reservations = await reservation.findPK(
        {where: {id}})
        if (!id){
            return res.status(404).json({
                message: "No reservations found"
            })
        }
        res.status(200).json(reservations)
}

module.exports = {allReservations, oneReservation}