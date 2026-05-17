"use client";

import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export const UnauthorizedView = ({ reset }: { reset: () => void }) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-6">
      <div className="max-w-md w-full flex flex-col items-center text-center bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6">
          <ShieldAlert size={32} strokeWidth={2} />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          Yêu cầu Xác thực
        </h2>
        <p className="text-zinc-500 mb-8 text-sm leading-relaxed">
          Phiên đăng nhập của bạn đã hết hạn hoặc không hợp lệ. Vui lòng đăng
          nhập lại để tiếp tục truy cập tài nguyên này.
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-3">
          <Link
            href="/login"
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Đăng nhập lại
          </Link>
          <button
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gray-100 text-zinc-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    </div>
  );
};
