import Image from "next/image"

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Scrolling Text */}
        <div className="mb-16 overflow-hidden">
          <div className="text-6xl lg:text-8xl font-bold text-white whitespace-nowrap flex items-center">
            <span className="text-white">Website</span>
            <span className="mx-8">Development</span>
            <span className="text-red-500 mx-8">•</span>
            <span className="text-red-500 mx-8">Digital</span>
            <span className="text-white mx-8">Marketing</span>
            <span className="text-red-500 mx-8">•</span>
            <span className="text-red-500 mx-8">Branding</span>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20at%203.55.21%E2%80%AFPM.png-hhY8voqvNUVC1MSVQRJc5QZsilypgV.jpeg"
                alt="Everyday Organics - Website and Mobile Development"
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <h3 className="font-semibold">Everyday Organics</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20at%203.55.18%E2%80%AFPM.png-s0PlljrMvm55wpeq0DoK6cI3pbccKE.jpeg"
                alt="Mobile App Development Projects"
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20at%203.55.18%E2%80%AFPM.png-s0PlljrMvm55wpeq0DoK6cI3pbccKE.jpeg"
                alt="E-commerce and Digital Marketing Projects"
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20at%203.55.21%E2%80%AFPM.png-hhY8voqvNUVC1MSVQRJc5QZsilypgV.jpeg"
                alt="Website Development and Branding"
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
