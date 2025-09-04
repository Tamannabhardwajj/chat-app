const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Get messages between two users
router.get("/:userId/:receiverId", async (req, res) => {
  try {
    const { userId, receiverId } = req.params;
    const messages = await Message.find({
      $or: [
        { sender: userId, receiver: receiverId },
        { sender: receiverId, receiver: userId },
      ],
    }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Send a new message
router.post("/", async (req, res) => {
  try {
    const { sender, receiver, content } = req.body;
    const message = new Message({ sender, receiver, content });
    await message.save();
    res.json(message);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
