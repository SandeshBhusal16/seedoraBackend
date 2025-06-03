const subscribeSrv = require("../services/subscribe.services");

class SubscribeController {
  createSubscription = async (req, res, next) => {
    try {
      const validatedData = await subscribeSrv.subscribeValidation(req.body);
      const response = await subscribeSrv.createSubscription(validatedData);
      res.json({ data: response, msg: "Subscribed successfully!" });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  getAllSubscriptions = async (req, res, next) => {
    try {
      const response = await subscribeSrv.getAllSubscriptions();
      res.json({ data: response, msg: "All subscriptions fetched successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  getSubscriptionById = async (req, res, next) => {
    try {
      const response = await subscribeSrv.getSubscriptionById(req.params.id);
      res.json({ data: response, msg: "Subscription fetched successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  updateSubscription = async (req, res, next) => {
    try {
      const response = await subscribeSrv.updateSubscription(req.params.id, req.body);
      res.json({ data: response, msg: "Subscription updated successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  deleteSubscription = async (req, res, next) => {
    try {
      const response = await subscribeSrv.deleteSubscription(req.params.id);
      res.json({ data: response, msg: "Subscription deleted successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };
}

module.exports = new SubscribeController();
