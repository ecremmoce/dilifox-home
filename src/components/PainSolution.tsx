"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  TruckIcon,
  FileWarning,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PainSolution() {
  const { t } = useLanguage();

  const pains = [
    { icon: AlertTriangle, text: t("pain.1") },
    { icon: Clock, text: t("pain.2") },
    { icon: TruckIcon, text: t("pain.3") },
    { icon: FileWarning, text: t("pain.4") },
    { icon: ShieldAlert, text: t("pain.5") },
  ];

  const solutions = [
    {
      step: "STEP 01",
      title: t("pain.sol1.title"),
      description: t("pain.sol1.desc"),
    },
    {
      step: "STEP 02",
      title: t("pain.sol2.title"),
      description: t("pain.sol2.desc"),
    },
    {
      step: "STEP 03",
      title: t("pain.sol3.title"),
      description: t("pain.sol3.desc"),
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            {t("pain.sectionLabel")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-5">
            {t("pain.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </span>
              {t("pain.painTitle")}
            </h3>
            <div className="space-y-4">
              {pains.map((pain, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-red-50/50 border border-red-100 rounded-xl px-5 py-4 group hover:bg-red-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <pain.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    {pain.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </span>
              {t("pain.solTitle")}
            </h3>
            <div className="space-y-6">
              {solutions.map((sol, index) => (
                <motion.div
                  key={sol.step}
                  className="relative bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-6 group hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <span className="text-orange-500 text-sm font-bold tracking-wider">
                    {sol.step}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                    {sol.title}
                  </h4>
                  <p className="text-slate-500">{sol.description}</p>

                  {index < solutions.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-orange-400 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
