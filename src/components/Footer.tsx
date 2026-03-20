import { Plane, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  서비스: ["항공특송", "3PL 풀필먼트", "상품공급·판매", "라이브 방송판매"],
  지원: ["FAQ", "이용약관", "개인정보처리방침", "파트너 제휴"],
  회사소개: ["Dilifox 소개", "오시는 길", "채용정보", "블로그"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <img src="/logo.png" alt="Dilifox" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              글로벌 물류의 새로운 기준. 항공특송, 3PL 풀필먼트,
              상품공급·판매까지 원스톱 물류 서비스를 제공합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>1588-2092</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>contact@dilifox.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>서울특별시 강남구</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dilifox. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            평일 09:00 ~ 18:00 | 주말·공휴일 휴무
          </p>
        </div>
      </div>
    </footer>
  );
}
