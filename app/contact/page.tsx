"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const domain = typeof window !== "undefined" ? window.location.hostname.replace("www.", "") : "scholarshipguide.com"
  const siteName = domain.split(".")[0].charAt(0).toUpperCase() + domain.split(".")[0].slice(1)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: [`info@${domain}`, `support@${domain}`],
      description: "Send us your queries anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-9876543210", "+91-8765432109"],
      description: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["New Delhi, India", "Mumbai, India"],
      description: "Our offices across India",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Online Support", "Live Chat Available"],
      description: "We're here to help anytime",
    },
  ]

  const faqs = [
    {
      question: "How can I get help with my scholarship application?",
      answer:
        "You can reach out to us via email, phone, or through our contact form. Our expert team provides free guidance on scholarship applications, document preparation, and application tracking.",
    },
    {
      question: "Do you charge for scholarship guidance?",
      answer:
        "No, all our services including scholarship information, application guidance, and support are completely free. We believe education funding information should be accessible to all students.",
    },
    {
      question: "How quickly do you respond to queries?",
      answer:
        "We typically respond to email queries within 24 hours on working days. For urgent matters, you can call our helpline during business hours for immediate assistance.",
    },
    {
      question: "Can you help with scholarship applications for all states?",
      answer:
        "Yes, we provide comprehensive information and guidance for scholarship schemes across all Indian states including UP, Rajasthan, MP, West Bengal, Karnataka, Bihar, and many others.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 mb-8">
              Have questions about scholarships or need help with your application? Our expert team is here to assist
              you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is your query about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your query in detail..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Multiple ways to reach our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-gray-700">
                            {detail}
                          </p>
                        ))}
                        <p className="text-xs text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="/scholarships" className="block text-blue-600 hover:underline text-sm">
                    Browse All Scholarships
                  </a>
                  <a href="/guide" className="block text-blue-600 hover:underline text-sm">
                    Application Guide
                  </a>
                  <a href="/faq" className="block text-blue-600 hover:underline text-sm">
                    Frequently Asked Questions
                  </a>
                  <a href="/about" className="block text-blue-600 hover:underline text-sm">
                    About Us
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900">Support Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-700">Monday - Friday:</span>
                    <span className="text-green-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Saturday:</span>
                    <span className="text-green-800 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Sunday:</span>
                    <span className="text-green-800 font-medium">Closed</span>
                  </div>
                  <div className="mt-3 p-2 bg-green-100 rounded text-xs text-green-800">
                    <strong>Note:</strong> Email support is available 24/7. We respond to all queries within 24 hours.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-900">Emergency Support</CardTitle>
              <CardDescription className="text-red-700">
                For urgent scholarship deadline issues or critical application problems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-800">Emergency Helpline: +91-9999999999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-800">urgent@{domain}</span>
                </div>
              </div>
              <p className="text-sm text-red-700 mt-3">
                Available during scholarship application seasons for deadline-related emergencies only.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
