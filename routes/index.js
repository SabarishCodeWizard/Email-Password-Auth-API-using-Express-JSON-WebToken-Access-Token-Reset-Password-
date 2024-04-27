const express = require('express');
const User = require('../model')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/index')
const verifyToken = require('../utils/index.js')
const nodemailer = require('nodemailer')

const router = express.Router();

//TODO: finish
router.get('/test', (req, res) => {
    res.json({ message: 'test message api' });
})

//FIXME: finish
router.post('/user', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ email, password: hashedPassword })

        await newUser.save();
        return res.status(201).json({ message: 'created' })
    }
    res.status(404).json({ message: "user already exists" })


})


//TODO: finish

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })


    if (!user) {
        return res.status(404).json({ message: 'user not found' });

    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(401).json({ message: 'password mismatch' })
    }

    const token = generateToken(user)
    res.json({ token })


})


//FIXME: finish

router.get('/data', verifyToken, (req, res) => {
    res.json({ message: "This data is protected" })
})


//TODO: finish

router.post('/reset', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const token = Math.random().toString(36).slice(-8);
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 360000;
    await user.save();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "sabarish.it22@bitsathy.ac.in",
            pass: "smoyz bkxh hume oodg"
        }
    });

    const message = {
        from: "sabarish.it22@bitsathy.ac.in",
        to: user.email,
        subject: "Password reset request",
        text: "Your password reset token is: " + token
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            return res.status(500).json({ message: "Something went wrong with sending the email" });
        }
        res.status(200).json({ message: "Email sent successfully" });
    });
});










module.exports = router;