const CampingSite = require ('../../models/Owner/campingSite')

const updateOffer = async (req,res)=>{
      const campingSiteId=req.params.id;
      const offer=await CampingSite.update(req.body,{
          where:{campingSiteId}
      })
      res.json(offer);
  }

module.exports = {updateOffer}