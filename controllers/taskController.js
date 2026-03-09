const Task = require("../models/Task")

// CREATE TASK

exports.createTask = async (req,res)=>{

try{

const {taskName,description,assignedTo,projectId,deadline} = req.body

const task = new Task({

taskName,
description,
assignedTo,
projectId,
deadline

})

await task.save()

res.json({

message:"Task created successfully",
task

})

}catch(error){

res.status(500).json({message:error.message})

}

}


// GET ALL TASKS

exports.getTasks = async (req,res)=>{

try{

const tasks = await Task.find()
.populate("assignedTo","name email")
.populate("projectId","projectName")

res.json(tasks)

}catch(error){

res.status(500).json({message:error.message})

}

}

exports.updateTaskStatus = async (req,res)=>{

try{

const {status} = req.body

const task = await Task.findByIdAndUpdate(

req.params.id,

{status},

{new:true}

)

res.json({
message:"Task status updated",
task
})

}catch(error){

res.status(500).json({message:error.message})

}

}