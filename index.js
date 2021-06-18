var express 		= require('express')
var Router 			= require('./routes/router')
var authMiddleware 	= require('./middlewares/auth')
var serv			= express()

// console.log(Router);

serv.use(express.urlencoded({extended:true}))
serv.use(express.json())


serv.use(Router.public);
serv.use(authMiddleware, Router.private);


app.listen(3000, function(){
	console.log("server started in port 3000");
})