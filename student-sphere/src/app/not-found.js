import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/students">Directory</Link>
        <span>/</span>
        <strong>Not Found</strong>
      </div>

      <div className="not-found-box">
        <span className="pill" style={{ display: "inline-block", marginBottom: "10px" }}>
          404 · ROUTE NOT FOUND
        </span>

        <h1 className="not-found-title">Student or department not found</h1>

        <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "500px", margin: "0 auto 20px auto" }}>
          The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.
        </p>

        <div>
          <Link href="/students" className="btn btn-blue">
            Return to Students Directory
          </Link>
          <Link href="/departments" className="btn btn-gray">
            Browse All Departments
          </Link>
        </div>

        <div style={{ maxWidth: "450px", margin: "30px auto 0 auto", textAlign: "left", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "15px" }}>
          <div style={{ fontSize: "11px", fontWeight: "bold", color: "#64748b", marginBottom: "10px" }}>
            SUGGESTED STARTING POINTS
          </div>
          <p style={{ margin: "6px 0", fontSize: "13px" }}>
            <Link href="/departments/computer-science/web-development">
              Computer Science &amp; Web Development →
            </Link>
          </p>
          <p style={{ margin: "6px 0", fontSize: "13px" }}>
            <Link href="/departments">
              Browse All Academic Faculties →
            </Link>
          </p>
          <p style={{ margin: "6px 0", fontSize: "13px" }}>
            <Link href="/students">
              Student Roster Directory →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
