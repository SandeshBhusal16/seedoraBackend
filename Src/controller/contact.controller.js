const contactSrv = require("../services/contact.services");

class ContactController {
  createContact = async (req, res, next) => {
    try {
      const validatedData = await contactSrv.contactValidation(req.body);
      const response = await contactSrv.createContact(validatedData);
      res.json({ data: response, msg: "Message sent successfully!" });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  getAllContacts = async (req, res, next) => {
    try {
      const response = await contactSrv.getAllContacts();
      res.json({ data: response, msg: "All messages fetched successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  getContactById = async (req, res, next) => {
    try {
      const response = await contactSrv.getContactById(req.params.id);
      res.json({ data: response, msg: "Message fetched successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  updateContact = async (req, res, next) => {
    try {
      const response = await contactSrv.updateContact(req.params.id, req.body);
      res.json({ data: response, msg: "Message updated successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  deleteContact = async (req, res, next) => {
    try {
      const response = await contactSrv.deleteContact(req.params.id);
      res.json({ data: response, msg: "Message deleted successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };
}

module.exports = new ContactController();
