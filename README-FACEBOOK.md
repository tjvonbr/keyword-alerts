# Facebook SDK Integration Guide

This guide explains how to set up the Facebook SDK integration for accessing your Facebook groups using the official Facebook JavaScript SDK.

## Prerequisites

1. A Facebook account
2. Membership in at least one Facebook group
3. A Facebook Developer account

## Creating a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" in the top right
3. Click "Create App"
4. Select "Consumer" as the app type
5. Fill in the app name and contact email, then click "Create App"
6. In the dashboard, find and add the "Facebook Login" product
7. Under Facebook Login > Settings:
   - Add `https://localhost:3000` to the Valid OAuth Redirect URIs
   - Save changes

## Configuration

1. In the file `components/FacebookGroups.tsx`, replace the placeholder with your Facebook App ID:

```typescript
// Replace with your Facebook App ID
const FACEBOOK_APP_ID = "YOUR_FACEBOOK_APP_ID";
```

Your Facebook App ID can be found in the App Dashboard under Settings > Basic.

## How It Works

This implementation uses the official Facebook JavaScript SDK loaded directly from Facebook's CDN. We:

1. Load the SDK asynchronously from `https://connect.facebook.net/en_US/sdk.js`
2. Initialize the SDK with your App ID
3. Use the SDK's methods to authenticate and access group data

## Required Permissions

The app requests the following permissions:
- `groups_access_member_info`: To access basic information about the groups you're a member of
- `user_managed_groups`: To access groups where you're an administrator

## Testing Locally

When testing locally, Facebook requires HTTPS. You can set up a local HTTPS server:

1. Install `local-ssl-proxy`:
   ```
   npm install -g local-ssl-proxy
   ```

2. Run your Next.js app:
   ```
   npm run dev
   ```

3. In another terminal, start the proxy:
   ```
   local-ssl-proxy --source 3000 --target 3001
   ```

4. Access your app at `https://localhost:3000`

## Usage

1. Navigate to `/facebook-groups` in the application
2. Click the "Login with Facebook" button
3. Grant the requested permissions
4. View your groups once authenticated

## Troubleshooting

- **Can't see any groups**: Make sure you've granted the required permissions. You can check the permissions you've granted by visiting [Facebook App Settings](https://www.facebook.com/settings?tab=applications).
  
- **Login fails**: Ensure your Facebook App is properly configured with the correct OAuth redirect URIs.
  
- **Error in API calls**: Check the Facebook App status in the Developer Dashboard. The app might be in development mode, which restricts access to users listed as developers or testers.

## Additional Notes

For production deployment, you'll need to submit your app for review by Facebook to request the necessary permissions for all users. During development, only app administrators and test users can use the app with the requested permissions.

## Official Documentation

For more details on the Facebook JavaScript SDK, refer to the [official Facebook SDK documentation](https://developers.facebook.com/docs/javascript/reference/v19.0). 