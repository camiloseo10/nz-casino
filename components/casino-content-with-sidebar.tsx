import {
  Trophy,
  Gift,
  BarChart3,
  Shield,
  CreditCard,
  Gamepad2,
  Sparkles,
} from "lucide-react"
import NewCasinos from "@/components/casino/NewCasinos"
import CasinoBonuses from "@/components/casino/CasinoBonuses"
import SecurityLicensingSection from "@/components/casino/SecurityLicensingSection"
import CasinoSecuritySection from "@/components/casino/CasinoSecuritySection"
import TechnologicalSoluctions from "@/components/casino/TechnologicalSolutions"
import GameSelection from "@/components/casino/GameSelection"
import TrendsTechnology from "@/components/casino/TrendsTechnology"
import ComparisonCasinos from "./casino/ComparisonCasinos"
import TipsStrategies from "@/components/casino/TipsStrategies"

export default function CasinoContentWithSidebar() {
  return (
    <div className="min-h-screen px-4 pt-0 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

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
              {/* Aquí van los enlaces del sidebar */}
            </nav>
          </div>
        </div>

      </div>
    </div>
  )
}
