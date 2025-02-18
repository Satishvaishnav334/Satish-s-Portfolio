require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const cors = require('cors');
app.use(cors({
  origin: 'https://www.satishvaishnav.in', // Replace with your frontend domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials:true
}));
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// API Route to Handle Form Submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
