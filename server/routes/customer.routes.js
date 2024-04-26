import express from 'express'
import { fetchCustomerData,uploadCustomerData } from '../controllers/customer.controllers.js';

const router=express.Router();


router.route("/").get(fetchCustomerData)
.post(uploadCustomerData);


export default router;


