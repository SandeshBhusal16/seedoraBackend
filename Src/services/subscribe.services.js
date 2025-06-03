const SubscribeModel = require("../model/subscribe.model");
const Joi = require("joi");

class SubscribeService {
  subscribeValidation = async (data) => {
    try {
      const rules = Joi.object({
        email: Joi.string().email().required(),
      });

      const response = await rules.validateAsync(data);
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  createSubscription = async (data) => {
    try {
      const response = new SubscribeModel(data);
      return await response.save();
    } catch (exception) {
      throw exception;
    }
  };

  getAllSubscriptions = async () => {
    try {
      const response = await SubscribeModel.find();
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  getSubscriptionById = async (id) => {
    try {
      const response = await SubscribeModel.findById(id);
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  updateSubscription = async (id, data) => {
    try {
      const response = await SubscribeModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  deleteSubscription = async (id) => {
    try {
      const response = await SubscribeModel.findByIdAndDelete(id);
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const subscribeSrv = new SubscribeService();
module.exports = subscribeSrv;
