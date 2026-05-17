import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-100px)] bg-surface flex items-center justify-center p-6 transition-colors duration-300">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        {/* Phân vùng Đồ họa (Hình ảnh) */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
          <img
            src="/images/forfun/anya6.jpg"
            alt="404 Error Illustration"
            className="w-full max-w-[450px] h-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* Phân vùng Nội dung và Hành động */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">
            ERROR 404
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-content mb-4 tracking-tight">
            NOT FOUND
          </h1>

          <p className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Đường dẫn bạn đang truy cập có thể đã bị thay đổi, xóa bỏ, hoặc dữ
            liệu đã bị di chuyển vào vùng nhớ dài hạn. Vui lòng kiểm tra lại
            URL.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-zinc-900 text-white font-bold rounded-lg hover:bg-primary transition-colors shadow-md group"
          >
            Quay lại Trang chủ
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
