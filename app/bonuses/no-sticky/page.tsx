export const metadata = {
  title: "Best No Sticky Casino Bonuses in New Zealand",
  description: "Uncover the finest no sticky casino bonuses in New Zealand, including welcome packages, free spins, cashback offers, and low wagering promotions.",
  keywords: [
    "no sticky casino bonus NZ",
    "best New Zealand no sticky bonuses",
    "no deposit bonus NZ",
    "free spins NZ casinos",
    "cashback casino New Zealand",
    "NZ welcome bonus 2025",
    "low wagering casinos NZ",
    "no sticky offers New Zealand",
    "NZ casino promotions 2025",
    "top online casinos New Zealand"
  ],
  openGraph: {
    title: "Best No Sticky Casino Bonuses in New Zealand – 2025 Guide",
    description: "Explore New Zealand’s top online casinos offering no sticky bonuses, welcome rewards, and free spins with fair terms.",
    url: "https://nz-casino.vercel.app/bonuses",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-casino-bonuses-hero.png",
        width: 1200,
        height: 630,
        alt: "No Sticky Casino Bonuses NZ 2025",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best No Sticky Casino Bonuses in New Zealand – 2025",
    description: "Find exclusive no sticky bonuses, welcome packages, and free spins at New Zealand's leading online casinos.",
  }
}

import Link from "next/link"
import { Home, Calendar, User, ChevronRight, } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Sticky() {
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
          <span className="text-gray-900">No sticky</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best no sticky casino bonuses in New Zealand </h1>
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
                An entertaining and exciting way to explore new games at New Zealand online casinos is through no sticky bonuses. These bonuses let you play with real money safely, enjoy separated funds, and withdraw your winnings without restrictions or complications.
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
              What is a no sticky bonus?
            </h2>
            <p className="text-gray-700 mb-6">
              A no sticky bonus means your deposit and bonus funds are kept separate. You play with your own money first, and only once it's spent (or you choose to) do you begin using the bonus. This gives players in New Zealand more flexibility—allowing you to withdraw real winnings from your deposit without meeting wagering requirements.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="features-no-sticky">
              Key features of the best no sticky bonuses
            </h2>
            <p className="text-gray-700 mb-6">
              No sticky bonuses offer unique play modes and attractive winning potential. Below are the most popular types found at NZ online casinos:
            </p>

            <h3 className="text-xl font-semibold mb-2">100% No Sticky Bonus</h3>
            <p className="text-gray-700 mb-6">
              This is the most common form. It matches your deposit—usually up to a set amount—while keeping real funds and bonus funds separate. You play with your cash first and decide later whether to use the bonus. It’s ideal for Kiwi players who want flexibility and control.
            </p>

            <h3 className="text-xl font-semibold mb-2">Half Sticky Bonus</h3>
            <p className="text-gray-700 mb-6">
              This rare variant splits each bet 50/50 between your deposit and the bonus. Although it may come with wagering conditions, once completed, you may withdraw part of the bonus in stages. Always read the terms carefully.
            </p>

            <h3 className="text-xl font-semibold mb-2">No Sticky Bonus with Cash Reward</h3>
            <p className="text-gray-700 mb-6">
              Some no sticky bonuses come with a direct cash reward once specific conditions are met. These are usually treated as real money and added to your balance—offering maximum value with fewer strings attached.
            </p>


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
                    What motivates me to play is the variety of no sticky bonuses offered by online casinos. They give me the freedom to play without stress, manage my funds separately, and cash out real winnings with no complicated restrictions.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind,
                    Casino expert, reviewer & writer</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="terms-conditions">
              Common terms for no sticky bonuses
            </h2>
            <p className="text-gray-700 mb-6">
              To qualify for a no sticky bonus at a New Zealand online casino, certain conditions must be met. Make sure to choose a licensed and trustworthy casino. Once registered, always review the terms—including wagering deadlines, eligible games, and max bet limits—to avoid forfeiting the bonus.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="types-of-no-sticky">
              Common types of no sticky bonuses
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Benefit</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Optional bonus</td>
                    <td className="px-4 py-4 border border-border">Choose whether to use the bonus or stick with your deposit only.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Real-money deposit</td>
                    <td className="px-4 py-4 border border-border">Play with real funds without being locked into wagering requirements.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Balance boost</td>
                    <td className="px-4 py-4 border border-border">Get matched bonuses to increase your overall balance.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Free spins</td>
                    <td className="px-4 py-4 border border-border">Enjoy spins on popular pokies without touching your deposit.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">No restrictions on withdrawals</td>
                    <td className="px-4 py-4 border border-border">Withdraw winnings from your deposit at any time—no wagering needed.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="how-to-claim">
              How to claim a no sticky casino bonus
            </h2>
            <p className="text-gray-700 mb-6">
              Claiming a no sticky bonus is straightforward. Simply:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Select your preferred no sticky bonus from our list.</li>
              <li>Sign up at the online casino (if you haven’t already).</li>
              <li>Make your first deposit and claim the bonus.</li>
              <li>Start playing with your deposit first—then activate the bonus if you wish.</li>
              <li>Complete any required wagering (if applicable) to unlock bonus winnings.</li>
            </ul>
            <p className="text-gray-700">
              If you face any issues or have questions about your bonus, don’t hesitate to contact customer support.
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


            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Do no sticky casino bonuses apply to all payment methods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Generally, yes. Most New Zealand casinos apply no sticky bonuses to eligible payment methods, but some may exclude options like Neteller or Skrill. Always review the terms and conditions before depositing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Can I combine multiple no sticky bonuses with the same deposit?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Normally, no. Kiwi casinos typically allow only one bonus per deposit. No sticky bonuses are meant to be simple and clear—so check the bonus terms before attempting to combine offers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Can I cancel a no sticky bonus after activating it?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes. One of the advantages of no sticky bonuses is flexibility. Most NZ casinos let you cancel the bonus before you start using it or before meeting any wagering terms—just contact support if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  How can I tell if a no sticky bonus is worth claiming?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Consider the match percentage, max bonus amount, wagering terms, and game restrictions. A good no sticky bonus should let you play freely with your own cash and only engage the bonus if it benefits you.
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
                    I’ve reviewed and tested dozens of casino bonuses available to Kiwi players—and <strong>no sticky bonuses</strong> consistently stand out. They let you play freely with your own money first and only touch the bonus if you choose to.
                    This gives you more control and fewer restrictions when it comes to withdrawals.
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
