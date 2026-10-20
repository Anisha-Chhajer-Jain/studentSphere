import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentById } from "../../../data";

export default async function StudentDetailPage({ params }) {
  const resolvedParams = await params;
  const student = getStudentById(resolvedParams.id);

  if (!student) {
    notFound();
  }

  const totalCredits = student.subjects.reduce((sum, s) => sum + parseFloat(s.credits), 0);

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/students">Students</Link>
        <span>/</span>
        <strong>{student.name}</strong>
      </div>

      <p style={{ marginBottom: "15px" }}>
        <Link href="/students">← Back to students</Link>
      </p>

      <div className="detail-box">
        {/* Profile Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
          <div className="avatar" style={{ width: "48px", height: "48px", fontSize: "16px" }}>
            {student.initials}
          </div>
          <div>
            <h1 style={{ fontSize: "22px", color: "#0f172a" }}>{student.name}</h1>
            <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
              <span className="pill">{student.studentCode}</span>
              <span className="pill pill-green">{student.status}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Info Grid */}
        <div className="meta-grid">
          <div>
            <div className="meta-label">Department</div>
            <div className="meta-value">{student.department}</div>
          </div>
          <div>
            <div className="meta-label">Study Year</div>
            <div className="meta-value">{student.studyYearFull}</div>
          </div>
          <div>
            <div className="meta-label">Email</div>
            <div className="meta-value">
              <a href={`mailto:${student.email}`}>{student.email}</a>
            </div>
          </div>
          <div>
            <div className="meta-label">Enrolled</div>
            <div className="meta-value">{student.enrolled}</div>
          </div>
        </div>

        {/* About */}
        <div className="section-label">About</div>
        <p className="bio-text">{student.bio}</p>

        {/* Academic Details */}
        <div className="section-label" style={{ marginTop: "20px" }}>Academic Details</div>
        <p className="bio-text">Department: {student.department}</p>
        <p className="bio-text">Current Standing: {student.year} Undergraduate</p>

        {/* Subjects Table */}
        <div className="section-label" style={{ marginTop: "15px", fontSize: "13px" }}>ENROLLED SUBJECTS</div>
        <table className="simple-table">
          <tbody>
            {student.subjects.map((sub) => (
              <tr key={sub.code}>
                <td><strong>{sub.code}:</strong> {sub.name}</td>
                <td style={{ textAlign: "right", color: "#64748b" }}>{sub.credits} Credits</td>
              </tr>
            ))}
            <tr style={{ background: "#f8fafc" }}>
              <td><strong>Total Credits</strong></td>
              <td style={{ textAlign: "right", fontWeight: "bold" }}>{totalCredits.toFixed(1)} Credits</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#64748b" }}>
        <span>System Record ID: {student.recordId}</span>
        <span>Last validated: {student.lastValidated}</span>
      </div>
    </div>
  );
}
