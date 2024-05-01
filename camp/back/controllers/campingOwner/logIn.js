const jwt = require ('jsonwebtoken');
const campingOwner = require ('../../models/Owner/campingOwner')
const bcrypt = require ('bcrypt');
const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';


const signUp = async (req, res) => {
    try {
    const { ownerName, campingName, adress, phoneNumber, email, password } = req.body;
    // Check if the email exists
    const userExists = await campingOwner.findOne({
        where: {email}
    });
    if (userExists) {
        return res.status(400).send('Email is already associated with an account');
    }

    // Hash the password
    await campingOwner.create({
        ownerName,
        campingName,
        adress,
        phoneNumber, 
        email,
        password: await bcrypt.hash(password,15),
    });
    return res.status(200).send('Registration successful');
    } catch (err) {
        return res.status(500).send('Error in registering user');
    }
}

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        
        const owner = await campingOwner.findOne({
            where: {
                email
            }
        });
        

        if (!owner) {
            console.log('Email not found');
            return res.status(404).json('Email not found');
        }

        const passwordValid = await bcrypt.compare(password, owner.password);
        

        if (!passwordValid) {
            console.log('Incorrect email and password combination');
            return res.status(404).json('Incorrect email and password combination');
        }

        const token = jwt.sign({ id: owner.id }, jwtSecret, {
            expiresIn: "30s"
        });
        

        res.status(200).send({
            id: owner.id,
            name: owner.ownerName,
            email: owner.email,
            accessToken: token,
        });
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).send('Sign in error');
    }
};

    
    

    module.exports = {signUp, logIn};
