import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/students">Directory</Link>
        <span>/</span>
        <strong>About</strong>
      </div>

      <h1 className="page-title">About Campus Directory</h1>
      <p className="page-subtitle">A simple Next.js project demonstrating routing, dynamic routes, and filtering.</p>

      <div className="detail-box">
        <div className="section-label">Project Overview</div>
        <p className="bio-text">
          Campus Directory is a beginner-friendly project built with Next.js and basic CSS.
          It uses local JavaScript data without external libraries, APIs, or databases.
        </p>

        <div className="section-label" style={{ marginTop: "20px" }}>Key Features</div>
        <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "#475569", lineHeight: "1.8" }}>
          <li>Next.js App Router for navigation and nested pages</li>
          <li>Search input and department dropdown filtering</li>
          <li>Dynamic route parameters for viewing student profiles (/students/[id])</li>
          <li>Nested dynamic routes for department specializations (/departments/[department]/[track])</li>
          <li>Custom 404 page for missing students or broken links</li>
        </ul>
      </div>
    </div>
  );
}
