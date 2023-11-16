import express from 'express'
import equipementBooking from '../controllers/equipement-booking.js'

const router = express.Router()

router.post("/equipment-booking", equipementBooking.equipementBooking)

export default router
