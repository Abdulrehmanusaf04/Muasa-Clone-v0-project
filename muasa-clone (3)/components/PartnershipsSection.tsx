export default function PartnershipsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">upwork</div>
          </div>
          <div className="text-center flex items-center space-x-2">
            <div className="w-1 h-12 bg-blue-400"></div>
            <div>
              <div className="text-xl font-bold text-white">Google</div>
              <div className="text-sm text-gray-300">Partner</div>
            </div>
          </div>
          <div className="text-center flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded"></div>
            <div>
              <div className="text-xl font-bold text-white">shopify</div>
              <div className="text-sm text-gray-300">partner</div>
            </div>
          </div>
          <div className="text-center flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="text-xl font-bold text-white">mailchimp</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white">Meta</div>
            <div className="text-sm text-gray-300">Business Partner</div>
          </div>
        </div>

        {/* Agency Description */}
        <div className="text-center">
          <p className="text-red-400 text-lg font-semibold mb-6">We are Digital agency</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-300 leading-tight max-w-5xl mx-auto">
            Muasa Solutions is a digital marketing agency that works as brand consultants, focusing on communication,
            design & strategy.
          </h2>
        </div>
      </div>
    </section>
  )
}
