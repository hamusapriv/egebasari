import { useEffect } from "react";
import { useGoogleAuth } from "../auth/GoogleAuthProvider.jsx";

const CMSRedirect = () => {
  const { isAuthenticated, isLoading, signIn, user } = useGoogleAuth();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // User is authenticated, redirect to CMS
        window.location.href = "/admin/";
      } else {
        // User is not authenticated, show login button
        // Don't auto-redirect, let user choose to sign in
      }
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div>
          <p>Yükleniyor...</p>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
          gap: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>Öğretmen Paneli / Teacher Dashboard</h2>
          <p>
            Öğrenci verilerini düzenlemek için Google hesabınızla giriş yapın.
          </p>
          <p>Sign in with your Google account to edit student data.</p>
        </div>
        <button
          onClick={signIn}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#4285f4",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>🔐</span>
          Google ile Giriş Yap / Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <p>Yönetici paneline yönlendiriliyorsunuz...</p>
        <p>Redirecting to admin panel...</p>
        {user && <p>Hoş geldiniz, {user.name || user.email}!</p>}
      </div>
    </div>
  );
};

export default CMSRedirect;
