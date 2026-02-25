import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Review = {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  createdAt: string;
};

const API_BASE = import.meta.env.VITE_API_BASE_URL;
let resolvedApiBase: string | null = API_BASE || null;

const getApiCandidates = () => {
  if (API_BASE) return [API_BASE];
  return [
    "https://upolobdhi-reviews.onrender.com",
    "http://localhost:8000",
    "http://localhost:4000",
    "http://localhost:4001",
    "http://localhost:4002",
    "http://localhost:4003",
    "http://localhost:4004",
  ];
};

const fetchWithApiFallback = async (path: string, init?: RequestInit) => {
  const candidates = resolvedApiBase ? [resolvedApiBase] : getApiCandidates();
  let lastError: unknown;

  for (const base of candidates) {
    try {
      const response = await fetch(`${base}${path}`, init);
      resolvedApiBase = base;
      return response;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Backend is not reachable");
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ReviewsSection = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", rating: 5, comment: "" });

  const average = useMemo(() => {
    if (reviews.length === 0) return 0;
    return reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;
  }, [reviews]);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const res = await fetchWithApiFallback("/api/reviews");
      if (!res.ok) throw new Error("Failed to load reviews");
      const data: Review[] = await res.json();
      setReviews(data);
    } catch {
      toast({ title: "Could not load reviews", description: "Please try again shortly." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const res = await fetchWithApiFallback("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(payload?.message || "Could not submit review");
      }

      setForm({ name: "", email: "", rating: 5, comment: "" });
      toast({ title: "Review posted", description: "Thanks for sharing your feedback." });
      setReviews((prev) => [payload as Review, ...prev]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed";
      toast({ title: "Review not posted", description: message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">Reviews</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Share your experience.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 font-light">
            Anyone can post a review with name, email, and star rating.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            {reviews.length > 0 ? `${average.toFixed(1)} / 5 average from ${reviews.length} reviews` : "No reviews yet"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.form
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={submitReview}
            className="glass-card p-6 space-y-4"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
              className="h-11 rounded-xl"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="h-11 rounded-xl"
            />

            <div>
              <p className="text-sm mb-2 font-medium">Star Rating</p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
                    onClick={() => setForm((prev) => ({ ...prev, rating: value }))}
                    className="p-1"
                  >
                    <Star
                      className={`h-6 w-6 ${value <= form.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Textarea
              placeholder="Write your review"
              value={form.comment}
              onChange={(e) => setForm((prev) => ({ ...prev, comment: e.target.value }))}
              required
              rows={4}
              className="rounded-xl"
            />

            <Button type="submit" disabled={submitting} className="gradient-bg text-primary-foreground w-full rounded-full h-11">
              {submitting ? "Posting..." : "Post Review"}
            </Button>
          </motion.form>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-4">
            {loading ? (
              <div className="glass-card p-6 text-sm text-muted-foreground">Loading reviews...</div>
            ) : reviews.length === 0 ? (
              <div className="glass-card p-6 text-sm text-muted-foreground">Be the first to leave a review.</div>
            ) : (
              reviews.slice(0, 6).map((review) => (
                <div key={review.id} className="glass-card p-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div>
                      <p className="font-medium text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.email}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <Star
                          key={value}
                          className={`h-4 w-4 ${value <= review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
