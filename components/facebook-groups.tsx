"use client";

import { signOut } from "@/auth";
import { useEffect, useState } from "react";

export default function FacebookGroups() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

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
      // window.FB.getLoginStatus((response) => {
      //   const { status } = response

      //   if (status === 'connected') {
      //     setIsFacebookConnected(true)
      //     setFacebookUserId(response.authResponse.userID)
      //     setAccessToken(response.authResponse.accessToken as string)
      //   } else if (status === 'not_authorized') {
      //   }
      // })

      return;
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
      setError("Facebook SDK is not loaded yet. Please try again in a moment.");
      return;
    }

    setLoading(true);
    setError(null);

    window.FB.login(function (response) {
      if (response.authResponse) {
        // Get access token
        const token = response.authResponse.accessToken;
        setAccessToken(token as string);
        window.FB.api(`/${response.authResponse.userID}/groups`, (response) => {
          console.log(response);
        });
      } else {
        setLoading(false);
        setError("Facebook login was canceled");
      }
    });
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
          {loading
            ? "Loading..."
            : !isFbReady
              ? "Waiting for Facebook SDK..."
              : "Login with Facebook"}
        </button>
      ) : (
        <button
          onClick={() => signOut()}
          className="logout-button"
        >
          Logout
        </button>
      )}

      {error && <div className="error-message">{error}</div>}
      {/* {!fbSDKLoaded && !error && <div className="info-message">Initializing Facebook integration...</div>} */}
    </div>
  );
}
