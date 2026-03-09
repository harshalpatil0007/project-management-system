const Project = require("../models/Project");

// CREATE PROJECT

exports.createProject = async (req,res)=>{

try{

const {projectName,description} = req.body

const project = new Project({
projectName,
description,
createdBy: null
})

await project.save()

res.json({
message:"Project created successfully",
project
})

}catch(error){

res.status(500).json({message:error.message})

}

}


// GET PROJECTS

exports.getProjects = async (req,res)=>{

try{

const projects = await Project.find()

res.json(projects)

}catch(error){

res.status(500).json({message:error.message})

}

}