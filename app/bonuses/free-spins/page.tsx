export const metadata = {
  title: "Best Free Spins and No Deposit Bonuses in New Zealand",
  description: "Explore the finest free spins and no deposit casino bonuses available for Kiwi players in 2025. Secure deals with low wagering and trusted platforms.",
  keywords: [
    "free spins NZ 2025",
    "no deposit casino New Zealand",
    "top NZ free spins bonuses",
    "Kiwi no deposit casino offers",
    "free spins no wagering NZ",
    "New Zealand online casinos 2025",
    "best free spins casinos NZ",
    "low wagering free spins NZ",
    "exclusive spins promotions NZ",
    "trusted NZ casino bonuses"
  ],
  openGraph: {
    title: "Best Free Spins & No Deposit Casino Bonuses in New Zealand – 2025",
    description: "Unlock no deposit bonuses and free spins at trusted NZ casinos. Play with confidence and enjoy low-wagering deals in 2025.",
    url: "https://nz-casino.vercel.app/bonuses",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-casino-bonuses-hero.png",
        width: 1200,
        height: 630,
        alt: "Free Spins and No Deposit Bonuses NZ 2025",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Free Spins & No Deposit Casino Bonuses in NZ – 2025",
    description: "Grab no deposit deals and free spins at the most reliable online casinos for Kiwi players in 2025.",
  }
}


import Link from "next/link"
import { Home, Calendar, User, ChevronRight, } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function FreeSpins() {
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
          <span className="text-gray-900">Free Spins</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6"> Best Free Spins Casino Bonuses for Kiwi Players  </h1>
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
                If you're keen to enjoy an exciting casino experience without spending your own money, free spins and no deposit bonuses at New Zealand online casinos are a top pick. These offers allow you to play safely and affordably—while still giving you the chance to win real prizes.
              </p>

            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/free-spin-bonus.webp"
                alt="Free spin bonus"
                fill
                className="object-cover"
              />
            </div>


            <h2 className="text-2xl font-bold mb-4" id="what-is-no-sticky">
              What are free spins and how do they work?
            </h2>
            <p className="text-gray-700 mb-6">
              Free spins are promotional offers from online casinos that let you play pokies without using your own money. They're typically awarded to new players but may also be part of ongoing promotions. With free spins, you can try out new games, win real money, and explore different casinos risk-free.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="features-no-sticky">
              Why free spins are the top choice for Kiwi players
            </h2>
            <p className="text-gray-700 mb-6">
              For many players in New Zealand, free spins represent the perfect no-risk introduction to online casinos. These offers allow you to enjoy pokies without a deposit, making them ideal for testing platforms, trying new games, or simply playing for fun—with a chance to win real cash.
            </p>

            <h3 className="text-xl font-semibold mb-2">Free Spins No Deposit</h3>
            <p className="text-gray-700 mb-6">
              One of the most popular free spins promotions. You receive a set number of spins on selected pokies simply by registering—no deposit required. Winnings may come with wagering conditions.
            </p>

            <h3 className="text-xl font-semibold mb-2">Free Spins With Deposit</h3>
            <p className="text-gray-700 mb-6">
              These are part of a welcome package or reload offer. After making a qualifying deposit, you’ll get extra spins on top pokies, often with better wagering terms than no deposit bonuses.
            </p>

            <h3 className="text-xl font-semibold mb-2">Loyalty Free Spins</h3>
            <p className="text-gray-700 mb-6">
              Regular players may receive free spins through loyalty programmes, VIP rewards, or seasonal promotions. These are often wager-free or have lower playthrough requirements.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300 lg:mt-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="relative w-[100px] h-[100px] sm:w-28 sm:h-28 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/logos/expert-experience-fryla.webp"
                    alt="Freya Lind"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left max-w-[600px]">
                  <h3 className="text-lg font-bold text-[#1E46B0]">Expert Opinion</h3>
                  <p className="mt-4">
                    After reviewing dozens of no deposit bonuses available to Kiwi players, I strongly recommend starting with <strong>free spins</strong>. They’re fun, simple, and give you the best chance to explore pokies without spending anything upfront. Just check the wagering conditions and expiry dates—and enjoy!
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino expert, tester and writer</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="terms-conditions">
              Typical terms and conditions for free spins
            </h2>
            <p className="text-gray-700 mb-6">
              Although free spins don’t require payment, they usually come with terms. These might include wagering requirements, maximum win limits, expiry dates, or restrictions to specific games. Always read the fine print before claiming.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Types of free spins offers
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Type</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">No Deposit Free Spins</td>
                    <td className="px-4 py-4 border border-border">Awarded without any payment. Use them on selected pokies for a chance to win real money, subject to wagering rules.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Deposit-Based Free Spins</td>
                    <td className="px-4 py-4 border border-border">Triggered after you deposit funds—often part of a welcome or reload bonus.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Loyalty Free Spins</td>
                    <td className="px-4 py-4 border border-border">Given as part of VIP or loyalty schemes for regular players, sometimes with no wagering required.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="how-to-claim">
              How to claim free spins at NZ online casinos
            </h2>
            <p className="text-gray-700 mb-6">
              Claiming free spins is quick and easy. Follow these simple steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Choose a free spins offer from our expert recommendations.</li>
              <li>Create an account at the selected casino site.</li>
              <li>Verify your email or ID if needed.</li>
              <li>Receive your free spins automatically or enter a bonus code.</li>
              <li>Play eligible pokies and fulfil any bonus conditions to withdraw winnings.</li>
            </ul>
            <p className="text-gray-700">
              For any issues, contact the casino’s support team—they’ll help you get started.
            </p>

            <h4 className="text-lg mb-6 font-semibold mt-4">
  More useful Free Spins guides for Kiwi players:
</h4>
<ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
  <li>
    <a href="#">Top free spins no deposit offers in New Zealand</a>
  </li>
  <li>
    <a href="#">Best welcome bonuses with free spins for NZ players</a>
  </li>
  <li>
    <a href="#">How to use free spins to win real money</a>
  </li>
  <li>
    <a href="#">Trusted NZ casinos offering free spins in 2025</a>
  </li>
</ul>


            <h2 className="text-2xl font-bold mb-6" id="faqs">Free Spins – Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What are free spins?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Free spins are promotional credits from online casinos that let you spin selected pokies without using your own money. You can win real rewards, though terms and wagering may apply.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Are free spins really free?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes—but often with conditions. You might need to meet wagering requirements or play specific pokies. Always read the bonus terms carefully.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Can I win real money from free spins?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. Winnings from free spins can be converted to real cash, provided you meet the playthrough requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Do free spins expire?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes. Most free spins come with a time limit, often 24 to 72 hours. Be sure to use them before they expire.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300 lg:mt-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="relative w-[100px] h-[100px] sm:w-28 sm:h-28 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/logos/expert-experience-fryla.webp"
                    alt="Freya Lind"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left max-w-[600px]">
                  <h3 className="text-lg font-bold text-[#1E46B0]">Expert Opinion</h3>
                  <p className="mt-4">
                    As a mobile casino expert, I’ve tested dozens of platforms, and <strong>free spins</strong> are by far the best way to start. They give Kiwi players the thrill of spinning and winning—without the commitment. Just pick a trusted site, claim your spins, and enjoy the ride.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino expert, tester and writer</p>
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
