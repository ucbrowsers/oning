import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle, AlertCircle, GraduationCap, Award, BookOpen } from "lucide-react"

export const metadata = {
  title: "12th Pass Scholarship 2025 - Best Scholarships After Class 12",
  description:
    "Complete guide for 12th pass scholarships 2025 including central, state, and private scholarships for Science/Commerce/Arts streams with early deadlines.",
}

export default function TwelfthPassScholarshipPage() {
  const centralSchemes = [
    {
      name: "NSP Post-Matric Scholarship",
      eligibility: "SC/ST/OBC students in higher education",
      amount: "₹230 - ₹1,200 per month",
      portal: "scholarships.gov.in",
      deadline: "October 31, 2025",
    },
    {
      name: "UGC Scholarships",
      eligibility: "Meritorious students in UG/PG courses",
      amount: "₹2,000 - ₹8,000 per month",
      portal: "ugc.ac.in",
      deadline: "October 15, 2025",
    },
    {
      name: "AICTE Pragati Scholarship",
      eligibility: "Girl students in technical education",
      amount: "₹30,000 per year",
      portal: "scholarships.gov.in",
      deadline: "October 30, 2025",
    },
    {
      name: "PM YASASVI Scholarship",
      eligibility: "OBC/EBC/DNT students (entrance test)",
      amount: "₹75,000 - ₹1,25,000 per year",
      portal: "yet.nta.ac.in",
      deadline: "October 31, 2025",
    },
  ]

  const streamWiseScholarships = {
    science: [
      {
        name: "INSPIRE Scholarship",
        description: "For students pursuing BSc/Integrated MSc",
        amount: "₹80,000 per year",
        eligibility: "Top 1% in Class 12 (Science)",
      },
      {
        name: "KVPY Fellowship",
        description: "For research-oriented science students",
        amount: "₹5,000 - ₹7,000 per month",
        eligibility: "Entrance test + interview",
      },
      {
        name: "NTSE Scholarship",
        description: "National Talent Search Examination",
        amount: "₹1,250 - ₹2,000 per month",
        eligibility: "Qualifying NTSE exam",
      },
    ],
    commerce: [
      {
        name: "CA Foundation Scholarship",
        description: "For students pursuing CA course",
        amount: "₹15,000 - ₹30,000",
        eligibility: "Merit in CA Foundation exam",
      },
      {
        name: "Commerce Merit Scholarship",
        description: "State-wise merit scholarships",
        amount: "₹1,000 - ₹5,000 per month",
        eligibility: "High marks in Class 12 Commerce",
      },
      {
        name: "Banking Sector Scholarships",
        description: "Various bank-sponsored scholarships",
        amount: "₹10,000 - ₹50,000",
        eligibility: "Merit + family income criteria",
      },
    ],
    arts: [
      {
        name: "Humanities Merit Scholarship",
        description: "For arts and humanities students",
        amount: "₹1,000 - ₹3,000 per month",
        eligibility: "Merit in Class 12 Arts",
      },
      {
        name: "Language Scholarship",
        description: "For students pursuing language courses",
        amount: "₹2,000 - ₹5,000 per month",
        eligibility: "Proficiency in specific languages",
      },
      {
        name: "Cultural Scholarship",
        description: "For students in fine arts and culture",
        amount: "₹1,500 - ₹4,000 per month",
        eligibility: "Talent in arts/culture + merit",
      },
    ],
  }

  const privateScholarships = [
    {
      name: "Tata Scholarship",
      organization: "Tata Trusts",
      amount: "₹2,00,000 per year",
      eligibility: "Merit + need based",
    },
    {
      name: "Reliance Foundation Scholarship",
      organization: "Reliance Foundation",
      amount: "₹2,00,000 per year",
      eligibility: "UG students with family income < ₹6 lakh",
    },
    {
      name: "Kishore Vaigyanik Protsahan Yojana",
      organization: "IISc Bangalore",
      amount: "₹5,000 - ₹7,000 per month",
      eligibility: "Science stream students",
    },
    {
      name: "JN Tata Endowment",
      organization: "Tata Education Trust",
      amount: "Up to ₹10,00,000",
      eligibility: "Higher studies abroad",
    },
  ]

  const earlyDeadlines = [
    { scholarship: "PM YASASVI Scholarship", deadline: "October 31, 2025", status: "Critical" },
    { scholarship: "AICTE Pragati Scholarship", deadline: "October 30, 2025", status: "Important" },
    { scholarship: "INSPIRE Scholarship", deadline: "October 15, 2025", status: "Important" },
    { scholarship: "UGC Scholarships", deadline: "October 15, 2025", status: "Normal" },
    { scholarship: "NSP Post-Matric", deadline: "October 31, 2025", status: "Normal" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-blue-600">12th Pass</Badge>
              <Badge className="bg-blue-500">Higher Education</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">12th Pass Scholarship 2025</h1>
            <p className="text-xl text-blue-100 mb-6">
              Complete guide to best scholarships after Class 12 including central, state, and private schemes for
              Science, Commerce, and Arts streams with important deadlines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Browse Central Scholarships
                </Button>
              </a>
              <a href="https://ugc.ac.in" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  UGC Scholarships
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
            {/* Early Deadlines Alert */}
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <AlertCircle className="w-5 h-5" />
                  ⚠️ Early Deadlines to Note
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {earlyDeadlines.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-gray-900">{item.scholarship}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{item.deadline}</span>
                        <Badge
                          variant={
                            item.status === "Critical"
                              ? "destructive"
                              : item.status === "Important"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Scholarships After 12th Class</h2>
              <p className="text-gray-700 mb-4">
                After completing Class 12, students enter a crucial phase where financial support becomes essential for
                higher education. Numerous scholarship opportunities are available across different streams - Science,
                Commerce, and Arts - offered by central government, state governments, and private organizations.
              </p>
              <p className="text-gray-700 mb-4">
                These scholarships range from merit-based awards for high achievers to need-based assistance for
                economically disadvantaged students. Some scholarships are stream-specific, while others are open to all
                disciplines. Early application is crucial as many prestigious scholarships have deadlines as early as
                August-September.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Types of Scholarships Available</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Central Government Scholarships (NSP, UGC, AICTE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>State Government Scholarships (State-specific portals)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Private/Corporate Scholarships (Tata, Reliance, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Stream-specific Scholarships (Science, Commerce, Arts)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Central Scholarships */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Central Government Scholarships
                </CardTitle>
                <CardDescription>Major scholarship schemes by Government of India</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {centralSchemes.map((scheme, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{scheme.name}</h4>
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
                          <span className="font-medium text-gray-700">Deadline:</span>
                          <p className="text-red-600 font-medium">{scheme.deadline}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Apply at:</span>
                          <a
                            href={`https://${scheme.portal}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {scheme.portal}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stream-wise Scholarships */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Stream-wise Scholarships
                </CardTitle>
                <CardDescription>Scholarships specific to Science, Commerce, and Arts streams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Science Stream */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Science Stream</Badge>
                    </h4>
                    <div className="space-y-3">
                      {streamWiseScholarships.science.map((scholarship, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <h5 className="font-medium text-gray-900 mb-1">{scholarship.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{scholarship.description}</p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Amount: </span>
                              <span className="text-gray-600">{scholarship.amount}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Eligibility: </span>
                              <span className="text-gray-600">{scholarship.eligibility}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commerce Stream */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Commerce Stream</Badge>
                    </h4>
                    <div className="space-y-3">
                      {streamWiseScholarships.commerce.map((scholarship, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <h5 className="font-medium text-gray-900 mb-1">{scholarship.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{scholarship.description}</p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Amount: </span>
                              <span className="text-gray-600">{scholarship.amount}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Eligibility: </span>
                              <span className="text-gray-600">{scholarship.eligibility}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arts Stream */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-800">Arts Stream</Badge>
                    </h4>
                    <div className="space-y-3">
                      {streamWiseScholarships.arts.map((scholarship, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <h5 className="font-medium text-gray-900 mb-1">{scholarship.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{scholarship.description}</p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Amount: </span>
                              <span className="text-gray-600">{scholarship.amount}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Eligibility: </span>
                              <span className="text-gray-600">{scholarship.eligibility}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Private Scholarships */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Private & Corporate Scholarships</CardTitle>
                <CardDescription>High-value scholarships from private organizations and corporates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {privateScholarships.map((scholarship, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{scholarship.name}</h4>
                        <Badge variant="outline">{scholarship.organization}</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Amount:</span>
                          <p className="text-gray-600">{scholarship.amount}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Eligibility:</span>
                          <p className="text-gray-600">{scholarship.eligibility}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Private Scholarship Tips:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Research company websites for scholarship announcements</li>
                    <li>• Many private scholarships have unique application processes</li>
                    <li>• Some require essays, interviews, or project submissions</li>
                    <li>• Application deadlines vary significantly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Application Strategy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Application Strategy for 12th Pass Students</CardTitle>
                <CardDescription>Strategic approach to maximize scholarship opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <h4 className="font-semibold text-gray-900 mb-3">Timeline Strategy:</h4>
                  <div className="space-y-3 mb-4">
                    <div className="border-l-4 border-red-400 pl-4">
                      <h5 className="font-medium text-red-800">September-October (Critical Period)</h5>
                      <p className="text-sm text-red-700">
                        Apply for early deadline scholarships like PM YASASVI, INSPIRE
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h5 className="font-medium text-orange-800">October (Important Period)</h5>
                      <p className="text-sm text-orange-700">Focus on AICTE, UGC, and private scholarships</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h5 className="font-medium text-green-800">November-December (Regular Period)</h5>
                      <p className="text-sm text-green-700">Apply for NSP and state government scholarships</p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">Application Checklist:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Class 12th marksheet and certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">College admission letter/receipt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Income certificate (latest)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Caste certificate (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Bank account details (Aadhaar linked)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Aadhaar card and passport size photos</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tips:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Apply for multiple scholarships - they can often be combined</li>
                      <li>• Keep digital copies of all documents ready</li>
                      <li>• Set reminders for application deadlines</li>
                      <li>• Follow up on application status regularly</li>
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
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Quick Apply</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        National Scholarship Portal
                      </Button>
                    </a>
                    <a href="https://yet.nta.ac.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        PM YASASVI (NTA)
                      </Button>
                    </a>
                    <a href="https://ugc.ac.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        UGC Scholarships
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Stream-wise Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Stream-wise Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded">
                      <h4 className="font-medium text-green-900 mb-2">Science Stream</h4>
                      <div className="space-y-1">
                        <a
                          href="https://online-inspire.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-green-700 hover:underline"
                        >
                          INSPIRE Scholarship
                        </a>
                        <a
                          href="https://kvpy.iisc.ac.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-green-700 hover:underline"
                        >
                          KVPY Fellowship
                        </a>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <h4 className="font-medium text-blue-900 mb-2">Commerce Stream</h4>
                      <div className="space-y-1">
                        <a
                          href="https://icai.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-blue-700 hover:underline"
                        >
                          CA Foundation Scholarship
                        </a>
                        <a
                          href="https://scholarships.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-blue-700 hover:underline"
                        >
                          Commerce Merit Schemes
                        </a>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded">
                      <h4 className="font-medium text-purple-900 mb-2">Arts Stream</h4>
                      <div className="space-y-1">
                        <a
                          href="https://ugc.ac.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-purple-700 hover:underline"
                        >
                          Humanities Scholarships
                        </a>
                        <a
                          href="https://scholarships.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-purple-700 hover:underline"
                        >
                          Cultural Scholarships
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Deadline Tracker */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-red-700">PM YASASVI</span>
                      <span className="text-red-800 font-medium">Oct 31</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                      <span className="text-orange-700">AICTE Pragati</span>
                      <span className="text-orange-800 font-medium">Oct 30</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-yellow-700">INSPIRE</span>
                      <span className="text-yellow-800 font-medium">Oct 15</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-blue-700">UGC Schemes</span>
                      <span className="text-blue-800 font-medium">Oct 15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="/scholarships/10th-pass-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">10th Pass Scholarships</h4>
                      <p className="text-xs text-gray-600 mt-1">Scholarships after 10th class</p>
                    </Link>
                    <Link
                      href="/scholarships/pm-yasasvi-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">PM YASASVI 2025</h4>
                      <p className="text-xs text-gray-600 mt-1">Entrance test based scholarship</p>
                    </Link>
                    <Link
                      href="/scholarships/aicte-pragati-saksham-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">AICTE Pragati & Saksham</h4>
                      <p className="text-xs text-gray-600 mt-1">For girls and PWD students</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Success Tip */}
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">🎯 Success Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800">
                    Start your scholarship applications immediately after 12th results. Many high-value scholarships
                    have early deadlines in August-September. Don't wait for college admissions to complete!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
