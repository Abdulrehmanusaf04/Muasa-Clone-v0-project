import Layout from "@/components/layout"
import { Rocket, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <Layout>
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">About MUASA Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are digital pioneers, exploring the vast universe of marketing possibilities to help brands reach new
              heights in the digital cosmos.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Rocket className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To transform innovative ideas into impactful digital strategies that propel brands beyond conventional
                boundaries, creating meaningful connections in the digital universe.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading digital marketing constellation, guiding brands through their digital transformation
                journey with innovative solutions and stellar results.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Working together to achieve extraordinary results</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pushing boundaries with creative solutions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Delivering quality that exceeds expectations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Results</h3>
                <p className="text-gray-300">Focused on measurable outcomes and success</p>
              </div>
            </div>
          </div>

          {/* Company Story */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded with a vision to revolutionize digital marketing, MUASA Solutions began as a small team of
                passionate digital explorers. We recognized that in the vast digital universe, brands needed more than
                just traditional marketing—they needed a comprehensive expedition strategy.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our journey started with a simple belief: every brand has the potential to shine like a star in the
                digital cosmos. Through innovative strategies, cutting-edge technology, and unwavering dedication, we've
                helped countless businesses navigate the complex digital landscape.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we continue to push the boundaries of what's possible in digital marketing, always staying ahead
                of the curve and helping our clients reach new heights in their digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
