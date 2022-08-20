const express = require("express");

const router = express.Router();

const authorise = require("../middelware/authorise");
const authenticate = require("../middelware/authenticate");

const User = require("../models/userModel");


// to get all users by Admin
router.get("", authenticate, async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

// To edit a particular User using its ID I'll use this. (patch  methd)
router.patch(
  "/:id",
  authenticate,
  authorise(["admin"]), //enam [x,y]
  async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //for the status aftr the updte, optional
      });
      return res.status(200).send(user);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

// To delete a particular User using its ID I'll use this. (delete  methd)
router.delete(
  "/:id",
  authenticate,
  authorise(["admin"]), //enam [x,y]
  async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id, req.body, {
        new: true, //for the status aftr the updte, optional
      });
      return res.status(200).send(user);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

module.exports = router;
