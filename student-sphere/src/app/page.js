"use client";

import { useState } from "react";
import Link from "next/link";
import { students } from "../data";

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All departments");

  // Filter students based on search input and department dropdown
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.studentCode.toLowerCase().includes(search.toLowerCase());

    const matchesDept =
      department === "All departments" || student.department === department;

    return matchesSearch && matchesDept;
  });

  return (
    <div>
      <h1 className="page-title">Students</h1>
      <p className="page-subtitle">Browse students and view their profiles.</p>

      {/* Filter and Search */}
      <div className="filter-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <label htmlFor="dept" style={{ fontSize: "13px", marginRight: "8px", color: "#64748b" }}>
            Department:
          </label>
          <select
            id="dept"
            className="dept-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="All departments">All departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="cards-grid">
        {filteredStudents.length === 0 ? (
          <div style={{ padding: "30px", textAlign: "center", color: "#64748b", gridColumn: "1 / -1", background: "#ffffff", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
            No students found matching your search.
          </div>
        ) : (
          filteredStudents.map((student) => (
            <div key={student.id} className="card">
              <div>
                <div className="card-header">
                  <div className="avatar">{student.initials}</div>
                  <span className="pill">{student.studentCode}</span>
                </div>

                <div className="card-title">{student.name}</div>

                <div className="card-meta">
                  <span className="pill pill-blue">{student.department}</span>
                  <span>{student.year}</span>
                </div>
              </div>

              <div className="card-footer">
                <Link href={`/students/${student.id}`}>View profile →</Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Bar */}
      <div className="pagination">
        <span>
          Showing {filteredStudents.length} of {students.length} students
        </span>
        <div>
          <button style={{ padding: "4px 10px", marginRight: "5px" }} disabled>
            Previous
          </button>
          <button style={{ padding: "4px 10px" }} disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
