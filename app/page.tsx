"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, BookOpen } from "lucide-react"
import { ExternalLink } from "lucide-react"

export default function HomePage() {
  const domain = typeof window !== "undefined" ? window.location.hostname.replace("www.", "") : "scholarshipguide.com"
  const siteName = domain.split(".")[0].charAt(0).toUpperCase() + domain.split(".")[0].slice(1)

  const featuredScholarships = [
    {
      title: "UP Scholarship 2025 Online Form",
      description:
        "Complete guide for Pre-Matric & Post-Matric scholarships with eligibility criteria and application process.",
      category: "State Scholarship",
      date: "January 2025",
      slug: "up-scholarship-2025",
      officialLink: "https://scholarship.up.gov.in",
    },
    {
      title: "National Scholarship Portal 2025",
      description: "Central schemes and complete registration guide for NSP scholarships across India.",
      category: "Central Scheme",
      date: "January 2025",
      slug: "nsp-scholarship-2025",
      officialLink: "https://scholarships.gov.in",
    },
  ]

  const recentArticles = [
    {
      title: "Rajasthan Scholarship Yojana 2025",
      excerpt: "Complete list and application process for PMS and CM Higher Education Scholarship.",
      category: "State Scholarship",
      date: "Jan 15, 2025",
      slug: "rajasthan-scholarship-2025",
    },
    {
      title: "MP Scholarship Portal 2.0",
      excerpt: "Step-by-step guide to apply online for Post Matric Scholarship in Madhya Pradesh.",
      category: "State Scholarship",
      date: "Jan 14, 2025",
      slug: "mp-scholarship-2025",
    },
    {
      title: "West Bengal Oasis Scholarship 2025",
      excerpt: "SC/ST/OBC application guide with complete registration and renewal process.",
      category: "State Scholarship",
      date: "Jan 13, 2025",
      slug: "wb-oasis-scholarship-2025",
    },
    {
      title: "10th Pass Scholarship 2025",
      excerpt: "Best government schemes and yojanas available after completing 10th class.",
      category: "Merit Based",
      date: "Jan 12, 2025",
      slug: "10th-pass-scholarship-2025",
    },
  ]

  const stats = [
    { icon: Award, label: "Active Scholarships", value: "500+" },
    { icon: Users, label: "Students Helped", value: "10,000+" },
    { icon: BookOpen, label: "Detailed Guides", value: "100+" },
    { icon: Calendar, label: "Updated Daily", value: "2025" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{siteName} 2025</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your complete resource for government scholarships, application guides, and educational funding
              opportunities across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Browse Scholarships
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Application Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Scholarship Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most popular and high-value scholarship opportunities available for Indian students in 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredScholarships.map((scholarship, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-600">{scholarship.category}</Badge>
                    <a
                      href={scholarship.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Official Portal
                    </a>
                  </div>
                  <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                  <CardDescription className="text-gray-600">{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{scholarship.date}</span>
                    <Link href={`/scholarships/${scholarship.slug}`}>
                      <Button>Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Scholarship Updates</h2>
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-blue-600">
                        <Link href={`/scholarships/${article.slug}`}>{article.title}</Link>
                      </CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/scholarships/${article.slug}`}>
                        <Button variant="outline">Read Full Guide</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Link href="/scholarships/nsp-portal" className="block text-blue-600 hover:underline">
                        National Scholarship Portal
                      </Link>
                      <Link href="/scholarships/state-wise" className="block text-blue-600 hover:underline">
                        State-wise Scholarships
                      </Link>
                      <Link href="/scholarships/merit-based" className="block text-blue-600 hover:underline">
                        Merit-based Scholarships
                      </Link>
                      <Link href="/scholarships/minority" className="block text-blue-600 hover:underline">
                        Minority Scholarships
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>State Scholarships</span>
                        <Badge variant="secondary">15</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Central Schemes</span>
                        <Badge variant="secondary">8</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Merit Based</span>
                        <Badge variant="secondary">12</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Need Based</span>
                        <Badge variant="secondary">10</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                    <CardDescription>
                      Get the latest scholarship notifications and deadlines directly in your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
