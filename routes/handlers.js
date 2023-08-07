const express = require('express')
const path = require('path')
const router = express.Router()

router.get("/", (req, res)=>{
    res.render('pages/home')
})

module.exports = router
