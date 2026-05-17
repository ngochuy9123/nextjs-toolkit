export const AboutSection = () => {
  // Trích xuất dữ liệu tĩnh (Data-Driven Pattern)
  const personalInfo = [
    { label: "Ngày sinh", value: "09/12/2003" },
    { label: "Email", value: "ngochuy09123@gmail.com" },
    { label: "Địa chỉ", value: "Ho Chi Minh City" },
  ];

  const coreSkills = [
    "HTML/CSS",
    "Server Management",
    "Android Termux",
    "JavaScript",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Tiêu đề Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Về bản thân tôi
          </h2>
          <p className="text-slate-500 font-medium">
            Lập trình viên & Đam mê công nghệ
          </p>
        </div>

        {/* Cấu trúc Grid 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Cột trái: Lời chào & Nút bấm (Chiếm 3/5 không gian) */}
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold text-slate-800 mb-5">
              Xin chào, tui là{" "}
              <span className="text-[#0077b6]">Nguyễn Huy</span>
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Tui là một sinh viên đam mê lập trình, đặc biệt hứng thú với
                việc biến những chiếc điện thoại Android cũ thành máy chủ server
                mạnh mẽ.
              </p>
              <p>
                Với tư duy tối ưu hóa và sự tò mò, tui luôn tìm cách xây dựng
                các công cụ web hữu ích, hiệu năng cao nhưng tiết kiệm chi phí
                tài nguyên nhất có thể.
              </p>
            </div>

            {/* Nhóm Nút Tương tác */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-[#0077b6] text-white font-semibold rounded-full shadow-[0_4px_15px_rgba(0,119,182,0.3)] hover:bg-[#005f92] hover:shadow-lg transition-all duration-300"
              >
                Liên hệ ngay
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-transparent text-slate-800 font-semibold rounded-full border-2 border-slate-200 hover:border-[#0077b6] hover:text-[#0077b6] transition-all duration-300"
              >
                Tải CV
              </a>
            </div>
          </div>

          {/* Cột phải: Thông tin & Kỹ năng (Chiếm 2/5 không gian) */}
          <div className="md:col-span-2 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            {/* Danh sách thông tin kết xuất từ Mảng */}
            <ul className="mb-8 space-y-4">
              {personalInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-center pb-3 border-b border-dashed border-slate-300 last:border-0 last:pb-0"
                >
                  <strong className="w-24 text-slate-800 shrink-0">
                    {info.label}:
                  </strong>
                  <span className="text-slate-600 truncate">{info.value}</span>
                </li>
              ))}
            </ul>

            {/* Danh sách Kỹ năng */}
            <h4 className="text-lg font-bold text-slate-800 mb-4">
              Kỹ năng chính
            </h4>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-[#0077b6] text-sm font-semibold rounded-lg border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
