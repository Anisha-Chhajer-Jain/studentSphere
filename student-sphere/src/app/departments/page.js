import Link from "next/link";
import { departments } from "../../data";

export default function DepartmentsPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="page-title">Departments</h1>
        <span style={{ fontSize: "13px", color: "#64748b" }}>● 3 Active Academic Faculties</span>
      </div>
      <p className="page-subtitle">Explore academic faculties, programs, and enrolled students.</p>

      {departments.map((dept) => {
        const link = dept.tracks && dept.tracks.length > 0
          ? `/departments/${dept.slug}/${dept.tracks[0].slug}`
          : `/students`;

        return (
          <div key={dept.id} className="dept-card">
            <div>
              <h2 style={{ fontSize: "17px", color: "#0f172a", marginBottom: "4px" }}>
                {dept.name}
              </h2>
              <p style={{ fontSize: "13px", color: "#475569", marginBottom: "8px" }}>
                {dept.description}
              </p>
              <div style={{ fontSize: "12px", color: "#64748b" }}>
                {dept.specializationsCount} Specializations · {dept.enrolledStudents} Enrolled Students
              </div>
            </div>

            <div>
              <Link href={link} style={{ fontWeight: "bold", fontSize: "13px" }}>
                View students →
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
