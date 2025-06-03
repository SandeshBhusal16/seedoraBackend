const ContactModel = require("../model/contact.model");
const Joi = require("joi");

class ContactService {
  contactValidation = async (data) => {
    try {
      let rules = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        message: Joi.string().optional(),
      });

      let response = await rules.validateAsync(data);
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  createContact = async (data) => {
    try {
      let response = new ContactModel(data);
      return await response.save();
    } catch (exception) {
      throw exception;
    }
  };

  getAllContacts = async () => {
    try {
      let response = await ContactModel.find();
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  getContactById = async (id) => {
    try {
      let response = await ContactModel.findById(id);
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  updateContact = async (id, data) => {
    try {
      let response = await ContactModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  deleteContact = async (id) => {
    try {
      let response = await ContactModel.findByIdAndDelete(id);
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const contactSrv = new ContactService();
module.exports = contactSrv;
