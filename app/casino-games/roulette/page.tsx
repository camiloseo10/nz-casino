export const metadata = {
  title: "Best Online Roulette Sites in New Zealand – 2025",
  description:
    "Play at the best online roulette sites in New Zealand for 2025. Enjoy European, French, and live dealer games with top bonuses at trusted Kiwi casinos.",
  keywords: [
    "online roulette New Zealand",
    "best roulette sites NZ 2025",
    "European roulette NZ",
    "live roulette games NZ",
    "Kiwi online casinos",
    "trusted roulette casinos",
    "roulette bonuses NZ",
    "mobile roulette NZ",
    "top roulette providers",
    "NZ gambling sites 2025"
  ],
  openGraph: {
    title: "Best Online Roulette Sites in New Zealand – 2025",
    description:
      "Discover top-rated roulette platforms in New Zealand. Enjoy safe gameplay, mobile access, and exciting variants like European and French roulette.",
    url: "https://nz-casino.vercel.app/casino-games/roulette",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-roulette.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Roulette Sites in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Roulette Sites in New Zealand – 2025",
    description:
      "Play live and European roulette at the best NZ online casinos in 2025. Trusted sites, top bonuses, and mobile-optimised gameplay.",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-roulette.webp",
        width: 1200,
        height: 630,
        alt: "Best Online Roulette Sites in New Zealand",
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

export default function Roulette() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best online roulette sites in New Zealand</h1>
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
                If you love casino games, roulette is likely one of your favourites. And we completely understand why— <strong> online roulette lets you experience the thrill of Las Vegas without leaving your home.</strong> That’s why we’ve created a carefully curated list of the best roulette sites in New Zealand, where you can enjoy a safe, reliable, and exciting gaming experience.
              </p>
            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/roulette-game-casino.webp"
                alt="roulette game casino"
                fill
                className="object-cover"
              />
            </div>


            <h2 className="text-2xl font-bold mb-4" id="criteria-for-selecting">
              Criteria for selecting the best roulette sites
            </h2>
            <p className="text-gray-700 mb-6">
              There’s no shortage of options when it comes to choosing where to play online roulette in New Zealand. So, here are the key factors we considered when making our recommendations—and that you should also keep in mind:
            </p>

            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Variety of roulette games:</strong> We only recommend casinos that offer <strong> multiple types of roulette, </strong>  from classic European versions to immersive live dealer games.
              </li>
              <li>
                <strong>Bonuses and promotions:</strong> Welcome bonuses and cashback offers can extend your play and increase your chances of winning. We prioritise casinos that reward their players generously.
              </li>
              <li>
                <strong>Mobile compatibility:</strong> All featured sites provide a <strong> smooth mobile experience, </strong> so you can enjoy roulette on your phone or tablet without any compromise in quality.
              </li>
              <li>
                <strong>Customer support:</strong> Efficient, responsive support is essential. We ensure all recommended casinos provide <strong>expert assistance</strong> whenever players need it.
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
                    I love seeing a wide range of roulette games at a casino—it means I’ll always find something new and exciting to try.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="types-lottery-games">
              The most popular types of online roulette
            </h2>
            <p className="text-gray-700 mb-6">
              Roulette is consistently ranked among the most thrilling casino games, and not just because of its classic versions. There are also several exciting variants with unique rules and features. Here’s a quick comparison of the most popular types:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left"> Roulette Type</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">European Roulette</td>
                    <td className="px-4 py-4 border border-border">
                      A simple, traditional version with just one green zero (0), which reduces the house edge and improves your odds.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">American Roulette</td>
                    <td className="px-4 py-4 border border-border">
                      Includes both a zero (0) and a double zero (00), increasing the house edge and reducing your winning chances.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">French Roulette</td>
                    <td className="px-4 py-4 border border-border">
                      Based on European roulette but adds La Partage and En Prison rules, which enhance your odds when the ball lands on zero and you’ve bet on even-money outcomes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="top-5-roulette-game">
              Top 5 roulette games in New Zealand
            </h2>
            <p className="text-gray-700 mb-6">
              That moment when the ball spins around the wheel and slowly lands in a pocket—it’s a rush like no other. Whether you’re new to roulette or a seasoned fan, these five games are among the most exciting you’ll find at New Zealand online casinos:
            </p>

           <div className="overflow-x-auto mb-6">
  <table className="w-full text-sm text-gray-800 border-collapse border border-border">
    <thead className="bg-slate-800 text-white uppercase text-xs">
      <tr>
        <th className="px-4 py-3 border border-border font-semibold text-left">Game</th>
        <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
        <th className="px-4 py-3 border border-border font-semibold text-left">Provider</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Lucky 6 Roulette</td>
        <td className="px-4 py-4 border border-border">
          European-style game with random multipliers that boost your winnings.
        </td>
        <td className="px-4 py-4 border border-border">Pragmatic Play</td>
      </tr>
      <tr className="bg-[#E1EFFF]">
        <td className="px-4 py-4 border border-border font-medium text-gray-900">French Roulette</td>
        <td className="px-4 py-4 border border-border">
          Single-zero layout using French betting terminology.
        </td>
        <td className="px-4 py-4 border border-border">NetEnt</td>
      </tr>
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">European Apolo</td>
        <td className="px-4 py-4 border border-border">
          Standard European roulette with inside and outside bets.
        </td>
        <td className="px-4 py-4 border border-border">Apollo Games</td>
      </tr>
      <tr className="bg-[#E1EFFF]">
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Roulette Deluxe</td>
        <td className="px-4 py-4 border border-border">
          A classic version where you bet on the number where the ball will land.
        </td>
        <td className="px-4 py-4 border border-border">Dragon Gaming</td>
      </tr>
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Cabaret Roulette</td>
        <td className="px-4 py-4 border border-border">
          Live dealer roulette with a Moulin Rouge theme and high-volatility multipliers.
        </td>
        <td className="px-4 py-4 border border-border">Winfinity</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/roulette-game.webp"
                alt="roulette game casino"
                fill
                className="object-cover"
              />
            </div>


            <h4 className="text-lg mb-6 font-semibold">
              Other useful content about online casinos
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best slot sites in New Zealand</a>
              </li>
              <li>
                <a href="#">Try your luck with online lotto games</a>
              </li>
              <li>
                <a href="#">Top-rated scratchcard sites</a>
              </li>
              <li>
                <a href="#">Enjoy the best online bingo platforms</a>
              </li>
              <li>
                <a href="#">Join the top poker sites for Kiwi players </a>
              </li>
            </ul>



            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Are there special promotions for roulette players at NZ casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes! Many of the casinos we recommend regularly offer welcome bonuses and ongoing promotions specifically for roulette players.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Can free spins bonuses be used on roulette games?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Typically, free spins apply only to slots. However, some roulette games may be part of broader promotions—always read the terms and conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  What are the benefits of playing live roulette versus automated roulette?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                 <strong>Live roulette </strong> offers a more realistic and immersive experience, with real-time interaction and human dealers. Automated versions are faster and can be played anytime without waiting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Are the rules the same online as in land-based casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes. Online roulette follows <strong> the same core rules and odds </strong>  as land-based versions, with the added convenience of playing from home.
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
                    A great roulette site should offer a combination of <strong>security, variety, attractive bonuses, and a user-friendly interface.</strong> I always recommend checking player reviews and exploring different platforms before choosing where to play. Personally, I prefer European roulette for its lower house edge and better odds.
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
