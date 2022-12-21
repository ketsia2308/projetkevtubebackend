const User = require("../Models/Users");

const createUser = async (req, res) => {
  const { rV, uT, cu, hK } = req.body;
  if (!rV || !uT || !cu || !hK)
    return res.status(400).send("Tous les champs sont réquis");
  try {
    const verification = await User.findOne({
      email:cu
    })
    if (verification) return res.send(verification);
    User.create({
      first_name: uT,
      last_name: rV,
      email: cu,
      profile: hK,
    })
      .then((value) => res.status(201).send(value))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
    console.log("dlugflaeuolaeu");
  } catch (error) {
    return res.status(500, error);
  }
};
const getUser = async (req, res) => {
  const { email } = req.params;
  try {
    const response = await User.findOne({
      email,
    });
    if (!response) return res.sendStatus(404);
    res.send(response);
  } catch (error) {
    console.log("erro");
    return undefined;
  }
};

module.exports = { createUser, getUser };
