const bookCallSrv = require("../services/bookcall.service");

class BookCallController {
  createBookCall = async (req, res, next) => {
    try {
      const validated = await bookCallSrv.validateBookCall(req.body);
      const result = await bookCallSrv.createBookCall(validated);
      res.json({ data: result, msg: "Call booked successfully." });
    } catch (err) {
      next({ msg: err.message });
    }
  };

  getAllCalls = async (req, res, next) => {
    try {
      const result = await bookCallSrv.getAllCalls();
      res.json({ data: result, msg: "All calls fetched successfully." });
    } catch (err) {
      next({ msg: err.message });
    }
  };

  getCallById = async (req, res, next) => {
    try {
      const result = await bookCallSrv.getCallById(req.params.id);
      res.json({ data: result, msg: "Call detail fetched." });
    } catch (err) {
      next({ msg: err.message });
    }
  };

  deleteCall = async (req, res, next) => {
    try {
      const result = await bookCallSrv.deleteCall(req.params.id);
      res.json({ data: result, msg: "Call deleted successfully." });
    } catch (err) {
      next({ msg: err.message });
    }
  };
}

module.exports = new BookCallController();