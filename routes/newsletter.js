import express from 'express' 
import newsletter from '../controllers/newsletter.js'

const router = express.Router()

router.post("/newsletter", newsletter.registerNewsletter)

export default router
