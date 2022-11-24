const User = require("../Models/Users");

const createUser = async (req, res) => {
  const { rV, uT, cu, hK } = req.body;
  try {
    const userCreated = await User.create({
      first_name: uT,
      last_name: rV,
      email: cu,
      profile: hK,
    });
    
  return res.status(201, "L'utilisateur a été créé").send(userCreated);
  } catch (error) {
    return res.status(500, error);
  }
};

module.exports = { createUser };
