"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contact.alert"));
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
              {t("contact.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              {t("contact.title1")}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FB923C, #FBBF24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("contact.title2")}
              </span>
              {t("contact.title3")}
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: t("contact.phone"),
                  value: "1588-2092",
                  sub: t("contact.phone.sub"),
                },
                {
                  icon: Mail,
                  label: t("contact.email"),
                  value: "dilifox1@gmail.com",
                  sub: t("contact.email.sub"),
                },
                {
                  icon: MapPin,
                  label: t("contact.location"),
                  value: t("contact.location.sub"),
                  sub: t("contact.location.sub"),
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.2)" }}
                  >
                    <info.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{info.label}</p>
                    <p className="text-orange-400 font-medium">{info.value}</p>
                    <p className="text-slate-400 text-sm">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-2xl w-full"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {t("contact.formTitle")}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t("contact.emailLabel")}
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t("contact.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("contact.phonePlaceholder")}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t("contact.serviceLabel")}
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-slate-600"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">{t("contact.servicePlaceholder")}</option>
                    <option value="air">{t("service.air.title")}</option>
                    <option value="3pl">{t("service.3pl.title")}</option>
                    <option value="sales">{t("service.sales.title")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                }}
              >
                <Send className="w-5 h-5" />
                {t("contact.submit")}
              </button>

              <p className="text-slate-400 text-xs text-center mt-4">
                {t("contact.notice")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
