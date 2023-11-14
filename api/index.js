import express from "express"
import postsRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/posts', postsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/auth', authRoutes)

app.listen(8800, () => {
    console.log('Connected!');
})