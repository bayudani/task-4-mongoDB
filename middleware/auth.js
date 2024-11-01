const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Akses ditolak' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token tidak valid' });
    }
};

module.exports = auth;
