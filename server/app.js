import express from "express";
import cors from "cors";
import healthRouter from "./routes/healthRoute.js";
import contactRoute from "./routes/contactRoute.js";

const app = express();



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
