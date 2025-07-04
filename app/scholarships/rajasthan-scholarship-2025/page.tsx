import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Rajasthan Scholarship Yojana 2025 - Complete List & Application Process",
  description:
    "Complete guide for Rajasthan Scholarship 2025 including PMS, CM Higher Education Scholarship, SSO portal process, eligibility criteria and application steps.",
}

export default function RajasthanScholarshipPage() {
  const scholarshipSchemes = [
    {
      name: "Post Matric Scholarship (PMS)",
      eligibility: "SC/ST/OBC students in Class 11 and above",
      amount: "₹500 - ₹1,500 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "CM Higher Education Scholarship",
      eligibility: "Meritorious students in higher education",
      amount: "₹5,000 - ₹15,000 per year",
      income: "₹2,00,000 per annum",
    },
    {
      name: "Pre Matric Scholarship",
      eligibility: "SC/ST/OBC students in Classes 9-10",
      amount: "₹225 - ₹700 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "Ambedkar DBT Voucher Scheme",
      eligibility: "SC students for coaching preparation",
      amount: "₹40,000 - ₹80,000",
      income: "₹2,50,000 per annum",
    },
  ]

  const requiredDocuments = [
    "Aadhaar Card",
    "Jan Aadhaar Card (Mandatory)",
    "Income Certificate",
    "Caste Certificate (SC/ST/OBC)",
    "Domicile Certificate",
    "Bank Account Details",
    "Previous Year Marksheet",
    "Current Year Admission Receipt",
    "Passport Size Photograph",
    "Fee Receipt",
  ]

  const ssoSteps = [
    {
      step: 1,
      title: "SSO ID Registration",
      description: "Create SSO ID on sso.rajasthan.gov.in if not already registered",
    },
    {
      step: 2,
      title: "Login to SSO Portal",
      description: "Login using your SSO ID and password",
    },
    {
      step: 3,
      title: "Search Scholarship App",
      description: "Search for 'Scholarship' in the SSO portal applications",
    },
    {
      step: 4,
      title: "Select Scheme",
      description: "Choose appropriate scholarship scheme based on your category",
    },
    {
      step: 5,
      title: "Fill Application",
      description: "Complete the application form with accurate details",
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

  const officialSources = [
    {
      name: "Rajasthan SSO Portal",
      url: "https://sso.rajasthan.gov.in",
      description: "Main portal for all Rajasthan government services",
    },
    {
      name: "Social Justice & Empowerment Department",
      url: "https://sje.rajasthan.gov.in",
      description: "Department managing scholarship schemes",
    },
    {
      name: "Jan Aadhaar Portal",
      url: "https://janaadhaar.rajasthan.gov.in",
      description: "Required for Rajasthan scholarship applications",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-orange-600">State Scholarship</Badge>
              <Badge className="bg-orange-500">Rajasthan</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Rajasthan Scholarship Yojana 2025</h1>
            <p className="text-xl text-orange-100 mb-6">
              Complete guide for Rajasthan scholarships including PMS, CM Higher Education Scholarship, SSO portal
              process and application procedures.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://sso.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply via SSO
                </Button>
              </a>
              <a href="https://sje.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                >
                  Check Guidelines
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
                  Important Dates & Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Period</h4>
                    <p className="text-gray-600">August 2025 - October 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Portal</h4>
                    <p className="text-gray-600">SSO Rajasthan Portal</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Official Website</h4>
                    <p className="text-blue-600">sje.rajasthan.gov.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
                    <p className="text-gray-600">0141-2220194</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rajasthan Scholarship Schemes Overview</h2>
              <p className="text-gray-700 mb-4">
                The Government of Rajasthan provides various scholarship schemes for students belonging to Scheduled
                Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), and economically weaker sections. All
                applications are processed through the SSO (Single Sign-On) portal of Rajasthan.
              </p>
              <p className="text-gray-700 mb-4">
                The major schemes include Post Matric Scholarship (PMS), Chief Minister Higher Education Scholarship,
                Pre Matric Scholarship, and various other targeted schemes for different categories of students. Jan
                Aadhaar registration is mandatory for all scholarship applications in Rajasthan.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly stipend and maintenance allowance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Book allowance and study material support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct benefit transfer to bank accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Additional support for professional courses</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Scholarship Schemes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Major Rajasthan Scholarship Schemes</CardTitle>
                <CardDescription>Complete list of scholarship schemes available in Rajasthan</CardDescription>
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

            {/* SSO Portal Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>SSO Portal Application Process</CardTitle>
                <CardDescription>Step-by-step guide to apply through SSO Rajasthan portal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ssoSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
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
                  <h4 className="font-semibold text-blue-800 mb-2">SSO Registration Requirements:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Valid mobile number for OTP verification</li>
                    <li>• Email ID for account creation</li>
                    <li>• Jan Aadhaar number (mandatory for Rajasthan residents)</li>
                    <li>• Aadhaar card for identity verification</li>
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
                <CardDescription>Documents needed for Rajasthan scholarship application</CardDescription>
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
                  <h4 className="font-semibold text-yellow-800 mb-2">Special Requirements for Rajasthan:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Jan Aadhaar registration is mandatory</li>
                    <li>• All documents should be in PDF format</li>
                    <li>• Maximum file size: 100KB per document</li>
                    <li>• Domicile certificate must be from Rajasthan</li>
                  </ul>
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
                <CardDescription>Verified official portals for Rajasthan scholarships</CardDescription>
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

                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Important Notice:</h4>
                  <p className="text-sm text-red-700">
                    All Rajasthan scholarship applications must be submitted through the official SSO portal only.
                    Beware of fake websites and fraudulent schemes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Quick Apply */}
              <Card className="bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900">Quick Apply</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://sso.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply via SSO Portal
                      </Button>
                    </a>
                    <a href="https://janaadhaar.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Jan Aadhaar Registration
                      </Button>
                    </a>
                    <a href="https://sje.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Check Guidelines
                      </Button>
                    </a>
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
                      href="/scholarships/up-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">UP Scholarship 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Uttar Pradesh state scholarships</p>
                    </Link>
                    <Link
                      href="/scholarships/mp-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">MP Scholarship 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Madhya Pradesh scholarships</p>
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
                  <CardTitle className="text-green-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700 mb-3">
                    Having trouble with Rajasthan scholarship application? Contact support.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span>0141-2220194</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span>sje.raj@rajasthan.gov.in</span>
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
