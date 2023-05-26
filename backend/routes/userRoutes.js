import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userCOntroller.js'

router.post('/login', authUser)

export default router
