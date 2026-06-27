import { Star } from "lucide-react";
import { formatDate } from "../../lib/formatters.js";

export function ProductReviews({ reviews }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-black text-ink">Reviews</h2>
      <div className="grid gap-3">
        {reviews.map((review, index) => (
          <article
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            key={`${review.reviewerEmail}-${index}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-black text-ink">{review.reviewerName}</p>
                <p className="text-sm font-semibold text-slate-500">{review.reviewerEmail}</p>
              </div>
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-black text-amber-700">
                <Star size={14} fill="currentColor" />
                {review.rating} / 5
              </p>
            </div>
            <p className="mt-3 text-slate-700">{review.comment}</p>
            <p className="mt-2 text-sm font-semibold text-slate-500">{formatDate(review.date)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
