"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const variant = pathname === "/" ? "hero" : "default";

  return <Navbar variant={variant} />;
}