import React from "react";
import {
  BookOpen,
  Languages,
  Code2,
  FileJson,
  FileCode2,
  QrCode,
  User,
} from "lucide-react";

export interface NavItemType {
  id: string;
  label: string;
  href?: string;
  description?: string;
  icon?: React.ReactNode;
  theme?: {
    bg: string;
    text: string;
  };
  children?: NavItemType[];
}

export const HEADER_NAV_DATA: NavItemType[] = [
  {
    id: "dashboard",
    label: "Home",
    href: "/",
  },
  {
    id: "learning-modules",
    label: "Language Hub",
    children: [
      {
        id: "english",
        label: "English",
        href: "#",
        description:
          "Tài liệu chuyên ngành CNTT và thuật ngữ kỹ thuật phần mềm.",
        theme: { bg: "bg-blue-50", text: "text-blue-600" },
        icon: <BookOpen size={20} strokeWidth={2.5} />,
      },
      {
        id: "japanese",
        label: "Japanese",
        href: "#",
        description:
          "Tài nguyên học từ vựng và ngữ pháp với hệ thống Spaced Repetition (SRS).",
        theme: { bg: "bg-rose-50", text: "text-rose-600" },
        icon: <Languages size={20} strokeWidth={2.5} />,
      },
    ],
  },
  {
    id: "dev-sandbox",
    label: "Dev Sandbox",
    children: [
      {
        id: "data-format",
        label: "Data Format",
        description: "Công cụ xử lý và định dạng cấu trúc dữ liệu.",
        theme: { bg: "bg-emerald-50", text: "text-emerald-600" },
        icon: <Code2 size={20} strokeWidth={2.5} />,
        children: [
          {
            id: "json-format",
            label: "JSON Formatter",
            href: "#",
            description:
              "Định dạng và kiểm tra cấu trúc payload JSON cho tích hợp API.",
            theme: { bg: "bg-amber-50", text: "text-amber-600" },
            icon: <FileJson size={20} strokeWidth={2.5} />,
          },
          {
            id: "xml-format",
            label: "XML Formatter",
            href: "#",
            description:
              "Xử lý và chuẩn hóa dữ liệu XML cho hệ thống đồng bộ hóa đơn.",
            theme: { bg: "bg-orange-50", text: "text-orange-600" },
            icon: <FileCode2 size={20} strokeWidth={2.5} />,
          },
        ],
      },
      {
        id: "qr-tool",
        label: "QR Tool",
        href: "#",
        description: "Khởi tạo mã QR động cho ứng dụng Mobile và Web.",
        theme: { bg: "bg-violet-50", text: "text-violet-600" },
        icon: <QrCode size={20} strokeWidth={2.5} />,
      },
    ],
  },
  {
    id: "about-me",
    label: "About Me",
    href: "portfolio",
    icon: <User size={20} strokeWidth={2.5} />,
  },
];
