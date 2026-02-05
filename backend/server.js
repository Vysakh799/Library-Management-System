import express from 'express';
import cors from 'cors'
import env from 'dotenv'
import routes from './routes/router.js'
const app = express()
env.config()
const PORT=process.env.PORT

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())

app.use('/api',routes)

app.use((err,req,res)=>{
    return res.status(500).json({message:'Internal Server Error'})
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
    
})