import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrackData, students, departments } from "../../../../data";

export default async function DepartmentTrackPage({ params }) {
  const resolvedParams = await params;
  const { department, track } = resolvedParams;

  const trackData = getTrackData(department, track);
  const deptData = departments.find((d) => d.slug === department);

  if (!trackData || !deptData) {
    notFound();
  }

  // Filter students for this specialization track
  const trackStudents = students.filter((s) => s.trackSlug === track);

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/departments">Departments</Link>
        <span>/</span>
        <Link href="/departments">{deptData.name}</Link>
        <span>/</span>
        <strong>{trackData.name}</strong>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <Link href="/departments">← Return to {deptData.name} Department</Link>
        <Link href="/students" style={{ color: "#64748b" }}>View all students →</Link>
      </div>

      {/* Track Overview Card */}
      <div className="detail-box">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
          <div>
            <h1 style={{ fontSize: "24px", color: "#0f172a" }}>{trackData.name}</h1>
            <span className="pill pill-blue" style={{ marginTop: "4px", display: "inline-block" }}>
              Specialization under {trackData.departmentName}
            </span>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "bold" }}>DEPARTMENT TRACK</div>
            <span className="pill" style={{ fontWeight: "bold" }}>{trackData.trackCode}</span>
          </div>
        </div>

        <p className="bio-text">{trackData.description}</p>

        {/* 4 Metadata Columns */}
        <div className="meta-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div>
            <div className="meta-label">Academic Lead</div>
            <div className="meta-value">{trackData.academicLead}</div>
          </div>
          <div>
            <div className="meta-label">Primary Core Lab</div>
            <div className="meta-value">{trackData.primaryCoreLab}</div>
          </div>
          <div>
            <div className="meta-label">Total Enrollment</div>
            <div className="meta-value">{trackData.totalEnrollment}</div>
          </div>
          <div>
            <div className="meta-label">Curriculum Cycle</div>
            <div className="meta-value">{trackData.curriculumCycle}</div>
          </div>
        </div>
      </div>

      {/* Enrolled Students in Track */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h2 style={{ fontSize: "17px", color: "#0f172a" }}>
          Students in this Specialization ({trackStudents.length})
        </h2>
        <span style={{ fontSize: "12px", color: "#64748b" }}>
          Filtered by Track: <strong>{trackData.name}</strong>
        </span>
      </div>

      <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
        {trackStudents.map((student) => (
          <div key={student.id} className="card">
            <div>
              <div className="card-header">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="avatar">{student.initials}</div>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>{student.name}</div>
                    <span style={{ fontSize: "11px", color: "#64748b" }}>{student.studentCode}</span>
                  </div>
                </div>
                <span className="pill">{student.year}</span>
              </div>

              <p style={{ fontSize: "12px", color: "#64748b", margin: "8px 0 12px 0" }}>
                {student.specializationRole}
              </p>
            </div>

            <div className="card-footer">
              <Link href={`/students/${student.id}`}>View profile →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
