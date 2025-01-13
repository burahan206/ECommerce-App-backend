import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRayzorpay, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Feature
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/rayzorpay',authUser,placeOrderRayzorpay)

// User feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter