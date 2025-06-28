const BookCallModel = require("../model/bookcall.model");
const Joi = require("joi");

class BookCallService {
  validateBookCall = async (data) => {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        service: Joi.string().required(),
        datetime: Joi.date().required(),
        message: Joi.string().optional(),
      });

      return await schema.validateAsync(data);
    } catch (err) {
      throw err;
    }
  };

  createBookCall = async (data) => {
    try {
      const call = new BookCallModel(data);
      return await call.save();
    } catch (err) {
      throw err;
    }
  };

  getAllCalls = async () => {
    try {
      return await BookCallModel.find().sort({ createdAt: -1 });
    } catch (err) {
      throw err;
    }
  };

  getCallById = async (id) => {
    try {
      return await BookCallModel.findById(id);
    } catch (err) {
      throw err;
    }
  };

  deleteCall = async (id) => {
    try {
      return await BookCallModel.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = new BookCallService();