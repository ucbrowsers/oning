export const metadata = {
  title: "Privacy Policy - ScholarshipGuide | Data Protection & User Privacy",
  description:
    "Read our comprehensive privacy policy to understand how ScholarshipGuide collects, uses, and protects your personal information while providing scholarship guidance services.",
}

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

          <div className="text-sm text-gray-600 mb-8">
            <p>
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p>
              <strong>Last Updated:</strong> {currentDate}
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Welcome to {siteName} ("{domain}"). We are committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website and use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Name and contact information (email address, phone number)</li>
              <li>Educational background and academic details</li>
              <li>Demographic information (age, location, category)</li>
              <li>Financial information (family income, for scholarship eligibility)</li>
              <li>Communication preferences and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">When you visit our website, we automatically collect:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>IP address and browser information</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website and search terms used</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Providing scholarship information and guidance services</li>
              <li>Personalizing your experience on our website</li>
              <li>Sending relevant scholarship notifications and updates</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Improving our website and services</li>
              <li>Analyzing website usage and user behavior</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Providers</h3>
            <p className="text-gray-700 mb-4">
              We may share information with trusted third-party service providers who assist us in operating our
              website, conducting business, or serving our users, provided they agree to keep this information
              confidential.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Legal Requirements</h3>
            <p className="text-gray-700 mb-4">
              We may disclose your information when required by law, court order, or government regulation, or when we
              believe disclosure is necessary to protect our rights, property, or safety, or that of others.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Business Transfers</h3>
            <p className="text-gray-700 mb-6">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of
              the business transaction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small
              files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect
              some website functionality.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites, including government scholarship portals and
              educational institutions. We are not responsible for the privacy practices or content of these external
              sites. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>Access:</strong> Request access to your personal information we hold
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to another service
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing communications
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing in certain circumstances
              </li>
            </ul>
            <p className="text-gray-700 mb-6">To exercise these rights, please contact us at info@{domain}.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are intended for users aged 13 and above. We do not knowingly collect personal information
              from children under 13. If we become aware that we have collected information from a child under 13, we
              will take steps to delete such information promptly.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When
              information is no longer needed, we securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than your country of residence. We
              ensure that such transfers comply with applicable data protection laws and implement appropriate
              safeguards to protect your information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of any material changes by posting the updated policy on our website and
              updating the "Last Updated" date. Your continued use of our services after such changes constitutes
              acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
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

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes
              arising from this policy shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Your Privacy Matters</h3>
              <p className="text-blue-800 text-sm">
                We are committed to protecting your privacy and maintaining the confidentiality of your personal
                information. If you have any questions or concerns about how we handle your data, please don't hesitate
                to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
