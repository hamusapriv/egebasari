import React, { useState, useEffect } from "react";
import StudentLogin from "./StudentLogin";
import StudentDashboard from "./StudentDashboard";

const StudentAuth = () => {
  const [authenticatedStudent, setAuthenticatedStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if student is already authenticated
    const savedAuth = localStorage.getItem("student-auth");
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        const loginTime = new Date(authData.loginTime);
        const now = new Date();
        const hoursDiff = (now - loginTime) / (1000 * 60 * 60);

        // Session expires after 24 hours
        if (hoursDiff < 24) {
          setAuthenticatedStudent(authData.student);
        } else {
          localStorage.removeItem("student-auth");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        localStorage.removeItem("student-auth");
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (student) => {
    setAuthenticatedStudent(student);
  };

  const handleLogout = () => {
    setAuthenticatedStudent(null);
    localStorage.removeItem("student-auth");
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.2rem",
          color: "#667eea",
        }}
      >
        🔄 Yükleniyor...
      </div>
    );
  }

  return authenticatedStudent ? (
    <StudentDashboard student={authenticatedStudent} onLogout={handleLogout} />
  ) : (
    <StudentLogin onLogin={handleLogin} />
  );
};

export default StudentAuth;
