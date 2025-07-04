import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, Filter, MapPin, Users, Award } from "lucide-react"

export const metadata = {
  title: "All Scholarships 2025 - Government & Private Scholarship Schemes in India",
  description:
    "Browse complete list of government and private scholarships available in India for 2025. Find state-wise, category-wise, and merit-based scholarship opportunities.",
}

export default function ScholarshipsPage() {
  const scholarshipCategories = [
    { name: "State Scholarships", count: 28, icon: MapPin },
    { name: "Central Schemes", count: 15, icon: Award },
    { name: "Merit Based", count: 22, icon: Users },
    { name: "Need Based", count: 18, icon: Users },
  ]

  const featuredScholarships = [
    {
      title: "UP Scholarship 2025",
      description: "Pre-Matric & Post-Matric scholarships for SC/ST/OBC/General students in Uttar Pradesh",
      category: "State Scholarship",
      amount: "₹230 - ₹1,200/month",
      deadline: "October 31, 2025",
      slug: "up-scholarship-2025",
      officialLink: "https://scholarship.up.gov.in",
      eligibility: "UP Domicile, Income < ₹2.5L",
    },
    {
      title: "National Scholarship Portal 2025",
      description: "Central government scholarships for SC/ST/OBC/Minority students across India",
      category: "Central Scheme",
      amount: "₹225 - ₹1,200/month",
      deadline: "October 30, 2025",
      slug: "nsp-scholarship-2025",
      officialLink: "https://scholarships.gov.in",
      eligibility: "Category Certificate Required",
    },
    {
      title: "Rajasthan Scholarship 2025",
      description: "PMS and CM Higher Education Scholarship for Rajasthan students",
      category: "State Scholarship",
      amount: "₹500 - ₹1,500/month",
      deadline: "October 30, 2025",
      slug: "rajasthan-scholarship-2025",
      officialLink: "https://sje.rajasthan.gov.in",
      eligibility: "Rajasthan Domicile Required",
    },
    {
      title: "MP Scholarship Portal 2.0",
      description: "Post Matric Scholarship for SC/ST/OBC students in Madhya Pradesh",
      category: "State Scholarship",
      amount: "₹380 - ₹920/month",
      deadline: "October 15, 2025",
      slug: "mp-scholarship-2025",
      officialLink: "https://scholarshipportal.mp.nic.in",
      eligibility: "MP Domicile, Category Certificate",
    },
    {
      title: "West Bengal Oasis Scholarship 2025",
      description: "SC/ST/OBC scholarship schemes through OASIS portal",
      category: "State Scholarship",
      amount: "₹230 - ₹1,200/month",
      deadline: "October 15, 2025",
      slug: "wb-oasis-scholarship-2025",
      officialLink: "https://oasis.gov.in",
      eligibility: "WB Domicile, Caste Certificate",
    },
    {
      title: "PM YASASVI Scholarship 2025",
      description: "Entrance test based scholarship for OBC/EBC/DNT students",
      category: "Central Scheme",
      amount: "₹75,000 - ₹1,25,000/year",
      deadline: "October 31, 2025",
      slug: "pm-yasasvi-2025",
      officialLink: "https://yet.nta.ac.in",
      eligibility: "Entrance Test Required",
    },
  ]

  const stateScholarships = [
    { state: "Uttar Pradesh", schemes: 8, portal: "scholarship.up.gov.in" },
    { state: "Rajasthan", schemes: 6, portal: "sje.rajasthan.gov.in" },
    { state: "Madhya Pradesh", schemes: 5, portal: "scholarshipportal.mp.nic.in" },
    { state: "West Bengal", schemes: 7, portal: "oasis.gov.in" },
    { state: "Karnataka", schemes: 6, portal: "ssp.karnataka.gov.in" },
    { state: "Bihar", schemes: 4, portal: "pmsonline.bih.nic.in" },
    { state: "Delhi", schemes: 5, portal: "edistrict.delhigovt.nic.in" },
    { state: "Punjab", schemes: 4, portal: "scholarships.punjab.gov.in" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">All Scholarships 2025</h1>
            <p className="text-xl text-purple-100 mb-8">
              Discover 500+ government and private scholarship opportunities across India. Find the perfect funding for
              your education journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search scholarships by name, state, or category..."
                    className="pl-10 bg-white text-gray-900"
                  />
                </div>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scholarshipCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} schemes</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Scholarships */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredScholarships.map((scholarship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{scholarship.category}</Badge>
                    <a
                      href={scholarship.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Official
                    </a>
                  </div>
                  <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                  <CardDescription className="text-sm">{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-medium text-green-600">{scholarship.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Deadline:</span>
                      <span className="font-medium text-red-600">{scholarship.deadline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Eligibility:</span>
                      <span className="font-medium text-gray-700">{scholarship.eligibility}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/scholarships/${scholarship.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    <a href={scholarship.officialLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full">
                        Apply Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* State-wise Scholarships */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">State-wise Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stateScholarships.map((state, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{state.state}</h3>
                  <p className="text-sm text-gray-600 mb-2">{state.schemes} scholarship schemes</p>
                  <a
                    href={`https://${state.portal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {state.portal}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900">Central Government</CardTitle>
                <CardDescription>National level scholarship schemes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a
                    href="https://scholarships.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline text-sm"
                  >
                    National Scholarship Portal
                  </a>
                  <a
                    href="https://yet.nta.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline text-sm"
                  >
                    PM YASASVI (NTA)
                  </a>
                  <a
                    href="https://ugc.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline text-sm"
                  >
                    UGC Scholarships
                  </a>
                  <a
                    href="https://aicte-india.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline text-sm"
                  >
                    AICTE Scholarships
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900">Popular States</CardTitle>
                <CardDescription>Most searched state scholarships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a
                    href="https://scholarship.up.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-600 hover:underline text-sm"
                  >
                    UP Scholarship Portal
                  </a>
                  <a
                    href="https://sje.rajasthan.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-600 hover:underline text-sm"
                  >
                    Rajasthan Scholarships
                  </a>
                  <a
                    href="https://scholarshipportal.mp.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-600 hover:underline text-sm"
                  >
                    MP Scholarship Portal
                  </a>
                  <a
                    href="https://oasis.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-600 hover:underline text-sm"
                  >
                    West Bengal OASIS
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900">Resources</CardTitle>
                <CardDescription>Helpful tools and guides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/guide" className="block text-purple-600 hover:underline text-sm">
                    Application Guide
                  </Link>
                  <Link href="/documents" className="block text-purple-600 hover:underline text-sm">
                    Document Checklist
                  </Link>
                  <Link href="/calculator" className="block text-purple-600 hover:underline text-sm">
                    Scholarship Calculator
                  </Link>
                  <Link href="/faq" className="block text-purple-600 hover:underline text-sm">
                    Frequently Asked Questions
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notice */}
        <section>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-900">⚠️ Important Notice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-yellow-800 space-y-2">
                <p className="text-sm">
                  <strong>Verification Required:</strong> Always verify scholarship information from official government
                  portals before applying.
                </p>
                <p className="text-sm">
                  <strong>Beware of Fraud:</strong> Government scholarships are free to apply. Never pay any fees for
                  scholarship applications.
                </p>
                <p className="text-sm">
                  <strong>Official Sources Only:</strong> Apply only through official government websites mentioned
                  above.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
