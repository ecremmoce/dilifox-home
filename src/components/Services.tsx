"use client";

import { motion } from "framer-motion";
import { Plane, Warehouse, ShoppingBag, Radio, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "01",
      anchor: "service-air",
      icon: Plane,
      label: t("service.air.label"),
      title: t("service.air.title"),
      subtitle: t("service.air.subtitle"),
      steps: [
        t("service.air.step1"),
        t("service.air.step2"),
        t("service.air.step3"),
        t("service.air.step4"),
        t("service.air.step5"),
      ],
      features: [
        t("service.air.feat1"),
        t("service.air.feat2"),
        t("service.air.feat3"),
        t("service.air.feat4"),
        t("service.air.feat5"),
      ],
      image: "/images/service-air-express.jpg",
    },
    {
      id: "02",
      anchor: "service-3pl",
      icon: Warehouse,
      label: t("service.3pl.label"),
      title: t("service.3pl.title"),
      subtitle: t("service.3pl.subtitle"),
      steps: [
        t("service.3pl.step1"),
        t("service.3pl.step2"),
        t("service.3pl.step3"),
        t("service.3pl.step4"),
        t("service.3pl.step5"),
      ],
      features: [
        t("service.3pl.feat1"),
        t("service.3pl.feat2"),
        t("service.3pl.feat3"),
        t("service.3pl.feat4"),
        t("service.3pl.feat5"),
      ],
      image: "/images/service-3pl.jpg",
    },
    {
      id: "03",
      anchor: "service-sales",
      icon: ShoppingBag,
      label: t("service.sales.label"),
      title: t("service.sales.title"),
      subtitle: t("service.sales.subtitle"),
      steps: [
        t("service.sales.step1"),
        t("service.sales.step2"),
        t("service.sales.step3"),
        t("service.sales.step4"),
        t("service.sales.step5"),
      ],
      features: [
        t("service.sales.feat1"),
        t("service.sales.feat2"),
        t("service.sales.feat3"),
        t("service.sales.feat4"),
        t("service.sales.feat5"),
      ],
      image: "/images/service-sales.jpg",
    },
    {
      id: "04",
      anchor: "service-live",
      icon: Radio,
      label: t("service.live.label"),
      title: t("service.live.title"),
      subtitle: t("service.live.subtitle"),
      steps: [
        t("service.live.step1"),
        t("service.live.step2"),
        t("service.live.step3"),
        t("service.live.step4"),
        t("service.live.step5"),
      ],
      features: [
        t("service.live.feat1"),
        t("service.live.feat2"),
        t("service.live.feat3"),
        t("service.live.feat4"),
        t("service.live.feat5"),
      ],
      image: "/images/service-live.jpg",
    },
  ];

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
                  <div key={i} className="flex items-center gap-2">
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
                      <span className="text-orange-400 text-xs mx-1">&rarr;</span>
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
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-200">
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
                  {t("service.cta")}
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
