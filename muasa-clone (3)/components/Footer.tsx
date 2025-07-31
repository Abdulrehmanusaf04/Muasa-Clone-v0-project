import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 transform rotate-45 rounded-sm"></div>
                <div className="absolute top-1 left-1 w-3 h-3 bg-red-500 rounded-sm"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-blue-700 rounded-sm"></div>
              </div>
              <div>
                <div className="text-lg font-bold">MUASA</div>
                <div className="text-xs opacity-80">SOLUTIONS PVT LTD</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming Ideas into Impactful Strategies, Empowering Brands to Thrive in a Digital World.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-gray-300">Website Development</div>
              <div className="text-gray-300">Digital Marketing</div>
              <div className="text-gray-300">App Development</div>
              <div className="text-gray-300">SEO Services</div>
              <div className="text-gray-300">Brand Consulting</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div className="text-gray-300 text-sm">
                  123 Digital Avenue
                  <br />
                  Tech District, TD 12345
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <div className="text-gray-300">(571) 517-1514</div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <div className="text-gray-300">hello@muasasolutions.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MUASA Solutions Pvt Ltd. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
