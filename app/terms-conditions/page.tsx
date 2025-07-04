export const metadata = {
  title: "Terms & Conditions - ScholarshipGuide | User Agreement & Service Terms",
  description:
    "Read our terms and conditions to understand the rules and guidelines for using ScholarshipGuide services, including user responsibilities and service limitations.",
}

export default function TermsConditionsPage() {
  const domain = typeof window !== "undefined" ? window.location.hostname.replace("www.", "") : "scholarshipguide.com"
  const siteName = domain.split(".")[0].charAt(0).toUpperCase() + domain.split(".")[0].slice(1)
  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>

          <div className="text-sm text-gray-600 mb-8">
            <p>
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p>
              <strong>Last Updated:</strong> {currentDate}
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using {siteName} ("{domain}"), you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">{siteName} is an educational information platform that provides:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Information about government and private scholarship schemes</li>
              <li>Application guidance and support services</li>
              <li>Educational resources and tools</li>
              <li>Updates on scholarship deadlines and notifications</li>
              <li>Document preparation assistance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Accurate Information</h3>
            <p className="text-gray-700 mb-4">
              You agree to provide accurate, current, and complete information when using our services. You are
              responsible for maintaining the accuracy of your information and updating it as necessary.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Proper Use</h3>
            <p className="text-gray-700 mb-4">
              You agree to use our services only for lawful purposes and in accordance with these terms. You will not:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate another person or entity</li>
              <li>Collect or harvest information from other users</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Availability</h2>
            <p className="text-gray-700 mb-6">
              We strive to maintain continuous service availability, but we do not guarantee uninterrupted access. The
              service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the
              right to modify, suspend, or discontinue any part of the service at any time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Accuracy</h2>
            <p className="text-gray-700 mb-6">
              While we make every effort to ensure the accuracy and timeliness of scholarship information, we cannot
              guarantee that all information is completely accurate, current, or error-free. Users are advised to verify
              information independently from official sources before making any decisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. No Guarantee of Success</h2>
            <p className="text-gray-700 mb-6">
              ScholarshipGuide provides information and guidance services only. We do not guarantee that users will
              receive scholarships or that applications will be successful. Scholarship selection depends on various
              factors including eligibility, merit, and selection criteria set by scholarship providers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Our Content</h3>
            <p className="text-gray-700 mb-4">
              All content on ScholarshipGuide, including text, graphics, logos, images, and software, is our property or
              licensed to us and is protected by copyright and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 User Content</h3>
            <p className="text-gray-700 mb-6">
              By submitting content to our platform, you grant us a non-exclusive, royalty-free license to use, modify,
              and display such content for the purpose of providing our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy
              Policy, which is incorporated into these terms by reference. By using our services, you consent to the
              collection and use of your information as described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Links and Services</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites and services, including government portals and
              educational institutions. We are not responsible for the content, privacy policies, or practices of these
              third-party sites. Your use of third-party services is at your own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimers</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Service Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              Our services are provided "as is" and "as available" without any warranties of any kind, either express or
              implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 Information Disclaimer</h3>
            <p className="text-gray-700 mb-6">
              The information provided on our platform is for general informational purposes only and should not be
              considered as professional, legal, or financial advice. Users should consult with appropriate
              professionals for specific advice related to their circumstances.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, ScholarshipGuide and its affiliates, officers, employees, agents,
              and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, data, or other intangible losses, resulting from
              your use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify, defend, and hold harmless ScholarshipGuide and its affiliates from and against any
              claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of
              or in any way connected with your use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach these terms. Upon termination, your
              right to use the service will cease immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify or replace these terms at any time. If a revision is material, we will try
              to provide at least 30 days notice prior to any new terms taking effect. Your continued use of the service
              after such changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 mb-6">
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its
              conflict of law provisions. Any legal action or proceeding arising under these terms will be brought
              exclusively in the courts of New Delhi, India.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Severability</h2>
            <p className="text-gray-700 mb-6">
              If any provision of these terms is held to be invalid or unenforceable by a court, the remaining
              provisions will remain in effect. The invalid or unenforceable provision will be deemed modified to the
              extent necessary to make it valid and enforceable.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Email:</strong> info@{domain}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91-9876543210
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {siteName}, New Delhi, India
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notice</h3>
              <p className="text-yellow-800 text-sm">
                These terms and conditions constitute the entire agreement between you and {siteName} regarding the use
                of our services. Please read them carefully and contact us if you have any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
