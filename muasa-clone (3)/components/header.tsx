import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 transform rotate-45 rounded-sm"></div>
            <div className="absolute top-1 left-1 w-4 h-4 bg-red-500 rounded-sm"></div>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-blue-700 rounded-sm"></div>
          </div>
          <div className="text-white">
            <div className="text-xl font-bold tracking-wide">MUASA</div>
            <div className="text-xs tracking-wider opacity-90">SOLUTIONS PVT LTD</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-300 transition-colors font-medium">
            About Us
          </Link>
          <div className="relative group">
            <Link
              href="/services"
              className="text-white hover:text-blue-300 transition-colors font-medium flex items-center"
            >
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <Link href="/projects" className="text-white hover:text-blue-300 transition-colors font-medium">
            Projects
          </Link>
          <Link href="/clients" className="text-white hover:text-blue-300 transition-colors font-medium">
            Clients
          </Link>
          <Link href="/team" className="text-white hover:text-blue-300 transition-colors font-medium">
            Our Team
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-300 transition-colors font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Contact Info & CTA */}
        <div className="flex items-center space-x-6">
          <div className="text-right text-white">
            <div className="text-sm opacity-80">Consultation</div>
            <div className="font-semibold">(571) 517-1514</div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg">
            START A PROJECT
          </button>
        </div>
      </div>
    </header>
  )
}
