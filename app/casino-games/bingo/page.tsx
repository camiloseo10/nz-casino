export const metadata = {
  title: "Best Online Bingo Sites in New Zealand",
  description:
    "Explore the best online bingo platforms in New Zealand for 2025. Join Kiwi-friendly sites, enjoy various bingo rooms, and claim exciting bonuses.",
  keywords: [
    "bingo online New Zealand",
    "best online bingo NZ",
    "Kiwi bingo sites 2025",
    "mobile bingo platforms NZ",
    "real money bingo New Zealand",
    "trusted bingo casinos NZ",
    "bingo games with bonuses NZ",
    "top online bingo rooms",
    "NZ online bingo games 2025",
    "safe bingo gambling NZ"
  ],
  openGraph: {
    title: "Best Online Bingo Sites in New Zealand",
    description:
      "Join top online bingo platforms in New Zealand. Play in themed bingo rooms, access mobile-friendly sites, and enjoy real money wins and bonuses.",
    url: "https://nz-casino.vercel.app/casino-games/bingo",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-bingo.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Bingo Sites in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Bingo Sites in New Zealand",
    description:
      "Discover the most exciting online bingo sites in NZ. Play on trusted platforms with real money prizes and fun bingo rooms.",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-bingo.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Bingo Sites in New Zealand",
      },
    ],
  },
}




import Link from "next/link"
import { Home, Calendar, User, ChevronRight, } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Bingo() {
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
          <span className="text-gray-900">Bingo</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best bingo online sites in New Zealand</h1>
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
            {/* Hero Image */}
            <div className="mb-6 pt-4">
              <p className="text-gray-700">
                Looking for the best bingo online sites in New Zealand? You're in the right place. Bingo remains one of the most social and exciting games loved by Kiwi players. With <strong>low stakes, big jackpots, and live rooms</strong>, it's a fun and fast-paced experience for everyone.
              </p>
              <p className="text-gray-700">
                Join us as we explore where to play bingo online safely, with great bonuses and real community vibes.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="How-we-evaluate-online-scratchcard">
              How we evaluate the best online bingo sites
            </h2>
            <p className="text-gray-700 mb-6">
              We’ve selected the top-rated online bingo platforms in New Zealand using a detailed and careful evaluation process. From ticket prices and game variety to community engagement and mobile performance—here’s what we look for:
            </p>

            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Licensing and safety:</strong> Every site we recommend is licensed by trusted regulators like the UK Gambling Commission or Malta Gaming Authority, ensuring a secure and fair bingo experience.
              </li>
              <li>
                <strong>Wide range of bingo rooms:</strong> We prioritise platforms offering 75-ball, 90-ball, and themed bingo rooms with exciting features like chat moderators and jackpots.
              </li>
              <li>
                <strong>Affordable tickets and flexible payment:</strong> Kiwi players should be able to join games with tickets as low as NZ$0.10 and use popular payment methods like cards, e-wallets, and even crypto.
              </li>
              <li>
                <strong>Fast and fair withdrawals:</strong> Trusted bingo sites allow easy access to your winnings through fast, hassle-free payout methods.
              </li>
              <li>
                <strong>Bonuses and promotions:</strong> Top bingo sites offer daily promotions, welcome bonuses, free tickets, and community rewards for active players.
              </li>
              <li>
                <strong>Community and support:</strong> Bingo is social, so we value sites with active chat features, helpful hosts, and responsive 24/7 customer support.
              </li>
            </ul>


            <h2 className="text-2xl font-bold mb-4" id="types-lottery-games">
              Types of online bingo games
            </h2>
            <p className="text-gray-700 mb-6">
              Online bingo has evolved into a dynamic and engaging experience for Kiwi players. From classic versions to fast-paced variants, here are the main types of bingo you’ll find at New Zealand casinos:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">
                      Bingo Type
                    </th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      75-ball Bingo
                    </td>
                    <td className="px-4 py-4 border border-border">
                      Popular in New Zealand and the US, this version uses a 5x5 grid and offers multiple winning patterns like lines, crosses, and full house.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      90-ball Bingo
                    </td>
                    <td className="px-4 py-4 border border-border">
                      A favourite in the UK and NZ, this variant includes three rows per ticket and prizes for one line, two lines, and a full house.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      80-ball Bingo
                    </td>
                    <td className="px-4 py-4 border border-border">
                      Played on a 4x4 grid, 80-ball bingo is a fast-paced option that balances the formats of 75 and 90-ball versions, offering unique winning patterns.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Themed Bingo Rooms
                    </td>
                    <td className="px-4 py-4 border border-border">
                      These bingo games come with special themes, chat hosts, mini-games, and exclusive jackpots, adding excitement and community fun to every round.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mb-8 mt-8 border border-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300">
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
                    I know very well how essential it is to find an online casino that offers a seamless and enjoyable experience with <strong>bingo games</strong>. I say this from experience, as I’ve played at online casinos for many years.
                  </p>
                  <p className="mt-4">
                    One of the main features I value in a casino is the interface—it should be easy to navigate—and the <strong>visual quality</strong> that enhances each game. These details really shape the bingo experience for Kiwi players.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino expert and bingo player</p>
                </div>
              </div>
            </div>




            <h4 className="text-lg mb-6 font-semibold">
              Other useful content about online bingo and casino games
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Top online bingo platforms in New Zealand</a>
              </li>
              <li>
                <a href="#">How to choose the best bingo rooms for Kiwi players</a>
              </li>
              <li>
                <a href="#">Best mobile bingo apps in NZ</a>
              </li>
              <li>
                <a href="#">Tips to win at online bingo</a>
              </li>
              <li>
                <a href="#">Real money bingo vs free bingo games</a>
              </li>
            </ul>




            {/* FAQ Section */}
            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Can I win real money playing bingo online in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, licensed online casinos in New Zealand offer real-money bingo games. Winnings are credited instantly to your casino balance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Is online bingo fair and regulated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. Top-rated Kiwi bingo sites are licensed by authorities such as the UK Gambling Commission or MGA, ensuring fairness and random outcomes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  What types of bingo games can I play online?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Players can enjoy 75-ball, 90-ball, speed bingo, and themed bingo rooms. Some casinos even offer progressive jackpot games.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Can I play bingo online on my mobile device?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, most Kiwi bingo platforms are mobile-friendly or offer apps, allowing you to join bingo rooms from your phone or tablet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>


            {/* Expert Opinion */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300 lg:mt-8">
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
                    In Norway, online bingo offers pure fun and many chances to win. When choosing a site from our recommendations, make sure it offers a wide variety of games, excellent bonuses, and a secure, reliable platform.
                  </p>
                  <p className="mt-4">
                    These elements are key to making sure your bingo experience is not only safe—but also lives up to your expectations.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">– Freya Lind, Casino expert, tester and writer</p>
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
