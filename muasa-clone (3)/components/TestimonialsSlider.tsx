"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    image: "/placeholder.svg?height=80&width=80&text=SJ",
    rating: 5,
    testimonial:
      "MUASA Solutions transformed our digital presence completely. Their strategic approach and innovative campaigns helped us achieve 300% growth in just 6 months. The team's expertise is unmatched.",
  },
  {
    name: "Michael Chen",
    company: "E-Commerce Plus",
    role: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80&text=MC",
    rating: 5,
    testimonial:
      "The team's expertise in social media marketing is incredible. They helped us build a community of over 100K engaged followers and significantly increased our sales. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    company: "Fashion Forward",
    role: "Founder",
    image: "/placeholder.svg?height=80&width=80&text=ER",
    rating: 5,
    testimonial:
      "Working with MUASA was a game-changer for our brand. Their creative content and SEO strategies put us on the map and made us industry leaders. Outstanding results!",
  },
  {
    name: "David Thompson",
    company: "HealthTech Solutions",
    role: "CMO",
    image: "/placeholder.svg?height=80&width=80&text=DT",
    rating: 5,
    testimonial:
      "The ROI we've seen from our partnership with MUASA is incredible. Their data-driven approach and continuous optimization have exceeded all our expectations.",
  },
  {
    name: "Lisa Wang",
    company: "Green Energy Co.",
    role: "Marketing Manager",
    image: "/placeholder.svg?height=80&width=80&text=LW",
    rating: 5,
    testimonial:
      "MUASA's automation solutions streamlined our entire marketing process. We've seen a 250% increase in lead quality and our team is more efficient than ever.",
  },
]

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fadeInUp">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <Quote className="w-16 h-16 text-blue-400 opacity-50" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-2xl text-gray-200 leading-relaxed mb-8 font-light italic">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-blue-400/30"
                      />
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.role}</p>
                        <p className="text-blue-400 font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-400 scale-125" : "bg-white/30 hover:bg-white/50 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-white/10 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
