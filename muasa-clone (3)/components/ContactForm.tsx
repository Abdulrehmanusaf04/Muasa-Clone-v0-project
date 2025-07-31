"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fadeInUp">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            Ready to launch your digital marketing expedition? Let's discuss how we can help transform your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-8">Start Your Project</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.firstName
                        ? "border-red-400 focus:ring-red-400"
                        : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-400 text-sm flex items-center animate-fadeIn">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.lastName
                        ? "border-red-400 focus:ring-red-400"
                        : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-red-400 text-sm flex items-center animate-fadeIn">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.email
                      ? "border-red-400 focus:ring-red-400"
                      : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm flex items-center animate-fadeIn">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="analytics">Digital Analytics</option>
                    <option value="web-dev">Web Development</option>
                    <option value="mobile">Mobile Marketing</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="strategy">Digital Strategy</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-400 focus:ring-red-400"
                      : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                  }`}
                  placeholder="Tell us about your project goals and requirements..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm flex items-center animate-fadeIn">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Launch My Project
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">
                      123 Digital Avenue
                      <br />
                      Tech District, TD 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">(571) 517-1514</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">hello@muasasolutions.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Response Guarantee</h3>
              <p className="text-blue-100 mb-6">
                We understand that time is crucial in the digital world. That's why we guarantee a response to all
                inquiries within 24 hours.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold">Average response time: 2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
