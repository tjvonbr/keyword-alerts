'use client'

import { useState, useEffect } from 'react';

export default function FacebookGroups() {
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isFacebookConnected, setIsFacebookConnected] = useState<boolean>(false)
  const [facebookUserId, setFacebookUserId] = useState<string | null>(null)

  // Check if FB SDK is ready 
  const [isFbReady, setIsFbReady] = useState(false);
  
  useEffect(() => {
    // Function to check if FB SDK is loaded
    const checkFbLoaded = () => {
      if (window.FB) {
        setIsFbReady(true);
        return true;
      }
      return false;
    };
    
    // If FB is already loaded, check to see if user is logged in
    if (checkFbLoaded()) {
      console.log('FB is loaded')
      // window.FB.getLoginStatus((response) => {
      //   const { status } = response

      //   if (status === 'connected') {
      //     setIsFacebookConnected(true)
      //     setFacebookUserId(response.authResponse.userID)
      //     setAccessToken(response.authResponse.accessToken as string)
      //   } else if (status === 'not_authorized') {
      //     console.log('not authorized')
      //   }
      // })

      return
    }
    
    // Otherwise set up a listener for when it's loaded
    const interval = setInterval(() => {
      if (checkFbLoaded()) {
        clearInterval(interval);
      }
    }, 300);
    
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  // Handle Facebook login
  const handleFacebookLogin = () => {
    if (!isFbReady || !window.FB) {
      setError('Facebook SDK is not loaded yet. Please try again in a moment.');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    window.FB.login(function(response) {
      if (response.authResponse) {
        console.log(response)
        // Get access token
        const token = response.authResponse.accessToken;
        setAccessToken(token as string);
        setFacebookUserId(response.authResponse.userID)
        window.FB.api(
          `/${response.authResponse.userID}/groups`,
          (response) => {
            console.log(response)
          }
        )
      } else {
        setLoading(false);
        setError('Facebook login was canceled');
      }
    })
  }

  // Logout function
  const handleLogout = () => {
    if (window.FB) {
      window.FB.logout(function(response) {
        setAccessToken(null);
        setGroups([]);
      });
    } else {
      // If FB SDK isn't available, just clear the state
      setAccessToken(null);
      setGroups([]);
    }
  };

  return (
    <div className="facebook-groups-container">
      <h2>Facebook Groups</h2>
      
      {!accessToken ? (
        <button 
          onClick={handleFacebookLogin} 
          disabled={loading || !isFbReady}
          className="fb-login-button"
        >
          {loading ? 'Loading...' : !isFbReady ? 'Waiting for Facebook SDK...' : 'Login with Facebook'}
        </button>
      ) : (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      )}

      {error && <div className="error-message">{error}</div>}
      {/* {!fbSDKLoaded && !error && <div className="info-message">Initializing Facebook integration...</div>} */}
      
      {groups.length > 0 ? (
        <div className="groups-list">
          <h3>Your Groups ({groups.length})</h3>
          <ul>
            {groups.map(group => (
              <li key={group.id} className="group-item">
                <div className="group-icon">
                  {group.icon && <img src={group.icon} alt={group.name} />}
                </div>
                <div className="group-details">
                  <h4>{group.name}</h4>
                  {group.description && <p>{group.description}</p>}
                  <div className="group-meta">
                    <span>Privacy: {group.privacy}</span>
                    {group.member_count && <span>Members: {group.member_count}</span>}
                    {group.administrator && <span className="admin-badge">Admin</span>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : accessToken && !loading ? (
        <p>No groups found.</p>
      ) : null
    }
    </div>
  )
} 
