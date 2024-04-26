import User from '../model/user.model.js'


export const register =async (req,res)=>{
    try {
        
    } catch (error) {
        res.json({
            succes:false,
            message:error.message
        })
    }
};

export const login =async (req,res)=>{
 try {
    
 } catch (error) {
    res.json({
        succes:false,
        message:error.message
    })
 }
};

