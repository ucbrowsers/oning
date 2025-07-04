import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "MP Scholarship Portal 2.0 - Apply Online for Post Matric Scholarship 2025",
  description:
    "Complete guide for MP Scholarship Portal 2.0 including application steps, eligibility criteria, KYC & bank linking process for Madhya Pradesh scholarships.",
}

export default function MPScholarshipPage() {
  const scholarshipSchemes = [
    {
      name: "Post Matric Scholarship for SC Students",
      eligibility: "SC students in Class 11 and above",
      amount: "₹380 - ₹920 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "Post Matric Scholarship for ST Students",
      eligibility: "ST students in Class 11 and above",
      amount: "₹380 - ₹920 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "Post Matric Scholarship for OBC Students",
      eligibility: "OBC students in Class 11 and above",
      amount: "₹380 - ₹920 per month",
      income: "₹1,00,000 per annum",
    },
    {
      name: "Pre Matric Scholarship",
      eligibility: "SC/ST/OBC students in Classes 9-10",
      amount: "₹225 - ₹700 per month",
      income: "₹2,50,000 per annum",
    },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Visit MP Portal 2.0",
      description: "Go to scholarshipportal.mp.nic.in and click on 'New Registration'",
    },
    {
      step: 2,
      title: "Samagra ID Verification",
      description: "Enter your 9-digit Samagra ID for verification",
    },
    {
      step: 3,
      title: "Create Login Account",
      description: "Set up username and password for portal access",
    },
    {
      step: 4,
      title: "Complete KYC Process",
      description: "Upload Aadhaar, bank details, and complete KYC verification",
    },
    {
      step: 5,
      title: "Fill Application Form",
      description: "Complete scholarship application with academic details",
    },
    {
      step: 6,
      title: "Upload Documents",
      description: "Upload all required documents in specified format",
    },
    {
      step: 7,
      title: "Submit & Track",
      description: "Submit application and track status online",
    },
  ]

  const kycRequirements = [
    "Aadhaar Card (Mandatory)",
    "Bank Account Details",
    "Samagra ID (9-digit)",
    "Mobile Number (Aadhaar linked)",
    "Email ID",
    "Passport Size Photograph",
  ]

  const requiredDocuments = [
    "Income Certificate (Latest)",
    "Caste Certificate (SC/ST/OBC)",
    "Domicile Certificate (MP)",
    "Previous Year Marksheet",
    "Current Year Admission Receipt",
    "Fee Receipt",
    "Bank Passbook First Page",
    "Aadhaar Card",
    "Samagra ID Card",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-green-600">State Scholarship</Badge>
              <Badge className="bg-green-500">Madhya Pradesh</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">MP Scholarship Portal 2.0</h1>
            <p className="text-xl text-green-100 mb-6">
              Complete guide for Madhya Pradesh Scholarship Portal 2.0 including application steps, KYC process, and
              bank linking for Post Matric scholarships.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://scholarshipportal.mp.nic.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply on Portal 2.0
                </Button>
              </a>
              <a href="https://scholarshipportal.mp.nic.in" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
                  MP Scholarship Portal 2.0 - Key Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Period</h4>
                    <p className="text-gray-600">August 2025 - October 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Portal Version</h4>
                    <p className="text-gray-600">MP Scholarship Portal 2.0</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Official Website</h4>
                    <p className="text-blue-600">scholarshipportal.mp.nic.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
                    <p className="text-gray-600">0755-2661949</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MP Scholarship Portal 2.0 Overview</h2>
              <p className="text-gray-700 mb-4">
                The Madhya Pradesh Government has launched the upgraded MP Scholarship Portal 2.0 for seamless
                application and processing of various scholarship schemes. The new portal features enhanced security,
                better user interface, and integrated KYC verification process.
              </p>
              <p className="text-gray-700 mb-4">
                All scholarship applications for SC, ST, OBC, and other categories in Madhya Pradesh are now processed
                through this portal. The system requires Samagra ID verification and mandatory KYC completion for all
                applicants.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Portal 2.0 Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integrated Samagra ID verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Mandatory KYC and bank account linking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time application tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct benefit transfer (DBT) enabled</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Scholarship Schemes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>MP Scholarship Schemes Available</CardTitle>
                <CardDescription>Major scholarship schemes available through MP Portal 2.0</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {scholarshipSchemes.map((scheme, index) => (
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

            {/* Application Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Step-by-Step Application Process</CardTitle>
                <CardDescription>Complete guide to apply on MP Scholarship Portal 2.0</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
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

            {/* KYC Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>KYC & Bank Linking Process</CardTitle>
                <CardDescription>Mandatory KYC verification requirements for MP Portal 2.0</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    KYC (Know Your Customer) verification is mandatory for all scholarship applications on MP Portal
                    2.0. This process ensures secure and accurate disbursement of scholarship funds.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-3">KYC Requirements:</h4>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {kycRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Bank Linking Process:</h4>
                    <ol className="text-sm text-blue-700 space-y-1">
                      <li>1. Ensure bank account is linked with Aadhaar</li>
                      <li>2. Verify account holder name matches with Aadhaar</li>
                      <li>3. Upload bank passbook first page clearly</li>
                      <li>4. Complete online bank verification process</li>
                    </ol>
                  </div>
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
                <CardDescription>Complete list of documents for MP scholarship application</CardDescription>
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
                    <li>• Maximum file size: 200KB per document</li>
                    <li>• Samagra ID is mandatory for MP residents</li>
                    <li>• Income certificate should be latest (within 6 months)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Quick Apply */}
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">Quick Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://scholarshipportal.mp.nic.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply on Portal 2.0
                      </Button>
                    </a>
                    <a href="https://samagra.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Get Samagra ID
                      </Button>
                    </a>
                    <a href="https://scholarshipportal.mp.nic.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Track Application
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
                      <span className="text-red-800 font-medium">Oct 15, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-yellow-700">Document Upload</span>
                      <span className="text-yellow-800 font-medium">Oct 31, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-blue-700">KYC Completion</span>
                      <span className="text-blue-800 font-medium">Nov 15, 2025</span>
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
                      href="/scholarships/rajasthan-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">Rajasthan Scholarship 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Rajasthan state scholarships</p>
                    </Link>
                    <Link
                      href="/scholarships/up-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">UP Scholarship 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Uttar Pradesh scholarships</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">MP Portal Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700 mb-3">
                    Need help with MP Scholarship Portal 2.0? Contact technical support.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>0755-2661949</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>mpscholarship@mp.gov.in</span>
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
