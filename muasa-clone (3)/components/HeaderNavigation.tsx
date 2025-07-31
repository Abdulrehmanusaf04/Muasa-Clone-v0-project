"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Cursor Follower */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isScrolled ? 0.8 : 1})`,
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-0 hover:opacity-100 transition-opacity duration-700" />

        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500 scale-150" />

                <div className="w-14 h-14 relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 transform rotate-45 rounded-lg transition-all duration-500 group-hover:rotate-[60deg] shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                  </div>
                  <div className="absolute top-1 left-1 w-5 h-5 bg-gradient-to-br from-red-400 to-pink-500 rounded-md transition-all duration-500 group-hover:scale-110 shadow-lg" />
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-gradient-to-br from-blue-700 to-indigo-600 rounded-md transition-all duration-500 group-hover:scale-110 shadow-lg" />

                  {/* Sparkle Effect */}
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                </div>
              </div>

              <div className="text-white">
                <div className="text-2xl font-black tracking-wide transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
                  MUASA
                </div>
                <div className="text-xs tracking-[0.2em] opacity-80 transition-all duration-300 group-hover:opacity-100 font-medium">
                  SOLUTIONS PVT LTD
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Clients", href: "/clients" },
                { name: "Our Team", href: "/team" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 font-medium group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 font-medium flex items-center group">
                  <span className="relative z-10">Services</span>
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-all duration-300 ${isServicesOpen ? "rotate-180 text-blue-400" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-80 transition-all duration-500 ${
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-4 scale-95"
                  }`}
                >
                  <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <div className="relative p-2">
                      {[
                        { name: "Digital Marketing", desc: "Complete digital solutions" },
                        { name: "Web Development", desc: "Modern web applications" },
                        { name: "SEO Services", desc: "Search optimization" },
                        { name: "Social Media", desc: "Social engagement" },
                      ].map((service, index) => (
                        <Link
                          key={service.name}
                          href="/services"
                          className="block p-4 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 group"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="font-semibold group-hover:text-blue-300 transition-colors duration-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {service.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Enhanced Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="text-right text-white group">
                <div className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  Consultation
                </div>
                <div className="font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  (571) 517-1514
                </div>
              </div>

              <Link
                href="/contact"
                className="relative px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 flex items-center">
                  START A PROJECT
                  <div className="ml-2 w-2 h-2 bg-white rounded-full group-hover:animate-ping" />
                </span>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-3 text-white rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
              {isMenuOpen ? (
                <X className="w-6 h-6 relative z-10 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 pb-6 space-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Clients", href: "/clients" },
                { name: "Our Team", href: "/team" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 font-medium group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="group-hover:text-blue-300 transition-colors duration-300">{item.name}</span>
                </Link>
              ))}

              <div className="px-6 pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  START A PROJECT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
