export const metadata = {
  title: "Top Cashback Casino Bonuses in New Zealand",
  description:
    "Discover the best cashback bonuses at online casinos for Kiwi players. Reduce your losses and enjoy weekly or monthly cashback rewards.",
  keywords: [
    "cashback casinos NZ",
    "cashback bonus New Zealand",
    "Kiwi cashback offers",
    "top NZ cashback casinos",
    "low wagering cashback NZ",
    "real money cashback bonus",
    "weekly cashback casino NZ",
    "monthly cashback rewards NZ",
    "trusted cashback casinos",
    "casino promotions cashback NZ"
  ],
  openGraph: {
    title: "Top Cashback Casino Bonuses in New Zealand – 2025",
    description:
      "Play at NZ casinos with the best cashback deals. Get a percentage of your losses returned and enjoy a second chance to win.",
    url: "https://nz-casino.vercel.app/bonuses",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-casino-bonuses-hero.png",
        width: 1200,
        height: 630,
        alt: "Cashback Casino Bonuses NZ 2025",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Cashback Casino Bonuses in NZ – 2025",
    description: "Claim the best cashback deals at top-rated online casinos for Kiwi players in 2025."
  }
};


import Link from "next/link"
import { Home, Calendar, User, ChevronRight, } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Cashback() {
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
          <span className="text-gray-900">Cashback</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6"> Top cashback casino bonuses for Kiwi players  </h1>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Freya Lind</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>06 June 2025</span>
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
                Cashback bonuses are one of the most appreciated offers among Kiwi players. These deals return a percentage of your net losses over a specific period—usually weekly or monthly—so you get a second chance at winning. With cashback, you can continue playing even after an unlucky streak, and enjoy more flexibility and less risk.
              </p>

            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/cashback-casino.webp"
                alt="cashback asino"
                fill
                className="object-cover"
              />
            </div>


            <h2 className="text-2xl font-bold mb-4" id="what-is-cashback">
              What is a cashback casino bonus?
            </h2>
            <p className="text-gray-700 mb-6">
              A cashback casino bonus gives players a percentage of their losses back over a defined timeframe—typically weekly or monthly. Unlike traditional bonuses that reward deposits, cashback is all about softening losses. It’s an effective way for Kiwi players to continue enjoying their favourite games with less pressure and greater peace of mind.
            </p>

            <h3 className="text-lg font-bold mb-4">
              Why cashback bonuses are a smart choice for Kiwi players
            </h3>
            <p className="text-gray-700 mb-6">
              Cashback bonuses offer several advantages that make them especially appealing in New Zealand’s online casino landscape:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Reduce losses:</strong> Cashback gives back a portion of what you lose—helping to ease the financial impact of unlucky sessions.</li>
              <li><strong>Promote loyalty:</strong> Many casinos with cashback also offer stronger loyalty programmes, making it worthwhile to stick with your favourite site.</li>
              <li><strong>Flexible use:</strong> Cashback funds are typically more versatile than standard bonuses, often usable across a wide range of games.</li>
              <li><strong>Low or no wagering:</strong> Some cashback deals come with low or even zero wagering requirements, meaning faster access to real withdrawals.</li>
              <li><strong>Strategic value:</strong> Knowing that a portion of your losses is returned allows you to take more confident, informed risks while playing.</li>
            </ul>

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
                    As someone who’s spent years analysing casino promotions, I’ve grown to appreciate the flexibility of <strong>cashback bonuses</strong>. They let me play without worrying about high wagering terms, and they give me peace of mind knowing that part of my losses will be returned. It’s the perfect balance between strategy and enjoyment.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino expert, tester and writer</p>
                </div>
              </div>
            </div>


            <h2 className="text-2xl font-bold mb-4" id="terms-conditions">
              Typical terms and conditions for cashback bonuses
            </h2>
            <p className="text-gray-700 mb-6">
              While cashback deals are known for being flexible, they do come with a few standard terms that Kiwi players should be aware of:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Percentage varies:</strong> Cashback is usually based on a percentage of net losses, which may differ from one casino to another.</li>
              <li><strong>Valid timeframe:</strong> Cashback is often calculated weekly or monthly—check the eligibility period to understand which losses apply.</li>
              <li><strong>Minimum loss threshold:</strong> Some casinos require a minimum amount of losses before cashback is credited.</li>
              <li><strong>Payout type:</strong> Cashback may be paid as real money or bonus funds—each with its own conditions.</li>
              <li><strong>Eligible games:</strong> Not all games may count towards cashback calculations. Always check which games are included.</li>
            </ul>


            <h2 className="text-2xl font-bold mb-4" id="types-of-cashback">
              Types of cashback bonuses
            </h2>
            <p className="text-gray-700 mb-6">
              Cashback offers can vary based on how they're awarded or when they apply. Here are the most common types Kiwi players might come across:
            </p>
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
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Standard Cashback</td>
                    <td className="px-4 py-4 border border-border">Returned as a percentage of weekly or monthly losses. Often part of a regular player rewards programme.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Promotional Cashback</td>
                    <td className="px-4 py-4 border border-border">Offered during specific campaigns or events, sometimes with higher percentages or enhanced conditions.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Win-Based Cashback</td>
                    <td className="px-4 py-4 border border-border">Less common, but some casinos reward players even after a win—typically as part of VIP or loyalty incentives.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="how-to-claim">
              How to claim a cashback bonus at NZ online casinos
            </h2>
            <p className="text-gray-700 mb-6">
              Claiming a cashback bonus is simple. Just follow these steps to get started:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Choose a trusted online casino from our recommended cashback list.</li>
              <li>Create your player account and complete the sign-up process.</li>
              <li>Verify your identity and agree to the site’s terms and conditions.</li>
              <li>Play eligible games—your losses will be tracked for cashback.</li>
              <li>Receive your cashback automatically or by claiming it manually in the promotions section.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If you need assistance, the casino’s support team will be happy to guide you through the process.
            </p>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/cashback-wiki-players.webp"
                alt="cashback casino"
                fill
                className="object-cover"
              />
            </div>
            

            <h4 className="text-lg mb-6 font-semibold mt-4">
              More useful cashback guides for Kiwi players:
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best weekly cashback deals in New Zealand</a>
              </li>
              <li>
                <a href="#">Top online casinos offering cashback in NZ</a>
              </li>
              <li>
                <a href="#">How to combine cashback with loyalty rewards</a>
              </li>
              <li>
                <a href="#">Cashback vs. no deposit bonuses – which is better?</a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What is a cashback bonus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  A cashback bonus returns a portion of your net losses over a defined period. It’s usually credited weekly or monthly, offering players a second chance to win.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Do I need to make a deposit to get cashback?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes. Cashback is based on your real-money losses while playing. You’ll need to deposit and play eligible games to qualify.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Is cashback paid in real money?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  It depends on the casino. Some offer cashback as withdrawable cash, while others credit it as bonus funds with specific conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Are there wagering requirements on cashback?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Many cashback offers have low or no wagering requirements—but always check the terms to be sure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-bold">
                  Can I combine cashback with other promotions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Not always. Some casinos restrict combining cashback with deposit or free spins offers. Read the promo rules carefully.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-bold">
                  How is cashback calculated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  It's usually a percentage of your net losses during a set period. For example, 10% cashback on $200 lost equals $20 back.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-bold">
                  When is cashback credited to my account?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Most casinos process cashback weekly or monthly—check your account or promotions section for exact timing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-bold">
                  Are there minimum loss thresholds to qualify?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, some sites require a minimum amount of losses before cashback is triggered—usually around NZ$20–NZ$50.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left font-bold">
                  Can cashback be used on all games?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Not always. Some bonuses are restricted to pokies or specific game categories. Read the promo terms for game eligibility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left font-bold">
                  Is cashback available for VIP players only?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  No. While some VIP programmes offer enhanced cashback, many casinos provide it to all registered players.
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
                    For those new to cashback bonuses, understanding the terms is essential. Once you know how it works, the experience becomes much more enjoyable. I truly value how cashback provides a safety net, especially when playing high-volatility games. It offers reassurance that even when luck isn’t on your side, part of your losses will return to you.
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
