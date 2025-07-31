export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-white text-red-500 px-4 py-2 rounded-full text-sm font-semibold">
              Digital Experience
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Elevating Businesses through Branding & Digital Marketing Since Four Years.
            </h2>

            <p className="text-blue-100 leading-relaxed">
              At Muasa Solutions, we've spent the past decade helping businesses thrive in the digital space. Our proven
              digital marketing strategies have consistently delivered impressive results, driving up to a 100% increase
              in leads and sales for our clients.
            </p>

            <p className="text-blue-100 leading-relaxed">
              We specialize in boosting organic engagement on platforms like Facebook, while also offering a
              comprehensive suite of digital marketing services.
            </p>
          </div>

          {/* Right Content - Stats Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-black mb-2">100+</div>
                <div className="text-red-500 font-semibold">Clientele</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-black mb-2">20</div>
                <div className="text-red-500 font-semibold">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-black mb-2">160+</div>
                <div className="text-red-500 font-semibold">E-commerce Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-black mb-2">4</div>
                <div className="text-red-500 font-semibold">Years Achievement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
