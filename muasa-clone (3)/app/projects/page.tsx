import Layout from "@/components/layout"
import Image from "next/image"
import { ExternalLink, Calendar, Tag } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Revolution",
      category: "E-commerce & SEO",
      date: "2024",
      description:
        "Complete digital transformation for a retail brand, resulting in 300% increase in online sales and improved search rankings.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["SEO", "E-commerce", "Web Design", "Analytics"],
      results: ["300% Sales Increase", "150% Traffic Growth", "Top 3 Search Rankings"],
    },
    {
      title: "Social Media Mastery",
      category: "Social Media Marketing",
      date: "2024",
      description:
        "Comprehensive social media strategy that grew follower base by 500% and increased engagement rates significantly.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Social Media", "Content Creation", "Community Management"],
      results: ["500% Follower Growth", "250% Engagement Increase", "10M+ Impressions"],
    },
    {
      title: "Brand Identity Launch",
      category: "Branding & Design",
      date: "2023",
      description:
        "Complete brand identity redesign and digital marketing launch for a tech startup entering the market.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Branding", "Web Design", "Digital Marketing"],
      results: ["New Brand Identity", "50% Lead Increase", "Market Recognition"],
    },
    {
      title: "Content Marketing Success",
      category: "Content Marketing",
      date: "2023",
      description:
        "Strategic content marketing campaign that established thought leadership and drove qualified leads.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Content Marketing", "SEO", "Lead Generation"],
      results: ["200% Organic Traffic", "150% Lead Quality", "Industry Authority"],
    },
    {
      title: "Mobile App Promotion",
      category: "Mobile Marketing",
      date: "2023",
      description:
        "Comprehensive mobile app marketing strategy that achieved top app store rankings and user acquisition goals.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Mobile Marketing", "App Store Optimization", "User Acquisition"],
      results: ["Top 10 App Ranking", "100K+ Downloads", "4.8 Star Rating"],
    },
    {
      title: "Analytics & Optimization",
      category: "Data Analytics",
      date: "2023",
      description:
        "Data-driven optimization project that improved conversion rates and ROI across all digital channels.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Analytics", "Conversion Optimization", "ROI Improvement"],
      results: ["180% ROI Increase", "45% Conversion Rate", "Data-Driven Insights"],
    },
  ]

  return (
    <Layout>
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our stellar portfolio of successful digital marketing campaigns and transformations that have
              propelled brands to new heights.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="mr-2">View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your brand and achieve stellar results in the digital universe.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg">
              Start Your Digital Journey
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
