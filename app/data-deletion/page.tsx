export default function DataDeletionPage() {
  return (
    <div className="p-8 flex-1">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Data Deletion Instructions</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Your Right to Data Deletion</h2>
          <p className="mb-4">
            We respect your privacy and your right to control your personal data. This page provides clear instructions on how you can delete your data from our application at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What Data We Store</h2>
          <p className="mb-4">Based on your account and usage, we may store the following types of data:</p>
          <ul className="list-disc pl-8 mb-4">
            <li><strong>Account Information:</strong> Your name, email address, and account credentials</li>
            <li><strong>Authentication Data:</strong> Login sessions and authentication tokens</li>
            <li><strong>Facebook Integration:</strong> Facebook account connections and group data (if connected)</li>
            <li><strong>Usage Data:</strong> Information about how you use our services</li>
            <li><strong>System Logs:</strong> Technical logs for service improvement and security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">How to Delete Your Data</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Option 1: Delete Your Account (Recommended)</h3>
            <p className="mb-3">This will permanently delete all your data from our system:</p>
            <ol className="list-decimal pl-8 mb-4">
              <li>Log into your account at <a href="/sign-in" className="text-blue-600 hover:underline">our sign-in page</a></li>
              <li>Navigate to your dashboard</li>
              <li>Go to Account Settings (if available) or contact our support team</li>
              <li>Request account deletion</li>
              <li>Confirm your request via email verification</li>
            </ol>
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Account deletion is permanent and cannot be undone. All your data will be permanently removed from our systems.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Option 2: Contact Support</h3>
            <p className="mb-3">If you cannot access your account or prefer to contact us directly:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Send an email to our support team with your deletion request</li>
              <li>Include your email address and any relevant account information</li>
              <li>Specify whether you want a complete account deletion or selective data removal</li>
              <li>We will respond within 30 days to confirm your request</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Option 3: Disconnect Facebook Integration</h3>
            <p className="mb-3">If you only want to remove Facebook-related data:</p>
            <ol className="list-decimal pl-8 mb-4">
              <li>Log into your account</li>
              <li>Go to the Facebook Groups section</li>
              <li>Click on &quot;Disconnect Facebook&quot; or similar option</li>
              <li>Confirm the disconnection</li>
            </ol>
            <p className="text-sm text-gray-600">
              This will remove your Facebook connection and associated data while keeping your account active.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Export (Before Deletion)</h2>
          <p className="mb-4">
            Before deleting your account, you may want to export your data for your records:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Contact our support team to request a data export</li>
            <li>We will provide your data in a commonly used, machine-readable format</li>
            <li>This process typically takes 7-14 days</li>
            <li>There is no charge for data export requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What Happens After Deletion</h2>
          <ul className="list-disc pl-8 mb-4">
            <li><strong>Immediate:</strong> Your account will be deactivated and you will lose access to all services</li>
            <li><strong>Within 30 days:</strong> All your personal data will be permanently deleted from our active systems</li>
            <li><strong>Within 90 days:</strong> Data will be removed from our backup systems</li>
            <li><strong>Legal requirements:</strong> Some data may be retained longer if required by law or for legitimate business purposes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Important Considerations</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-yellow-800 mb-2">Before You Delete:</h4>
            <ul className="list-disc pl-6 text-yellow-700">
              <li>Account deletion is permanent and cannot be undone</li>
              <li>You will lose access to all your data and services</li>
              <li>If you have any active subscriptions, consider canceling them first</li>
              <li>Download any important data before proceeding</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about data deletion or need assistance:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li><strong>Email:</strong> [Your support email address]</li>
            <li><strong>Response Time:</strong> We aim to respond to all requests within 30 days</li>
            <li><strong>Verification:</strong> We may need to verify your identity before processing deletion requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Your Rights Under Privacy Laws</h2>
          <p className="mb-4">
            Depending on your location, you may have additional rights under privacy laws such as GDPR, CCPA, or other local regulations. Our data deletion process is designed to comply with these requirements.
          </p>
          <p className="mb-4">
            If you believe we have not properly handled your deletion request, you have the right to lodge a complaint with your local data protection authority.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
          <h3 className="font-medium text-blue-800 mb-2">Need Help?</h3>
          <p className="text-blue-700 mb-3">
            If you&apos;re having trouble with the deletion process or have questions, please don&apos;t hesitate to contact our support team. We&apos;re here to help ensure your data is handled according to your wishes.
          </p>
          <a 
            href="/sign-in" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
} 