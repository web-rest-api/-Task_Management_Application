class User {
	constructor(id, username) {
		this.id = id
		this.username = username
		this.categories = [] // Array of category IDs owned by the user
	}

	// Method to add a category for this user
	addCategory() {}

	// Method to remove a category
	removeCategory() {}
}

module.exports = User
