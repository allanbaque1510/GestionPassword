import Pass from "../models/Passwords.model.js";

export const getAllPasswords = async(req,res)=>{
    const datos = await Pass.find({
        user_id:req.user.id,
        status:1
    }).populate('user_id','_id username email updatedAt createdAt')
    res.json(datos)
}

export const createPassword = async(req,res)=>{
    const {user,email,password,site,nameApp} = req.body;
    const newData = new Pass({
        user,
        user_id:req.user.id,
        email,
        password,
        nameApp,
        site,
        status:1
    })
    const saveData = await newData.save();
    res.json(saveData)
}

export const getPassword = async(req,res)=>{
    const data = await Pass.findOne({_id:req.params.id, status:1}).populate('user_id','_id username email updatedAt createdAt')
    if(!data) return res.status(400).json({message:'No se encontro contraseña'})
    res.json(data)
}

export const deletePassword = async(req,res)=>{
    const data = await Pass.findOne({_id:req.params.id, status:1})
    if(!data) return res.status(400).json({message:'No se encontro contraseña'})
    await Pass.findByIdAndUpdate(req.params.id,{status:0},{new:true})
    res.sendStatus(204)
}
export const updatePassword = async(req,res)=>{
    const data1 = await Pass.findOne({_id:req.params.id, status:1})
    if(!data1) return res.status(401).json({message:'No se encontro la contraseña'})

    const data = await Pass.findByIdAndUpdate(req.params.id, req.body,{new:true})
    
    if(!data) return res.status(400).json({message:'No se encontro contraseña'})
    res.json(data)
}