export const ExperienceTimeline = () => {
  const experiences = [
    {
      id: "vttech",
      period: "2025 - Hiện tại",
      role: ".FULL STACK Developer",
      organization: "VTTECH SOLUTION Co., Ltd",
      theme: {
        dotBg: "bg-[#0077b6]",
        dotBorder:
          "border-4 border-white shadow-[0_0_0_3px_rgba(0,119,182,0.2)]",
        badgeBg: "bg-[#e3f2fd]",
        badgeText: "text-[#0077b6]",
      },
      descriptions: [
        <>
          Bảo trì và tối ưu hóa hiệu năng cho hệ thống <strong>CRM/ERP</strong>{" "}
          (Web & App), tập trung vào các module cốt lõi: Đặt lịch, Quản lý kho
          vận, Hồ sơ khách hàng và Báo cáo doanh thu.
        </>,
        <>
          Xây dựng hệ thống tích hợp dữ liệu đồng bộ (Data Synchronization) với
          phần mềm kế toán <strong>MISA AMIS</strong> và đa nền tảng Hóa đơn
          điện tử (MeInvoice, VNPT, BKAV, EasyInvoice...).
        </>,
        <>
          Phát triển <strong>AI Chatbot</strong> hỗ trợ CSKH trên Mobile App với
          kiến trúc <strong>RAG</strong> (Azure AI Foundry, AI Search). Tối ưu
          hóa chiến lược truy xuất dữ liệu và Prompt Engineering để giảm thiểu
          lượng Token tiêu thụ, giúp{" "}
          <strong>tiết kiệm tối đa chi phí sử dụng dịch vụ AI</strong>.
        </>,
        <>
          Tích hợp tổng đài ảo <strong>Pitel Call Center</strong> (VoIP) vào ứng
          dụng, cho phép thực hiện cuộc gọi trực tiếp và quản lý lịch sử tương
          tác khách hàng ngay trên hệ thống.
        </>,
        <>
          Tham gia phát triển hệ sinh thái ứng dụng đa nền tảng (
          <strong>React Native</strong>) bao gồm:{" "}
          <strong>Management App</strong> (dành cho quản trị viên/nhân viên) và{" "}
          <strong>Customer App</strong> (dành cho khách hàng cuối).
        </>,
        <>
          Xây dựng cơ chế <strong>đồng bộ dữ liệu</strong> (Data
          Synchronization) tự động giữa các phân hệ phần mềm khác nhau, đảm bảo
          tính nhất quán và toàn vẹn của dữ liệu hệ thống.
        </>,
      ],
    },
    {
      id: "fascon",
      period: "04/2024 - 11/2025",
      role: "AI Developer Intern",
      organization: "FASCON Co., Ltd",
      theme: {
        dotBg: "bg-white",
        dotBorder: "border-4 border-[#0077b6]",
        badgeBg: "bg-[#e3f2fd]",
        badgeText: "text-[#0077b6]",
      },
      descriptions: [
        <>
          Xây dựng module xử lý luồng video thời gian thực (Real-time Streaming)
          từ Camera IP thông qua giao thức <strong>RTSP</strong>.
        </>,
        <>
          Triển khai và tối ưu hóa model <strong>InsightFace</strong>, nâng cao
          tốc độ và độ chính xác cho hệ thống nhận diện khuôn mặt.
        </>,
        <>
          Phát triển <strong>RESTful API</strong> xử lý AI bằng{" "}
          <strong>Python (Flask)</strong> và thiết kế cơ sở dữ liệu lưu trữ lịch
          sử ra vào với <strong>MySQL</strong>.
        </>,
        <>
          Xây dựng Dashboard quản lý tập trung trên nền tảng{" "}
          <strong>.NET</strong>, tích hợp cơ chế đồng bộ dữ liệu thời gian thực
          từ AI Server.
        </>,
      ],
    },
    {
      id: "sgu",
      period: "2022 - 2025",
      role: "Cử nhân Công nghệ Thông tin",
      organization: "Đại học Sài Gòn (SGU)",
      theme: {
        dotBg: "bg-[#e9ecef]",
        dotBorder: "border-4 border-white",
        badgeBg: "bg-[#f8f9fa]",
        badgeText: "text-slate-500",
      },
      highlight: "🎓 Tốt nghiệp loại Giỏi (Distinction)",
      descriptions: [
        <>
          Nắm vững tư duy Lập trình hướng đối tượng (<strong>OOP</strong>) và
          thiết kế Cơ sở dữ liệu đa dạng: <strong>RDBMS</strong> (MySQL,
          PostgreSQL) và <strong>NoSQL</strong> (MongoDB).
        </>,
        <>
          Phát triển các ứng dụng Web Back-end với kiến trúc{" "}
          <strong>MVC</strong>, <strong>Microservice</strong> sử dụng ngôn ngữ{" "}
          <strong>Java</strong>, <strong>.NET</strong>, <strong>Python</strong>.
        </>,
        <>
          Nghiên cứu khoa học và tiếp cận các nền tảng{" "}
          <strong>Trí tuệ nhân tạo (AI)</strong>, đặt nền móng cho định hướng
          phát triển AI Developer chuyên nghiệp.
        </>,
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-300 mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-[#0077b6] text-[2.5rem] mb-2.5 font-serif font-bold">
            Hành trình & Kinh nghiệm
          </h2>
          <p className="text-gray-500">Quá trình học tập và làm việc của tôi</p>
        </div>

        <div className="pl-12.25">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative mb-12.5 last:mb-0">
              <div
                className={`absolute -left-12.25 top-0 w-5 h-5 rounded-full ${exp.theme.dotBg} ${exp.theme.dotBorder}`}
              ></div>

              <div className="bg-white p-6.25 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-[#f0f0f0]">
                <span
                  className={`inline-block px-3 py-1.5 rounded-full text-[0.85rem] font-bold mb-2.5 ${exp.theme.badgeBg} ${exp.theme.badgeText}`}
                >
                  {exp.period}
                </span>

                <h3 className="m-0 mb-1 text-slate-800 text-[1.3rem] uppercase font-bold">
                  {exp.role}
                </h3>
                <h4 className="m-0 mb-3.75 text-[#0077b6] text-[1rem] font-bold">
                  {exp.organization}
                </h4>

                <ul className="pl-5 text-gray-500 m-0 list-disc">
                  {exp.highlight && (
                    <li className="mb-3.75 list-none relative -left-5">
                      <div className="bg-[#fff3cd] text-[#856404] px-3.75 py-2 rounded-lg inline-block font-bold border-l-4 border-[#ffc107]">
                        {exp.highlight}
                      </div>
                    </li>
                  )}

                  {exp.descriptions.map((desc, index) => (
                    <li key={index} className="mb-2.5">
                      <p className="m-0 leading-[1.6]">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
