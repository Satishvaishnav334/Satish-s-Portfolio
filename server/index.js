import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import cors from 'cors'

const port = process.env.PORT || 8000;
dotenv.config({ path: './.env' });
app.use(cors({
  origin:'https://www.satishvaishnav.in'
}))
connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch((error) => {
  console.log("MongoDB connection failed: ", error);
});