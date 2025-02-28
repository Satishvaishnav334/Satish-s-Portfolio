import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const connectDB =async ()=>{
    try{
        const connectionString = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`${connectionString.connection.host}`)
    }
    catch(error){
        console.log(error)
    }
}
dotenv.config(); // Load environment variables

const app = express();
app.use(
  cors({
    origin:process.env.FRONTEND_URI
  })
)
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define Mongoose Schema
const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', ContactSchema);

// Contact Route
const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ success: true, message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Error saving message' });
  }
});

// API Health Check
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', router);

app.get('/test',(req,res)=>{
  res.send("HAre Krishna")
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
