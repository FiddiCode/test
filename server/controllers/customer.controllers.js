import Customer from "../model/customer.model.js";


export const fetchCustomerData =async (req,res)=>{

    try {
        const  customerData =await Customer.find();
        if(customerData.length>0){
            res.status(201).json({
                success:true,
                data:customerData,
                message:"Customer data feched successfully"
            })
        }else{
            res.json({
                success:false,
                message:"Error occured while fetching data"
            })}
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }

};

export const uploadCustomerData=async (req,res)=>{
    try {
        console.log("req.body",req.body);
        const customer=await Customer.create(req.body);
        console.log("customer",customer)
        res.json({
            succes:true,
            data:customer
        })
    } catch (error) {
       res.json({
           succes:false,
           message:error.message
       })
    }
}