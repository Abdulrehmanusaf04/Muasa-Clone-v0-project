import Layout from "@/components/layout"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

export default function ClientsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "MUASA Solutions transformed our digital presence completely. Their strategic approach and innovative campaigns helped us achieve 300% growth in just 6 months.",
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The team's expertise in social media marketing is unmatched. They helped us build a community of over 100K engaged followers and significantly increased our sales.",
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      role: "Founder",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "Working with MUASA was a game-changer for our brand. Their creative content and SEO strategies put us on the map and made us industry leaders.",
    },
    {
      name: "David Thompson",
      company: "HealthTech Solutions",
      role: "CMO",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The ROI we've seen from our partnership with MUASA is incredible. Their data-driven approach and continuous optimization have exceeded all our expectations.",
    },
  ]

  const clients = [
    { name: "TechStart Inc.", logo: "/placeholder.svg?height=60&width=120" },
    { name: "E-Commerce Plus", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Fashion Forward", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HealthTech Solutions", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Green Energy Co.", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Food Delivery Pro", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Financial Services", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Travel Adventures", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <Layout>
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Our Clients</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're proud to partner with innovative brands across industries, helping them navigate the digital cosmos
              and achieve stellar results.
            </p>
          </div>

          {/* Client Logos */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted by Leading Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-blue-400 mr-4" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">"{testimonial.testimonial}"</p>

                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-blue-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
