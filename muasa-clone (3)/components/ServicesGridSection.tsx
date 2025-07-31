import { Monitor, Smartphone, Users, ShoppingCart, Search, Palette, BarChart3, Settings } from "lucide-react"

export default function ServicesGridSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-200 to-blue-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            what <span className="text-red-500">we</span> do!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Website Development */}
          <div className="bg-black text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <Monitor className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Website Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Our Web Development services and solutions to any type of business. Be it a corporate website design, a
              real estate website design, or a restaurant website design, with special design and technological options,
              we will assist you with all of them.
            </p>
          </div>

          {/* App Development */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <Smartphone className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">App Development</h3>
            <p className="text-blue-100 leading-relaxed">
              Elevate your brand with our premium App Development services. At Muasa Solutions Pvt Ltd, we blend
              strategy, creativity, and optimization to shape compelling and memorable brand identities. So, let's build
              a strong, unique, and captivating brand story together.
            </p>
          </div>

          {/* Social Media Marketing */}
          <div className="bg-black text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <Users className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
            <p className="text-gray-300 leading-relaxed">
              We help in understanding where the conversion is, who is its front-runner, and what type of voice your
              customers have. Hence, the brand is sure to effectively engage with social media through our innovative
              and tailored social media strategies. Together, we can amplify your brands.
            </p>
          </div>

          {/* Shopify Store Development */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <ShoppingCart className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Shopify Store Development</h3>
            <p className="text-blue-100 leading-relaxed">
              Muasa Solutions Pvt Ltd has been performing fine to provide the full solution services for online business
              and website development for all types of companies, from small to start-up, small or big, aiding them in
              being online friendly to their consumers.
            </p>
          </div>

          {/* Search Engine Optimization */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <Search className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Search Engine Optimization (SEO)</h3>
            <p className="text-red-100 leading-relaxed">
              If you want your business to be successful, you cannot afford to cut corners on your online presence.
              Through carefully employed SEO techniques, Muasa Solutions Pvt Ltd will ensure that your brand will grow
              significant ahead of your business rivals in competitive market.
            </p>
            <div className="mt-6">
              <button className="text-white hover:text-red-200 transition-colors flex items-center">
                Discover More →
              </button>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <BarChart3 className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-blue-100 leading-relaxed">
              Take your brand to the next level with our exclusive Brand Consultancy Solutions. We at Muasa Solutions
              Pvt Ltd deploy planning and ideas for creating strong and articulate brand profiles. Therefore, let's
              create a powerful brand narrative that people cannot help but follow.
            </p>
          </div>

          {/* Designing */}
          <div className="bg-black text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <Palette className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Designing</h3>
            <p className="text-gray-300 leading-relaxed">
              Our company specializes in website development for any kind of company. Regardless of your business type,
              corporate, real estate, restaurant, or any other business—you may require creative and technological
              automation of a website. We will assist you.
            </p>
          </div>

          {/* Website Maintenance */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <Settings className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Website Maintenance</h3>
            <p className="text-blue-100 leading-relaxed">
              Muasa Solutions Pvt Ltd has been doing well to provide one-stop services for all e-commerce development
              needs for companies of all sizes, including small start-ups, medium or even big firms, to enable them to
              meet their customers' needs online more effectively.
            </p>
          </div>

          {/* Brand Consulting & Positioning */}
          <div className="bg-black text-white p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <BarChart3 className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Brand Consulting & Positioning</h3>
            <p className="text-gray-300 leading-relaxed">
              Elevate your brand with our premium Brand Consulting Services. At Muasa Solutions Pvt Ltd, we blend
              strategy and creativity to shape compelling and unique brand identities. So, let's build a memorable brand
              story together that resonates with your target audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
