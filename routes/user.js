import express from 'express' 
import getPagesController from '../controllers/getPagesController.js'
import memberController from '../controllers/memberController.js'
const router = express.Router()

router.route('/login').post(memberController.login)
router.route('/signup').post(memberController.signUp)
router.route('/mon-compte').get(getPagesController.myAccount)
router.route('/mon-compte/parametres').get(getPagesController.accountSettings)
router.route('/mon-compte/abonnement').get(getPagesController.accountSubscription)


export default router