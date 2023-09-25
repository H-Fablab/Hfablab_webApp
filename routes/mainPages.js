import express from 'express' 
import getPagesController from '../controllers/getPagesController.js'
import getBlogPost from '../controllers/getBlogPost.js'
import getEquipmentsController from '../controllers/getEquipmentsController.js'
import projectController from '../controllers/projectController.js'
const router = express.Router()


router.route('/').get(getPagesController.homePage)
router.route('/a-propos').get(getPagesController.aboutUsPage)
router.route('/contact').get(getPagesController.contactPage)
router.route('/login').get(getPagesController.loginPage)
router.route('/nos-projets').get(getPagesController.projectsPage)
router.route('/domaines-d-expertise').get(getPagesController.expertisePage)
router.route('/nos-evenements').get(getPagesController.eventPage)
router.route('/agritech-et-bio').get(getPagesController.agritechPage)
router.route('/ateliers').get(getPagesController.ateliersPage)
router.route('/blog').get(getPagesController.blogPage)
router.route('/faire-un-don').get(getPagesController.donationPage)
router.route('/blog/post').get(getBlogPost.blogPost)
router.route('/nos-equipements').get(getEquipmentsController.getEquipments)
router.route('/soumettre-un-projet').get(getPagesController.submissionProjet)
router.route('/inscription-evenement').get(getPagesController.registrationEvent)
router.route('/inscription-atelier').get(getPagesController.registrationWorkshop)
router.route('/reservation-equipement').get(getPagesController.bookingEquipment)
router.route('/recuperation-mot-de-pass').get(getPagesController.passwordForgot)
router.route('/nouveau-mot-de-pass').get(getPagesController.newPassword)
router.route('/nos-projets').get(getPagesController.projectsPage)
router.route('/nos-projets/q').get(getPagesController.singleProject)


export default router