"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isStudents = pathname === "/" || pathname.startsWith("/students");
  const isDepartments = pathname.startsWith("/departments");
  const isAbout = pathname.startsWith("/about");

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/students" className="brand">
          Campus Directory
        </Link>

        <div className="nav-links">
          <Link href="/students" className={`nav-link ${isStudents ? "active" : ""}`}>
            Students
          </Link>
          <Link href="/departments" className={`nav-link ${isDepartments ? "active" : ""}`}>
            Departments
          </Link>
          <Link href="/about" className={`nav-link ${isAbout ? "active" : ""}`}>
            About
          </Link>
        </div>

        <div className="badge-practice">Frontend Practice</div>
      </div>
    </nav>
  );
}
