import express from 'express';
import routes from './routes/healthRoute.js';
import cors from "cors";

const app = express();
app.use(cors({

  origin:'https://www.satishvaishnav.in/'
}
))
const corsOptions = {
  origin: process.env.ACCESS_CONTROL_ORIGIN,
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.options('*', cors());
app.use('/', routes);

// routes
import healthRouter from "./routes/healthRoute.js"
import contactRoute from "./routes/contactRoute.js"

app.use("/", healthRouter)
app.use("/contact", contactRoute)

app.get("/contact",(req,res)=>{
  res.get("Hello contact")
})

export default app;