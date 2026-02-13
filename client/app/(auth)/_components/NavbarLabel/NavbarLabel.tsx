"use client";

import { usePathname } from "next/navigation";

export default function NavbarLabel() {
  const pathname = usePathname();

  function getLabel(pathname: string): string | null {
    switch (pathname) {
      case "/seller/login":
        return "Đăng nhập";
      case "/seller/signup":
        return "Đăng ký";
      default:
        return null;
    }
  }

  return <div>{getLabel(pathname)}</div>;
}
