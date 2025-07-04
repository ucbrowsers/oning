"use client"

import Link from "next/link"
import { GraduationCap, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const domain = typeof window !== "undefined" ? window.location.hostname.replace("www.", "") : "scholarshipguide.com"
  const siteName = domain.split(".")[0].charAt(0).toUpperCase() + domain.split(".")[0].slice(1)

  const footerLinks = {
    scholarships: [
      { name: "UP Scholarship", href: "/scholarships/up-scholarship-2025" },
      { name: "NSP Portal", href: "/scholarships/nsp-scholarship-2025" },
      { name: "Rajasthan Scholarship", href: "/scholarships/rajasthan-scholarship-2025" },
      { name: "MP Scholarship", href: "/scholarships/mp-scholarship-2025" },
    ],
    resources: [
      { name: "Application Guide", href: "/guide" },
      { name: "Document Checklist", href: "/documents" },
      { name: "FAQ", href: "/faq" },
      { name: "Scholarship Calculator", href: "/calculator" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">{siteName}</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your trusted resource for government scholarships and educational funding opportunities across India.
              Helping students achieve their academic dreams since 2025.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <span>info@{domain}</span>
            </div>
          </div>

          {/* Popular Scholarships */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Scholarships</h3>
            <ul className="space-y-2">
              {footerLinks.scholarships.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
