import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "National Scholarship Portal 2025 (NSP) - Central Schemes & Registration Guide",
  description:
    "Complete guide for National Scholarship Portal 2025 including central and UGC scholarships, eligibility criteria, registration process, and renewal procedures.",
}

export default function NSPScholarshipPage() {
  const centralSchemes = [
    {
      name: "Pre-Matric Scholarship for SC Students",
      eligibility: "SC students studying in Classes 9-10",
      amount: "₹225-₹700 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "Post-Matric Scholarship for SC Students",
      eligibility: "SC students in Class 11 and above",
      amount: "₹230-₹1,200 per month",
      income: "₹2,50,000 per annum",
    },
    {
      name: "Pre-Matric Scholarship for OBC Students",
      eligibility: "OBC students studying in Classes 9-10",
      amount: "₹225-₹700 per month",
      income: "₹1,00,000 per annum",
    },
    {
      name: "Post-Matric Scholarship for OBC Students",
      eligibility: "OBC students in Class 11 and above",
      amount: "₹230-₹1,200 per month",
      income: "₹1,00,000 per annum",
    },
    {
      name: "Merit-cum-Means Scholarship for Professional Courses",
      eligibility: "Students in technical/professional courses",
      amount: "₹20,000 per annum",
      income: "₹2,50,000 per annum",
    },
  ]

  const requiredDocuments = [
    "Aadhaar Card (Mandatory)",
    "Bank Account Details (Aadhaar linked)",
    "Income Certificate (Latest)",
    "Caste Certificate (SC/ST/OBC)",
    "Domicile Certificate",
    "Previous Year Marksheet",
    "Current Year Admission Receipt",
    "Passport Size Photograph",
    "Fee Receipt of Current Year",
    "Bonafide Certificate from Institution",
  ]

  const registrationSteps = [
    {
      step: 1,
      title: "Visit NSP Portal",
      description: "Go to scholarships.gov.in and click on 'New Registration'",
    },
    {
      step: 2,
      title: "Choose Scholarship Scheme",
      description: "Select appropriate central or state scholarship scheme",
    },
    {
      step: 3,
      title: "Fill Registration Form",
      description: "Complete basic details and create login credentials",
    },
    {
      step: 4,
      title: "Verify Mobile & Email",
      description: "Verify your mobile number and email through OTP",
    },
    {
      step: 5,
      title: "Complete Application",
      description: "Fill detailed application form with all required information",
    },
    {
      step: 6,
      title: "Upload Documents",
      description: "Upload all required documents in specified format",
    },
    {
      step: 7,
      title: "Submit & Print",
      description: "Submit application and take printout of receipt",
    },
  ]

  const officialSources = [
    {
      name: "National Scholarship Portal",
      url: "https://scholarships.gov.in",
      description: "Main portal for all central government scholarships",
    },
    {
      name: "Ministry of Social Justice & Empowerment",
      url: "https://socialjustice.gov.in",
      description: "Ministry managing SC/ST/OBC scholarships",
    },
    {
      name: "Ministry of Minority Affairs",
      url: "https://minorityaffairs.gov.in",
      description: "Ministry for minority community scholarships",
    },
    {
      name: "UGC Scholarships",
      url: "https://ugc.ac.in",
      description: "University Grants Commission scholarship schemes",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-green-600">Central Scheme</Badge>
              <Badge className="bg-green-500">NSP Portal</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">National Scholarship Portal 2025</h1>
            <p className="text-xl text-green-100 mb-6">
              Complete guide to NSP registration, central government scholarships, UGC schemes, and step-by-step
              application process for all eligible students.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Register on NSP
                </Button>
              </a>
              <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
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
                  NSP 2025 - Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Registration Period</h4>
                    <p className="text-gray-600">July 2025 - October 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Renewal Period</h4>
                    <p className="text-gray-600">August 2025 - November 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Official Portal</h4>
                    <a
                      href="https://scholarships.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      scholarships.gov.in
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
                    <p className="text-gray-600">0120-6619540</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is National Scholarship Portal (NSP)?</h2>
              <p className="text-gray-700 mb-4">
                The National Scholarship Portal (NSP) is a one-stop solution through which various services starting
                from student application, application receipt, processing, sanction and disbursal of various
                scholarships to Students are facilitated. NSP has been taken as Mission Mode Project under Digital
                India.
              </p>
              <p className="text-gray-700 mb-4">
                The portal provides a unified platform for students to apply for various Central and State Government
                scholarships. It aims to ensure effective delivery of scholarship services to the students in a
                transparent manner. The portal covers scholarships from various ministries and departments of Government
                of India as well as State Governments.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Key Features of NSP Portal</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Single platform for multiple scholarship schemes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct Benefit Transfer (DBT) to student bank accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time application tracking and status updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Paperless scholarship processing system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integration with various government databases</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Central Scholarship Schemes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Major Central Scholarship Schemes on NSP</CardTitle>
                <CardDescription>
                  Popular scholarship schemes available through National Scholarship Portal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {centralSchemes.map((scheme, index) => (
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
                <CardTitle>NSP Registration Process 2025</CardTitle>
                <CardDescription>Step-by-step guide to register on National Scholarship Portal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registrationSteps.map((step, index) => (
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

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Registration Tips:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Keep all documents ready before starting registration</li>
                    <li>• Use a valid email ID and mobile number for verification</li>
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
                  Required Documents for NSP Application
                </CardTitle>
                <CardDescription>Complete list of documents needed for scholarship application</CardDescription>
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
                    <li>• All documents must be in PDF format only</li>
                    <li>• Maximum file size: 200KB per document</li>
                    <li>• Documents should be clear and readable</li>
                    <li>• Aadhaar linking with bank account is mandatory</li>
                    <li>• Income certificate should be issued by competent authority</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Official Sources */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Official Sources & Portals
                </CardTitle>
                <CardDescription>Verified government sources for NSP scholarships</CardDescription>
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
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Verification Notice:</h4>
                  <p className="text-sm text-red-700">
                    Always verify scholarship information from official government portals. Beware of fake websites and
                    fraudulent schemes. NSP is the only official portal for central government scholarships.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Renewal Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>NSP Scholarship Renewal 2025</CardTitle>
                <CardDescription>How to renew your existing scholarship on NSP portal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Students who received scholarships in previous years through NSP need to renew their applications
                    annually. The renewal process is mandatory to continue receiving scholarship benefits.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-3">Renewal Requirements:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Previous year NSP application ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Latest marksheet and promotion certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Current year admission receipt and fee receipt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Updated income certificate (if required)</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Renewal Timeline:</h4>
                    <p className="text-sm text-blue-700">
                      Renewal applications typically open in August and close by November. Students must complete
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
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">NSP Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        New Registration
                      </Button>
                    </a>
                    <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Renewal Application
                      </Button>
                    </a>
                    <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Check Application Status
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
                      <p className="text-xs text-gray-600 mt-1">State scholarship for UP students</p>
                    </Link>
                    <Link
                      href="/scholarships/pm-yasasvi-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">PM YASASVI Scholarship 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Central scholarship with entrance test</p>
                    </Link>
                    <Link
                      href="/scholarships/minority-scholarships-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">Minority Scholarships 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Scholarships for minority communities</p>
                    </Link>
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
                      <span className="text-red-800 font-medium">Oct 31, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-yellow-700">Renewal Applications</span>
                      <span className="text-yellow-800 font-medium">Nov 30, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-blue-700">Document Verification</span>
                      <span className="text-blue-800 font-medium">Dec 15, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">NSP Helpline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700 mb-3">
                    Having trouble with NSP registration or application? Contact official support.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>0120-6619540</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>helpdesk@nsp.gov.in</span>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 mt-2">Helpline: Mon-Fri, 10:00 AM - 6:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
