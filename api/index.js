import express from "express"
import cors from 'cors';  // 引入 cors 中间件
import postsRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000', 'http://144.202.124.215'],  // 允许访问的源
    methods: 'GET,POST,PUT,DELETE,OPTIONS',  // 允许的方法
    allowedHeaders: 'Content-Type,Authorization',  // 允许的请求头
    credentials: true  // 允许携带凭证（如 Cookies）
}));  // 允许所有来源的请求

app.options('*', cors());  // 允许所有来源的 OPTIONS 请求

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/home/brian/uploads");
        // cb(null, "../client/my-react-app/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    res.status(200).json({ filename: file.filename, path: `/uploads/${file.filename}` });
});

app.use('/api/posts', postsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/auth', authRoutes)

app.listen(8800, () => {
    console.log('Connected!');
})