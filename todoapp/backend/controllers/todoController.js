const { response } = require('express')
const todoModel = require('../models/todoModel')

module.exports.gettodo = async(req,res)=>{
    const todo=await todoModel.find()
    res.send(todo)
    }
    module.exports.savetodo = async(req,res)=>{
        const {text} = req.body
        todoModel
        .create({text})
        .then((data)=>{
            console.log("Added Successfully.....");
            console.log(data);
            res.send(data)
        })

    }

    module.exports.updatetodo = async(req,res)=>{
        const{_id, text} = req.body
        todoModel.findByIdAndUpdate(_id, {text})
        .then(()=> res.send("Updated Successfully...."))
        .catch((err)=>console.log(err))
    }
    module.exports.deletetodo = async(req,res)=>{
        const{_id } = req.body
        todoModel.findByIdAndDelete(_id)
        .then(()=> res.send(" Deleted Successfully...."))
        .catch((err)=>console.log(err))
    }