import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const BASE_PORT = Number(process.env.PORT) || 8000;
const MAX_PORT_ATTEMPTS = 10;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in environment variables.");
  process.exit(1);
}

const allowedOrigins = [
  "https://teamupolobdhi.vercel.app",
  ...(process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
    : []),
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
      if (isLocalhost || allowedOrigins.includes(origin)) return callback(null, true);

      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, trim: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Review = mongoose.model("Review", reviewSchema);

const sanitizeReview = (review) => ({
  id: review._id?.toString() ?? review.id,
  name: review.name,
  email: review.email,
  rating: review.rating,
  comment: review.comment,
  createdAt: review.createdAt,
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/reviews", async (_req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).lean();
    res.json(reviews.map(sanitizeReview));
  } catch {
    res.status(500).json({ message: "Failed to load reviews." });
  }
});

app.post("/api/reviews", async (req, res) => {
  const { name, email, rating, comment } = req.body ?? {};

  const safeName = typeof name === "string" ? name.trim() : "";
  const safeEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  const safeComment = typeof comment === "string" ? comment.trim() : "";
  const safeRating = Number(rating);

  if (!safeName || safeName.length < 2) {
    return res.status(400).json({ message: "Name must be at least 2 characters." });
  }

  if (!isValidEmail(safeEmail)) {
    return res.status(400).json({ message: "Please provide a valid email." });
  }

  if (!Number.isInteger(safeRating) || safeRating < 1 || safeRating > 5) {
    return res.status(400).json({ message: "Rating must be an integer between 1 and 5." });
  }

  if (!safeComment || safeComment.length < 5) {
    return res.status(400).json({ message: "Review must be at least 5 characters." });
  }

  try {
    const newReview = await Review.create({
      name: safeName,
      email: safeEmail,
      rating: safeRating,
      comment: safeComment,
    });

    return res.status(201).json(sanitizeReview(newReview));
  } catch {
    return res.status(500).json({ message: "Could not save review." });
  }
});

const bootstrapDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

const startServer = (port, attempt = 0) => {
  const server = app
    .listen(port, () => {
      console.log(`Reviews backend running on http://localhost:${port}`);
    })
    .on("error", (error) => {
      if (error && error.code === "EADDRINUSE" && attempt < MAX_PORT_ATTEMPTS) {
        const nextPort = port + 1;
        console.warn(`Port ${port} is busy. Retrying on ${nextPort}...`);
        startServer(nextPort, attempt + 1);
        return;
      }

      console.error("Failed to start reviews backend:", error);
      process.exit(1);
    });

  return server;
};

bootstrapDatabase().then(() => startServer(BASE_PORT));
