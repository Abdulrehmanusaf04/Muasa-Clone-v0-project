"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Share2, PenTool, BarChart3, Globe, Smartphone, Zap, Target, ArrowRight, Sparkles } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search results with cutting-edge SEO strategies that drive exponential organic growth.",
    features: ["AI-Powered Keywords", "Technical SEO Audit", "Content Optimization", "Link Building"],
    color: "from-blue-500 via-blue-600 to-cyan-500",
    hoverColor: "from-cyan-500 via-blue-600 to-blue-500",
    stats: "300% Traffic Increase",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Create viral campaigns that captivate audiences and build unstoppable brand communities.",
    features: ["Viral Content Creation", "Community Building", "Influencer Partnerships", "Social Analytics"],
    color: "from-purple-500 via-pink-500 to-rose-500",
    hoverColor: "from-rose-500 via-pink-500 to-purple-500",
    stats: "500K+ Followers",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Craft compelling narratives that convert prospects into loyal brand advocates.",
    features: ["Storytelling Strategy", "Video Production", "Interactive Content", "Content Automation"],
    color: "from-green-500 via-emerald-500 to-teal-500",
    hoverColor: "from-teal-500 via-emerald-500 to-green-500",
    stats: "250% Engagement",
  },
  {
    icon: BarChart3,
    title: "Digital Analytics",
    description: "Unlock actionable insights with advanced analytics that drive data-driven decisions.",
    features: ["Real-time Dashboards", "Predictive Analytics", "ROI Tracking", "Custom Reports"],
    color: "from-orange-500 via-red-500 to-pink-500",
    hoverColor: "from-pink-500 via-red-500 to-orange-500",
    stats: "400% ROI Boost",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Build lightning-fast, conversion-optimized websites that outperform the competition.",
    features: ["Next.js Development", "E-commerce Solutions", "PWA Development", "Performance Optimization"],
    color: "from-indigo-500 via-purple-500 to-blue-500",
    hoverColor: "from-blue-500 via-purple-500 to-indigo-500",
    stats: "99.9% Uptime",
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description: "Dominate mobile channels with precision-targeted campaigns that drive conversions.",
    features: ["App Store Optimization", "Mobile-First Design", "Push Notifications", "Location-Based Marketing"],
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    hoverColor: "from-indigo-500 via-blue-500 to-cyan-500",
    stats: "85% Mobile CTR",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Scale your marketing with intelligent automation that works 24/7 to grow your business.",
    features: ["AI-Powered Workflows", "Lead Scoring", "Behavioral Triggers", "Multi-Channel Automation"],
    color: "from-yellow-500 via-orange-500 to-red-500",
    hoverColor: "from-red-500 via-orange-500 to-yellow-500",
    stats: "10x Efficiency",
  },
  {
    icon: Target,
    title: "Digital Strategy",
    description: "Develop winning strategies that position your brand as the undisputed market leader.",
    features: ["Market Analysis", "Competitive Intelligence", "Growth Hacking", "Strategic Planning"],
    color: "from-pink-500 via-rose-500 to-red-500",
    hoverColor: "from-red-500 via-rose-500 to-pink-500",
    stats: "200% Growth Rate",
  },
]

export default function ServiceCards() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 text-blue-300 text-sm font-medium mb-8 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Premium Services
          </div>

          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            Digital Solutions
          </h2>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Cutting-edge services designed to <span className="text-blue-400 font-semibold">dominate your market</span>{" "}
            and <span className="text-cyan-400 font-semibold">accelerate growth</span> beyond expectations.
          </p>
        </div>

        {/* Enhanced Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl cursor-pointer transform ${
                visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                boxShadow: hoveredCard === index ? `0 25px 50px -12px rgba(59, 130, 246, 0.25)` : undefined,
              }}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${hoveredCard === index ? service.hoverColor : service.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Stats Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 text-green-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {service.stats}
              </div>

              {/* Enhanced Icon */}
              <div className="relative mb-8">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                >
                  <service.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />

                  {/* Icon Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}
                  />
                </div>

                {/* Floating Ring */}
                <div className="absolute inset-0 w-20 h-20 border-2 border-white/20 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
              </div>

              {/* Enhanced Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>

              {/* Enhanced Description */}
              <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-lg">
                {service.description}
              </p>

              {/* Enhanced Features List */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                    style={{ transitionDelay: `${featureIndex * 100}ms` }}
                  >
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-4 group-hover:scale-150 transition-all duration-300 shadow-lg`}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn`}
                >
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer group">
            <span className="mr-3 text-lg">Ready to Transform Your Business?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
