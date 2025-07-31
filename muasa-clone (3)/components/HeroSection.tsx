import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Digital Age
              <br />
              Expedition in
              <br />
              Marketing
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Transforming Ideas into Impactful Strategies, Empowering Brands to Thrive in a Digital World.
            </p>

            <Link
              href="#projects"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-lg"
            >
              Social Media Projects
            </Link>
          </div>

          {/* Right Content - Astronaut */}
          <div className="relative">
            <div className="relative w-full h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20at%203.54.58%E2%80%AFPM-5tAzoJ27fuOCyvsrpxRPcMYC4DV3av.png"
                alt="Astronaut in space"
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
