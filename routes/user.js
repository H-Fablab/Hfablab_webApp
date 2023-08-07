
const express = require("express")
const path = require('path')
const router = express.Router()

router.get('/dashboard', (req, res)=>{
    res.render('pages/dashboard')

})


router.get('/mon-abonnement', (req, res)=>{
    res.render('pages/dashboard-abonnement')

})

router.get('/parametres', (req, res)=>{
    res.render('pages/parametres')

})

module.exports = router