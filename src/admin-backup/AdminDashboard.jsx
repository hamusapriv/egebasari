import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if admin is already authenticated
    const authToken = localStorage.getItem("admin-auth");
    if (authToken === "authenticated") {
      setIsAuthenticated(true);
      loadStudents();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    // Simple password check (in production, use proper authentication)
    if (password === "egebasari2024") {
      setIsAuthenticated(true);
      localStorage.setItem("admin-auth", "authenticated");
      loadStudents();
    } else {
      alert("Yanlış şifre!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin-auth");
    setStudents([]);
    setSelectedStudent(null);
    setEditData(null);
  };

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
      setLoading(true);
      const response = await fetch(`/data/students/${studentId}.json`);
      const data = await response.json();
      setSelectedStudent(data);
      setEditData(JSON.parse(JSON.stringify(data))); // Deep copy
    } catch (error) {
      console.error("Öğrenci detayları yüklenemedi:", error);
    } finally {
      setLoading(false);
    }
  };

  const addAttendanceRecord = () => {
    const newRecord = {
      date: new Date().toISOString().split("T")[0],
      present: true,
      note: "",
    };

    setEditData((prev) => ({
      ...prev,
      attendance: [newRecord, ...(prev.attendance || [])],
    }));
  };

  const addGradeRecord = () => {
    const newGrade = {
      subject: "",
      score: 0,
      maxScore: 100,
      date: new Date().toISOString().split("T")[0],
      type: "Sınav",
      note: "",
    };

    setEditData((prev) => ({
      ...prev,
      grades: [newGrade, ...(prev.grades || [])],
    }));
  };

  const updateAttendance = (index, field, value) => {
    setEditData((prev) => ({
      ...prev,
      attendance: prev.attendance.map((record, i) =>
        i === index ? { ...record, [field]: value } : record
      ),
    }));
  };

  const updateGrade = (index, field, value) => {
    setEditData((prev) => ({
      ...prev,
      grades: prev.grades.map((grade, i) =>
        i === index ? { ...grade, [field]: value } : grade
      ),
    }));
  };

  const saveChanges = () => {
    // In a real application, this would save to your backend/CMS
    // For now, we'll show the JSON that needs to be updated
    const updatedData = {
      ...editData,
      lastUpdated: new Date().toISOString(),
    };

    console.log("Güncellenecek veri:", JSON.stringify(updatedData, null, 2));

    // Show the JSON to copy/paste
    const jsonWindow = window.open("", "_blank");
    jsonWindow.document.write(`
      <html>
        <head><title>${editData.name} - Güncellenmiş Veri</title></head>
        <body>
          <h2>${editData.name} için güncellenmiş JSON verisi:</h2>
          <p>Bu veriyi <code>/public/data/students/${
            editData.id
          }.json</code> dosyasına kaydedin:</p>
          <textarea style="width: 100%; height: 400px; font-family: monospace;">
${JSON.stringify(updatedData, null, 2)}
          </textarea>
          <br><br>
          <button onclick="navigator.clipboard.writeText(document.querySelector('textarea').value)">
            Panoya Kopyala
          </button>
        </body>
      </html>
    `);

    alert(
      "Değişiklikler hazırlandı! Yeni pencerede JSON verisini görebilirsiniz."
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <h2>🎓 Eğitmen Paneli</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Şifre:</label>
              <input
                type="password"
                name="password"
                placeholder="Eğitmen şifresini girin"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>🎓 Eğitmen Paneli</h1>
        <button onClick={handleLogout} className="logout-btn">
          Çıkış Yap
        </button>
      </header>

      <div className="admin-content">
        <div className="students-sidebar">
          <h3>Öğrenciler</h3>
          {loading ? (
            <p>Yükleniyor...</p>
          ) : (
            <ul className="students-list">
              {students.map((student) => (
                <li
                  key={student.id}
                  className={selectedStudent?.id === student.id ? "active" : ""}
                  onClick={() => loadStudentDetails(student.id)}
                >
                  <strong>{student.name}</strong>
                  <small>{student.class}</small>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="student-editor">
          {selectedStudent ? (
            <div>
              <h2>{editData?.name} - Düzenleme</h2>

              <div className="editor-sections">
                {/* Teacher Notes */}
                <section className="editor-section">
                  <h3>Öğretmen Notları</h3>
                  <textarea
                    value={editData?.teacherNotes || ""}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        teacherNotes: e.target.value,
                      }))
                    }
                    rows="4"
                    placeholder="Öğrenci hakkında genel değerlendirme..."
                  />
                </section>

                {/* Attendance */}
                <section className="editor-section">
                  <div className="section-header">
                    <h3>Devamsızlık Kayıtları</h3>
                    <button onClick={addAttendanceRecord} className="add-btn">
                      + Yeni Kayıt
                    </button>
                  </div>
                  <div className="attendance-records">
                    {editData?.attendance?.slice(0, 10).map((record, index) => (
                      <div key={index} className="record-item">
                        <input
                          type="date"
                          value={record.date}
                          onChange={(e) =>
                            updateAttendance(index, "date", e.target.value)
                          }
                        />
                        <select
                          value={record.present}
                          onChange={(e) =>
                            updateAttendance(
                              index,
                              "present",
                              e.target.value === "true"
                            )
                          }
                        >
                          <option value={true}>Var</option>
                          <option value={false}>Yok</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Not..."
                          value={record.note || ""}
                          onChange={(e) =>
                            updateAttendance(index, "note", e.target.value)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Grades */}
                <section className="editor-section">
                  <div className="section-header">
                    <h3>Notlar</h3>
                    <button onClick={addGradeRecord} className="add-btn">
                      + Yeni Not
                    </button>
                  </div>
                  <div className="grade-records">
                    {editData?.grades?.slice(0, 10).map((grade, index) => (
                      <div key={index} className="record-item grade-item">
                        <input
                          type="text"
                          placeholder="Ders"
                          value={grade.subject || ""}
                          onChange={(e) =>
                            updateGrade(index, "subject", e.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="Not"
                          value={grade.score || ""}
                          onChange={(e) =>
                            updateGrade(
                              index,
                              "score",
                              parseInt(e.target.value)
                            )
                          }
                        />
                        <select
                          value={grade.type || "Sınav"}
                          onChange={(e) =>
                            updateGrade(index, "type", e.target.value)
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
                            updateGrade(index, "date", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="Açıklama..."
                          value={grade.note || ""}
                          onChange={(e) =>
                            updateGrade(index, "note", e.target.value)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </section>

                <button onClick={saveChanges} className="save-btn">
                  💾 Değişiklikleri Kaydet
                </button>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Düzenlemek için sol taraftan bir öğrenci seçin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
