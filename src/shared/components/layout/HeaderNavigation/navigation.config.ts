export interface NavItemType {
  id: string;
  label: string;
  href?: string;
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
      },
      {
        id: "japanese",
        label: "Japanese",
        href: "#",
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
        children: [
          {
            id: "json-format",
            label: "JSON Formatter",
            href: "#",
          },
          {
            id: "xml-format",
            label: "XML Formatter",
            href: "#",
          },
        ],
      },
      {
        id: "qr-tool",
        label: "QR Tool",
        href: "#",
      },
    ],
  },
  {
    id: "about-me",
    label: "About Me",
    href: "#",
  },
];
