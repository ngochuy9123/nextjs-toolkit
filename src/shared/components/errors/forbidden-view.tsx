"use client";

import Link from "next/link";
import { Ban } from "lucide-react";

export const ForbiddenView = ({ reset }: { reset: () => void }) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-6">
      <div className="max-w-md w-full flex flex-col items-center text-center bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6">
          <Ban size={32} strokeWidth={2} />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          Truy cập Bị Từ chối
        </h2>
        <p className="text-zinc-500 mb-8 text-sm leading-relaxed">
          Tài khoản của bạn không có đủ phân quyền để thực thi hành động hoặc
          truy cập vào khu vực này của hệ thống.
        </p>
        <div className="flex w-full gap-3">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Về Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};
