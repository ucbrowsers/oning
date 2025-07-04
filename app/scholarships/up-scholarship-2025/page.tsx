import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "UP Scholarship 2025 Online Form - Last Date, Eligibility & Apply Link",
  description:
    "Complete guide for UP Scholarship 2025 including Pre-Matric & Post-Matric scholarships, eligibility criteria for SC/ST/OBC/General, required documents, renewal process and status check.",
}

const officialSources = [
  {
    name: "UP Scholarship Official Portal",
    url: "https://scholarship.up.gov.in",
    description: "Main application portal for UP scholarships",
  },
  {
    name: "UP Government Social Welfare Department",
    url: "https://swd.up.gov.in",
    description: "Department managing scholarship schemes",
  },
  {
    name: "National Scholarship Portal",
    url: "https://scholarships.gov.in",
    description: "Central portal for all government scholarships",
  },
]

export default function UPScholarshipPage() {
  const eligibilityData = [
    {
      category: "SC/ST Students",
      income: "₹2,50,000 per annum",
      courses: "All courses from Class 9 to PhD",
      amount: "₹230 to ₹1,200 per month",
    },
    {
      category: "OBC Students",
      income: "₹2,00,000 per annum",
      courses: "All courses from Class 9 to PhD",
      amount: "₹230 to ₹1,200 per month",
    },
    {
      category: "General/EWS",
      income: "₹2,00,000 per annum",
      courses: "Professional courses only",
      amount: "₹230 to ₹1,000 per month",
    },
  ]

  const requiredDocuments = [
    "Aadhaar Card",
    "Income Certificate (Latest)",
    "Caste Certificate (SC/ST/OBC)",
    "Bank Account Details",
    "Previous Year Marksheet",
    "Current Year Admission Receipt",
    "Passport Size Photograph",
    "School/College ID Card",
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Visit Official Portal",
      description: "Go to scholarship.up.gov.in and click on 'New Registration'",
    },
    {
      step: 2,
      title: "Create Account",
      description: "Fill basic details and create login credentials",
    },
    {
      step: 3,
      title: "Complete Profile",
      description: "Add personal, academic and family income details",
    },
    {
      step: 4,
      title: "Upload Documents",
      description: "Upload all required documents in specified format",
    },
    {
      step: 5,
      title: "Submit Application",
      description: "Review all details and submit the application form",
    },
    {
      step: 6,
      title: "Print Receipt",
      description: "Take printout of application receipt for future reference",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-blue-600">State Scholarship</Badge>
              <Badge className="bg-blue-500">2025 Edition</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">UP Scholarship 2025 Online Form</h1>
            <p className="text-xl text-blue-100 mb-6">
              Complete guide for Uttar Pradesh Pre-Matric & Post-Matric scholarships with last date, eligibility
              criteria, and step-by-step application process for 2025.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://scholarship.up.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </a>
              <a href="https://scholarship.up.gov.in" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Check Status
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Quick Info */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Important Dates & Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Period</h4>
                    <p className="text-gray-600">July 2025 - October 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Renewal Period</h4>
                    <p className="text-gray-600">August 2025 - November 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Official Website</h4>
                    <p className="text-blue-600">scholarship.up.gov.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
                    <p className="text-gray-600">0522-2209270</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">UP Scholarship 2025 Overview</h2>
              <p className="text-gray-700 mb-4">
                The Uttar Pradesh Government provides financial assistance to students belonging to Scheduled Castes
                (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), and General category through various
                scholarship schemes. The UP Scholarship 2025 aims to support students in pursuing their education from
                Class 9 to PhD level across different streams.
              </p>
              <p className="text-gray-700 mb-4">
                The scholarship program is divided into two main categories: Pre-Matric Scholarships (for students
                studying in Classes 9-10) and Post-Matric Scholarships (for students studying in Classes 11-12 and
                higher education). The application process is conducted online through the official UP Scholarship
                portal.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Benefits of UP Scholarship</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly stipend ranging from ₹230 to ₹1,200 based on course level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Additional maintenance allowance for hostel students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Book allowance and other academic expenses coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct benefit transfer (DBT) to student's bank account</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Eligibility Criteria for UP Scholarship 2025</CardTitle>
                <CardDescription>Check category-wise eligibility requirements and income limits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {eligibilityData.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{item.category}</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Income Limit:</span>
                          <p className="text-gray-600">{item.income}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Eligible Courses:</span>
                          <p className="text-gray-600">{item.courses}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Scholarship Amount:</span>
                          <p className="text-gray-600">{item.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Additional Requirements:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Student must be a permanent resident of Uttar Pradesh</li>
                    <li>• Minimum 50% marks in the previous qualifying examination</li>
                    <li>• Age limit: 35 years for general courses, 40 years for professional courses</li>
                    <li>• Should not be receiving any other government scholarship</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Required Documents
                </CardTitle>
                <CardDescription>Keep these documents ready before starting your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Document Guidelines:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• All documents should be in PDF format only</li>
                    <li>• Maximum file size: 100KB per document</li>
                    <li>• Scan documents clearly and ensure text is readable</li>
                    <li>• Income certificate should not be older than 6 months</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Step-by-Step Application Process</CardTitle>
                <CardDescription>Follow these steps to apply for UP Scholarship 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Renewal Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Scholarship Renewal Process</CardTitle>
                <CardDescription>How to renew your existing UP scholarship for the next academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Students who have already received UP scholarship in previous years need to renew their scholarship
                    annually. The renewal process is simpler than fresh applications but requires updated documents.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-3">Renewal Requirements:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Previous year's scholarship registration number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Latest marksheet of the completed academic year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Current year admission receipt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Updated income certificate (if income has changed)</span>
                    </li>
                  </ul>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Renewal Timeline:</h4>
                    <p className="text-sm text-green-700">
                      Renewal applications typically open in August and close by November. Students should renew their
                      scholarship within the specified timeline to avoid any interruption in scholarship payments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Check */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How to Check UP Scholarship Status</CardTitle>
                <CardDescription>Track your application status and payment details online</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    After submitting your UP scholarship application, you can track its status online using your
                    registration number and other details.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-3">Status Check Steps:</h4>
                  <ol className="space-y-2 mb-4">
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">1.</span>
                      <span className="text-sm">Visit the official UP scholarship portal</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">2.</span>
                      <span className="text-sm">Click on "Status" or "Track Application" option</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">3.</span>
                      <span className="text-sm">Enter your registration number and date of birth</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">4.</span>
                      <span className="text-sm">Click submit to view your application status</span>
                    </li>
                  </ol>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Status Meanings:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>
                        • <strong>Submitted:</strong> Application received and under review
                      </li>
                      <li>
                        • <strong>Verified:</strong> Documents verified by concerned authority
                      </li>
                      <li>
                        • <strong>Approved:</strong> Scholarship approved, payment processing
                      </li>
                      <li>
                        • <strong>Rejected:</strong> Application rejected due to incomplete/incorrect information
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Issues */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Common Issues & Solutions</CardTitle>
                <CardDescription>Troubleshooting guide for frequent problems during application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Problem: Unable to upload documents</h4>
                    <p className="text-sm text-gray-600">
                      <strong>Solution:</strong> Ensure documents are in PDF format and under 100KB. Use online PDF
                      compressor tools if needed.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Problem: Registration number not generated</h4>
                    <p className="text-sm text-gray-600">
                      <strong>Solution:</strong> Complete all mandatory fields and verify mobile number through OTP
                      before final submission.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Problem: Bank account verification failed</h4>
                    <p className="text-sm text-gray-600">
                      <strong>Solution:</strong> Ensure bank account is linked with Aadhaar and account holder name
                      matches exactly with application.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Problem: Application showing as rejected</h4>
                    <p className="text-sm text-gray-600">
                      <strong>Solution:</strong> Check rejection reason in status page and reapply with correct
                      documents during the correction window.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Official Sources */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Official Sources & Links
                </CardTitle>
                <CardDescription>Verified official portals and government sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {officialSources.map((source, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{source.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{source.description}</p>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {source.url}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notice:</h4>
                  <p className="text-sm text-yellow-700">
                    Always verify information from official government sources. This website provides guidance only.
                    Final applications must be submitted through official portals mentioned above.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Quick Apply */}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Quick Apply</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apply for Fresh Scholarship
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Renew Existing Scholarship
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Check Application Status
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Scholarships</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="/scholarships/nsp-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">National Scholarship Portal 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Central government scholarships</p>
                    </Link>
                    <Link
                      href="/scholarships/rajasthan-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">Rajasthan Scholarship 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">State scholarship for Rajasthan students</p>
                    </Link>
                    <Link
                      href="/scholarships/mp-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">MP Scholarship Portal 2.0</h4>
                      <p className="text-xs text-gray-600 mt-1">Madhya Pradesh scholarship scheme</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Important Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      Official UP Scholarship Portal
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      Application Guidelines PDF
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      Income Certificate Format
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      Helpline & Support
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700 mb-3">
                    Having trouble with your application? Our support team is here to help.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span>0522-2209270</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span>info@scholarshipguide.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
