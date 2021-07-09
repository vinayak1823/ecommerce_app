import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config()

connectDB()
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on  ${port}`)
)
