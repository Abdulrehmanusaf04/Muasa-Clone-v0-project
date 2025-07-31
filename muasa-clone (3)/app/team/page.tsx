import Layout from "@/components/layout"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with 15+ years in digital marketing. Alex founded MUASA with the mission to revolutionize how brands connect with their audiences.",
      expertise: ["Strategic Planning", "Business Development", "Digital Transformation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@muasasolutions.com",
      },
    },
    {
      name: "Sarah Kim",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning creative professional who brings brands to life through innovative design and compelling storytelling.",
      expertise: ["Brand Design", "Creative Strategy", "Visual Storytelling"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@muasasolutions.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Head of Digital Strategy",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Data-driven strategist who develops comprehensive digital marketing campaigns that deliver measurable results.",
      expertise: ["Digital Strategy", "Analytics", "Performance Marketing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@muasasolutions.com",
      },
    },
    {
      name: "Emily Johnson",
      role: "Social Media Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Social media expert who builds engaged communities and creates viral content that resonates with target audiences.",
      expertise: ["Social Media Marketing", "Community Management", "Content Creation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@muasasolutions.com",
      },
    },
    {
      name: "David Thompson",
      role: "SEO Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technical SEO expert who helps brands achieve top search rankings and drive organic traffic growth.",
      expertise: ["Technical SEO", "Keyword Research", "Link Building"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@muasasolutions.com",
      },
    },
    {
      name: "Lisa Wang",
      role: "Content Marketing Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Content strategist who creates compelling narratives that educate, engage, and convert audiences into loyal customers.",
      expertise: ["Content Strategy", "Copywriting", "Email Marketing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@muasasolutions.com",
      },
    },
  ]

  return (
    <Layout>
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the stellar crew behind MUASA Solutions - passionate digital explorers dedicated to propelling your
              brand to new heights.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{member.role}</p>

                  <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Culture Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">
                  We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and open communication to achieve extraordinary results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Results Driven</h3>
                <p className="text-gray-300">
                  Every strategy and campaign is designed with measurable outcomes and client success in mind.
                </p>
              </div>
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Stellar Team</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to embark on an exciting journey in digital marketing? We're always looking for talented individuals
              to join our cosmic crew.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg">
              View Open Positions
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
