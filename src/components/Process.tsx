"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PackageSearch,
  PackageCheck,
  Tag,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "접수",
    description: "온라인 접수 및 물류 상담",
    detail: "웹/앱을 통한 간편 접수",
  },
  {
    icon: PackageSearch,
    title: "입고·검수",
    description: "상품 입고 및 품질 검수",
    detail: "사진 촬영·수량 확인",
  },
  {
    icon: PackageCheck,
    title: "포장",
    description: "안전 재포장 처리",
    detail: "국제 배송 최적화 포장",
  },
  {
    icon: Tag,
    title: "라벨링",
    description: "국제 라벨 부착",
    detail: "국가별 규격 라벨 처리",
  },
  {
    icon: Truck,
    title: "출고·배송",
    description: "전 세계 배송 출고",
    detail: "실시간 배송 추적 제공",
  },
];

export default function Process() {
  return (
    <section id="process" className="min-h-screen flex items-center bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-5">
            물류 처리 프로세스
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            접수부터 배송까지, 체계적인 5단계 프로세스로 안전하고 빠르게
            처리합니다.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center relative z-10 group">
                  {/* Step Number */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #F97316, #EA580C)",
                    }}
                  >
                    {index + 1}
                  </div>

                  <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5 mt-2 group-hover:bg-orange-100 transition-colors">
                    <step.icon className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-2">
                    {step.description}
                  </p>
                  <p className="text-orange-500 text-xs font-medium">
                    {step.detail}
                  </p>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <svg
                      className="w-6 h-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
