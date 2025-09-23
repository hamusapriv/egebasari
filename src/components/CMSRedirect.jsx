import { useEffect } from 'react';

const CMSRedirect = () => {
  useEffect(() => {
    // Redirect to Netlify CMS
    window.location.href = '/admin/';
  }, []);

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
        <p>Yönetici paneline yönlendiriliyorsunuz...</p>
        <p>Redirecting to admin panel...</p>
      </div>
    </div>
  );
};

export default CMSRedirect;