"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plane, Warehouse, ShoppingBag, Radio } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Plane,
      label: t("hero.airExpress"),
      href: "#service-air",
    },
    {
      icon: Warehouse,
      label: t("hero.fulfillment"),
      href: "#service-3pl",
    },
    {
      icon: ShoppingBag,
      label: t("hero.supply"),
      href: "#service-sales",
    },
    {
      icon: Radio,
      label: t("hero.livePacking"),
      href: "#service-live",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      />
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.7) 0%, rgba(15,23,42,0.6) 50%, rgba(2,6,23,0.85) 100%)",
        }}
      />

      {/* Particle Effect */}
      <div className="absolute inset-0 z-[1]">
        <ParticleCanvas />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pt-20 pointer-events-none">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {t("hero.title")}
        </motion.h1>

        {/* Brand Name */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span
            className="text-5xl sm:text-6xl lg:text-8xl font-black"
            style={{
              background: "linear-gradient(135deg, #FB923C 0%, #F97316 50%, #EA580C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            dilifox.com
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {t("hero.subtitle1")}
          <br />
          {t("hero.subtitle2")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mb-16 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:scale-105"
          >
            {t("hero.cta")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Service Icons - send4u style */}
        <motion.div
          className="flex justify-center gap-8 sm:gap-16 lg:gap-20 pointer-events-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              className="flex flex-col items-center gap-3 group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: "rgba(249, 115, 22, 0.4)",
                  background: "rgba(249, 115, 22, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <service.icon
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-colors"
                  style={{ color: "#FB923C" }}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-white font-bold text-sm sm:text-base lg:text-lg whitespace-pre-line text-center">
                {service.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-orange-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
