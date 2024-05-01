const jwt = require ('jsonwebtoken');
const campingOwner = require ('../../models/Owner/campingOwner')
const bcrypt = require ('bcrypt');
const jwtSecret = process.env.JWT_SECRET

const signUp = async (req, res) => {
    const { ownerName, campingName, adress, phoneNumber, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newCampingOwner = await campingOwner.create({
        ownerName,
        campingName,
        adress,
        phoneNumber, 
        email,
        password: hashedPassword,
    });
    const token = jwt.sign({
        id: newCampingOwner.id,
        ownerName: newCampingOwner.ownerName
    }, jwtSecret, {
        expiresIn: 3600
    });
    res.status(201).json({
        token,
        ownerName: newCampingOwner.ownerName
    })
    };

    const logIn =  (req, res) => {
            const { email, password } = req.body;
            campingOwner.findOne({
                where: {
                    email
                }
            })
         .then(campingOwner => {
            if (campingOwner) {
                bcrypt.compare(password, campingOwner.password)
             .then(isMatch => {
                    if (isMatch) {
                        const token = jwt.sign({
                            id: campingOwner.id,
                            ownerName: campingOwner.ownerName
                        }, jwtSecret, {
                            expiresIn: 3600
                        });
                        res.status(200).json({
                            token,
                            ownerName: campingOwner.ownerName
                        })
                    } else {
                        res.status(401).json({
                            message: 'Invalid Credentials'
                        })
                    }
                })
            } 
        })
    }


    module.exports = {signUp, logIn};
