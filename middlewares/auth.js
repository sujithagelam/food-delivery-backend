import jwt from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", token_decode);
    if (!req.body) {
      req.body = {};
    }
    req.body.userId = token_decode.id;
    console.log("req.body.userId:", req.body.userId);
    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};
export default authMiddleware;
