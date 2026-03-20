"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "김성호",
    role: "이커머스 셀러",
    years: "3년 이용",
    content:
      "Dilifox를 이용한 후 해외 배송 관련 고민이 완전히 해결됐습니다. 미국과 동남아 동시 출고가 가능해지면서 월 매출이 3배 이상 성장했습니다.",
    highlight: "월 매출 3배 성장",
    avatar: "KS",
  },
  {
    name: "이준영",
    role: "브랜드 MD",
    years: "2년 이용",
    content:
      "3PL 풀필먼트 서비스 덕분에 물류 인프라 없이도 전국 당일출고가 가능해졌습니다. 반품률도 80% 이상 감소했고, 고객 만족도가 크게 올랐습니다.",
    highlight: "반품률 80% 감소",
    avatar: "LJ",
  },
  {
    name: "박미선",
    role: "라이브 커머스 사업가",
    years: "1년 이용",
    content:
      "라이브 방송판매와 물류를 한 번에 해결할 수 있어서 정말 편합니다. 방송 후 즉시 출고되니까 고객 만족도가 최고입니다. 강력 추천합니다!",
    highlight: "방송 후 즉시 출고",
    avatar: "PM",
  },
];

export default function Reviews() {
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-5">
            고객이 증명하는 서비스
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Dilifox와 함께 비즈니스를 성장시킨 고객들의 실제 후기입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
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
