const AuthRoutes= require ("./auth.routes");
const BookCallRoutes = require("./bookcall.routes");
const ContactRoutes = require ("./contact.routes");
const SubscribeRoutes = require("./subscribe.routes");


const Routes = require("express").Router();

Routes.use('/auth' , AuthRoutes);
Routes.use ('/contact' , ContactRoutes);
Routes.use ('/subscribe' , SubscribeRoutes);
Routes.use ('/bookcall' ,BookCallRoutes);


module.exports = Routes; 