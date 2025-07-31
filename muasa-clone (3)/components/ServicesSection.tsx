import { Monitor, Smartphone, Users } from "lucide-react"

export default function ServicesSection() {
  return (
    <>
      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-200 to-blue-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">
              what <span className="text-red-500">we</span> do!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Development */}
            <div className="bg-black text-white p-8 rounded-2xl">
              <Monitor className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Website Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Our Web Development services and solutions to any type of business. Be it a corporate website design, a
                real estate website design, or a restaurant website design, with special design and technological
                options, we will assist you with all of them.
              </p>
            </div>

            {/* App Development */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl">
              <Smartphone className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">App Development</h3>
              <p className="text-blue-100 leading-relaxed">
                Elevate your brand with our premium App Development services. At Muasa Solutions Pvt Ltd, we blend
                strategy, creativity, and optimization to shape compelling and memorable brand identities. So, let's
                build a strong, unique, and captivating brand story together.
              </p>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-black text-white p-8 rounded-2xl">
              <Users className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
              <p className="text-gray-300 leading-relaxed">
                We help in understanding where the conversion is, who is its front-runner, and what type of voice your
                customers have. Hence, the brand is sure to effectively engage with social media through our innovative
                and tailored social media strategies. Together, we can amplify your brands.
              </p>
            </div>

            {/* Additional Services */}
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-8 rounded-2xl">
              <div className="w-12 h-12 mb-6 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Strategy</h3>
              <p className="text-blue-100 leading-relaxed">
                Comprehensive digital strategies that align with your business goals and drive measurable results.
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl">
              <div className="w-12 h-12 mb-6 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">SEO Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Boost your online visibility and drive organic traffic with our proven SEO strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl">
              <div className="w-12 h-12 mb-6 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
              <p className="text-purple-100 leading-relaxed">
                Data-driven insights and comprehensive reporting to track your digital marketing performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              The Services Offered By Our Digital Marketing Agency
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              As Muasa Solutions Pvt Ltd, a leading digital marketing agency, we offer a wide range of digital marketing
              solutions. Our professionalism and hardworking nature enable us to deliver high-quality,
              professional-looking products. Muasa Solutions digital strategic offerings and services span across the
              entire digital marketing spectrum, empowering you to succeed in the complex digital world. Our core
              digital marketing services include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Social Media Marketing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Facebook Advertising</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Instagram Marketing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Content Writing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Video Marketing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Website Marketing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Online Advertising</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Search Engine Marketing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Google Ads</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Copywriting</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Email Marketing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Video Editing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
