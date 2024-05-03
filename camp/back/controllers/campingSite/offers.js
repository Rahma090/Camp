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

const updateOffer = async (req,res)=>{
    const campingSiteId=req.params.id;
    const offer=await campingSite.update(req.body,{
        where:{campingSiteId}
    })
    res.json(offer);
}

const deleteOffer = (req,res)=>{
    const campingSiteId = req.params.id
        campingSite.destroy({where:{campingSiteId}})
        res.json("offer deleted")
      };

module.exports = {
    newOffer, updateOffer, deleteOffer
}