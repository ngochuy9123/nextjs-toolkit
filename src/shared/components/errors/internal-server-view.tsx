"use client";

import { ServerCrash } from "lucide-react";

export const InternalServerView = ({
  message,
  reset,
}: {
  message?: string;
  reset: () => void;
}) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-6">
      <div className="max-w-md w-full flex flex-col items-center text-center bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
        <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-6">
          <ServerCrash size={32} strokeWidth={2} />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">Lỗi Hệ thống</h2>
        <p className="text-zinc-500 mb-8 text-sm leading-relaxed">
          {message ||
            "Đã xảy ra sự cố không xác định từ phía máy chủ. Chúng tôi đang tiến hành khắc phục sự cố này."}
        </p>
        <div className="flex w-full gap-3">
          <button
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Tải lại dữ liệu
          </button>
        </div>
      </div>
    </div>
  );
};
