const express = require("express")
require("dotenv").config() // Load environment variables

const app = express()
const port = process.env.PORT || 3000

const Task = require("./domain/Task/Task.js")
const axios = require("axios")

// Middleware to parse JSON
app.use(express.json())

app.get("/", (req, res) => {
	res.json({
		msg: "Welcome to this Task Management Application 🤳",
	})
})

app.post("/api/tasks", async (req, res) => {
	// Create a new Task instance directly from req.body
	const { title, description, dueDate, priority } = req.body
	const newTask = new Task(title, description, dueDate, priority, false)

	res.status(201).json(newTask)
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
