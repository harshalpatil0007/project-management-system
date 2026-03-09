// REGISTER

const registerForm = document.getElementById("registerForm")

if(registerForm){

registerForm.addEventListener("submit", async(e)=>{

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value
const role = document.getElementById("role").value

const res = await fetch("http://localhost:5000/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password,
role
})

})

const data = await res.json()

alert(data.message)

window.location.href="login.html"

})

}


// LOGIN

const loginForm = document.getElementById("loginForm")

if(loginForm){

loginForm.addEventListener("submit", async(e)=>{

e.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const res = await fetch("http://localhost:5000/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

})

const data = await res.json()

if(data.token){

localStorage.setItem("token",data.token)

/* SAVE USER NAME */

localStorage.setItem("username",data.user.name)

window.location.href="dashboard.html"

}else{

alert(data.message)

}

})

}

async function createTask(){

const taskName = document.getElementById("taskName").value
const description = document.getElementById("description").value
const assignedTo = document.getElementById("assignedTo").value
const projectId = document.getElementById("projectId").value

const res = await fetch("http://localhost:5000/api/tasks/create",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
taskName,
description,
assignedTo,
projectId
})

})

const data = await res.json()

alert(data.message)

}