import Link from "next/link"
import {
  Trophy,
  Globe,
  ArrowRight,
  Star,
  FileText,
  Gift,
  Shield,
  CreditCard,
  Gamepad2,
  BarChart3,
  Sparkles
} from "lucide-react"
import CasinoSlider from "@/components/CasinoSlider"
import CasinoList from "@/components/CasinoList"
import Navbar from "@/components/Navbar"
import NewCasinos from "@/components/casino/NewCasinos"
import CasinoBonuses from "@/components/casino/CasinoBonuses"
import SecurityLicensingSection from "@/components/casino/SecurityLicensingSection"
import CasinoSecuritySection from "@/components/casino/CasinoSecuritySection"
import TechnologicalSoluctions from "@/components/casino/TechnologicalSolutions"
import GameSelection from "@/components/casino/GameSelection"
import TrendsTechnology from "@/components/casino/TrendsTechnology"
import ComparisonCasinos from "@/components/casino/ComparisonCasinos"
import TipsStrategies from "@/components/casino/TipsStrategies"

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="container">

        {/* Hero Section */}
        <div className="pt-8">
          <div className="px-6 py-16 bg-[#2c3e50] rounded-3xl text-center">
            <div className="inline-flex items-center bg-[#e91e63] text-white px-4 py-2 rounded-full mb-8">
              <Trophy className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">New Zealand's Best Casino Guide</span>
            </div>

            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              Best New Zealand Online<br />Casinos 2025
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Expert reviews, exclusive bonuses, and reliable ratings to
              help you find the perfect casino.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/online-casinos" className="bg-[#e91e63] hover:bg-[#e91e63]/90 text-white px-8 py-4 rounded-lg font-medium flex items-center transition-colors">
                View All Casinos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="bonuses">
                <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-medium flex items-center transition-colors">
                  Explore Bonuses
                  <Globe className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Casinos */}
        <div className="py-12">
          <div className="flex items-center mb-2">
            <Star className="w-8 h-8 text-[#e91e63] mr-2" />
            <h2 className="text-4xl font-bold text-gray-900">Featured Casinos</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Exclusive offers and specially selected casinos for our readers
          </p>
          <CasinoSlider />
        </div>

        {/* All Casinos */}
        <div className="py-12">
          <div className="flex items-center mb-4">
            <Trophy className="w-8 h-8 text-[#e91e63] mr-2" />
            <h2 className="text-4xl font-bold text-gray-900">All Online Casinos</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Complete list of the top 20 online casinos for New Zealand players
          </p>
          <CasinoList />
        </div>

        <div className="lg:py-0 lg:py-12 py-6 lg:pt-12">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 text-[#e91e63] mr-2" />
            <h2 className="text-4xl font-bold text-gray-900">Our Casino Guide</h2>
          </div>
          <p className="text-gray-600 mb-8">

            Everything you need to know about online casinos and gambling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mx-auto ">

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-9">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <NewCasinos />
              <CasinoBonuses />
              <SecurityLicensingSection />
              <CasinoSecuritySection />
              <TechnologicalSoluctions />
              <GameSelection />
              <TrendsTechnology />
              <ComparisonCasinos />
              <TipsStrategies />
            </div>
          </div>

          {/* Sidebar (visible en todas las pantallas) */}
          <div className="col-span-1 lg:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Table of Contents</h3>
               <nav className="space-y-3">
              <a href="#new-casinos" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <Trophy className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">New Casinos 2025</span>
              </a>
              <a href="#casino-bonuses" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <Gift className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">Casino Bonuses at New Casinos 2025</span>
              </a>
              <a href="#security-licensing" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <Shield className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">Security and Licenses</span>
              </a>
              <a href="#technological-solutions" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <CreditCard className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">Payment Methods</span>
              </a>
              <a href="#game-selection" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <Gamepad2 className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">Game Selection</span>
              </a>
              <a href="#trends-technology" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <Trophy className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">Trends Technology casino games</span>
              </a>
              <a href="#comparison-casinos" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <BarChart3 className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">Comparison: New vs. established casinos</span>
              </a>
              <a href="#tips-strategies" className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors">
                <Sparkles className="w-4 h-4 mr-2 text-[#e91e63]" />
                <span className="text-sm">Tips and Strategies casino in 2025</span>
              </a>
            </nav>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
