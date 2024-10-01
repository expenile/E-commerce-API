const jwt = require("jsonwebtoken");

const ensureAuthenticated = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthoruized" });
  }
  try {
    
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    req.userInfo = decoded;
    
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "token is not correct or expired" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: "token is not correct or expired" });
  }
};

module.exports = ensureAuthenticated;
