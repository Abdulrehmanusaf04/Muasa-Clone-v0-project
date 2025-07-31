import Layout from "@/components/layout"
import { Search, Share2, PenTool, BarChart3, Globe, Smartphone } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost your visibility in search engines with our comprehensive SEO strategies that drive organic traffic and improve rankings.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage your audience across all social platforms with compelling content and strategic campaigns that build brand loyalty.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting"],
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description:
        "Create valuable, relevant content that attracts and retains your target audience while driving profitable customer action.",
      features: ["Blog Writing", "Video Production", "Infographics", "Email Campaigns"],
    },
    {
      icon: BarChart3,
      title: "Digital Analytics",
      description:
        "Make data-driven decisions with comprehensive analytics and insights that reveal what's working and what needs improvement.",
      features: ["Performance Tracking", "Conversion Analysis", "ROI Measurement", "Custom Reporting"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Build stunning, responsive websites that not only look great but also convert visitors into customers.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description:
        "Reach your audience on their mobile devices with targeted campaigns and mobile-optimized experiences.",
      features: ["App Store Optimization", "Mobile Advertising", "SMS Marketing", "Mobile Analytics"],
    },
  ]

  return (
    <Layout>
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to propel your brand through the digital cosmos and
              achieve stellar results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
                <p className="text-gray-300">Understanding your brand, goals, and target audience</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
                <p className="text-gray-300">Developing a comprehensive digital marketing roadmap</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Execution</h3>
                <p className="text-gray-300">Implementing campaigns with precision and creativity</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300">Continuous improvement based on data and results</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
