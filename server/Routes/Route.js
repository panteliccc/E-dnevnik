const { Router } = require("express");

const router = Router();

const LogInCollection = require('../Models/Login')


router.get('/signup', (req, res) => {
    res.send(req.body)
})
router.get('/', (req, res) => {
    res.send(req.body)
})

router.post('/signup', async (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password
    }

   try{
    await LogInCollection.insertMany([data])
   }
   catch(e){
    res.send(e)
   }
})


module.exports = router;