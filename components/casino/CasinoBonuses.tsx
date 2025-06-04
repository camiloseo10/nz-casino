"use client"

import Image from "next/image"
import { Gift, AlertTriangle, CreditCard, Sparkles, Shield, AlertCircle } from "lucide-react"

export default function CasinoBonuses() {
  return (
    <section id="casino-bonuses" className="mb-16>">
      <div className="max-w-full lg:p-2 p-2">
        <div className="flex items-center mb-6 pt-14">
          <Gift className="w-6 h-6 text-[#e91e63] mr-2" />
          <h2 className="lg:text-4xl text-xl font-bold text-gray-900">Casino Bonuses at New Casinos 2025</h2>
        </div>

        <p className="text-gray-700 mb-8">
          One of the biggest reasons to try a new casino is the tempting bonuses. New casinos in 2025 know they
          need to make themselves attractive to win players, and that's why you'll often find generous bonuses and
          promotions on these sites. Here we take a closer look at what types of bonuses you can expect, and what
          you should know about the terms that come with them.
        </p>

        <div className="bg-white rounded-lg lg:p-4 p-2 shadow-sm border border-gray-300 mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold border-b-2 border-[#e91e63] pb-1">Welcome Bonuses and Free Spins</h3>
          </div>

          <p className="text-gray-700 mb-4">
            Almost all new casinos offer a <span className="font-bold">welcome bonus</span> to new players. This
            typically means that the casino matches the amount you deposit with a certain percentage up to a maximum
            amount. At new casino sites in 2025, we often see very high welcome bonuses, for example 100% or 200%
            bonus on your first deposit. Some also split the welcome bonus across your first 2-4 deposits to make
            the offer more attractive.
          </p>

          <p className="text-gray-700 mb-8">
            Competition for players means that the total amount you can get in bonuses is often higher at new
            operators than at established casinos. It's not uncommon to see offers like "100% up to NZ$5,000" or
            even "200% up to NZ$10,000" at some new casinos.
          </p>

          <div className="bg-[#e1efff] p-4 sm:p-6 rounded-xl mb-8 shadow-sm">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-6 h-6 text-[#e91e63] mr-2">
                <path d="M16.6 6C10.6 6 6 11.3 6 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Zm23 0C33.6 6 29 11.3 29 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Z" />
              </svg>
              <h4 className="text-lg font-bold text-gray-900">Sarah's expert opinion on welcome bonuses</h4>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row items-start gap-2 relative">
              <div className="flex-shrink-0 text-center">
                <div className="p-0.5 bg-white border border-white shadow-sm rounded-[10px]">
                  <Image src="/female-casino-expert.png" alt="Sarah Mitchell" width={150} height={150} className="object-cover w-[150px] h-[150px] rounded-[10px]" />
                </div>
                <p className="font-bold mt-3 text-lg text-gray-900">Sarah Mitchell</p>
              </div>

              <div className="flex-1 relative">
                <div className="absolute -top-4 -left-5 opacity-10 text-[#e91e63] text-[90px] leading-none select-none z-0">
                  &ldquo;
                </div>
                <div className="relative z-10">
                  <p className="text-gray-800 italic text-sm leading-relaxed px-0 sm:px-4 md:px-6">
                    Don't be blinded by large welcome bonuses with high percentages. The most important thing is always to check the wagering requirement. A 100% bonus with 25x wagering requirement is much better than a 300% bonus with 50x requirement. I always recommend choosing casinos that offer 'parachute bonuses' where you can withdraw your own money at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex items-start gap-3 my-6">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-700">
                A large welcome bonus can give you much more to play with, something that's perfect when you want to
                try a new casino without risking too much of your own money at the start. Just remember that bonus
                money is never "free" - they come with certain conditions, which we'll look at under wagering
                requirements.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            <span className="font-bold">Free spins</span> are another popular form of bonus that new casinos often
            offer. Free spins mean you get a certain number of spins on a slot machine without extra cost. Often,
            free spins are included as part of the welcome offer - for example "100% bonus + 100 free spins". New
            New Zealand casinos in 2025 often give free spins on popular slot machines as a taste of what's
            available in their game selection. Sometimes you can get free spins without making a deposit just for
            registering an account (e.g., 20 free spins upon signup), which lets you try the casino completely
            risk-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-[#2c3e50] text-white rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="w-5 h-5 mr-2" />
                <h3 className="text-xl font-bold">Deposit Bonus</h3>
              </div>
              <p className="text-gray-300 mb-4">Casino matches your deposit with a percentage</p>
              <div className="bg-[#1a2530] p-3 rounded-md text-center">
                <p className="font-bold">100% up to NZ$5000</p>
              </div>
            </div>

            <div className="bg-[#2c3e50] text-white rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <Sparkles className="w-5 h-5 mr-2" />
                <h3 className="text-xl font-bold">Free Spins</h3>
              </div>
              <p className="text-gray-300 mb-4">Free spins on selected slot machines</p>
              <div className="bg-[#1a2530] p-3 rounded-md text-center">
                <p className="font-bold">100 free spins on Starburst</p>
              </div>
            </div>

            <div className="bg-[#2c3e50] text-white rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <Gift className="w-5 h-5 mr-2" />
                <h3 className="text-xl font-bold">No Deposit Bonus</h3>
              </div>
              <p className="text-gray-300 mb-4">Bonus without deposit requirement</p>
              <div className="bg-[#1a2530] p-3 rounded-md text-center">
                <p className="font-bold">NZ$200 free upon registration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 bg-white rounded-lg lg:p-4 p-2 shadow-sm border border-gray-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold border-b-2 border-[#e91e63] pb-1">
              Reload Offers and Loyalty Programs
            </h3>
          </div>

          <p className="text-gray-700 mb-6">
            Many new online casinos launch with built-in VIP clubs or loyalty systems.
            These can range from tiered levels (bronze to gold) to point-based systems that unlock perks as you progress.
            Loyalty is rewarded with bonuses, free spins, cashback, and more.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <svg className="w-5 h-5 text-[#e91e63] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                />
              </svg>
              <h4 className="text-lg font-bold text-gray-900">VIP Benefits at New Casinos</h4>
            </div>

            <ul className="space-y-3">
              {[
                "Weekly bonuses and reload offers",
                "Cashback on losses (5–10% back each week)",
                "Birthday gifts and seasonal offers",
                "Faster withdrawals and higher limits",
                "Personal account manager at higher levels",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-[#e91e63] rounded-full mr-3" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-700 mt-6">
            Loyalty programs are often best for frequent players.
            But even occasional users can benefit from reload offers and extra perks at the right casinos.
          </p>
        </div>
        <div className="bg-white rounded-lg lg:p-4 p-2 shadow-sm border border-gray-300 mx-auto mt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold border-b-2 border-[#e91e63] pb-1">
              Bonus Terms and Wagering Requirements
            </h2>
          </div>

          <p className="text-gray-700 mb-8">
            Regardless of how tempting a bonus is, you should always examine the terms carefully. All bonuses - whether deposit bonuses or free spins - come with wagering requirements that express at least how many times you must wager the bonus amount (and possibly the deposit) before you can withdraw winnings. For new casinos in 2025, it's typical to see wagering requirements ranging from around 20x to 50x. A lower number is always better for players, as it's easier to fulfill.
          </p>

          <div className="bg-blue-50 p-5 lg:p-4 p-2 rounded-lg">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-5 h-5 text-[#e91e63] mr-2" />
              <h3 className="text-lg font-bold text-gray-900">Important Bonus Terms to Check</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Wagering Requirement Size:",
                  text: "How many times must the bonus (and possibly deposit) be wagered? (e.g., 35x bonus amount). The lower, the better."
                },
                {
                  title: "Time Limit:",
                  text: "How long do you have to fulfill the requirement? New casinos often give 7, 14, or 30 days. After the deadline, unused bonus is often forfeited."
                },
                {
                  title: "Game Restrictions:",
                  text: "Which games count toward the requirement? Some games count 100%, while table games or live casino often count much less (or not at all) toward wagering."
                },
                {
                  title: "Maximum Bet Limits:",
                  text: "Most bonuses have a maximum bet per spin/round (e.g., NZ$5 per spin) while you're wagering the bonus, to prevent players from betting large amounts at once."
                },
                {
                  title: "Other Terms:",
                  text: "Check if the bonus is sticky or non-sticky. Non-sticky (also called 'parachute bonus') means you can withdraw your own deposit winnings without completing the bonus, which is always favorable at new casinos."
                }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-[#e91e63] rounded-full mr-3"></div>
                    <span className="font-bold text-gray-900">{item.title}</span>
                  </div>
                  <p className="text-gray-700 ml-5 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-700 mt-8">
            By having an overview of these terms, you avoid unpleasant surprises. New casinos aren't necessarily worse than established ones - quite the opposite, they often try to be competitive with more favorable rules. Similarly, it's always worth reading through the bonus terms before you commit to a tempting welcome package.
          </p>
        </div>
      </div>
    </section>
  )
}
