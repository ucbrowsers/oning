import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart } from "lucide-react"

export const metadata = {
  title: "About Us - ScholarshipGuide | Your Trusted Education Partner",
  description:
    "Learn about ScholarshipGuide mission to help Indian students access government scholarships and educational funding opportunities. Discover our story, values, and commitment to student success.",
}

export default function AboutPage() {
  const domain = typeof window !== "undefined" ? window.location.hostname.replace("www.", "") : "scholarshipguide.com"
  const siteName = domain.split(".")[0].charAt(0).toUpperCase() + domain.split(".")[0].slice(1)

  const stats = [
    { icon: Users, label: "Students Helped", value: "10,000+" },
    { icon: Award, label: "Scholarships Listed", value: "500+" },
    { icon: Target, label: "Success Rate", value: "85%" },
    { icon: Heart, label: "Years of Service", value: "5+" },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "Education advocate with 10+ years experience in student counseling and scholarship guidance.",
    },
    {
      name: "Priya Sharma",
      role: "Content Head",
      description:
        "Expert in government policies and scholarship schemes with deep knowledge of application processes.",
    },
    {
      name: "Amit Singh",
      role: "Technical Lead",
      description: "Technology enthusiast focused on making scholarship information accessible to all students.",
    },
  ]

  const values = [
    {
      title: "Accessibility",
      description: "Making scholarship information easily accessible to students from all backgrounds and regions.",
    },
    {
      title: "Accuracy",
      description: "Providing verified, up-to-date information about scholarship schemes and application processes.",
    },
    {
      title: "Support",
      description: "Offering comprehensive guidance and support throughout the scholarship application journey.",
    },
    {
      title: "Transparency",
      description: "Maintaining complete transparency in all our processes and information sharing.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About {siteName}</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering students across India with comprehensive scholarship information and guidance since 2019. Your
              trusted partner in educational funding and academic success.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                {siteName} was founded in 2019 with a simple yet powerful mission: to bridge the information gap between
                deserving students and available scholarship opportunities. Our journey began when our founder, Rajesh
                Kumar, witnessed countless talented students missing out on educational funding simply because they
                weren't aware of the schemes available to them.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                What started as a small initiative to help local students in Uttar Pradesh has now grown into India's
                most comprehensive scholarship information platform. We have successfully guided over 10,000 students in
                securing educational funding worth crores of rupees through various government and private scholarship
                schemes.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Today, ScholarshipGuide serves as a one-stop destination for students seeking information about
                scholarships across all states in India. From central government schemes like NSP to state-specific
                programs like UP Scholarship, Rajasthan Scholarship, and many others, we provide detailed, accurate, and
                timely information to help students make informed decisions about their educational funding.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800">
                  To democratize access to educational funding by providing comprehensive, accurate, and timely
                  information about scholarship opportunities to students across India. We strive to eliminate barriers
                  that prevent deserving students from accessing financial aid for their education.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-800">
                  To create an India where no student's educational dreams are limited by financial constraints. We
                  envision a future where every eligible student is aware of and can easily access the scholarship
                  opportunities available to them, regardless of their background or location.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Detailed guides for 500+ scholarship schemes</li>
                  <li>• State-wise and category-wise scholarship listings</li>
                  <li>• Regular updates on application deadlines</li>
                  <li>• Eligibility criteria and document requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Step-by-step application tutorials</li>
                  <li>• Document preparation guidelines</li>
                  <li>• Common issues and troubleshooting</li>
                  <li>• Status tracking assistance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Guidance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Personalized scholarship recommendations</li>
                  <li>• Application strategy consultation</li>
                  <li>• Document verification support</li>
                  <li>• Interview preparation tips</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Student success stories and testimonials</li>
                  <li>• Peer-to-peer learning opportunities</li>
                  <li>• Regular webinars and workshops</li>
                  <li>• 24/7 helpline and email support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose ScholarshipGuide?</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Trusted by Thousands</h3>
                  <p className="text-gray-700 mb-4">
                    Over 10,000 students have successfully secured scholarships with our guidance. Our proven track
                    record and high success rate make us the most trusted scholarship platform in India.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Always Up-to-Date</h3>
                  <p className="text-gray-700 mb-4">
                    Our dedicated team continuously monitors government portals and official notifications to ensure you
                    get the latest information about scholarship schemes, deadlines, and application processes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
                  <p className="text-gray-700 mb-4">
                    Our team consists of education experts, former government officials, and scholarship recipients who
                    understand the intricacies of various scholarship schemes and application processes.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Resources</h3>
                  <p className="text-gray-700 mb-4">
                    All our resources, guides, and support services are completely free. We believe that financial
                    constraints should never be a barrier to accessing scholarship information and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Scholarship Journey?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Join thousands of successful students who have secured their educational funding with our help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/scholarships"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Scholarships
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
