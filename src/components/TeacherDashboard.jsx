import React, { useState, useEffect } from "react";
import { useGoogleAuth } from "../auth/GoogleAuthProvider.jsx";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const { user, signOut } = useGoogleAuth();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch("/data/students/index.json");
      const data = await response.json();
      setStudents(data.students);
    } catch (error) {
      console.error("Öğrenci listesi yüklenemedi:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadStudentDetails = async (studentId) => {
    try {
      const response = await fetch(`/data/students/${studentId}.json`);
      const data = await response.json();
      setSelectedStudent(data);
      setEditData({ ...data });
    } catch (error) {
      console.error("Öğrenci detayları yüklenemedi:", error);
    }
  };

  const handleInputChange = (field, value, index = null, subfield = null) => {
    setEditData((prev) => {
      const newData = { ...prev };

      if (index !== null && subfield) {
        // For array items with subfields (like grades, attendance)
        newData[field][index][subfield] = value;
      } else if (index !== null) {
        // For simple arrays (like subjects)
        newData[field][index] = value;
      } else if (subfield) {
        // For nested objects (like parentContact)
        newData[field][subfield] = value;
      } else {
        // For simple fields
        newData[field] = value;
      }

      return newData;
    });
  };

  const addGrade = () => {
    const newGrade = {
      subject: "Matematik",
      score: 0,
      maxScore: 100,
      date: new Date().toISOString().split("T")[0],
      type: "Sınav",
      note: "",
    };

    setEditData((prev) => ({
      ...prev,
      grades: [...(prev.grades || []), newGrade],
    }));
  };

  const addAttendance = () => {
    const newAttendance = {
      date: new Date().toISOString().split("T")[0],
      present: true,
      note: "",
    };

    setEditData((prev) => ({
      ...prev,
      attendance: [...(prev.attendance || []), newAttendance],
    }));
  };

  const removeItem = (field, index) => {
    setEditData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const saveChanges = async () => {
    try {
      setLoading(true);

      // Update the last updated timestamp
      const updatedData = {
        ...editData,
        lastUpdated: new Date().toISOString(),
      };

      // Save to GitHub via Netlify function
      const response = await fetch("/.netlify/functions/save-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: updatedData.id,
          studentData: updatedData,
          userEmail: user?.email,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", response.status, errorText);
        let errorMessage = `HTTP ${response.status}`;
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();

      // Update local state
      setSelectedStudent(updatedData);

      // Show success message
      alert(
        `✅ ${updatedData.name} için veriler başarıyla kaydedildi ve canlı siteye yansıtıldı!`
      );
    } catch (error) {
      console.error("Save error:", error);
      alert(`❌ Kaydetme hatası: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="teacher-dashboard">
        <div className="loading">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="teacher-dashboard">
      <header className="dashboard-header">
        <div>
          <h1>👩‍🏫 Öğretmen Paneli</h1>
          <p>Hoş geldiniz, {user?.name || user?.email}</p>
        </div>
        <button onClick={signOut} className="logout-btn">
          🚪 Çıkış Yap
        </button>
      </header>

      <div className="dashboard-content">
        <aside className="students-sidebar">
          <h3>📚 Öğrenciler</h3>
          <div className="students-list">
            {students.map((student) => (
              <button
                key={student.id}
                onClick={() => loadStudentDetails(student.id)}
                className={`student-item ${
                  selectedStudent?.id === student.id ? "active" : ""
                }`}
              >
                <div className="student-name">{student.name}</div>
                <div className="student-class">{student.class}</div>
              </button>
            ))}
          </div>
        </aside>

        <main className="student-details">
          {!selectedStudent ? (
            <div className="no-selection">
              <h3>👈 Sol menüden bir öğrenci seçin</h3>
              <p>
                Öğrenci bilgilerini görüntülemek ve düzenlemek için listeden bir
                öğrenci seçin.
              </p>
            </div>
          ) : (
            <div className="edit-form">
              <h2>✏️ {selectedStudent.name} - Bilgi Düzenleme</h2>

              {/* Basic Info */}
              <section className="form-section">
                <h3>📝 Temel Bilgiler</h3>
                <div className="form-row">
                  <label>
                    Ad Soyad:
                    <input
                      type="text"
                      value={editData?.name || ""}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </label>
                  <label>
                    Sınıf:
                    <input
                      type="text"
                      value={editData?.class || ""}
                      onChange={(e) =>
                        handleInputChange("class", e.target.value)
                      }
                    />
                  </label>
                </div>
              </section>

              {/* Parent Contact */}
              <section className="form-section">
                <h3>👨‍👩‍👧 Veli İletişim</h3>
                <div className="form-row">
                  <label>
                    Telefon:
                    <input
                      type="tel"
                      value={editData?.parentContact?.phone || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "parentContact",
                          e.target.value,
                          null,
                          "phone"
                        )
                      }
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      value={editData?.parentContact?.email || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "parentContact",
                          e.target.value,
                          null,
                          "email"
                        )
                      }
                    />
                  </label>
                </div>
              </section>

              {/* Teacher Notes */}
              <section className="form-section">
                <h3>📋 Öğretmen Notları</h3>
                <textarea
                  value={editData?.teacherNotes || ""}
                  onChange={(e) =>
                    handleInputChange("teacherNotes", e.target.value)
                  }
                  rows="4"
                  placeholder="Öğrenci hakkında notlarınız..."
                />
              </section>

              {/* Grades */}
              <section className="form-section">
                <h3>
                  📊 Notlar
                  <button onClick={addGrade} className="add-btn">
                    + Yeni Not
                  </button>
                </h3>
                {editData?.grades?.map((grade, index) => (
                  <div key={index} className="grade-item">
                    <div className="form-row">
                      <select
                        value={grade.subject}
                        onChange={(e) =>
                          handleInputChange(
                            "grades",
                            e.target.value,
                            index,
                            "subject"
                          )
                        }
                      >
                        <option value="Matematik">Matematik</option>
                        <option value="Türkçe">Türkçe</option>
                        <option value="Fen Bilgisi">Fen Bilgisi</option>
                        <option value="İngilizce">İngilizce</option>
                      </select>
                      <input
                        type="number"
                        placeholder="Not"
                        value={grade.score}
                        onChange={(e) =>
                          handleInputChange(
                            "grades",
                            parseInt(e.target.value),
                            index,
                            "score"
                          )
                        }
                      />
                      <select
                        value={grade.type}
                        onChange={(e) =>
                          handleInputChange(
                            "grades",
                            e.target.value,
                            index,
                            "type"
                          )
                        }
                      >
                        <option value="Sınav">Sınav</option>
                        <option value="Ödev">Ödev</option>
                        <option value="Proje">Proje</option>
                        <option value="Performans">Performans</option>
                      </select>
                      <input
                        type="date"
                        value={grade.date}
                        onChange={(e) =>
                          handleInputChange(
                            "grades",
                            e.target.value,
                            index,
                            "date"
                          )
                        }
                      />
                      <button
                        onClick={() => removeItem("grades", index)}
                        className="remove-btn"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </section>

              {/* Save Button */}
              <div className="form-actions">
                <button
                  onClick={saveChanges}
                  className="save-btn"
                  disabled={loading}
                >
                  {loading ? "⏳ Kaydediliyor..." : "💾 Değişiklikleri Kaydet"}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
