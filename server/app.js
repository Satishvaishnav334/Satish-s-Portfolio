import express from "express";
import cors from "cors";
import routes from "./routes/healthRoute.js";
import healthRouter from "./routes/healthRoute.js";
import contactRoute from "./routes/contactRoute.js";

const app = express();

// ✅ Set CORS Configuration (Single Instance)
const corsOptions = {
  origin: "https://www.satishvaishnav.in", // Allow your frontend domain
  credentials: true, // Allow credentials (cookies, authorization headers)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  optionsSuccessStatus: 200, // Send success status for preflight requests
};

// ✅ Apply CORS Middleware (Only Once)
app.use(cors(corsOptions));

// ✅ Handle Preflight Requests (OPTIONS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://www.satishvaishnav.in");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// ✅ Middleware for Parsing Request Body
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// ✅ Define Routes
app.use("/", healthRouter);
app.use("/contact", contactRoute);

// ✅ Fix Route Handler
app.get("/contact", (req, res) => {
  res.send("Hello contact"); // Fixed response
});

export default app;
