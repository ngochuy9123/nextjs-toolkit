export const AchievementsSection = () => {
  // 1. Cấu trúc dữ liệu Năng lực ngoại ngữ
  const languages = [
    {
      id: "eng",
      code: "EN",
      title: "TOEIC Certificate",
      provider: "IIG Vietnam",
      score: "850+",
      label: "Score",
      theme: { bg: "bg-blue-50", text: "text-[#0077b6]" },
    },
    {
      id: "jap",
      code: "JP",
      title: "Japanese JLPT",
      provider: "Japan Foundation",
      score: "N2",
      label: "Level",
      theme: { bg: "bg-red-50", text: "text-red-600" },
    },
  ];

  // 2. Cấu trúc dữ liệu Thành tích học tập
  const awards = [
    {
      id: "scholarship",
      title: "Học bổng khuyến khích học tập",
      year: "2023 - 2024",
      description: "Đạt loại Giỏi 2 kỳ liên tiếp tại ĐH XYZ",
      borderColor: "border-yellow-400",
    },
    {
      id: "olympic",
      title: "Giải Nhì Olympic Tin học",
      year: "2022",
      description: "Cấp trường - Bảng không chuyên",
      borderColor: "border-slate-300",
    },
    {
      id: "sv5t",
      title: "Sinh viên 5 tốt",
      year: "2023",
      description: "Cấp khoa CNTT",
      borderColor: "border-[#0077b6]",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5">
        {/* Tiêu đề Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0077b6] mb-3 font-serif">
            Chứng chỉ & Giải thưởng
          </h2>
          <p className="text-slate-500 font-medium">Những cột mốc đáng nhớ</p>
        </div>

        {/* Khung lưới 2 chiều (2D Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* CỘT 1: Ngoại ngữ */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 pl-4 border-l-4 border-[#0077b6]">
              Năng lực ngoại ngữ
            </h3>

            <div className="space-y-5">
              {languages.map((lang) => (
                <div
                  key={lang.id}
                  className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${lang.theme.bg} ${lang.theme.text}`}
                    >
                      {lang.code}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 m-0">
                        {lang.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-1 m-0">
                        {lang.provider}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`block text-2xl font-bold ${lang.theme.text}`}
                    >
                      {lang.score}
                    </span>
                    <span className="text-xs text-slate-400">{lang.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CỘT 2: Thành tích học tập */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 pl-4 border-l-4 border-[#0077b6]">
              Thành tích học tập
            </h3>

            <ul className="space-y-4 m-0 p-0 list-none">
              {awards.map((award) => (
                <li
                  key={award.id}
                  className={`bg-white p-5 rounded-lg border-l-4 shadow-sm transition-transform hover:-translate-y-1 ${award.borderColor}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-slate-800">{award.title}</strong>
                    <span className="text-sm text-slate-500 shrink-0 ml-4">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 m-0">
                    {award.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
