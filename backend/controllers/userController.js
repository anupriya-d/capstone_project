const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const createUser = async (data, res) => {
    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        
        const newUser = new User(data);
        await newUser.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

const loginUser = async (data, res) => {
    const { email, password } = data;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ error: 'Invalid password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.status(200).send({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = { createUser, loginUser };
