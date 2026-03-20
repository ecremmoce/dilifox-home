"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "최소 주문 수량이 있나요?",
    answer:
      "항공특송은 최소 수량 제한 없이 1건부터 이용 가능합니다. 3PL 풀필먼트의 경우 월 100건 이상 출고 시 최적의 단가를 제공해 드립니다.",
  },
  {
    question: "배송 소요 시간은 얼마나 되나요?",
    answer:
      "항공특송 기준 미국 3~5일, 중국 2~3일, 동남아 3~5일 내 배송이 완료됩니다. 국내 3PL의 경우 당일출고를 지원합니다.",
  },
  {
    question: "어떤 국가로 배송이 가능한가요?",
    answer:
      "미국, 중국, 일본, 동남아(태국, 베트남, 인도네시아, 말레이시아, 필리핀, 싱가포르) 등 30개국 이상으로 배송이 가능합니다.",
  },
  {
    question: "검수 프로세스는 어떻게 되나요?",
    answer:
      "입고 시 수량 확인 → 외관 검사 → 사진 촬영 → 검수 리포트 발송의 4단계로 진행됩니다. 불량 발견 시 즉시 고객에게 통보됩니다.",
  },
  {
    question: "반품 처리는 어떻게 하나요?",
    answer:
      "해외 반품은 현지 물류센터에서 수거 후 검수 → 재입고 또는 폐기 처리가 가능합니다. 반품 관련 비용은 사전에 안내해 드립니다.",
  },
  {
    question: "비용은 어떻게 산정되나요?",
    answer:
      "무게, 부피, 목적지, 서비스 유형에 따라 달라집니다. 무료 상담을 통해 정확한 견적을 받아보실 수 있습니다.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4 text-lg">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="min-h-screen flex items-center bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-5">
            자주 묻는 질문
          </h2>
          <p className="text-slate-500 text-lg">
            궁금한 점이 있으신가요? 자주 묻는 질문을 확인해 보세요.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-500 mb-4">
            원하는 답변을 찾지 못하셨나요?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors text-lg"
          >
            직접 문의하기 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
