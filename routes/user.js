import express from 'express' 
import memberController from '../controllers/memberController.js'
import auth from '../middlewares/auth.js'
const router = express.Router()

router.route('/login').post(memberController.login)
router.route('/signup').post(memberController.signUp)
router.route('/mon-compte/dashboard').get(auth, memberController.myAccount)
router.route('/mon-compte/parametres').get(auth, memberController.accountSettings)
router.route('/mon-compte/abonnement').get(auth, memberController.accountSubscription)
router.route('/logout').post(auth, memberController.logout)
router.route('/updatesettings').post(auth, memberController.updateSettings)


export default router