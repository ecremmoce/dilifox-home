"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
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
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              지금 바로
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FB923C, #FBBF24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                무료 상담
              </span>
              을 시작하세요
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              물류 전문가가 비즈니스에 최적화된 솔루션을 무료로 제안해
              드립니다. 부담 없이 문의해 주세요.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "전화 문의",
                  value: "1588-2092",
                  sub: "평일 09:00 ~ 18:00",
                },
                {
                  icon: Mail,
                  label: "이메일",
                  value: "contact@dilifox.com",
                  sub: "24시간 접수 가능",
                },
                {
                  icon: MapPin,
                  label: "본사 위치",
                  value: "서울특별시 강남구",
                  sub: "물류센터: 경기도 이천시",
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
                무료 상담 신청
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
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
                      이메일
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
                      연락처
                    </label>
                    <input
                      type="tel"
                      placeholder="010-0000-0000"
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
                    관심 서비스
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-slate-600"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">서비스를 선택해주세요</option>
                    <option value="항공특송">항공특송</option>
                    <option value="3PL">3PL 풀필먼트</option>
                    <option value="상품공급">상품공급·판매</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    문의 내용
                  </label>
                  <textarea
                    rows={4}
                    placeholder="문의하실 내용을 자유롭게 적어주세요."
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
                무료 상담 신청하기
              </button>

              <p className="text-slate-400 text-xs text-center mt-4">
                영업일 기준 24시간 이내 답변을 드립니다.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
