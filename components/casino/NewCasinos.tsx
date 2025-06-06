"use client"

import { Trophy, AlertTriangle, AlertCircle, Check } from "lucide-react"

export default function NewCasinos() {
  return (
    <section id="new-casinos" className="mb-16 ">
      <div className="flex items-center mb-6">
        <Trophy className="w-6 h-6 text-[#e91e63] mr-2" />
        <h2 className="lg:text-4xl text-xl font-bold text-gray-900">New Casinos in 2025</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Explore the newest operators and trends shaping the future of online gambling for New Zealand players.
      </p>

      <div className="bg-white rounded-lg lg:p-4 p-2 shadow-sm border border-gray-300 mx-auto">
        <p className="text-gray-700 mb-4">
          New operators are constantly emerging in the New Zealand casino market, and 2025 is no exception. Many
          new online casinos are launching with the goal of attracting your attention. For players, this means a
          larger selection of sites to choose from and more exciting trends to follow.
        </p>

        <div className="border-l-4 border-[#e91e63] pl-6 py-2 my-6">
          <p className="text-gray-700 mb-4">
            New casinos in 2025 often focus on <span className="font-bold">innovation</span> to stand out. This
            can include unique themes and redesigned graphics, AI-enhanced features such as{" "}
            <span className="font-bold">gamification</span> (e.g., collecting points or completing missions while
            playing) or tournaments where players can win extra prizes.
          </p>
          <p className="text-gray-700">
            Competition between casinos is constantly intensifying, pushing new operators to offer{" "}
            <span className="font-bold">better bonuses</span>, larger game selections, more user-friendly
            solutions, and greater focus on responsible gambling than ever before.
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex items-start gap-3 my-6">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-gray-800">Be aware:</p>
            <p className="text-gray-700">
              While there are many advantages, be cautious when trying a brand new casino. Although the sites are
              fresh, they may not have worked out all their customer service or reliability issues yet. That's why
              it's important to check if new casino sites have valid licenses, good reviews, and secure payment
              methods.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Advantages */}
          <div className="bg-green-800 text-white rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Trophy className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-bold">Advantages of New Casinos</h3>
            </div>
            <div className="space-y-4">
              <AdvantageItem title="Generous Offers" text="New casinos often provide extra large welcome bonuses and promotions to attract players." />
              <AdvantageItem title="Modern Solutions" text="The newest platforms typically feature modern design, fast software, and full mobile optimization." />
              <AdvantageItem title="Innovative Concepts" text="Many new sites offer creative themes, reward systems, and gaming features that set them apart from the crowd." />
            </div>
          </div>

          {/* Disadvantages */}
          <div className="bg-[#e91e63] text-white rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-bold">Challenges with New Casinos</h3>
            </div>
            <div className="space-y-4">
              <DisadvantageItem title="Unproven Track Record" text="New casino sites lack historical data and established reputation, making it difficult to assess their reliability." />
              <DisadvantageItem title="Variable Game Selection" text="Some new casinos start with fewer games or providers than established competitors, though many quickly build their libraries." />
              <DisadvantageItem title="Growing Pains" text="New services may experience technical or operational issues as they establish their systems." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdvantageItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="bg-green-700 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
        <Check className="w-4 h-4" />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-green-100">{text}</p>
      </div>
    </div>
  )
}

function DisadvantageItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="bg-[#c2185b] rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
        <AlertTriangle className="w-4 h-4" />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-pink-100">{text}</p>
      </div>
    </div>
  )
}
