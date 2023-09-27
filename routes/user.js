import express from 'express'
const router = express.Router()


router.route('/dashboard/user/:id')
.get()


router.get('/mon-abonnement', (req, res)=>{
    res.render('pages/dashboard-abonnement')

})

router.get('/parametres', (req, res)=>{
    res.render('pages/parametres')

})

export default router