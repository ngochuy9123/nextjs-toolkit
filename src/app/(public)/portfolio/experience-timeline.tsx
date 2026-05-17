export const ExperienceTimeline = () => {
  // Trích xuất dữ liệu tĩnh kết hợp JSX (Data-Driven UI Pattern)
  const experiences = [
    {
      id: "vttech",
      period: "2025 - Hiện tại",
      role: ".NET & React Native Developer",
      organization: "VTTECH SOLUTION",
      theme: {
        badgeBg: "bg-[#e3f2fd]",
        badgeText: "text-[#0077b6]",
        dotBorder: "border-[#0077b6]",
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
        badgeBg: "bg-slate-100",
        badgeText: "text-[#0077b6]",
        dotBorder: "border-[#0077b6]",
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
        badgeBg: "bg-slate-100",
        badgeText: "text-slate-600",
        dotBorder: "border-slate-300",
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
      <div className="max-w-4xl mx-auto px-5">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0077b6] mb-3 font-serif">
            Hành trình & Kinh nghiệm
          </h2>
          <p className="text-slate-500 font-medium">
            Quá trình học tập và làm việc của tôi
          </p>
        </div>

        {/* Khung trục thời gian dọc */}
        <div className="relative border-l-2 border-slate-100 ml-3 md:ml-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 md:pl-12 mb-12 last:mb-0 group"
            >
              {/* Điểm neo trục thời gian (Timeline Node) */}
              <div
                className={`absolute left-2.75 top-1 w-5 h-5 rounded-full bg-white border-4 shadow-sm transition-colors duration-300 group-hover:border-[#0077b6] ${exp.theme.dotBorder}`}
              ></div>

              {/* Thẻ nội dung (Content Card) */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 transition-shadow duration-300 hover:shadow-md">
                {/* Thời gian */}
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${exp.theme.badgeBg} ${exp.theme.badgeText}`}
                >
                  {exp.period}
                </span>

                {/* Chức danh & Tổ chức */}
                <h3 className="text-xl font-bold text-slate-800 uppercase mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-bold text-[#0077b6] mb-6">
                  {exp.organization}
                </h4>

                {/* Highlight đặc biệt (Dành cho SGU) */}
                {exp.highlight && (
                  <div className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg border-l-4 border-yellow-400 font-bold mb-6 inline-block">
                    {exp.highlight}
                  </div>
                )}

                {/* Danh sách công việc */}
                <ul className="space-y-3 text-slate-600 m-0 p-0 list-none">
                  {exp.descriptions.map((desc, index) => (
                    <li
                      key={index}
                      className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-slate-400 before:font-bold"
                    >
                      {desc}
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
