const subscribeCtrl = require("../Src/controller/subscribe.controller");
const SubscribeRoutes = require("express").Router();

SubscribeRoutes.post("/createsubscription", subscribeCtrl.createSubscription);
SubscribeRoutes.get("/getallsubscriptions", subscribeCtrl.getAllSubscriptions);
SubscribeRoutes.get("/getsubscription/:id", subscribeCtrl.getSubscriptionById);
SubscribeRoutes.put("/updatesubscription/:id", subscribeCtrl.updateSubscription);
SubscribeRoutes.delete("/deletesubscription/:id", subscribeCtrl.deleteSubscription);

module.exports = SubscribeRoutes;
