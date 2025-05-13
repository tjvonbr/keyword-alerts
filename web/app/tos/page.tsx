export default function TosPage() {
  return (
      <div className="p-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p className="mb-4">By accessing or using our service, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Use of Service</h2>
            <p className="mb-4">Our service is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the service will be uninterrupted, secure, or error-free.</p>
            <p className="mb-4">You are responsible for maintaining the confidentiality of your account and password, and you agree to accept responsibility for all activities that occur under your account.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. User Content</h2>
            <p className="mb-4">You maintain ownership of any content you submit to the service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content.</p>
            <p className="mb-4">You are solely responsible for the content you post and its legality, reliability, and appropriateness.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Prohibited Activities</h2>
            <p className="mb-4">You may not:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Use the service for any illegal purpose or violate any laws</li>
              <li>Infringe upon the rights of others</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Engage in any data mining or similar data gathering activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
            <p className="mb-4">In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
            <p className="mb-4">We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users of the service or third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
            <p className="mb-4">We reserve the right to modify or replace these terms at any time. It is your responsibility to check the terms periodically for changes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us.</p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
  )
}