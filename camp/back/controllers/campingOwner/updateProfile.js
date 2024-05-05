const owner = require ('../../models/Owner/campingOwner')
const bcrypt = require ('bcrypt');

const updateProfile = async (req, res) => {
    const ownerId = req.params.id
    const password = req.body.password
    const hashedPassword = await bcrypt.hash (password,10 )
    req.body.password = hashedPassword
 await owner.update(req.body, 
    {where: {ownerId}})
 res.status(200).json(owner)
}

module.exports = {updateProfile}