"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Zap, Rocket, Target } from "lucide-react"

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />

        {/* Animated Mesh Gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl animate-pulse"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, ${
                  ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"][Math.floor(Math.random() * 5)]
                }, transparent)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          />
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10">
            {/* Floating Badge */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-white/10 text-blue-300 text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                #1 Digital Marketing Agency
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping" />
              </div>
            </div>

            {/* Main Heading with Advanced Typography */}
            <div
              className={`transform transition-all duration-1200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-7xl lg:text-8xl font-black leading-none text-white mb-6">
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  Digital Age
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Expedition
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  in{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                      Automation
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-red-400/20 blur-lg -z-10 animate-pulse" />
                  </span>
                </span>
              </h1>
            </div>

            {/* Enhanced Description */}
            <div
              className={`transform transition-all duration-1400 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Transforming Ideas into <span className="text-blue-400 font-semibold">Impactful Strategies</span>,
                Empowering Brands to Thrive in a <span className="text-cyan-400 font-semibold">Digital World</span>.
              </p>
            </div>

            {/* Stats Row */}
            <div
              className={`transform transition-all duration-1600 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-wrap gap-8 mb-8">
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "150+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className={`transform transition-all duration-1800 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/projects"
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="relative z-10 flex items-center text-lg">
                    <Rocket className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    Explore Our Work
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>

                <button className="group relative px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center text-lg">
                    <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - 3D Astronaut Scene */}
          <div className="relative">
            <div
              className={`relative w-full h-[700px] transform transition-all duration-2000 delay-1000 ${
                isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-95"
              }`}
            >
              {/* 3D Scene Container */}
              <div className="absolute inset-0 perspective-1000">
                {/* Floating Platforms */}
                <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float" />
                <div
                  className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-xl animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-40 left-8 w-16 h-16 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-lg animate-float"
                  style={{ animationDelay: "2s" }}
                />

                {/* 3D Planets */}
                <div className="absolute top-16 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-2xl animate-float hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300/50 to-transparent" />
                </div>
                <div
                  className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-pink-500 shadow-xl animate-float hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                </div>
                <div
                  className="absolute top-48 left-12 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg animate-float hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-300/40 to-transparent" />
                </div>

                {/* Central Glow Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-cyan-600/30 blur-3xl animate-pulse" />
                </div>

                {/* Main Astronaut Container */}
                <div className="absolute inset-0 flex items-center justify-center group">
                  <div className="relative w-96 h-96 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 hover:drop-shadow-2xl">
                    {/* Astronaut Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 animate-spin-slow" />

                    {/* Main Astronaut Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/placeholder.svg?height=400&width=400&text=🚀+Astronaut+Explorer"
                        alt="Digital Space Explorer"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain filter drop-shadow-2xl"
                      />

                      {/* Floating Elements Around Astronaut */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg">
                        <Target className="w-4 h-4 text-yellow-900 m-2" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg" />
                      <div className="absolute top-1/4 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Orbital Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[500px] h-[500px] border border-white/10 rounded-full animate-spin-slow" />
                  <div className="absolute w-[600px] h-[600px] border border-blue-400/20 rounded-full animate-spin-reverse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 group cursor-pointer">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-blue-400 transition-colors duration-300">
            <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-white/60 text-sm group-hover:text-white transition-colors duration-300">Scroll</span>
        </div>
      </div>
    </section>
  )
}
