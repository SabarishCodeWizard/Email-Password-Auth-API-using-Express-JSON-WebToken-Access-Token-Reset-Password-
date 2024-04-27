const jwt = require('jsonwebtoken');
const SECRET_KEY= "bitsathym";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token is missing" });
    }

    const token = authHeader.split(" ")[1]; // Fix typo here

    jwt.verify(token, SECRET_KEY, async (err, decode) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }

        const user = await User.findOne({ _id: decode.id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    });
};

module.exports = verifyToken;
