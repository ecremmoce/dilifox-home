"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t("reviews.1.name"),
      role: t("reviews.1.role"),
      years: t("reviews.1.years"),
      content: t("reviews.1.content"),
      highlight: t("reviews.1.highlight"),
      avatar: "KS",
    },
    {
      name: t("reviews.2.name"),
      role: t("reviews.2.role"),
      years: t("reviews.2.years"),
      content: t("reviews.2.content"),
      highlight: t("reviews.2.highlight"),
      avatar: "LJ",
    },
    {
      name: t("reviews.3.name"),
      role: t("reviews.3.role"),
      years: t("reviews.3.years"),
      content: t("reviews.3.content"),
      highlight: t("reviews.3.highlight"),
      avatar: "PM",
    },
  ];

  return (
    <section id="reviews" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            {t("reviews.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-5">
            {t("reviews.title")}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-orange-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {review.content}
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                {review.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #F97316, #EA580C)",
                  }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">
                    {review.role} · {review.years}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
