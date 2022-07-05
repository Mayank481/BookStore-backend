const user = require("../services/user.service");

module.exports.getAlluser = async (req, res) => {
  const data = await user.alluser(req.body);
  res.send(data);
};

module.exports.loginuser = async (req, res) => {
  const data = await user.logUser(req.body);
  res.send(data);
};
