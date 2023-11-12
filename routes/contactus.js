import express from 'express' 
import contactus from '../controllers/contactus.js'

const router = express.Router()

router.post("/contact", contactus.registerNewMessage)

export default router
