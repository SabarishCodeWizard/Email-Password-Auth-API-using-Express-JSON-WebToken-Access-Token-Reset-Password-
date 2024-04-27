const jwt = require('jsonwebtoken');
const SECRET_KEY= "bitsathym";

const generateToken = (user) => jwt.sign({id : user.id}, SECRET_KEY, {expiresIn : '2m'});

module.exports = generateToken;
