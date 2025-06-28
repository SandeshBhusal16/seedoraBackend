const bookCallCtrl = require("../Src/controller/bookcall.controller");
const BookCallRoutes = require("express").Router();

BookCallRoutes.post("/createbookcall", bookCallCtrl.createBookCall);
BookCallRoutes.get("/getallbookcalls", bookCallCtrl.getAllCalls);
BookCallRoutes.get("/getbookcall/:id", bookCallCtrl.getCallById);
BookCallRoutes.delete("/deletebookcall/:id", bookCallCtrl.deleteCall);

module.exports = BookCallRoutes;