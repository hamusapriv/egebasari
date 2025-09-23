import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./StudentPage.css";

const StudentPage = () => {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/data/students/${studentId}.json`);

        if (!response.ok) {
          throw new Error("Öğrenci bulunamadı");
        }

        const data = await response.json();
        setStudentData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setStudentData(null);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchStudentData();
    }
  }, [studentId]);

  if (loading) {
    return (
      <div className="student-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Öğrenci bilgileri yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="student-page">
        <div className="error-container">
          <h2>Ups! Bir sorun oluştu</h2>
          <p>{error}</p>
          <Link to="/" className="back-home-btn">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  if (!studentData) {
    return null;
  }

  const calculateAttendanceRate = () => {
    if (!studentData.attendance || studentData.attendance.length === 0)
      return 0;
    const presentCount = studentData.attendance.filter(
      (record) => record.present
    ).length;
    return Math.round((presentCount / studentData.attendance.length) * 100);
  };

  const calculateAverageGrade = () => {
    if (!studentData.grades || studentData.grades.length === 0) return 0;
    const total = studentData.grades.reduce(
      (sum, grade) => sum + grade.score,
      0
    );
    return Math.round(total / studentData.grades.length);
  };

  const getGradeColor = (score) => {
    if (score >= 90) return "excellent";
    if (score >= 80) return "good";
    if (score >= 70) return "average";
    return "needs-improvement";
  };

  return (
    <div className="student-page">
      <nav className="student-nav">
        <Link to="/" className="back-link">
          ← Ana Sayfa
        </Link>
      </nav>

      <header className="student-header">
        <div className="student-avatar">
          {studentData.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="student-info">
          <h1>{studentData.name}</h1>
          <p className="student-class">{studentData.class}</p>
          <div className="quick-stats">
            <div className="stat">
              <span className="stat-value">{calculateAttendanceRate()}%</span>
              <span className="stat-label">Devam Oranı</span>
            </div>
            <div className="stat">
              <span className="stat-value">{calculateAverageGrade()}</span>
              <span className="stat-label">Genel Ortalama</span>
            </div>
            <div className="stat">
              <span className="stat-value">
                {studentData.achievements?.length || 0}
              </span>
              <span className="stat-label">Başarı</span>
            </div>
          </div>
        </div>
      </header>

      <main className="student-content">
        <div className="content-grid">
          {/* Devamsızlık Durumu */}
          <section className="card attendance-section">
            <h2>Devamsızlık Durumu</h2>
            <div className="attendance-grid">
              {studentData.attendance?.slice(-8).map((record, index) => (
                <div
                  key={index}
                  className={`attendance-item ${
                    record.present ? "present" : "absent"
                  }`}
                >
                  <div className="attendance-date">
                    {new Date(record.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                  <div className="attendance-status">
                    {record.present ? "✓" : "✗"}
                  </div>
                  {record.note && (
                    <div className="attendance-note" title={record.note}>
                      {record.note.length > 30
                        ? record.note.substring(0, 30) + "..."
                        : record.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Notlar ve Başarı */}
          <section className="card grades-section">
            <h2>Son Notlar</h2>
            <div className="grades-list">
              {studentData.grades?.slice(-6).map((grade, index) => (
                <div
                  key={index}
                  className={`grade-item ${getGradeColor(grade.score)}`}
                >
                  <div className="grade-header">
                    <span className="grade-subject">{grade.subject}</span>
                    <span className="grade-score">
                      {grade.score}/{grade.maxScore}
                    </span>
                  </div>
                  <div className="grade-details">
                    <span className="grade-type">{grade.type}</span>
                    <span className="grade-date">
                      {new Date(grade.date).toLocaleDateString("tr-TR")}
                    </span>
                  </div>
                  {grade.note && <div className="grade-note">{grade.note}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* Öğretmen Notları */}
          <section className="card teacher-notes-section">
            <h2>Öğretmen Değerlendirmesi</h2>
            <div className="teacher-notes">
              <p>{studentData.teacherNotes}</p>
            </div>
          </section>

          {/* Hedefler */}
          <section className="card goals-section">
            <h2>Hedefler</h2>
            <ul className="goals-list">
              {studentData.goals?.map((goal, index) => (
                <li key={index} className="goal-item">
                  <span className="goal-icon">🎯</span>
                  {goal}
                </li>
              ))}
            </ul>
          </section>

          {/* Başarılar */}
          <section className="card achievements-section">
            <h2>Başarılar</h2>
            <ul className="achievements-list">
              {studentData.achievements?.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <span className="achievement-icon">🏆</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </section>

          {/* İletişim Bilgileri */}
          <section className="card contact-section">
            <h2>Veli İletişim</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{studentData.parentContact?.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>{studentData.parentContact?.email}</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="student-footer">
        <p>
          Son güncelleme:{" "}
          {new Date(studentData.lastUpdated).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </footer>
    </div>
  );
};

export default StudentPage;
