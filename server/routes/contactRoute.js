import { Router } from "express";
import Contact from "../models/contactModel.js"

const router = Router();
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body)
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

export default router;
