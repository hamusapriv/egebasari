import { useEffect } from "react";
import { useGoogleAuth } from "../auth/GoogleAuthProvider.jsx";

const CMSRedirect = () => {
  const { isAuthenticated, isLoading, signIn, signOut, user } = useGoogleAuth();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // User is authenticated, but CMS backend not ready yet
        // Don't auto-redirect until GitHub OAuth is set up
        console.log("User authenticated:", user);
      } else {
        // User is not authenticated, show login button
        // Don't auto-redirect, let user choose to sign in
      }
    }
  }, [isAuthenticated, isLoading, user]);

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

  // User is authenticated - show success and next steps
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
        gap: "30px",
        padding: "20px"
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h2>✅ Giriş Başarılı! / Login Successful!</h2>
        {user && (
          <p style={{ fontSize: "16px", color: "#666" }}>
            Hoş geldiniz, {user.name || user.email}!
          </p>
        )}
        
        <div style={{ 
          backgroundColor: "#f8f9fa", 
          padding: "20px", 
          borderRadius: "8px", 
          marginTop: "20px",
          textAlign: "left"
        }}>
          <h3>🔧 Kurulum devam ediyor... / Setup in progress...</h3>
          <p><strong>Tamamlanan:</strong></p>
          <ul>
            <li>✅ Google OAuth entegrasyonu</li>
            <li>✅ Öğretmen kimlik doğrulaması</li>
          </ul>
          
          <p><strong>Yapılacaklar:</strong></p>
          <ul>
            <li>⏳ GitHub OAuth kurulumu (CMS için)</li>
            <li>⏳ Netlify CMS backend konfigürasyonu</li>
          </ul>
          
          <p style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
            CMS kurulumu tamamlandıktan sonra bu sayfadan doğrudan öğrenci verilerini düzenleyebileceksiniz.
          </p>
        </div>
        
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => window.location.href = "/"}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            🏠 Ana Sayfa / Home
          </button>
          
          <button
            onClick={signOut}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginLeft: "10px"
            }}
          >
            🚪 Çıkış Yap / Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CMSRedirect;
