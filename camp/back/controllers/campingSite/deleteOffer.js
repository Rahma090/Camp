const CampingSite = require ('../../models/Owner/campingSite')

const deleteOffer =  (req,res)=>{
    const campingSiteId = req.params.id
        CampingSite.destroy({where:{campingSiteId}})
        res.json("offer deleted")
      };


module.exports = {deleteOffer};