const express = require("express")
const router = express.Router()

const {
createProject,
getProjects
} = require("../controllers/projectController")

router.post("/create",createProject)

router.get("/all",getProjects)

module.exports = router
const roleMiddleware = require("../middleware/roleMiddleware")

router.post("/create", authMiddleware, roleMiddleware("admin"), createProject)