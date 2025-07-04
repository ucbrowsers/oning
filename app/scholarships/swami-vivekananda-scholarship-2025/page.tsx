import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Swami Vivekananda Scholarship 2025 - Apply Online for West Bengal Students",
  description:
    "Complete guide for Swami Vivekananda Merit-cum-Means Scholarship 2025 including eligibility, income criteria, course-wise benefits and application process.",
}

export default function SwamiVivekanandaScholarshipPage() {
  const scholarshipSchemes = [
    {
      name: "Swami Vivekananda Merit-cum-Means Scholarship",
      eligibility: "General category students with merit",
      amount: "₹1,000 - ₹5,000 per month",
      income: "₹2,50,000 per annum",
      courses: "UG, PG, Technical, Professional",
    },
    {
      name: "Swami Vivekananda Scholarship for Minorities",
      eligibility: "Minority community students",
      amount: "₹1,000 - ₹5,000 per month",
      income: "₹2,50,000 per annum",
      courses: "UG, PG, Technical, Professional",
    },
    {
      name: "Swami Vivekananda Scholarship for Disabled",
      eligibility: "Students with disabilities (40% and above)",
      amount: "₹1,200 - ₹6,000 per month",
      income: "₹2,50,000 per annum",
      courses: "All courses from Class 11 onwards",
    },
  ]

  const courseWiseBenefits = [
    {
      course: "Undergraduate Courses",
      monthlyStipend: "₹1,000",
      bookAllowance: "₹1,500 per year",
      additionalBenefits: "Hostel allowance for outstation students",
    },
    {
      course: "Postgraduate Courses",
      monthlyStipend: "₹2,000",
      bookAllowance: "₹2,000 per year",
      additionalBenefits: "Research allowance for thesis work",
    },
    {
      course: "Technical/Professional",
      monthlyStipend: "₹2,500 - ₹5,000",
      bookAllowance: "₹3,000 per year",
      additionalBenefits: "Equipment allowance for practical work",
    },
    {
      course: "PhD/Research",
      monthlyStipend: "₹5,000",
      bookAllowance: "₹5,000 per year",
      additionalBenefits: "Conference participation support",
    },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Visit SVMCM Portal",
      description: "Go to svmcm.wbhed.gov.in and click on 'New Registration'",
    },
    {
      step: 2,
      title: "Choose Scholarship Type",
      description: "Select appropriate scheme based on your category",
    },
    {
      step: 3,
      title: "Fill Registration Form",
      description: "Complete personal and academic details",
    },
    {
      step: 4,
      title: "Upload Documents",
      description: "Upload all required documents in specified format",
    },
    {
      step: 5,
      title: "Submit Application",
      description: "Review and submit your application",
    },
    {
      step: 6,
      title: "Print Receipt",
      description: "Take printout of application receipt",
    },
  ]

  const requiredDocuments = [
    "Aadhaar Card",
    "Bank Account Details",
    "Income Certificate (Latest)",
    "Caste Certificate (if applicable)",
    "Disability Certificate (if applicable)",
    "Domicile Certificate (WB)",
    "Previous Year Marksheet",
    "Current Year Admission Receipt",
    "Passport Size Photograph",
    "Institution Verification Certificate",
  ]

  const correctionWindow = [
    "Login to SVMCM portal with application credentials",
    "Click on 'Edit Application' option",
    "Make necessary corrections in allowed fields",
    "Re-upload documents if required",
    "Submit the corrected application",
    "Take fresh printout of application",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-orange-600">State Scholarship</Badge>
              <Badge className="bg-orange-500">West Bengal</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Swami Vivekananda Scholarship 2025</h1>
            <p className="text-xl text-orange-100 mb-6">
              Complete guide for Swami Vivekananda Merit-cum-Means Scholarship 2025 including eligibility criteria,
              course-wise benefits, and online application process for West Bengal students.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://svmcm.wbhed.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply on SVMCM Portal
                </Button>
              </a>
              <a href="https://svmcm.wbhed.gov.in" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
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
                  Swami Vivekananda Scholarship 2025 - Key Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Period</h4>
                    <p className="text-gray-600">September 2025 - October 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Correction Window</h4>
                    <p className="text-gray-600">November 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Official Portal</h4>
                    <p className="text-blue-600">svmcm.wbhed.gov.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
                    <p className="text-gray-600">033-2321-9851</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Swami Vivekananda Scholarship Overview</h2>
              <p className="text-gray-700 mb-4">
                The Swami Vivekananda Merit-cum-Means Scholarship is a prestigious scholarship scheme by the Government
                of West Bengal for meritorious students from economically weaker sections. The scholarship is named
                after the great philosopher and spiritual leader Swami Vivekananda.
              </p>
              <p className="text-gray-700 mb-4">
                This scholarship covers students from general category, minorities, and persons with disabilities
                pursuing higher education in various streams including undergraduate, postgraduate, technical, and
                professional courses in West Bengal.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Scholarship Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Promote higher education among economically disadvantaged students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Encourage merit-based academic excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Support students in technical and professional education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce dropout rates in higher education</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Scholarship Schemes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Swami Vivekananda Scholarship Schemes</CardTitle>
                <CardDescription>Different scholarship schemes under Swami Vivekananda program</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {scholarshipSchemes.map((scheme, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{scheme.name}</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
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
                        <div>
                          <span className="font-medium text-gray-700">Courses:</span>
                          <p className="text-gray-600">{scheme.courses}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course-wise Benefits */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course-wise Benefits</CardTitle>
                <CardDescription>Detailed benefits for different course categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseWiseBenefits.map((benefit, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{benefit.course}</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Monthly Stipend:</span>
                          <p className="text-gray-600">{benefit.monthlyStipend}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Book Allowance:</span>
                          <p className="text-gray-600">{benefit.bookAllowance}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Additional Benefits:</span>
                          <p className="text-gray-600">{benefit.additionalBenefits}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Payment Schedule:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Monthly stipend is paid directly to student's bank account</li>
                    <li>• Book allowance is paid annually in two installments</li>
                    <li>• Additional allowances are paid as per course requirements</li>
                    <li>• All payments are made through DBT (Direct Benefit Transfer)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
                <CardDescription>Step-by-step guide to apply for Swami Vivekananda Scholarship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationSteps.map((step, index) => (
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
                  <h4 className="font-semibold text-blue-800 mb-2">Application Tips:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Apply early to avoid last-minute rush</li>
                    <li>• Keep all documents ready in PDF format</li>
                    <li>• Ensure bank account is linked with Aadhaar</li>
                    <li>• Double-check all information before submission</li>
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
                <CardDescription>Complete list of documents for application</CardDescription>
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
                    <li>• West Bengal domicile is mandatory</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Correction Window */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Correction Window Information</CardTitle>
                <CardDescription>How to make corrections in submitted application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    The correction window allows students to make necessary changes in their submitted applications.
                    This facility is usually available for a limited period after the application deadline.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-3">Correction Process:</h4>
                  <ol className="space-y-2 mb-4">
                    {correctionWindow.map((step, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="font-semibold text-orange-600">{index + 1}.</span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Important Notes:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Correction window is available for limited time only</li>
                      <li>• Not all fields may be editable during correction</li>
                      <li>• Fresh application receipt must be printed after correction</li>
                      <li>• No corrections allowed after correction window closes</li>
                    </ul>
                  </div>
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
                  <CardTitle className="text-orange-900">Quick Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://svmcm.wbhed.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply on SVMCM Portal
                      </Button>
                    </a>
                    <a href="https://svmcm.wbhed.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Check Application Status
                      </Button>
                    </a>
                    <a href="https://svmcm.wbhed.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Download Guidelines
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility Quick Check */}
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Quick Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-green-50 rounded">
                      <h4 className="font-medium text-green-900 mb-2">✓ You are eligible if:</h4>
                      <ul className="text-green-700 space-y-1">
                        <li>• West Bengal domicile</li>
                        <li>• Family income ≤ ₹2.5 lakh</li>
                        <li>• Studying in WB institution</li>
                        <li>• Good academic record</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <h4 className="font-medium text-red-900 mb-2">✗ Not eligible if:</h4>
                      <ul className="text-red-700 space-y-1">
                        <li>• Non-WB domicile</li>
                        <li>• Income &gt; ₹2.5 lakh</li>
                        <li>• Studying outside WB</li>
                        <li>• Already receiving other scholarship</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Deadlines */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Deadlines 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-red-700">Application Deadline</span>
                      <span className="text-red-800 font-medium">Oct 31, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-yellow-700">Correction Window</span>
                      <span className="text-yellow-800 font-medium">Nov 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-blue-700">Verification</span>
                      <span className="text-blue-800 font-medium">Dec 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-green-700">Payment Start</span>
                      <span className="text-green-800 font-medium">Jan 2026</span>
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
                      href="/scholarships/wb-oasis-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">WB OASIS Scholarship</h4>
                      <p className="text-xs text-gray-600 mt-1">SC/ST/OBC scholarships in WB</p>
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
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">SVMCM Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700 mb-3">
                    Need help with Swami Vivekananda Scholarship? Contact support team.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>033-2321-9851</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>svmcm@wbhed.gov.in</span>
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
