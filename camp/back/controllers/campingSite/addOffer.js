const campingSite = require ('../../models/Owner/campingSite')

const newOffer = async (req, res) => {
    try {
        const {ownerId} = req.body
 const { name, capacity, description, price, image} = req.body
 await campingSite.create({ 
    name, 
    capacity, 
    description, 
    price, 
    image,
    ownerId
})
 return res.status(201).json("new offer added")
    }
    catch (error) {
        console.log(error)
        return res.status(500).json("offer not added")
    }
}

module.exports = {
    newOffer
}