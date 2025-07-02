/* eslint-disable @typescript-eslint/no-explicit-any */
// Facebook SDK service for accessing groups

// Define types for Facebook SDK
declare global {
  interface Window {
    FB: {
      init: (options: {
        appId: string;
        cookie?: boolean;
        xfbml?: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: {
          authResponse?: {
            accessToken: string;
            expiresIn: string;
            signedRequest: string;
            userID: string;
          };
          status: string;
        }) => void,
        options?: { scope: string }
      ) => void;
      logout: (callback: () => void) => void;
      getLoginStatus: (
        callback: (response: {
          status: string;
          authResponse?: {
            accessToken: string;
            expiresIn: string;
            signedRequest: string;
            userID: string;
          };
        }) => void
      ) => void;
      api: (
        path: string,
        callback: (response: any) => void
      ) => void;
    };
    fbAsyncInit: () => void;
  }
}

// Initialize the Facebook SDK
export const initFacebookSDK = (appId: string): Promise<void> => {
  return new Promise((resolve) => {
    // Load the SDK asynchronously
    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    window.fbAsyncInit = function () {
      window.FB.init({
        appId,
        cookie: true,
        xfbml: true,
        version: 'v19.0', // Use the latest version
      });
      
      resolve();
    };
  });
};

// Login with Facebook and request permissions
export const loginWithFacebook = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          resolve(response);
        } else {
          reject(new Error('User cancelled login or did not fully authorize.'));
        }
      },
      { scope: 'groups_access_member_info,user_managed_groups' }
    );
  });
};

// Get the groups the user is a member of
export const getUserGroups = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    window.FB.api('/me/groups', (response: any) => {
      if (response && !response.error) {
        resolve(response.data);
      } else {
        reject(new Error(response.error?.message || 'Failed to fetch groups'));
      }
    });
  });
};

// Get detailed information about a specific group
export const getGroupDetails = (groupId: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    window.FB.api(`/${groupId}`, (response: any) => {
      if (response && !response.error) {
        resolve(response);
      } else {
        reject(new Error(response.error?.message || 'Failed to fetch group details'));
      }
    });
  });
};

// Check if user is logged in
export const checkLoginStatus = (): Promise<any> => {
  return new Promise((resolve) => {
    window.FB.getLoginStatus((response) => {
      resolve(response);
    });
  });
};

// Logout from Facebook
export const logoutFromFacebook = (): Promise<void> => {
  return new Promise((resolve) => {
    window.FB.logout(() => {
      resolve();
    });
  });
}; 