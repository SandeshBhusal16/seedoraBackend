const authctrl = require("../Src/controller/auth.controller");
//const contactCtrl = require("../src/controller/contact.controller");
const AuthCheck = require("../rbac/authcheck");

const AuthRoutes = require("express").Router();

AuthRoutes.post("/login", authctrl.login);
AuthRoutes.post("/register", authctrl.register);
AuthRoutes.get("/me", AuthCheck);
AuthRoutes.put("/updatepass/:id", authctrl.changePassword);
AuthRoutes.get("/user/:id", authctrl.userDetails);

// AuthRoutes.post ("/contact", contactCtrl.contact);

module.exports = AuthRoutes;