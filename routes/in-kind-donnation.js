import express from 'express'
import inKindDonnation from '../controllers/in-kind-donnation.js'

const router = express.Router()

router.post("/in-kind-donnation", inKindDonnation.registerNewDonnation)

export default router
