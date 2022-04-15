require('dotenv').config()
require('express-async-errors')

// extra security packages
const helmet = require('helmet');
const xss = require('xss-clean')
const cors = require('cors')

const express = require('express')





const app = express()
//before routes
app.use(express.json())
app.use(helmet())
app.use(xss());
app.use(cors({ origin: 'http://10.0.2.2:3000' }))
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')


//Routers
const authRouter = require('./routes/auth')
const productsRouter = require('./routes/products')
const stripeRouter = require('./routes/stripe')
//Routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/products',authenticateUser, productsRouter)
app.use('/api/v1/stripe',stripeRouter)

//middleware after routes
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()
