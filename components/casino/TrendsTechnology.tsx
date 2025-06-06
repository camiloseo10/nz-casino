"use client"

import Image from "next/image"
import { Brain, Eye, UserCheck, Zap, Smartphone, Lightbulb, WalletCards, BadgePercent, Users, Gift, SlidersHorizontal, Lock, Paintbrush, Touchpad, MoveVertical, Gauge, MonitorSmartphone } from "lucide-react"

export default function TrendsTechnology() {
  return (
    <section id="trends-technology" className="mb-16">
      <div>
        <div className="flex items-center mb-6 pt-14">
          <Lightbulb className="w-6 h-6 text-[#e91e63] mr-2" />
          <h2 className="lg:text-4xl text-xl font-bold text-gray-900">Trends Technology casino games</h2>
        </div>

        <p className="text-gray-700 text-base mb-6 max-w-3xl">

          Online casinos in 2025 are already brimming with technology and creativity, but the evolution doesn't stop there. Looking a couple of years down the line, or at the latest ideas that are starting to emerge now, there are several future trends that could shape how we play online. New casinos are often the first to experiment with these trends, so here are a few key words for you as an enthusiastic player to note: <strong>artificial intelligence (AI), VR/AR and metaverse</strong>, to name a few.
        </p>

        {/* AI Overview Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2 mb-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full  bg-[#e91e63]  flex items-center justify-center flex-shrink-0 mr-3">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
              AI, VR and metaverse in online gambling
            </h3>
          </div>

          <p className="text-gray-700 mb-4">

            <strong>Artificial intelligence (AI)</strong> has made its way into most industries, and online casinos are no exception. Today, many casinos use AI in one way or another, but in the future we will probably notice it even more as end users. A major benefit of AI is the ability to analyze player behavior and preferences in order to offer a more personalized experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#f0f4ff] p-4 rounded-md border border-[#c3dafe]">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center"><UserCheck className="w-6 h-6 text-[#e1007a] mr-2" />AI-driven personalisation</h4>
              <p className="text-sm text-gray-700">

                For example, an AI system at a new casino can learn which games you like best, what times you tend to play, and what kind of bonus offers you respond to. With these insights, the casino can present you with tailored recommendations - perhaps a list of “Games you'll like” that actually hit the mark, or personalized bonus offers that pop up just when you'd like a refill. This is AI-driven personalization in action. It makes the experience more relevant to each individual player.
              </p>
            </div>
            <div className="bg-[#f0f4ff] p-4 rounded-md border border-[#c3dafe]">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center"><Eye className="w-6 h-6 text-[#e1007a] mr-2" />Advanced customer service</h4>
              <p className="text-sm text-gray-700">

                AI is also being used in other ways: Customer service chatbots are already widespread - they can answer simple questions or guide you to the right information 24/7, and they're getting better the more they “learn”. In the future, these chatbots may become even more advanced, perhaps able to solve complex problems or conduct KYC checks automatically.
              </p>
            </div>
          </div>

          <Image src="/NZCasino_VR.webp" alt="AI VR Player" width={1000} height={1000} className="rounded-lg mb-6" />



          <p className="text-gray-700 mb-4">
            We've already mentioned <strong>VR (Virtual Reality)</strong> a couple of times, and that's because it's considered one of the most exciting fronts for online gambling.
            Virtual reality allows you to step into a digital world with glasses/headsets, and for casinos that means the potential to create a real and vibrant experience similar to a real casino.
          </p>

          <p className="text-gray-700 mb-4">
            Some pioneer casinos have experimented with VR casino lobbies where you can “walk around” a virtual casino building, sit at tables, play slots and socialize with others via avatars.
            In 2025, this is still in its infancy, but technological developments and the increased use of VR equipment (e.g. Meta/Oculus Quest, HTC Vive, etc.) mean that more new casinos may dare to invest in VR in the coming years.
          </p>

          <p className="text-gray-700 mb-4">
            Imagine playing a round of roulette from the comfort of your own home, but it feels like you're standing at the roulette table in Las Vegas — you can even chat with the person next to you (through a microphone) while the ball is spinning.
            This is the kind of experience VR can provide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* AR Box */}
            <div className="bg-[#0f172a] text-white p-6 rounded-md shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-white mr-2">👓</span>
                <h4 className="font-bold text-white">AR (Augmented Reality)</h4>
              </div>
              <p className="text-sm leading-relaxed">
                <strong>AR</strong> is a sibling of VR, where digital elements are layered over the real world via camera or glasses.
                In casino contexts, AR might be used through mobile: point your camera around your living room,
                and you see a 3D slot machine standing on your table. It’s a bit futuristic,
                but the technology exists and is mostly used for fun applications.
              </p>
            </div>

            {/* Metaverse Box */}
            <div className="bg-[#e1007a] text-white p-6 rounded-md shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-white mr-2">🌐</span>
                <h4 className="font-bold text-white">Metaverse</h4>
              </div>
              <p className="text-sm leading-relaxed">
                The term <strong>metaverse</strong> overlaps with VR/AR, but it’s broader.
                A metaverse is a shared virtual world where users interact.
                A casino version might be a fully virtual resort with avatars playing together,
                owning NFT-based assets, and moving seamlessly between games and environments.
                Some companies are actively working on these ideas – some casinos already exist in metaverse platforms like Decentraland,
                where people gamble using cryptocurrency.
              </p>
            </div>
          </div>

        </div>

        {/* SECTION: Gamification */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-2 p-2 mb-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full  bg-[#e91e63]  flex items-center justify-center flex-shrink-0 mr-3">
              <WalletCards className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
              Innovative game mechanics and gamification
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            The newest casinos push the boundaries of what a traditional casino experience looks like. Many now include features like:
          </p>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
            <div className="border rounded-lg p-4 bg-[#f0f4ff] flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e91e63] flex items-center justify-center text-white mt-1">
                <BadgePercent className="w-8 h-8 p-1" />
              </div>
              <div>
                <p className="font-bold text-[#1e3a8a] mb-1 text-base">Gamification</p>
                <p>

                  As mentioned earlier, elements from the gaming world are integrated into the casino experience. There may be level-up systems, missions you can complete for rewards, or tournaments and competitions between players.
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-[#f0f4ff] flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e91e63] flex items-center justify-center text-white mt-1">
                <Gift className="w-8 h-8 p-1" />
              </div>
              <div>
                <p className="font-bold text-[#1e3a8a] mb-1 text-base">Unique rewards</p>
                <p>
                  Instead of (or in addition to) regular VIP points, some casinos may have dedicated stores where you trade free spins or bonuses with earned points, or get loot boxes with surprises when you reach a new level.
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-[#f0f4ff] flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e91e63] flex items-center justify-center text-white mt-1">
                <Users className="w-8 h-8 p-1" />
              </div>
              <div>
                <p className="font-bold text-[#1e3a8a] mb-1 text-base">Social features</p>
                <p>

                  Some new platforms allow you to share winnings on social media directly, or chat with other players in certain games (such as bingo or some live game shows). This creates a more social feeling even if you're playing online.
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-[#f0f4ff] flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e91e63] flex items-center justify-center text-white mt-1">
                <SlidersHorizontal className="w-8 h-8 p-1" />
              </div>
              <div>
                <p className="font-bold text-[#1e3a8a] mb-1 text-base">Customisation</p>
                <p>

                  With modern data analytics, new casinos can customize the lobby to you. For example, if you've played a lot of jackpot slots, you might see a section with recommended jackpot games the next time you log in. The goal is for every player to have a tailored experience based on their preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#f0f4ff] p-2 pt-4 pb-4  rounded-lg mt-8 border border-[#c3dafe]">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#E1007A] flex-shrink-0 mt-1 mx-4" />
              <p className="text-sm text-gray-800">
                On the technology side, new casinos often have more efficient systems under the hood. This means faster loading of websites, better stability, as well as integrations with new payment services and security features that older casinos may lag behind. All in all, you'll benefit from fresh technology when you play at a new casino from 2025.
              </p>

            </div>
          </div>

        </div>

        {/* SECTION: Mobile */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-2 p-2 mb-10">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full  bg-[#e91e63]  flex items-center justify-center flex-shrink-0 mr-3">
          <Smartphone className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
          Mobile optimisation and HTML5 technology
        </h3>
      </div>

      <p className="text-gray-700 mb-4">
        Remember when casino sites required Flash and only worked on a PC? That’s ancient history. Today’s new sites all use <strong>HTML5</strong>, and that’s a big reason why modern mobile play is so smooth.
      </p>

      <div className="bg-[#1e293b] text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
      {/* Left: Image */}
      <div className="flex-shrink-0">
        <Image
          src="/NZCasino_HTML5.webp"
          alt="HTML5 Casino Shield"
          width={220}
          height={220}
          className="rounded-md"
        />
      </div>

      {/* Right: Benefits */}
      <div>
        <h4 className="text-lg font-bold mb-4">HTML5 benefits for casino games</h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-[#e91e63] mt-0.5" />
            <span>
              <strong className="text-white">Faster load times:</strong> Games load and run more efficiently, reducing wait time and interruptions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#e91e63] mt-0.5" />
            <span>
              <strong className="text-white">Better security:</strong> Modern encryption and safety protocols are built into HTML5.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Paintbrush className="w-6 h-6 text-[#e91e63] mt-0.5" />
            <span>
              <strong className="text-white">Dynamic graphics:</strong> Enables impressive visual effects that make modern slots more engaging.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MonitorSmartphone className="w-6 h-6 text-[#e91e63] mt-0.5" />
            <span>
              <strong className="text-white">Responsive design:</strong> Automatically adjusts to your device, whether it’s a big PC screen or a small phone.
            </span>
          </li>
        </ul>
      </div>
    </div>

      <p className="text-gray-700 text-sm mb-6 mt-6">
        In 2025, mobile optimisation isn’t a nice-to-have — it’s a must. Over 75% of players now gamble on mobile devices. This has driven innovation in areas like:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-800 mb-6">
        <div className="border rounded-lg p-4 bg-[#f0f4ff] text-center">
          <Touchpad className="w-6 h-6 text-[#e91e63] mx-auto mb-2" />
          <strong className="block mb-1">Touch-friendly interfaces</strong>
          <p>Buttons and menus designed specifically for fingers, not mouse clicks.</p>
        </div>
        <div className="border rounded-lg p-4 bg-[#f0f4ff] text-center">
          <MoveVertical className="w-6 h-6 text-[#e91e63] mx-auto mb-2" />
          <strong className="block mb-1">Portrait game modes</strong>
          <p>Many new slots are built to work in portrait mode, perfect for mobile screens.</p>
        </div>
        <div className="border rounded-lg p-4 bg-[#f0f4ff] text-center">
          <Gauge className="w-6 h-6 text-[#e91e63] mx-auto mb-2" />
          <strong className="block mb-1">Optimised data use</strong>
          <p>Games run smoothly even on variable networks — ideal for on-the-go play.</p>
        </div>
      </div>

       <div className="bg-[#f0f4ff] p-2 pt-4 pb-4  rounded-lg mt-8 border border-[#c3dafe]">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-[#E1007A] flex-shrink-0 mt-1 mx-4" />
              <p className="text-sm text-gray-800">
                New casinos have the advantage of building from scratch with this tech, instead of retrofitting older platforms. That leads to a more streamlined and problem-free mobile experience.
              </p>

            </div>
          </div>
    </div>
      </div>
    </section>
  )
}
