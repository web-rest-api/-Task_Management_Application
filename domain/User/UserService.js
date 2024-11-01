const axios = require("axios")
const User = require("./User")
require("dotenv").config() // Load environment variables

class UserService {
	constructor() {
		this.apiUrl = process.env.USER_SERVICE_URI // json-server URL for users
	}

	// Create a new user (signUp)
	async createUser(userName, email) {
		const newTask = new User(userName, email)
		const response = await axios.post(this.apiUrl, newTask)
		return response.data
	}

	// Method to create a new category
	createCategory(id, name) {
		const category = new Category(id, name)
		this.categories.set(id, category)
		return category
	}

	// Method to add a task to a category
	addTaskToCategory(categoryId, taskId) {
		const category = this.categories.get(categoryId)
		if (category) {
			category.addTask(taskId)
		}
	}
}

module.exports = UserService
