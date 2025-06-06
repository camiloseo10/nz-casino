export const metadata = {
  title: "Best Online Slot Sites in New Zealand",
  description:
    "Discover the best online slot sites in New Zealand for 2025. Play top-rated slots from leading providers, enjoy free spins, and claim exclusive bonuses at trusted Kiwi casinos.",
  keywords: [
    "online slots New Zealand",
    "best slot sites NZ 2025",
    "slot games NZ",
    "NZ online casinos with slots",
    "free spins NZ",
    "top slot providers NZ",
    "mobile slots New Zealand",
    "slot bonuses NZ",
    "trusted slot casinos NZ",
    "Kiwi slot gambling 2025"
  ],
  openGraph: {
    title: "Best Online Slot Sites in New Zealand",
    description:
      "Play at the best online slot sites in New Zealand. Enjoy a huge variety of slots, free spins, and exclusive bonuses at trusted Kiwi casinos.",
    url: "https://nz-casino.vercel.app/casino-games/slots",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-slot.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Slot Sites in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Slot Sites in New Zealand – 2025",
    description:
      "Top online slot sites in NZ for 2025. Play the best slots, get free spins, and enjoy exclusive bonuses at licensed Kiwi casinos.",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-slot.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Slot Sites in New Zealand",
      },
    ],
  },
}



