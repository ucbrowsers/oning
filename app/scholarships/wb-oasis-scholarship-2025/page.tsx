import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "West Bengal Oasis Scholarship 2025 - SC/ST/OBC Apply Guide",
  description:
    "Complete guide for West Bengal OASIS Scholarship 2025 including scholarship types, step-by-step registration, renewal process and application guidelines.",
}

export default function WBOasisScholarshipPage() {
  const oasisSchemes = [
    {
      name: "Aikyashree Scholarship",
      eligibility: "SC/ST students in higher education",
      amount: "₹1,000 - ₹5,000 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "Swami Vivekananda Merit-cum-Means Scholarship",
      eligibility: "General category meritorious students",
      amount: "₹1,000 - ₹5,000 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "Minority Scholarship",
      eligibility: "Minority community students",
      amount: "₹1,000 - ₹5,000 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "OBC Scholarship",
      eligibility: "OBC students in higher education",
      amount: "₹1,000 - ₹5,000 per month",
      income: "₹1,00,000 per annum",
    },
  ]

  const registrationSteps = [
    {
      step: 1,
      title: "Visit OASIS Portal",
      description: "Go to oasis.gov.in and click on 'Student Registration'",
    },
    {
      step: 2,
      title: "Choose Scholarship Type",
      description: "Select appropriate scholarship scheme based on your category",
    },
    {
      step: 3,
      title: "Fill Registration Form",
      description: "Complete basic details and create login credentials",
    },
    {
      step: 4,
      title: "Verify Mobile & Email",
      description: "Verify your contact details through OTP",
    },
    {
      step: 5,
      title: "Complete Application",
      description: "Fill detailed application form with academic information",
    },
    {
      step: 6,
      title: "Upload Documents",
      description: "Upload all required documents in specified format",
    },
    {
      step: 7,
      title: "Submit Application",
      description: "Review and submit your application for processing",
    },
  ]

  const requiredDocuments = [
    "Aadhaar Card",
    "Bank Account Details",
    "Income Certificate (Latest)",
    "Caste Certificate (SC/ST/OBC)",
    "Domicile Certificate (WB)",
    "Previous Year Marksheet",
    "Current Year Admission Receipt",
    "Passport Size Photograph",
    "Fee Receipt",
    "Institution Verification Certificate",
  ]

  const renewalProcess = [
    "Login to OASIS portal with existing credentials",
    "Click on 'Renewal Application' option",
    "Update academic details and current year information",
    "Upload latest marksheet and admission receipt",
    "Verify and update bank account details if changed",
    "Submit renewal application before deadline",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-indigo-600">State Scholarship</Badge>
              <Badge className="bg-indigo-500">West Bengal</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">West Bengal OASIS Scholarship 2025</h1>
            <p className="text-xl text-indigo-100 mb-6">
              Complete guide for West Bengal OASIS portal scholarships including SC/ST/OBC schemes, registration
              process, and renewal procedures.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://oasis.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply on OASIS
                </Button>
              </a>
              <a href="https://svmcm.wbhed.gov.in" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent"
                >
                  Swami Vivekananda Portal
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
                  OASIS Portal - Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Period</h4>
                    <p className="text-gray-600">September 2025 - November 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Renewal Period</h4>
                    <p className="text-gray-600">October 2025 - December 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Official Portal</h4>
                    <p className="text-blue-600">oasis.gov.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
                    <p className="text-gray-600">033-2321-4412</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">West Bengal OASIS Portal Overview</h2>
              <p className="text-gray-700 mb-4">
                OASIS (Online Application for Scholarship in Higher Education) is the official portal of West Bengal
                Government for processing various scholarship schemes. The portal manages scholarships for SC, ST, OBC,
                minority communities, and general category students.
              </p>
              <p className="text-gray-700 mb-4">
                The major schemes include Aikyashree Scholarship, Swami Vivekananda Merit-cum-Means Scholarship,
                Minority Scholarship, and OBC Scholarship. All applications are processed online through the OASIS
                portal with direct benefit transfer to student bank accounts.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">OASIS Portal Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Single portal for multiple scholarship schemes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Online application and document submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time application tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct bank transfer of scholarship amount</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* OASIS Scholarship Schemes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Major OASIS Scholarship Schemes</CardTitle>
                <CardDescription>Popular scholarship schemes available through OASIS portal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {oasisSchemes.map((scheme, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{scheme.name}</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Eligibility:</span>
                          <p className="text-gray-600">{scheme.eligibility}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Amount:</span>
                          <p className="text-gray-600">{scheme.amount}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Income Limit:</span>
                          <p className="text-gray-600">{scheme.income}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Registration Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Step-by-Step Registration Process</CardTitle>
                <CardDescription>Complete guide to register on OASIS portal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registrationSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Registration Tips:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Keep all documents ready before starting registration</li>
                    <li>• Use a valid email ID and mobile number</li>
                    <li>• Remember your login credentials for future use</li>
                    <li>• Complete application in one sitting to avoid data loss</li>
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
                <CardDescription>Complete list of documents for OASIS scholarship application</CardDescription>
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

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Document Guidelines:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• All documents must be in PDF format</li>
                    <li>• Maximum file size: 100KB per document</li>
                    <li>• Documents should be clear and readable</li>
                    <li>• West Bengal domicile certificate is mandatory</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Renewal Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>OASIS Scholarship Renewal Process</CardTitle>
                <CardDescription>How to renew your existing OASIS scholarship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Students who received scholarships through OASIS portal in previous years need to renew their
                    applications annually. The renewal process is mandatory to continue receiving scholarship benefits.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-3">Renewal Steps:</h4>
                  <ol className="space-y-2 mb-4">
                    {renewalProcess.map((step, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="font-semibold text-indigo-600">{index + 1}.</span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Renewal Timeline:</h4>
                    <p className="text-sm text-green-700">
                      Renewal applications typically open in October and close by December. Students must complete
                      renewal within the specified timeline to avoid scholarship discontinuation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Quick Apply */}
              <Card className="bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-900">Quick Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://oasis.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply on OASIS
                      </Button>
                    </a>
                    <a href="https://svmcm.wbhed.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Swami Vivekananda Portal
                      </Button>
                    </a>
                    <a href="https://oasis.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Check Application Status
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Important Deadlines */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-red-700">Fresh Applications</span>
                      <span className="text-red-800 font-medium">Nov 15, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-yellow-700">Renewal Applications</span>
                      <span className="text-yellow-800 font-medium">Dec 15, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-blue-700">Document Verification</span>
                      <span className="text-blue-800 font-medium">Dec 31, 2025</span>
                    </div>
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
                      href="/scholarships/swami-vivekananda-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">Swami Vivekananda Scholarship</h4>
                      <p className="text-xs text-gray-600 mt-1">Merit-cum-means scholarship for WB students</p>
                    </Link>
                    <Link
                      href="/scholarships/nsp-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">NSP Portal 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">National Scholarship Portal</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">OASIS Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700 mb-3">
                    Need help with OASIS portal? Contact technical support team.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span>033-2321-4412</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span>oasis@wbhed.gov.in</span>
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
