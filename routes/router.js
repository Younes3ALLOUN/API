var privateR 	= require("express").Router()
var publicR 	= require("express").Router()

require('./user')(privateR)

// auth router
require('./auth')(publicR)

module.exports ={
	private: privateR,
	public: publicR
}