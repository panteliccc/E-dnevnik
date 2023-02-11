const { Router } = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../Models/User")
const router = Router();

router.get("/", (req,res)=> {
    res.json(req.body)
    
});
router.post("/signup", async (req, res) => {
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    });
  
    try {
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 86400 
      });
      res.status(200).send({ auth: true, token });
    } catch (err) {
      res.status(500).send(err);
    }
  });

router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("No user found.");

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    res.status(200).send("ide gas prijavlajn si");
});

module.exports = router;