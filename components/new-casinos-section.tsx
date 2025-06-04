"use client"

import { Trophy, AlertTriangle, AlertCircle, Check } from "lucide-react"

export default function NewCasinos() {
  return (
    <section id="new-casinos" className="w-full mb-16 mt-8 px-2 sm:px-4 md:px-6">
      {/* Título */}
      <div className="flex items-center mb-6">
        <Trophy className="w-6 h-6 text-[#e91e63] mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">New Casinos in 2025</h2>
      </div>

      {/* Intro */}
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        Explore the newest operators and trends shaping the future of online gambling for New Zealand players.
      </p>

      {/* Contenido principal */}
      <div className="w-full space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            New operators are constantly emerging in the New Zealand casino market, and 2025 is no exception...
          </p>

          <div className="border-l-4 border-[#e91e63] pl-4 py-3 my-6">
            <p className="text-gray-700 mb-3 text-sm leading-relaxed">
              New casinos in 2025 often focus on <span className="font-bold">innovation</span> to stand out...
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Competition between casinos is constantly intensifying...
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-md flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-gray-800 text-sm mb-1">Be aware:</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                While there are many advantages, be cautious when trying a brand new casino...
              </p>
            </div>
          </div>
        </div>

        {/* Grid de ventajas y desventajas */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {/* Ventajas */}
          <div className="w-full bg-green-800 text-white rounded-md p-3 sm:p-4">
            <div className="flex items-center mb-4">
              <Trophy className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-bold">Advantages of New Casinos</h3>
            </div>
            <div className="space-y-3">
              <AdvantageItem
                title="Generous Offers"
                text="New casinos often provide extra large welcome bonuses and promotions to attract players."
              />
              <AdvantageItem
                title="Modern Solutions"
                text="The newest platforms typically feature modern design, fast software, and full mobile optimization."
              />
              <AdvantageItem
                title="Innovative Concepts"
                text="Many new sites offer creative themes, reward systems, and gaming features that set them apart from the crowd."
              />
            </div>
          </div>

          {/* Desventajas */}
          <div className="w-full bg-[#e91e63] text-white rounded-md p-3 sm:p-4">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-bold">Challenges with New Casinos</h3>
            </div>
            <div className="space-y-3">
              <DisadvantageItem
                title="Unproven Track Record"
                text="New casino sites lack historical data and established reputation, making it difficult to assess their reliability."
              />
              <DisadvantageItem
                title="Variable Game Selection"
                text="Some new casinos start with fewer games or providers than established competitors..."
              />
              <DisadvantageItem
                title="Growing Pains"
                text="New services may experience technical or operational issues as they establish their systems."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdvantageItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-2">
      <div className="bg-green-700 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
        <Check className="w-4 h-4" />
      </div>
      <div>
        <p className="font-bold text-sm">{title}</p>
        <p className="text-green-100 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function DisadvantageItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-2">
      <div className="bg-[#c2185b] rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
        <AlertTriangle className="w-4 h-4" />
      </div>
      <div>
        <p className="font-bold text-sm">{title}</p>
        <p className="text-pink-100 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
