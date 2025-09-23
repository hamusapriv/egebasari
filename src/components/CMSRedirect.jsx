import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const CMSRedirect = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // User is authenticated, redirect to CMS
        window.location.href = "/admin/";
      } else {
        // User is not authenticated, redirect to login
        loginWithRedirect({
          appState: {
            returnTo: "/admin/"
          }
        });
      }
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

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
