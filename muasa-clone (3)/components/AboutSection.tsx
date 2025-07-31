import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Images */}
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20at%203.55.13%E2%80%AFPM.png-Y4bBffRFWMJYHnbdQiVcykLLcSEhUd.jpeg"
              alt="Digital Agency Collage"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-block bg-white text-red-500 px-4 py-2 rounded-full text-sm font-semibold">
              Digital Agency
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Provide Susceptance of Design & Digital Solutions to Link People & Brands
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed">
              More than a digital marketing agency because we bring together the tools of the traditional and the
              digital.
            </p>

            <p className="text-blue-100 leading-relaxed">
              Muasa Solutions Pvt Ltd is a digital marketing agency of brand consultants. Our marketing services are
              SMM, SEO, marketing plans and brand management, brand identity, web design, e-commerce and consulting
              services. The company make sure to stand up for our work because the solutions are rooted in research and
              the problems. We actually encounter them when defining and measuring them. Hence, no decision—from
              strategy and development to design and user experience—is soft, like you'll always see in our work.
            </p>

            <p className="text-blue-100 leading-relaxed">
              Muasa Solutions Pvt Ltd is a business consultant, digital marketing, graphic designers, branding and SEO.
              In Brand Positioning, Digital Marketing, Social Media Presence, and eCommerce experiences, we assist our
              clients to be great with a strong Brand Equity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
