"use client";

import { motion } from "framer-motion";
import { Plane, Warehouse, ShoppingBag, Globe, Truck, Radio, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    anchor: "service-air",
    icon: Plane,
    label: "AIR EXPRESS",
    title: "항공특송",
    subtitle: "긴급 배송이 필요할 때,\n3~5일 내 전 세계 어디든 배송합니다.",
    steps: ["상품 접수", "검수·포장", "항공편 탑재", "현지 통관", "고객 배송 (3~5일)"],
    features: [
      "3~5일 초고속 배송",
      "미국·중국·동남아 3대 노선",
      "B2B / B2C 통합 지원",
      "실시간 추적 시스템",
      "통관 서류 대행",
    ],
    image: "/images/service-air-express.jpg",
  },
  {
    id: "02",
    anchor: "service-3pl",
    icon: Warehouse,
    label: "3PL FULFILLMENT",
    title: "3PL 풀필먼트",
    subtitle: "입고부터 출고까지,\n물류의 모든 것을 원스톱으로 처리합니다.",
    steps: ["입고 접수", "품질 검수", "보관·재고관리", "포장·라벨링", "출고·배송"],
    features: [
      "전국 물류센터 네트워크",
      "당일출고 시스템",
      "실시간 재고 관리",
      "해외 배송 연동",
      "맞춤 포장 서비스",
    ],
    image: "/images/service-3pl.jpg",
  },
  {
    id: "03",
    anchor: "service-sales",
    icon: ShoppingBag,
    label: "SUPPLY & SALES",
    title: "상품공급·판매",
    subtitle: "온·오프라인 채널을 통한\n상품 공급부터 라이브 판매까지.",
    steps: ["상품 소싱", "품질 검수", "채널 등록", "판매·마케팅", "배송·CS"],
    features: [
      "온/오프라인 공급·판매",
      "라이브 방송판매 지원",
      "판매 채널 확장 컨설팅",
      "재고 연동 시스템",
      "통합 CS 지원",
    ],
    image: "/images/service-sales.jpg",
  },
];

export default function Services() {
  return (
    <section id="services">
      {services.map((service, index) => (
        <div
          key={service.id}
          id={service.anchor}
          className="relative min-h-screen flex items-center scroll-mt-20 overflow-hidden"
        >
          {/* Fullscreen Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
          {/* Dark Overlay - stronger on right side for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)",
            }}
          />

          {/* Section Number Watermark */}
          <div
            className="absolute left-8 bottom-8 text-[120px] lg:text-[200px] font-black leading-none select-none"
            style={{ color: "rgba(249,115,22,0.1)" }}
          >
            {service.id}
          </div>

          {/* Content - Right Side */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="ml-auto max-w-xl lg:max-w-2xl">
              {/* Label */}
              <motion.span
                className="text-orange-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {service.label}
              </motion.span>

              {/* Title */}
              <motion.h2
                className="text-5xl lg:text-7xl font-black text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {service.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-lg lg:text-xl text-slate-300 mb-8 whitespace-pre-line leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.subtitle}
              </motion.p>

              {/* Process Steps - Horizontal */}
              <motion.div
                className="flex flex-wrap items-center gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {service.steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #F97316, #EA580C)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-white text-sm font-medium">{step}</span>
                    {i < service.steps.length - 1 && (
                      <span className="text-orange-400 text-xs mx-1">→</span>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Features List */}
              <motion.ul
                className="space-y-2 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-slate-200">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #F97316, #EA580C)",
                  }}
                >
                  상담 문의하기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
