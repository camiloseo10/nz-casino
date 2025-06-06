export const metadata = {
  title: "Best No Deposit Casino Bonuses in New Zealand",
  description: "Discover top-rated no deposit and no sticky casino bonuses in New Zealand, featuring free spins, cashback deals, and low wagering offers. Updated for 2025.",
  keywords: [
    "no deposit casino NZ",
    "no sticky casino bonus NZ",
    "best New Zealand no deposit bonuses",
    "NZ free spins 2025",
    "cashback casinos New Zealand",
    "welcome bonus no deposit NZ",
    "low wagering casinos NZ",
    "no sticky offers NZ",
    "New Zealand casino promotions",
    "top NZ online casinos"
  ],
  openGraph: {
    title: "Top No Deposit & No Sticky Casino Bonuses in New Zealand – 2025",
    description: "Play smarter with New Zealand’s best no deposit and no sticky bonuses. Enjoy free spins and fair-play welcome deals in 2025.",
    url: "https://nz-casino.vercel.app/bonuses",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-casino-bonuses-hero.png",
        width: 1200,
        height: 630,
        alt: "No Deposit Casino Bonuses NZ 2025",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top No Deposit & No Sticky Casino Bonuses in NZ – 2025",
    description: "Claim no deposit bonuses, free spins, and exclusive promotions at trusted New Zealand online casinos.",
  }
}

import Link from "next/link"
import { Home, Calendar, User, ChevronRight, } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Nodeposit() {
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
          <span className="text-gray-900">No deposite</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6"> Best no deposit casino bonuses in New Zealand  </h1>
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
                If you’re looking to enjoy an exciting casino experience without spending your own money, no deposit bonuses at New Zealand online casinos are your best choice. These offers let you play in a safe, simple, and cost-effective way—while still having the chance to win real prizes.
              </p>




            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/no-sticky.webp"
                alt="No sticky"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="what-is-no-sticky">
              What is a no deposit bonus?
            </h2>
            <p className="text-gray-700 mb-6">
              A no deposit bonus is a casino offer that allows you to play without funding your account. It’s usually given to new players and lets you test out the platform and try games without risking your own money—while still having the chance to win real rewards.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="features-no-sticky">
              Why choose a no deposit bonus in New Zealand?
            </h2>
            <p className="text-gray-700 mb-6">
              No deposit bonuses are ideal for Kiwi players who want to enjoy casino games with zero financial risk. These offers give you the opportunity to explore pokies and table games, and even win cash, all without making a deposit.
            </p>

            <h3 className="text-xl font-semibold mb-2">Free Spins No Deposit</h3>
            <p className="text-gray-700 mb-6">
              One of the most popular no deposit offers, this gives you a set number of spins on selected pokies—without needing to add funds. Winnings are often credited as bonus money and may be subject to wagering.
            </p>

            <h3 className="text-xl font-semibold mb-2">Free Cash No Deposit</h3>
            <p className="text-gray-700 mb-6">
              Some casinos offer a fixed amount of free bonus money (e.g. NZ$10 or NZ$20) just for signing up. This bonus can be used across various games, depending on the platform’s terms.
            </p>

            <h3 className="text-xl font-semibold mb-2">Cashback No Deposit</h3>
            <p className="text-gray-700 mb-6">
              A rarer form of no deposit bonus, cashback gives you a percentage of any initial losses back in bonus funds—offering a second chance to win without depositing anything upfront.
            </p>

            {/* Expert Opinion */}
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
                    Playing at New Zealand online casinos with no deposit bonuses is a great way to explore without stress. I’ve discovered new games, tested sites risk-free, and even won real money—all without spending a dollar.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino expert, reviewer & writer</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="terms-conditions">
              Typical terms for no deposit bonuses
            </h2>
            <p className="text-gray-700 mb-6">
              While no deposit bonuses are free to claim, they usually come with terms you need to follow. Always review the wagering requirements, eligible games, win limits, and expiration dates to get the most from your bonus.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Types of no deposit bonuses
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
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Free spins</td>
                    <td className="px-4 py-4 border border-border">Play pokies without depositing and keep any winnings (subject to bonus terms).</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Bonus cash</td>
                    <td className="px-4 py-4 border border-border">Receive a small amount of free money (e.g. NZ$10) to use on games without funding your account.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Cashback</td>
                    <td className="px-4 py-4 border border-border">Get refunded bonus funds based on early losses—even without an initial deposit.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="how-to-claim">
              How to claim a no deposit casino bonus
            </h2>
            <p className="text-gray-700 mb-6">
              Claiming a no deposit bonus is simple and takes just a few steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Choose a no deposit bonus from our recommended list.</li>
              <li>Register at the selected online casino.</li>
              <li>Verify your details if required.</li>
              <li>Receive your free spins or bonus funds—no deposit needed.</li>
              <li>Play eligible games and meet any bonus terms to cash out winnings.</li>
            </ul>
            <p className="text-gray-700">
              For help with claiming or using your bonus, contact the casino’s support team—they’re ready to assist.
            </p>




            <h4 className="text-lg mb-6 font-semibold mt-4">
              More useful casino content for Kiwi players:
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best new online casinos in New Zealand</a>
              </li>
              <li>
                <a href="#">Top no deposit bonuses for NZ players</a>
              </li>
              <li>
                <a href="#">Most popular casino games in NZ</a>
              </li>
              <li>
                <a href="#">The best casino payment methods in New Zealand</a>
              </li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What is a no deposit bonus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  A no deposit bonus is a casino offer that gives you free spins or bonus funds without requiring you to deposit any money. It's typically available to new players and allows you to explore games and win real prizes risk-free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Can I withdraw winnings from a no deposit bonus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, but usually after meeting certain wagering requirements. Most New Zealand casinos will limit the maximum amount you can withdraw from no deposit winnings, so always check the terms before playing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Do I need to verify my account to claim a no deposit bonus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  In most cases, yes. Reputable NZ casinos may ask you to verify your email address or identity before releasing the bonus or allowing withdrawals, to ensure fair play and security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Can I get more than one no deposit bonus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Usually not from the same casino. Most casinos offer only one no deposit bonus per player or household, but you can register at different casinos to access more offers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Expert Opinion */}
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
                    After testing dozens of offers available to Kiwi players, I can confidently say that <strong>no deposit bonuses</strong> are the most exciting way to start. They let you try real games with zero risk, get familiar with a casino’s platform, and even win cash—all before making a deposit.
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
