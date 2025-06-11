export const metadata = {
  title: "Best Online Lottery Sites in New Zealand – 2025",
  description:
    "Discover the best online lottery sites in New Zealand for 2025. Play top-rated lotto games, enjoy instant draws, and claim exclusive bonuses at trusted Kiwi casinos.",
  keywords: [
    "online lottery New Zealand",
    "best lottery sites NZ 2025",
    "lotto games NZ",
    "NZ online casinos with lottery",
    "instant lottery NZ",
    "top lottery providers NZ",
    "mobile lottery New Zealand",
    "lottery bonuses NZ",
    "trusted lottery casinos NZ",
    "Kiwi lottery gambling 2025"
  ],
  openGraph: {
    title: "Best Online Lottery Sites in New Zealand – 2025",
    description:
      "Play at the best online lottery sites in New Zealand. Enjoy a huge variety of lotto games, instant draws, and exclusive bonuses at trusted Kiwi casinos.",
    url: "https://nz-casino.vercel.app/casino-games/lotto",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-lottery.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Lottery Sites in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Lottery Sites in New Zealand – 2025",
    description:
      "Top online lottery sites in NZ for 2025. Play the best lotto games, get instant draws, and enjoy exclusive bonuses at licensed Kiwi casinos.",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-lottery.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Lottery Sites in New Zealand",
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

export default function Lotto() {
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
          <span className="text-gray-900">Lotto</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best online lottery sites in New Zealand</h1>
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
                Are you looking for the best websites to play online lottery games in New Zealand—with extra excitement and a real chance to test your luck? You’ve come to the right place. Here, you’ll find a carefully selected list of <strong>top-rated platforms</strong> where you can play without limits!
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="ranked-online-lottery">
              How we ranked the best online lottery sites
            </h2>
            <p className="text-gray-700 mb-6">
              Our criteria for selecting the top lottery platforms available to Kiwi players include:
            </p>

            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Variety of lottery formats:</strong> We look for sites offering both instant win games and number-draw lotteries, so you can choose between quick outcomes or bigger jackpots based on your preferences.
              </li>
              <li>
                <strong>Prize potential:</strong> The size of the jackpot is a key attraction. Larger prizes tend to draw more players and add to the excitement.
              </li>
              <li>
                <strong>Diverse game selection:</strong> A wide range of lottery games ensures you never get bored and can explore different playing styles.
              </li>
              <li>
                <strong>User-friendly experience:</strong> The platform should be intuitive and enjoyable, making your lottery sessions smooth and engaging.
              </li>
              <li>
                <strong>Licensed operators:</strong> All sites on our list are fully licensed by trusted authorities such as the <strong>UK Gambling Commission, Gibraltar, Malta, or Curaçao. </strong>
              </li>
              <li>
                <strong>Extra perks:</strong> We give extra points to platforms that offer bonuses, promotional draws, or exclusive deals to players in New Zealand.
              </li>
              <li>
                <strong>Mobile compatibility:</strong> A seamless mobile experience is essential. All recommended sites allow you to play lotteries on your smartphone or tablet, anytime and anywhere.
              </li>
              <li>
                <strong>Reliable customer support:</strong> Fast and effective support is vital, especially when managing ticket purchases, deposits, or claims.
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
                    When it comes to lottery games, I personally prefer platforms that offer <strong> generous prize pools, attractive promotions, and a strong reputation. </strong>  These qualities make the experience not only exciting, but also safe and reliable.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="types-lottery-games">
              Types of lottery games available in New Zealand
            </h2>
            <p className="text-gray-700 mb-6">
              Here are the main types of online lottery games Kiwis can enjoy:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">
                      Lottery Type</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Lotto</td>
                    <td className="px-4 py-4 border border-border">
                      New Zealand’s national lottery. Variants like Lotto Extra and Joker offer extra games and bigger prizes.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Vikinglotto</td>
                    <td className="px-4 py-4 border border-border">
                      A transnational lottery that includes New Zealand and other countries. Choose numbers for a chance to win across borders.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">EuroJackpot</td>
                    <td className="px-4 py-4 border border-border">
                      Similar to Vikinglotto but with even higher prize pools, available in 17 countries.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Scratchcards</td>
                    <td className="px-4 py-4 border border-border">
                      Instant win games where you scratch virtual cards to reveal symbols and win prizes on the spot.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/lottery-game.webp"
                alt="lottery games casino"
                fill
                className="object-cover"
              />
            </div>


            <h4 className="text-lg mb-6 font-semibold">
              Other useful content about online casinos
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best scratchcard sites in New Zealand</a>
              </li>
              <li>
                <a href="#">Top online bingo platforms</a>
              </li>
              <li>
                <a href="#">Best online casinos for roulette games</a>
              </li>
              <li>
                <a href="#">Best slot sites for Kiwi players</a>
              </li>
              <li>
                <a href="#">Top-rated online poker platforms in NZ </a>
              </li>
            </ul>



            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Can I play international lotteries from New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, several websites allow New Zealand players to take part in international lotteries.
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
                  Are there any online lotteries with progressive jackpots?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, some digital lotteries include progressive prize structures, where the jackpot grows until it’s claimed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Can I join multiple online lotteries at once?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. Many platforms allow you to participate in multiple draws and manage several tickets simultaneously.
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
                    Lottery games are among the most popular forms of entertainment worldwide, and New Zealand is no exception. They offer thrilling moments and the possibility of life-changing wins.
                  </p>
                  <p className="mt-4">
                    I always recommend checking the site’s security, reading the terms and conditions, and reviewing <strong>available payment methods. </strong> Take time to explore your options, do your own probability analysis, and then try your luck!
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
