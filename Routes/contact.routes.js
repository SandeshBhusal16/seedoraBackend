const contactCtrl = require("../Src/controller/contact.controller");
const ContactRoutes = require("express").Router();

ContactRoutes.post("/createcontact", contactCtrl.createContact);
ContactRoutes.get("/getallcontacts", contactCtrl.getAllContacts);
ContactRoutes.get("/getcontact/:id", contactCtrl.getContactById);
ContactRoutes.put("/updatecontact/:id", contactCtrl.updateContact);
ContactRoutes.delete("/deletecontact/:id", contactCtrl.deleteContact);

module.exports = ContactRoutes;
