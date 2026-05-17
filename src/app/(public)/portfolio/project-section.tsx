export const ProjectsSection = () => {
  const projects = [
    {
      id: "android-server",
      title: "Android Server Tools",
      description:
        "Hệ thống biến điện thoại Android cũ thành máy chủ web server. Tích hợp Termux, Apache và trình quản lý file.",
      tags: ["Termux", "Linux", "Bash Script"],
      actionLabel: "Xem chi tiết",
      href: "#",
      theme: {
        bgPreview: "bg-[#ddd]",
        textColor: "text-[#888]",
      },
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      description:
        "Website cá nhân với thiết kế Minimalist kết hợp phong cách nghệ thuật Glassmorphism. Tối ưu SEO và Responsive.",
      tags: ["HTML5", "CSS3", "UI/UX"],
      actionLabel: "Xem Demo",
      href: "#",
      theme: {
        bgPreview: "bg-[#cce3de]",
        textColor: "text-[#555]",
      },
    },
    {
      id: "ai-api",
      title: "AI Assistant API",
      description:
        "Xây dựng API tích hợp AI để tự động trả lời câu hỏi và xử lý ngôn ngữ tự nhiên cho ứng dụng mobile.",
      tags: ["Python", "FastAPI", "OpenAI"],
      actionLabel: "Github Repo",
      href: "#",
      theme: {
        bgPreview: "bg-[#ffddd2]",
        textColor: "text-[#555]",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#f0f4f8]">
      {/* Khóa cứng không gian theo max-width của file thiết kế gốc */}
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Tiêu đề Section */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[#0077b6] text-[2.5rem] mb-[10px] font-serif font-bold">
            Dự án tiêu biểu
          </h2>
          <p className="text-gray-500">
            Những sản phẩm tâm huyết tui đã thực hiện
          </p>
        </div>

        {/* Khung lưới Auto-Fit Grid Layout */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/2 transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,119,182,0.15)]"
            >
              {/* Vùng hiển thị ảnh Preview */}
              <div
                className={`h-[200px] ${project.theme.bgPreview} flex items-center justify-center ${project.theme.textColor} font-bold`}
              >
                IMAGE PREVIEW
              </div>

              {/* Khối thông tin văn bản */}
              <div className="p-[25px]">
                <h3 className="mb-[10px] text-slate-800 text-[1.4rem] font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-[0.95rem] leading-[1.6] mb-5">
                  {project.description}
                </p>

                {/* Danh sách các thẻ công nghệ (Tags) */}
                <div className="mb-[25px] flex gap-[8px] flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[0.8rem] px-[10px] py-[4px] bg-[#e3f2fd] text-[#0077b6] rounded-[4px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Liên kết hành động */}
                <a
                  href={project.href}
                  className="inline-block no-underline text-[#0077b6] font-semibold border-b-2 border-[#48cae4] hover:text-[#025a8a] transition-colors"
                >
                  {project.actionLabel} &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
