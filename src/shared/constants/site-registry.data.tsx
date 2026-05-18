import React from "react";
import {
  BookOpen,
  Languages,
  Code2,
  FileJson,
  FileCode2,
  QrCode,
  User,
  Image as ImageIcon,
  Shield,
  Key,
  ShieldCheck,
} from "lucide-react";

// Hợp nhất Interface: Chứa đầy đủ thuộc tính cho cả Menu và Trang Danh sách
export interface SiteModuleType {
  id: string;
  label: string;
  href?: string;
  description?: string;
  icon?: React.ReactNode;
  theme?: {
    bg: string;
    text: string;
  };
  tags?: string[]; // Bổ sung hệ thống Tag
  children?: SiteModuleType[];
}

// Single Source of Truth (Nguồn chân lý duy nhất)
export const MASTER_SITE_DATA: SiteModuleType[] = [
  {
    id: "dashboard",
    label: "Home",
    href: "/",
  },
  {
    id: "language-hub",
    label: "Language Hub",
    href: "language-hub",
    children: [
      {
        id: "english",
        label: "English",
        href: "/language-hub/english",
        description:
          "Tài liệu chuyên ngành CNTT và thuật ngữ kỹ thuật phần mềm.",
        theme: { bg: "bg-blue-50", text: "text-blue-600" },
        icon: <BookOpen size={20} strokeWidth={2.5} />,
        tags: ["IT English", "Glossary"],
      },
      {
        id: "japanese",
        label: "Japanese",
        href: "/language-hub/japanese",
        description:
          "Tài nguyên học từ vựng và ngữ pháp với hệ thống Spaced Repetition (SRS).",
        theme: { bg: "bg-rose-50", text: "text-rose-600" },
        icon: <Languages size={20} strokeWidth={2.5} />,
        tags: ["JLPT", "Flashcards", "Kanji"],
      },
    ],
  },
  {
    id: "dev-sandbox",
    label: "Dev Sandbox",
    href: "dev-sandbox",
    children: [
      {
        id: "data-format",
        label: "Data Format",
        description: "Công cụ xử lý và định dạng cấu trúc dữ liệu.",
        theme: { bg: "bg-sky-50", text: "text-sky-600" },
        icon: <Code2 size={20} strokeWidth={2.5} />,
        children: [
          {
            id: "json-format",
            label: "JSON Formatter",
            href: "/tools/json-formatter",
            description:
              "Định dạng và kiểm tra cấu trúc payload JSON cho tích hợp API.",
            theme: { bg: "bg-sky-50", text: "text-sky-600" },
            icon: <FileJson size={20} strokeWidth={2.5} />,
            tags: ["JSON", "Validator", "Beautifier"],
          },
          {
            id: "xml-format",
            label: "XML Formatter",
            href: "/tools/xml-formatter",
            description:
              "Xử lý và chuẩn hóa dữ liệu XML cho hệ thống đồng bộ hóa đơn.",
            theme: { bg: "bg-sky-50", text: "text-sky-600" },
            icon: <FileCode2 size={20} strokeWidth={2.5} />,
            tags: ["XML", "Parser", "MInvoice", "MISA"],
          },
        ],
      },
      {
        id: "security-tools",
        label: "Security Tools",
        description: "Các công cụ bảo mật và mã hóa hệ thống.",
        theme: { bg: "bg-teal-50", text: "text-teal-600" },
        icon: <Shield size={20} strokeWidth={2.5} />,
        children: [
          {
            id: "password-gen",
            label: "Password Generator",
            href: "/tools/password-generator",
            description:
              "Generate cryptographically secure, random passwords instantly.",
            theme: { bg: "bg-teal-50", text: "text-teal-600" },
            icon: <Key size={20} strokeWidth={2.5} />,
            tags: ["generator", "security", "hash"],
          },
          {
            id: "password-check",
            label: "Password Checker",
            href: "/tools/password-checker",
            description:
              "Analyze passwords for weaknesses and get actionable feedback.",
            theme: { bg: "bg-teal-50", text: "text-teal-600" },
            icon: <ShieldCheck size={20} strokeWidth={2.5} />,
            tags: ["strength", "analyzer"],
          },
        ],
      },
      {
        id: "qr-tool",
        label: "QR Code Generator",
        href: "/tools/qr-generator",
        description: "Khởi tạo mã QR động cho ứng dụng Mobile và Web.",
        theme: { bg: "bg-violet-50", text: "text-violet-600" },
        icon: <QrCode size={20} strokeWidth={2.5} />,
        tags: ["QR Code", "Generator", "SVG"],
      },
    ],
  },
  {
    id: "privacy",
    label: "Privacy",
    href: "/privacy",
    icon: <User size={20} strokeWidth={2.5} />,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    icon: <User size={20} strokeWidth={2.5} />,
  },
];
