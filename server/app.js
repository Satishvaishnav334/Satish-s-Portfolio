import express from "express";
import cors from "cors";
import healthRouter from "./routes/healthRoute.js";
import contactRoute from "./routes/contactRoute.js";
import dotenv from 'dotenv'
dotenv.config({
  path:'./.env'
})
const app = express();
app.use(cors())
app.use(cors({
  origin:'https://www.satishvaishnav.in' || process.env.ACCESS_CONTROL_ORIGIN || 'http://localhost:5173/',
  credentials:true
}))

const allowedOrigins = [ 'https://www.satishvaishnav.in/'] || [process.env.ACCESS_CONTROL_ORIGIN] ;

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));



// ✅ Middleware for Parsing Request Body
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// ✅ Define Routes
app.use("/", healthRouter);
app.use("/api", contactRoute);

// ✅ Test Route to Check Server is Running
app.get("/contact", (req, res) => {
  console.log(req.body)
  res.send("CORS is working properly!");
});

export default app;
