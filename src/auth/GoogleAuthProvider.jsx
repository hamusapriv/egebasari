import React, { createContext, useContext, useEffect, useState } from 'react';

const GoogleAuthContext = createContext();

export const useGoogleAuth = () => {
  const context = useContext(GoogleAuthContext);
  if (!context) {
    throw new Error('useGoogleAuth must be used within GoogleAuthProvider');
  }
  return context;
};

const GoogleAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      console.error('Google Client ID not found');
      setIsLoading(false);
      return;
    }

    // Load Google Identity Services
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initializeGoogleSignIn;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [clientId]);

  const initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleSignIn,
      });
      
      // Check if user is already signed in
      checkExistingAuth();
    }
    setIsLoading(false);
  };

  const checkExistingAuth = () => {
    const savedUser = localStorage.getItem('google-user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  };

  const handleGoogleSignIn = (response) => {
    try {
      // Decode JWT token
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
      // Check if email is allowed (you can customize this list)
      const allowedEmails = [
        'trusted.acc2023@gmail.com', // Add your email
        // Add other teacher emails here
      ];
      
      if (allowedEmails.includes(payload.email)) {
        const userData = {
          email: payload.email,
          name: payload.name,
          picture: payload.picture,
          sub: payload.sub
        };
        
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('google-user', JSON.stringify(userData));
      } else {
        alert('Bu email adresi yönetici listesinde bulunmamaktadır.');
        signOut();
      }
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  const signIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    }
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('google-user');
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  const contextValue = {
    user,
    isAuthenticated,
    isLoading,
    signIn,
    signOut
  };

  if (!clientId) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div>
          <p>Google OAuth configuration missing.</p>
          <p>Please set VITE_GOOGLE_CLIENT_ID in environment variables.</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleAuthContext.Provider value={contextValue}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

export default GoogleAuthProvider;