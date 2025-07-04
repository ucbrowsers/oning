import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, CheckCircle, AlertCircle, Phone, Mail, BookOpen } from "lucide-react"

export const metadata = {
  title: "PM YASASVI Scholarship 2025 - Entrance Test, Eligibility, Apply Online",
  description:
    "Complete guide for PM YASASVI Scholarship 2025 including entrance test pattern, eligibility criteria, application process, and exam preparation tips.",
}

export default function PMYasasviScholarshipPage() {
  const examDetails = {
    testDate: "October 2025",
    applicationDeadline: "October 31, 2025",
    resultDate: "December 2025",
    counsellingDate: "January 2026",
  }

  const eligibilityCriteria = [
    {
      category: "OBC Students",
      income: "₹2,50,000 per annum",
      courses: "Class 9, 10, 11 (for Class 9 & 11 test)",
      amount: "₹75,000 - ₹1,25,000 per year",
    },
    {
      category: "EBC Students",
      income: "₹2,50,000 per annum",
      courses: "Class 9, 10, 11 (for Class 9 & 11 test)",
      amount: "₹75,000 - ₁,25,000 per year",
    },
    {
      category: "DNT Students",
      income: "₂,50,000 per annum",
      courses: "Class 9, 10, 11 (for Class 9 & 11 test)",
      amount: "₹75,000 - ₹1,25,000 per year",
    },
  ]

  const examPattern = [
    {
      test: "Class 9 Test",
      subjects: "Mathematics, Science, Social Science",
      questions: "90 questions",
      duration: "2.5 hours",
      language: "Hindi & English",
    },
    {
      test: "Class 11 Test",
      subjects: "Mathematics, Science, Social Science",
      questions: "90 questions",
      duration: "2.5 hours",
      language: "Hindi & English",
    },
  ]

  const syllabus = {
    class9: [
      "Mathematics: Number System, Algebra, Geometry, Statistics",
      "Science: Physics, Chemistry, Biology basics",
      "Social Science: History, Geography, Civics, Economics",
    ],
    class11: [
      "Mathematics: Advanced Algebra, Trigonometry, Coordinate Geometry",
      "Science: Physics, Chemistry, Biology (detailed concepts)",
      "Social Science: Indian History, Geography, Political Science",
    ],
  }

  const preparationTips = [
    "Study NCERT books thoroughly for all subjects",
    "Practice previous year question papers",
    "Take online mock tests regularly",
    "Focus on time management during preparation",
    "Revise important formulas and concepts",
    "Stay updated with current affairs for Social Science",
  ]

  const requiredDocuments = [
    "Class 8th/10th Marksheet (as applicable)",
    "OBC/EBC/DNT Certificate",
    "Income Certificate (Latest)",
    "Aadhaar Card",
    "Passport Size Photograph",
    "Bank Account Details",
    "Domicile Certificate",
    "School Bonafide Certificate",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-purple-600">Central Scheme</Badge>
              <Badge className="bg-purple-500">Entrance Test</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">PM YASASVI Scholarship 2025</h1>
            <p className="text-xl text-purple-100 mb-6">
              Complete guide for PM YASASVI Scholarship 2025 including entrance test pattern, eligibility for
              OBC/EBC/DNT students, and step-by-step application process.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://yet.nta.ac.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply on NTA Portal
                </Button>
              </a>
              <a href="https://yet.nta.ac.in" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
                >
                  Download Syllabus
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
                  PM YASASVI 2025 - Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Deadline</h4>
                    <p className="text-red-600 font-medium">{examDetails.applicationDeadline}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Entrance Test Date</h4>
                    <p className="text-gray-600">{examDetails.testDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Result Declaration</h4>
                    <p className="text-gray-600">{examDetails.resultDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Official Portal</h4>
                    <p className="text-blue-600">yet.nta.ac.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is PM YASASVI Scholarship?</h2>
              <p className="text-gray-700 mb-4">
                PM Young Achievers Scholarship Award Scheme for Vibrant India (PM YASASVI) is a central government
                scholarship scheme for Other Backward Classes (OBC), Economically Backward Classes (EBC), and
                Denotified, Nomadic and Semi-Nomadic Tribes (DNT) students.
              </p>
              <p className="text-gray-700 mb-4">
                This scholarship is awarded through a competitive entrance test conducted by the National Testing Agency
                (NTA). The scheme provides financial assistance to meritorious students from these communities to pursue
                their education from Class 9 to Class 12.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Key Features of PM YASASVI</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Entrance test based selection process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>High scholarship amount (₹75,000 - ₹1,25,000 per year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Conducted by National Testing Agency (NTA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Available for Class 9 and Class 11 students</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Eligibility Criteria for PM YASASVI 2025</CardTitle>
                <CardDescription>Category-wise eligibility requirements and scholarship amounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {eligibilityCriteria.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{item.category}</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Income Limit:</span>
                          <p className="text-gray-600">{item.income}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Eligible Classes:</span>
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
                    <li>• Student must be studying in Class 9 or 11 in 2025-26</li>
                    <li>• Valid OBC/EBC/DNT certificate is mandatory</li>
                    <li>• Family income should not exceed ₹2.5 lakh per annum</li>
                    <li>• Must qualify the entrance test conducted by NTA</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Exam Pattern */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  PM YASASVI Entrance Test Pattern 2025
                </CardTitle>
                <CardDescription>Detailed exam pattern for Class 9 and Class 11 tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {examPattern.map((exam, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{exam.test}</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Subjects:</span>
                          <p className="text-gray-600">{exam.subjects}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Questions:</span>
                          <p className="text-gray-600">{exam.questions}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Duration:</span>
                          <p className="text-gray-600">{exam.duration}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Language:</span>
                          <p className="text-gray-600">{exam.language}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Exam Format:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Computer Based Test (CBT) mode</li>
                    <li>• Multiple Choice Questions (MCQs)</li>
                    <li>• No negative marking</li>
                    <li>• Each question carries equal marks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Syllabus */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>PM YASASVI Syllabus 2025</CardTitle>
                <CardDescription>Subject-wise syllabus for Class 9 and Class 11 tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Class 9 Test Syllabus</Badge>
                    </h4>
                    <div className="space-y-2">
                      {syllabus.class9.map((subject, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-700">{subject}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Class 11 Test Syllabus</Badge>
                    </h4>
                    <div className="space-y-2">
                      {syllabus.class11.map((subject, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-700">{subject}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Syllabus Source:</h4>
                  <p className="text-sm text-green-700">
                    The syllabus is based on NCERT curriculum for respective classes. Students should focus on NCERT
                    textbooks for preparation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Preparation Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Preparation Tips for PM YASASVI 2025</CardTitle>
                <CardDescription>Expert tips to crack the PM YASASVI entrance test</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {preparationTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Study Schedule Recommendation:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Dedicate 3-4 hours daily for preparation</li>
                    <li>• Allocate equal time to all three subjects</li>
                    <li>• Take one mock test every week</li>
                    <li>• Revise completed topics regularly</li>
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
                <CardDescription>Documents needed for PM YASASVI application</CardDescription>
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
                    <li>• All documents should be in PDF format</li>
                    <li>• Maximum file size: 200KB per document</li>
                    <li>• OBC/EBC/DNT certificate must be valid</li>
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
              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Quick Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://yet.nta.ac.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply on NTA Portal
                      </Button>
                    </a>
                    <a href="https://yet.nta.ac.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Download Admit Card
                      </Button>
                    </a>
                    <a href="https://yet.nta.ac.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Check Result
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Dates 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-red-700">Application Deadline</span>
                      <span className="text-red-800 font-medium">Oct 31, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-yellow-700">Admit Card</span>
                      <span className="text-yellow-800 font-medium">Oct 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-blue-700">Entrance Test</span>
                      <span className="text-blue-800 font-medium">Oct 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-green-700">Result Declaration</span>
                      <span className="text-green-800 font-medium">Dec 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Test Centers */}
              <Card>
                <CardHeader>
                  <CardTitle>Test Centers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    PM YASASVI test will be conducted in major cities across India. Students can choose their preferred
                    test center during application.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-gray-50 rounded">
                      <span className="font-medium">Major Cities:</span> Delhi, Mumbai, Kolkata, Chennai, Bangalore,
                      Hyderabad, Pune, Ahmedabad
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <span className="font-medium">State Capitals:</span> All state capitals will have test centers
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
                      href="/scholarships/nsp-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">NSP Portal 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">National Scholarship Portal</p>
                    </Link>
                    <Link
                      href="/scholarships/12th-pass-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">12th Pass Scholarships</h4>
                      <p className="text-xs text-gray-600 mt-1">Scholarships after 12th class</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">NTA Helpline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700 mb-3">For PM YASASVI related queries, contact NTA helpline.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>011-40759000</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>yasasvi@nta.ac.in</span>
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
