export default function PrivacyPolicyPage() {
  return (
      <div className="p-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including but not limited to your name, email address, and any other information you choose to provide when using our service.</p>
            <p className="mb-4">We also automatically collect certain information about your device and how you interact with our service, including IP address, browser type, and usage patterns.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
            <p className="mb-4">We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Cookies and Tracking</h2>
            <p className="mb-4">We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Children&apos;s Privacy</h2>
            <p className="mb-4">Our service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us.</p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
  )
}