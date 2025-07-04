import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle, GraduationCap, Award } from "lucide-react"

export const metadata = {
  title: "10th Pass Scholarship 2025 - Best Yojanas After 10th Class",
  description:
    "Complete guide for 10th pass scholarships 2025 including top government schemes, merit-based and need-based scholarships, and state-specific options.",
}

export default function TenthPassScholarshipPage() {
  const topSchemes = [
    {
      name: "NSP Pre-Matric Scholarship",
      eligibility: "SC/ST/OBC students in Classes 9-10",
      amount: "₹225 - ₹700 per month",
      portal: "scholarships.gov.in",
      category: "Central Scheme",
    },
    {
      name: "UP Pre-Matric Scholarship",
      eligibility: "UP domicile students in Classes 9-10",
      amount: "₹230 - ₹700 per month",
      portal: "scholarship.up.gov.in",
      category: "State Scheme",
    },
    {
      name: "Rajasthan Pre-Matric Scholarship",
      eligibility: "Rajasthan students in Classes 9-10",
      amount: "₹225 - ₹700 per month",
      portal: "sso.rajasthan.gov.in",
      category: "State Scheme",
    },
    {
      name: "MP Pre-Matric Scholarship",
      eligibility: "MP students in Classes 9-10",
      amount: "₹225 - ₹700 per month",
      portal: "scholarshipportal.mp.nic.in",
      category: "State Scheme",
    },
    {
      name: "West Bengal Pre-Matric",
      eligibility: "WB students in Classes 9-10",
      amount: "₹225 - ₹700 per month",
      portal: "oasis.gov.in",
      category: "State Scheme",
    },
  ]

  const meritBasedSchemes = [
    {
      name: "INSPIRE Scholarship",
      description: "For students pursuing science stream after 10th",
      amount: "₹80,000 per year",
      eligibility: "Top 1% in Class 10 board exams",
    },
    {
      name: "KVPY Scholarship",
      description: "Kishore Vaigyanik Protsahan Yojana for science students",
      amount: "₹5,000 - ₹7,000 per month",
      eligibility: "Entrance test based selection",
    },
    {
      name: "State Merit Scholarships",
      description: "Various state-specific merit scholarships",
      amount: "₹1,000 - ₹5,000 per month",
      eligibility: "High marks in Class 10",
    },
  ]

  const needBasedSchemes = [
    {
      name: "SC/ST Pre-Matric Scholarship",
      description: "For economically weaker SC/ST students",
      amount: "₹225 - ₹700 per month",
      eligibility: "Family income < ₹2.5 lakh",
    },
    {
      name: "OBC Pre-Matric Scholarship",
      description: "For OBC students from poor families",
      amount: "₹225 - ₹700 per month",
      eligibility: "Family income < ₹1 lakh",
    },
    {
      name: "Minority Pre-Matric Scholarship",
      description: "For minority community students",
      amount: "₹225 - ₹700 per month",
      eligibility: "Family income < ₹1 lakh",
    },
  ]

  const statePortals = [
    { state: "Uttar Pradesh", portal: "scholarship.up.gov.in" },
    { state: "Rajasthan", portal: "sso.rajasthan.gov.in" },
    { state: "Madhya Pradesh", portal: "scholarshipportal.mp.nic.in" },
    { state: "West Bengal", portal: "oasis.gov.in" },
    { state: "Karnataka", portal: "ssp.karnataka.gov.in" },
    { state: "Bihar", portal: "pmsonline.bih.nic.in" },
    { state: "Delhi", portal: "edistrict.delhigovt.nic.in" },
    { state: "Punjab", portal: "scholarships.punjab.gov.in" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-white text-emerald-600">10th Pass</Badge>
              <Badge className="bg-emerald-500">All Categories</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">10th Pass Scholarship 2025</h1>
            <p className="text-xl text-emerald-100 mb-6">
              Complete guide to best scholarship schemes available after 10th class including government yojanas,
              merit-based and need-based scholarships across India for the academic year 2025.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Browse NSP Scholarships
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Find State Scholarships
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Scholarships After 10th Class</h2>
              <p className="text-gray-700 mb-4">
                After completing 10th class, students have access to numerous scholarship opportunities to support their
                further education. These scholarships are available for students pursuing 11th-12th, diploma courses,
                ITI, and other vocational programs.
              </p>
              <p className="text-gray-700 mb-4">
                Scholarships are broadly categorized into merit-based (for high achievers), need-based (for economically
                weaker students), and category-based (for SC/ST/OBC/Minority students). Both central and state
                governments offer various schemes with different eligibility criteria and benefits.
              </p>

              <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">Why Apply for Scholarships After 10th?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Financial support for 11th-12th education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduced burden on family finances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Encouragement to continue education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Access to better educational opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Top 5 Government Schemes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Top 5 Government Scholarship Schemes
                </CardTitle>
                <CardDescription>Most popular and beneficial scholarships for 10th pass students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topSchemes.map((scheme, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{scheme.name}</h4>
                        <Badge variant="secondary">{scheme.category}</Badge>
                      </div>
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

            {/* Merit-Based Scholarships */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Merit-Based Scholarships</CardTitle>
                <CardDescription>
                  Scholarships for high-achieving students based on academic performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {meritBasedSchemes.map((scheme, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{scheme.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{scheme.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Amount:</span>
                          <p className="text-gray-600">{scheme.amount}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Eligibility:</span>
                          <p className="text-gray-600">{scheme.eligibility}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Merit Scholarship Tips:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Maintain high academic performance consistently</li>
                    <li>• Apply early as merit scholarships have limited seats</li>
                    <li>• Keep all academic certificates ready</li>
                    <li>• Some scholarships require entrance tests</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Need-Based Scholarships */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Need-Based Scholarships</CardTitle>
                <CardDescription>Financial assistance for economically weaker students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {needBasedSchemes.map((scheme, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{scheme.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{scheme.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Amount:</span>
                          <p className="text-gray-600">{scheme.amount}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Eligibility:</span>
                          <p className="text-gray-600">{scheme.eligibility}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Required Documents for Need-Based:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Income certificate (latest)</li>
                    <li>• Caste certificate (if applicable)</li>
                    <li>• Bank account details</li>
                    <li>• Class 10th marksheet and certificate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* State-Specific Options */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>State-Specific Scholarship Portals</CardTitle>
                <CardDescription>Apply for scholarships specific to your state</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {statePortals.map((state, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{state.state}</h4>
                      <a
                        href={`https://${state.portal}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {state.portal}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">State Scholarship Benefits:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Higher chances of selection for domicile students</li>
                    <li>• State-specific eligibility criteria</li>
                    <li>• Additional benefits like book allowance</li>
                    <li>• Faster processing and disbursement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Application Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Application Tips for 10th Pass Students</CardTitle>
                <CardDescription>Important guidelines for successful scholarship applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <h4 className="font-semibold text-gray-900 mb-3">Before Applying:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Research all available scholarships in your state</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Check eligibility criteria carefully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Gather all required documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Note down application deadlines</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mb-3">During Application:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Fill all details accurately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Upload clear, readable documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Double-check bank account details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Take printout of application receipt</span>
                    </li>
                  </ul>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Common Mistakes to Avoid:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Applying after deadline</li>
                      <li>• Incorrect bank account details</li>
                      <li>• Poor quality document uploads</li>
                      <li>• Not following up on application status</li>
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
              <Card className="bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Quick Apply</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        National Scholarship Portal
                      </Button>
                    </a>
                    <a href="https://scholarship.up.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        UP Scholarship Portal
                      </Button>
                    </a>
                    <a href="https://sso.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full bg-transparent">
                        Rajasthan SSO Portal
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Scholarship Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Scholarship Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-blue-700 text-sm">Merit-Based</span>
                      <Badge variant="secondary">15 schemes</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-green-700 text-sm">Need-Based</span>
                      <Badge variant="secondary">25 schemes</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                      <span className="text-purple-700 text-sm">Category-Based</span>
                      <Badge variant="secondary">30 schemes</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                      <span className="text-orange-700 text-sm">State-Specific</span>
                      <Badge variant="secondary">40 schemes</Badge>
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
                      href="/scholarships/12th-pass-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">12th Pass Scholarships</h4>
                      <p className="text-xs text-gray-600 mt-1">Scholarships after 12th class</p>
                    </Link>
                    <Link
                      href="/scholarships/nsp-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">NSP Portal Guide</h4>
                      <p className="text-xs text-gray-600 mt-1">National Scholarship Portal</p>
                    </Link>
                    <Link
                      href="/scholarships/post-matric-scholarship-2025"
                      className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900">Post Matric Scholarships</h4>
                      <p className="text-xs text-gray-600 mt-1">State-wise schemes list</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-900">📚 Study Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-800">
                    Apply for multiple scholarships to increase your chances. Many scholarships can be combined, so you
                    can receive benefits from more than one scheme simultaneously.
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