import Link from "next/link"
import { ChevronDown, Home, Calendar, User, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Slots() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container mx-auto mt-2 px-4 py-2 bg-breadcrumb border-b border-gray-200 mb-4">
        <div className="flex flex-wrap items-center text-sm text-gray-600">
          <Home className="w-4 h-4 mr-1" />
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">Slots</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best online slot sites in New Zealand</h1>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Freya Lind</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>7 March 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Casino List outside main grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <CasinoList />
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 span-9">
        {/* Main Content Area */}
        <div className="lg:col-span-9">

          {/* Main Content Sections */}
          <div className="bg-white rounded-lg p-8 ">


            {/* Best Online Slot Sites Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900" id="best-online-slot-sites">Best online slot sites in New Zealand</h2>
              <p className="text-gray-700 mb-4">Are you looking for the best websites to play online slots? We've reviewed the top-rated online casinos available to Kiwi players, all offering a wide range of high-quality slot games.</p>
              <p className="text-gray-700 mb-4">Slots remain one of the most popular casino games thanks to their simplicity, excitement, and volatility, which creates the potential for massive wins.</p>
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

                <Image
                  src="/online-slot.webp"
                  alt="Best New Zealand Online Slot Games"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">What do we look for when ranking the best slot sites?</h3>
              <p className="text-gray-700 mb-4">To compile our list of the best slot websites in New Zealand, we considered several key factors. Slots depend on elements such as game providers, payment methods, mobile usability, and bonuses for players:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Licensing:</strong> All recommended casinos are licensed by respected regulatory authorities with proven track records. These platforms have passed strict audits for fairness and security, and are regularly tested to ensure a safe and trustworthy experience for all users.</li>
                <li><strong>Game providers:</strong> We prioritise casinos that work with top-tier developers like Pragmatic Play, Evolution, BGaming, 1spin4win, Amusnet, and others. Always check the game catalogue to ensure access to reputable and high-performing slot titles.</li>
                <li><strong>Slot variety:</strong> We favour casinos with a diverse and creative selection of slot games, covering a wide range of themes and powered by advanced technology.</li>
                <li><strong>Payment options:</strong> The best slot sites offer multiple deposit and withdrawal methods, including e-wallets, bank transfers, and cryptocurrencies—ensuring flexibility for all types of players.</li>
                <li><strong>Mobile compatibility:</strong> Slots are ideal for playing on smartphones or tablets. That’s why we value casinos that provide mobile-optimised websites or dedicated apps for both Android and iOS.</li>
                <li><strong>Bonuses and free spins:</strong> Slots become even more appealing when they come with free bonuses or free spins. Many sites allow you to try out slots for free—giving you the chance to test games before betting real money.</li>
              </ul>

              {/* Expert Opinion */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8  border border-white sshadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300 lg:mt-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  {/* Imagen con borde blanco redondo */}
                  <div className="relative w-[100px] h-[100px] sm:w-28 sm:h-28 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="/logos/expert-experience-fryla.webp"
                      alt="Freya Lind"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="text-center sm:text-left max-w-[600px]">
                    <h3 className="text-lg font-bold text-[#1E46B0]">Expert Opinion</h3>
                    <p className="mt-4">
                      In my opinion, the most important factors are the range of slots available and the bonuses offered. Those of us who enjoy slot games like exploring different formats, and we especially value free spin bonuses that allow us to play longer without spending more.

                      Slots should provide fast-paced fun, especially compared to slower, more strategic games like poker.
                    </p>
                    <p className="text-sm font-medium font-bold mt-2">- Freya Lind,
                      Casino expert, tester and writer</p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4" id="types-of-slot-machines">Types of slot machines</h2>
              <p className="text-gray-700 mb-4">The best online casinos offer different slot types, categorised by theme, provider, bonus features, and game mechanics. While slots may seem simple, they’ve evolved into complex and immersive games. Below are some of the most popular types:</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                  <thead className="bg-slate-800 text-white uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3 border border-border font-semibold text-left">Slot type</th>
                      <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Classic slots</td>
                      <td className="px-4 py-4 border border-border">Old-school design with a single payline and traditional symbols like fruit or bells.</td>
                    </tr>
                    <tr className="bg-[#E1EFFF]">
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Video slots</td>
                      <td className="px-4 py-4 border border-border">The most common type, often with 5 reels and 10 paylines, featuring rich themes and animations.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Fruit machines</td>
                      <td className="px-4 py-4 border border-border">Bright and colourful slots, inspired by classic land-based machines, often with higher house edge.</td>
                    </tr>
                    <tr className="bg-[#E1EFFF]">
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Multi-payline slots</td>
                      <td className="px-4 py-4 border border-border">Typically 3 reels but with multiple paylines, including diagonals and custom combos.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Progressive slots</td>
                      <td className="px-4 py-4 border border-border">Jackpots increase over time; known for big bonuses and free spin features.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-6">Top online casinos should also include detailed descriptions of each slot to help players find their favourites easily.</p>

              <h2 className="text-xl font-semibold mb-4" id="most-popular-online-slots">Most popular online slots in New Zealand</h2>
              <p className="text-gray-700 mb-4">Slot games are especially popular across New Zealand—particularly during long winter evenings. Below are some of the most played titles:</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                  <thead className="bg-slate-800 text-white uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3 border border-border font-semibold text-left">Game</th>
                      <th className="px-4 py-3 border border-border font-semibold text-left">Type</th>
                      <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                      <th className="px-4 py-3 border border-border font-semibold text-left">Provider</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Vikings Go Berzerk</td>
                      <td className="px-4 py-4 border border-border">Video Slot</td>
                      <td className="px-4 py-4 border border-border">5 reels, 4 rows, 24 paylines. Bets range from £25 to £125. Up to 21 free spins.</td>
                      <td className="px-4 py-4 border border-border">Yggdrasil Gaming</td>
                    </tr>
                    <tr className="bg-[#E1EFFF]">
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Twin Spin</td>
                      <td className="px-4 py-4 border border-border">Video Slot</td>
                      <td className="px-4 py-4 border border-border">3-line format with no bonus, but 243 ways to win.</td>
                      <td className="px-4 py-4 border border-border">NetEnt</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Jackpot Express</td>
                      <td className="px-4 py-4 border border-border">Classic Slot</td>
                      <td className="px-4 py-4 border border-border">3 reels, 3 lines, 5 paylines. 98.9% RTP. Offers a double-or-nothing coin toss.</td>
                      <td className="px-4 py-4 border border-border">NetEnt</td>
                    </tr>
                    <tr className="bg-[#E1EFFF]">
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Mega Fortune</td>
                      <td className="px-4 py-4 border border-border">Progressive Slot</td>
                      <td className="px-4 py-4 border border-border">5 reels, 25 paylines, with 3 wilds and 3 progressive jackpots.</td>
                      <td className="px-4 py-4 border border-border">NetEnt</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 border border-border font-medium text-gray-900">Fire Joker</td>
                      <td className="px-4 py-4 border border-border">Slot</td>
                      <td className="px-4 py-4 border border-border">Simple mechanics with free spins and multipliers (x2 to x10).</td>
                      <td className="px-4 py-4 border border-border">Play’n GO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

                <Image
                  src="/slot-casino.webp"
                  alt="slots in New Zealand"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">Other useful content about online casinos</h3>
              <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
                <Link href="#">
                  <li>Best online slot sites in New Zealand</li>
                </Link>
                <Link href="#">
                  <li>Best roulette sites in New Zealand</li>
                </Link>
                <Link href="#">
                  <li>Top casinos with online bingo</li>
                </Link>
                <Link href="#">
                  <li>Try exciting scratch cards at the best online casinos</li>
                </Link>
                <Link href="#">
                  <li>List of the best online poker casinos for Kiwi players</li>
                </Link>
                <Link href="#">
                  <li>Check out the latest lotto-friendly casinos</li>
                </Link>
              </ul>

              <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently asked questions</h2>
              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-bold">
                    Do some slot machines offer better odds than others?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes, some slots provide players with better chances of winning. However, it’s worth noting that machines with lower return-to-player (RTP) percentages often offer bigger jackpots, more bonuses, and free spins—making them especially appealing for thrill-seekers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-bold">
                    How does RTP vary between casinos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    RTP can vary slightly between platforms depending on the game version and the software provider. Always check the published RTP for each slot on the casino’s website.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-bold">
                    How are payouts calculated on progressive slots?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Progressive slot payouts grow as more players spin the reels. A portion of each bet contributes to the jackpot pool until one lucky player wins the entire prize.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-bold">
                    What’s the difference between classic slots and video slots?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Classic slots usually feature simple layouts with three reels and fewer paylines, while video slots include advanced graphics, bonus rounds, and a wider range of betting options.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Expert Opinion */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8  border border-white sshadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300 lg:mt-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {/* Imagen con borde blanco redondo */}
                <div className="relative w-[100px] h-[100px] sm:w-28 sm:h-28 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/logos/expert-experience-fryla.webp"
                    alt="Freya Lind"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Contenido */}
                <div className="text-center sm:text-left max-w-[600px]">
                  <h3 className="text-lg font-bold text-[#1E46B0]">Expert Opinion</h3>
                  <p className="text-gray-700 mt-4 mb-4">
                    Slot machines are extremely popular in New Zealand, and some of the best online casinos offer a wide range of games in this category.
                  </p>
                  <p className="text-gray-700 mb-4">In my opinion, the most important factors are the range of slots available and the bonuses offered. Those of us who enjoy slot games like exploring different formats, and we especially value free spin bonuses that allow us to play longer without spending more.</p>
                  <p className="text-gray-700 mb-4">Slots should provide fast-paced fun, especially compared to slower, more strategic games like poker.</p>
                  
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind,
                    Casino expert, tester and writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar with TOC */}
        <aside className="lg:col-span-3">
          <TableOfContents />
        </aside>



      </div>
    </div>
  )
}
