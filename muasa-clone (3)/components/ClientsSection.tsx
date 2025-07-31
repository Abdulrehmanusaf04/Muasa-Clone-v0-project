import Image from "next/image"
import { Star } from "lucide-react"

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clients Logos */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-12">Clients</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
            <div className="text-center">
              <div className="text-2xl font-light text-gray-600">CURVY WEARS</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-black">DOGS TAG</div>
              <div className="text-sm text-gray-600">BOBBY SUPPLIES</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-black">OMNIVERSA</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-black">ALLIANCE MART</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-yellow-600">RBC</div>
              <div className="text-sm text-gray-600">Royal Business Club</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-black">Prime Homes</div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-4">Reviews About Our Digital Marketing & Branding Service</p>
          <h3 className="text-3xl font-bold text-black mb-8">What People Say About Us!</h3>

          <div className="flex justify-center mb-8">
            <Image
              src="/placeholder.svg?height=60&width=120&text=Google"
              alt="Google"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Wow, I had such an amazing experience with Muasa ⭐ Their standout strategy of creating engaging social
                media contests really made a difference
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
