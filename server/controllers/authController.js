const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./../model/User");


const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

exports.protect = async (req, res) => {
  let token;
  
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return res.status(401).json({ status: "fail", message: "Access Denied" });

  try {
    
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findOne({ _id: verified.id });
    
    req.user = verified;
    res.status(200).json({
      status: "Ok",
      message: 'Access allowed',
      user
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "fail", message: "Invalid Token" });
  }
};

exports.register = async (req, res) => {

  try {
    console.log(req.body);
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    console.log(hashedPassword);

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
      user: newUser
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    debugger;
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide correct email or password");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Please check your password or email");
    }

    const token = signToken(user._id);
    console.log(token);

    res.status(200).json({
      status: "success",
      token,
      user
    });
  } catch (err) {
    console.log(err);
    
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};
