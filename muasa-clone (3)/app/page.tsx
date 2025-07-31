import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import StatsSection from "@/components/StatsSection"
import ServicesGridSection from "@/components/ServicesGridSection"
import ServicesListSection from "@/components/ServicesListSection"
import PortfolioSection from "@/components/PortfolioSection"
import PartnershipsSection from "@/components/PartnershipsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesGridSection />
      <ServicesListSection />
      <PortfolioSection />
      <PartnershipsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
