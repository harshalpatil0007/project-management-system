

const express = require("express")
const router = express.Router()

const {
createTask,
getTasks,
updateTaskStatus
} = require("../controllers/taskController")

// Create Task
router.post("/create", createTask)

// Get All Tasks
router.get("/all", getTasks)

// Update Task Status
router.put("/update/:id", updateTaskStatus)

module.exports = router