import express from 'express'
import userRouter from './routers/user.router.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

app.use('/users', userRouter)

try {
    await mongoose.connect('mongodb+srv://coder:coder@cluster0.19xxo4x.mongodb.net/clase14')
    app.listen(8080, () => console.log('Server Up!'))
} catch(err) {
    console.log(err.message)
}
