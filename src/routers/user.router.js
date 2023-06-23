import { Router } from 'express'
import { userModel } from '../models/user.model.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.json({ status: 'success', payload: users })
    } catch(err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

router.post('/', async (req, res) => {
    const user = req.body
    try {
        const result = await userModel.create(user)
        res.json({ status: 'success', payload: result })
    } catch(err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

export default router