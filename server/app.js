import express from "express";
import cors from "cors";
import healthRouter from "./routes/healthRoute.js";
import contactRoute from "./routes/contactRoute.js";

const app = express();

app.use(cors({
  origin:'https://www.satishvaishnav.in/'
}))
// ✅ Set CORS Configuration
const corsOptions = {
  origin: "https://www.satishvaishnav.in", // Allow frontend domain
  credentials: true, // Allow cookies, authorization headers
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  optionsSuccessStatus: 200 // Preflight request success status
};

// ✅ Apply CORS Middleware (Only Once)
app.use(cors(corsOptions));

// ✅ Handle Preflight Requests
app.options("*", cors(corsOptions)); // Handles preflight requests properly

// ✅ Middleware for Parsing Request Body
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// ✅ Define Routes
app.use("/", healthRouter);
app.use("/contact", contactRoute);

// ✅ Test Route to Check Server is Running
app.get("/contact", (req, res) => {
  res.send("CORS is working properly!");
});

export default app;
