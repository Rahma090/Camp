const extras = require ('../../models/Owner/extra')

const newExtra = async (req, res) => {
    try {
        const {ownerId} = req.body
 const { name, price, description} = req.body
 await extras.create({ 
    name, 
    price,
    description,
    ownerId
})
 return res.status(201).json("new extra added")
    }
    catch (error) {
        console.log(error)
        return res.status(500).json("extra not added")
    }
}

const updateExtra = async (req,res)=>{
    const id=req.params.id;
    const extra =await extras.update(req.body,{
        where:{id}
    })
    res.json(extra);
}

const deleteExtra = (req,res)=>{
    const id = req.params.id
        extras.destroy({where:{id}})
        res.json("extra deleted")
      };

module.exports = {newExtra, updateExtra, deleteExtra};
