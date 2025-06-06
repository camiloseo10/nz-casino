export const metadata = {
  title: "Best Online Scratchcard Sites in New Zealand",
  description:
    "Discover the best online scratchcard sites in New Zealand for 2025. Play instant-win games, explore themed scratchcards, and claim exclusive bonuses at trusted Kiwi casinos.",
  keywords: [
    "online scratchcards New Zealand",
    "best scratchcard sites NZ 2025",
    "scratch and win NZ",
    "instant win games NZ",
    "Kiwi scratchcard casinos",
    "mobile scratchcards NZ",
    "scratchcard bonuses New Zealand",
    "real money scratchcards NZ",
    "trusted scratchcard casinos NZ",
    "NZ scratch gambling 2025"
  ],
  openGraph: {
    title: "Best Online Scratchcard Sites in New Zealand – 2025",
    description:
      "Play at the top online scratchcard sites in New Zealand. Enjoy instant-win games, mobile access, and exclusive bonuses at trusted Kiwi casinos.",
    url: "https://nz-casino.vercel.app/casino-games/scratchcards",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-scratchcards.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Scratchcard Sites in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Scratchcard Sites in New Zealand – 2025",
    description:
      "Top scratchcard casinos in NZ for 2025. Play instant-win games online, access mobile-friendly platforms, and claim exclusive bonuses.",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-scratchcards.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Scratchcard Sites in New Zealand",
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

export default function Scratchcards() {
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
          <span className="text-gray-900">Scratch cards</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best online scratchcard sites in New Zealand</h1>
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
                Looking for the best scratchcard sites in New Zealand? You're in the right place. Scratchcards are a favourite among Kiwi casino players—for good reason. Their <strong>ow cost, instant results, and simplicity </strong>l make them one of the most exciting and accessible games available.
              </p>
              <p className="text-gray-700">
                Join us as we explore where to play scratchcards online, safely and with the best features.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="How-we-evaluate-online-scratchcard">
              How we evaluate the best online scratchcard casinos
            </h2>
            <p className="text-gray-700 mb-6">
              We’ve selected the top-rated online scratchcard platforms in New Zealand using a thorough selection process. Our criteria cover everything from game variety and bonus offers to payment flexibility and mobile usability.
              Here’s what we consider:
            </p>

            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Licensing and security:</strong> All recommended platforms are licensed by reputable bodies such as the UK Gambling Commission, Malta, Gibraltar, or Curaçao. This ensures full compliance with international safety and fairness standards.
              </li>
              <li>
                <strong>Wide variety of scratchcards:</strong> While many scratchcards are similar in format, we prioritise casinos that offer unique themes, extra features, and <strong> bonus opportunities</strong> that keep gameplay fresh and entertaining.
              </li>
              <li>
                <strong>Fast deposits and flexible payment methods:</strong> The best sites support multiple payment options, including credit/debit cards, e-wallets, and cryptocurrencies, with fast and secure transactions.
              </li>
              <li>
                <strong>Hassle-free withdrawals:</strong> Players should be able to withdraw winnings using the same method they deposited with. We consider smooth payout processes essential when recommending a platform.
              </li>
              <li>
                <strong>Bonuses and promotions:</strong> Top scratchcard sites offer frequent <strong> bonuses and campaigns,  </strong>including free rounds and cashback offers, for both new and returning players.
              </li>
              <li>
                <strong>Customer support:</strong> 24/7 support is a must. Each platform we recommend provides reliable, fast, and knowledgeable assistance when you need it most.
              </li>
            </ul>

            {/* Expert Opinion */}
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
                    When I play scratchcards, I like having a wide selection of themed games to choose from. But I also care about having fast and flexible payment options and the freedom to play from my mobile wherever I am.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="types-lottery-games">
              Types of online scratchcards
            </h2>
            <p className="text-gray-700 mb-6">
              Scratchcards have existed for decades, but the digital world has brought them to life in new and exciting ways. Here are the main types you’ll find at online casinos:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">
                      Scratchcard Type
                    </th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Traditional
                    </td>
                    <td className="px-4 py-4 border border-border">
                      Usually features between 6 and 36 panels arranged in rows and columns. Scratch to reveal a combination that matches the reference pattern for a prize.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Slot-style
                    </td>
                    <td className="px-4 py-4 border border-border">
                      Combines traditional scratchcard gameplay with slot machine mechanics. Winning combinations may appear anywhere on the card.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Themed
                    </td>
                    <td className="px-4 py-4 border border-border">
                      These games use creative themes like sweets, stars, fruits, cowboys, or space adventures—similar to video slots in both visuals and format.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Video
                    </td>
                    <td className="px-4 py-4 border border-border">
                      More like video bingo or digital lottery games, video scratchcards include bonus rounds, animations, and extra features beyond the scratch mechanic.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <h4 className="text-lg mb-6 font-semibold">
              Other useful content about online casinos
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best slot casinos for Kiwi players</a>
              </li>
              <li>
                <a href="#">Top online lottery platforms in NZ</a>
              </li>
              <li>
                <a href="#">Best roulette casinos in New Zealand</a>
              </li>
              <li>
                <a href="#">Online bingo platforms to try today</a>
              </li>
              <li>
                <a href="#">Top poker sites for New Zealand players </a>
              </li>
            </ul>



            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Are there strategies or tricks to improve my chances when playing scratchcards?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  While scratchcards are mostly luck-based, some players use statistical systems like Martingale, Fibonacci, or D’Alembert—but these require discipline and small bets over time. Always play responsibly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Are there bonuses or promotions for online lotteries?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Some platforms offer welcome bonuses or special draws to lottery players. Always check the terms and conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Can I play scratchcards on mobile devices in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, all top-rated casinos offer mobile-optimised games or dedicated apps that support scratchcards seamlessly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Can I play scratchcards for free, or only with real money?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Many casinos allow you to try scratchcards for free in demo mode, which is ideal for testing before betting real money.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

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
                    I always recommend playing scratchcards on licensed and reliable platforms. Before signing up, explore the available games and look for bonuses or promotions.
                  </p>
                  <p className="mt-4">
                    Set yourself a budget and stick to it— <strong>playing responsibly </strong>is key to enjoying the experience.
                  </p>
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
