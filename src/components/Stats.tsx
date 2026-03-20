"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "년+", label: "물류 업력", description: "축적된 전문성" },
  { value: 160, suffix: "만건+", label: "누적 배송", description: "검증된 실적" },
  { value: 30, suffix: "개국+", label: "배송 국가", description: "글로벌 네트워크" },
  { value: 99.2, suffix: "%", label: "정시 배송률", description: "신뢰의 기준" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(0, value, {
            duration: 2,
            onUpdate: (latest) => {
              if (value % 1 !== 0) {
                setDisplay(latest.toFixed(1));
              } else {
                setDisplay(Math.floor(latest).toString());
              }
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      />
      <div className="stats-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            숫자로 증명하는 신뢰
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            오랜 경험과 실적으로 쌓아온 글로벌 물류 네트워크
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-400 mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white font-semibold text-xl mb-1">
                {stat.label}
              </p>
              <p className="text-slate-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
