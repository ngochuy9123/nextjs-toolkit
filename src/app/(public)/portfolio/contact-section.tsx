export const ContactSection = () => {
  // Trích xuất dữ liệu thông tin liên hệ kèm Inline SVG (Data-Driven UI Pattern)
  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      value: "ngochuy09123@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      value: "+84 38 586 4045",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      value: "Ho Chi Minh City, VN",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-5">
        {/* Tiêu đề */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[#0077b6] text-[2.5rem] mb-[10px] font-serif font-bold">
            Liên hệ với tôi
          </h2>
          <p className="text-gray-500">
            Sẵn sàng trao đổi về các dự án server & lập trình
          </p>
        </div>

        {/* Khung chứa giao diện kép */}
        <div className="flex flex-col md:flex-row shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
          {/* CỘT TRÁI */}
          <div className="md:w-2/5 bg-[#0077b6] p-[40px] text-white">
            <h3 className="mb-[20px] text-[1.5rem] font-bold">Thông tin</h3>
            <p className="opacity-90 leading-[1.6] mb-[30px]">
              Nếu bạn có câu hỏi về việc setup server trên Android hoặc muốn hợp
              tác dự án, đừng ngần ngại nhắn cho tôi.
            </p>

            <div className="flex flex-col gap-[20px]">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-[15px]">
                  <span className="bg-white/20 w-[40px] h-[40px] flex items-center justify-center rounded-full shrink-0 text-white">
                    {info.icon}
                  </span>
                  <span className="font-medium">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI */}
          <div className="md:w-3/5 bg-white p-[40px]">
            <form>
              <div className="mb-[20px]">
                <label className="block mb-[8px] text-slate-800 font-semibold">
                  Họ tên
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên của bạn..."
                  className="w-full p-[12px] border border-[#ddd] rounded-[8px] outline-none bg-[#f8f9fa] focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
              </div>
              <div className="mb-[20px]">
                <label className="block mb-[8px] text-slate-800 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full p-[12px] border border-[#ddd] rounded-[8px] outline-none bg-[#f8f9fa] focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
              </div>
              <div className="mb-[20px]">
                <label className="block mb-[8px] text-slate-800 font-semibold">
                  Tin nhắn
                </label>
                <textarea
                  rows={4}
                  placeholder="Nội dung cần trao đổi..."
                  className="w-full p-[12px] border border-[#ddd] rounded-[8px] outline-none bg-[#f8f9fa] focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all resize-y"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-[#0077b6] text-white border-none py-[12px] px-[30px] rounded-[8px] font-bold cursor-pointer transition-opacity duration-300 hover:opacity-90"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
