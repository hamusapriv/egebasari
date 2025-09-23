import React, { useState } from "react";
import "./StudentLogin.css";

const StudentLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Hardcoded student list for security (don't expose student index)
      const studentIds = ["ahmet", "mehmet", "ayse"];
      
      // Find student by checking credentials
      let authenticatedStudent = null;

      for (const studentId of studentIds) {
        try {
          const studentResponse = await fetch(`/data/students/${studentId}.json`);
          
          // Check if response is ok and is actually JSON
          if (!studentResponse.ok) {
            console.log(`Student ${studentId} not found or not accessible`);
            continue;
          }
          
          const studentData = await studentResponse.json();

          if (
            studentData.credentials &&
            studentData.credentials.username === credentials.username &&
            studentData.credentials.password === credentials.password
          ) {
            authenticatedStudent = studentData;
            break;
          }
        } catch (error) {
          console.log(`Error loading student ${studentId}:`, error);
          continue;
        }
      }

      if (authenticatedStudent) {
        // Save authentication in localStorage
        localStorage.setItem(
          "student-auth",
          JSON.stringify({
            student: authenticatedStudent,
            loginTime: new Date().toISOString(),
          })
        );

        onLogin(authenticatedStudent);
      } else {
        setError("Kullanıcı adı veya şifre hatalı!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Giriş yaparken bir hata oluştu. Lütfen tekrar deneyin.");
    }

    setLoading(false);
  };

  return (
    <div className="student-login-container">
      <div className="student-login-card">
        <div className="login-header">
          <h1>🎓 Öğrenci Girişi</h1>
          <p>Kendi bilgilerinizi görmek için giriş yapın</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  username: e.target.value,
                })
              }
              placeholder="örn: ahmet.yilmaz"
              autoComplete="username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
              placeholder="Şifrenizi girin"
              autoComplete="current-password"
              required
            />
          </div>

          {error && <div className="error-message">❌ {error}</div>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "🔄 Giriş yapılıyor..." : "🚀 Giriş Yap"}
          </button>
        </form>

        <div className="login-footer">
          <p>💡 Kullanıcı adı ve şifrenizi öğretmeninizden alabilirsiniz.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
