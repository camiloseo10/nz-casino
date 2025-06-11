export const metadata = {
  title: "Online casino games in New Zealand",
  description:
    "Discover the best online casino games in New Zealand for 2025. Real dealers, immersive experiences, and top-rated platforms for Kiwi players.",
  keywords: [
    "online casino games New Zealand",
    "best online casino NZ 2025",
    "online casino games NZ",
    "NZ online casinos with real dealers",
    "live roulette blackjack poker NZ",
    "high-quality live streaming casinos",
    "interactive live casino NZ",
    "New Zealand online casino bonuses",
    "trusted online dealer casinos",
    "Kiwi online gambling 2025"
  ],
  openGraph: {
    title: "Best Online Game Casinos in New Zealand",
    description:
      "Play at top-rated online casinos in New Zealand. Enjoy real-time action with professional dealers and premium bonuses.",
    url: "https://nz-casino.vercel.app/online-casinos",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Online Game Casinos in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Game Casinos in New Zealand – 2025",
    description:
      "Top online game casinos in NZ for 2025. Licensed platforms, immersive gameplay, and exclusive live dealer experiences.",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Online Game Casinos in New Zealand",
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

export default function CasinoGames() {
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
          <span className="text-gray-900">Casino Games</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Online casino games in New Zealand</h1>
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
              <p className="text-gray-700 mb-6">
                Online casino games attract a wide range of players—including many Kiwis. Slots are among the most popular choices, but there’s also a huge variety of games to explore, from <strong> lotteries and bingo to roulette, table games, and live casino experiences. </strong>
              </p>
              <p className="text-gray-700 mb-6">
                Let’s take a look at some of the best games you can enjoy at online casinos in <strong>New Zealand</strong>!
              </p>
            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/online-casino-games.webp"
                alt="Best New Zealand Online Casino Games"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="criteria-for-creating-the-list-of-the-best-safe-casinos">
              Popular online casino games in New Zealand
            </h2>
            <p className="text-gray-700 mb-6">
              Online casinos in New Zealand offer a wide range of games, each with its own unique features and appeal. Here are some of the most popular types of games you can find:
            </p>
            <h3 className="text-lg font-semibold mb-2">Slot machines</h3>
            <p className="text-gray-700 mb-6">
              Slot machines are among the <strong>most popular online casino games</strong> for Kiwi players. No matter your preferences, there’s a slot game out there for everyone. You’ll find classic and traditional machines with simple paylines, as well as more modern, feature-rich versions.
            </p>
            <p className="text-gray-700 mb-6">
              Many slots come with <strong>exciting themes</strong> —from mythology and fairy tales to the American Wild West, exotic Asia, and much more. Some titles also include innovative mechanics, such as jackpots or Megaways, offering over 100,000 ways to win.
            </p>
            <p className="text-gray-700 mb-6">
              Best of all, many online casinos in New Zealand allow you to try these slots for free, so you can test the game before playing with real money.
            </p>
            <h3 className="text-lg font-semibold mb-2">Roulette</h3>
            <p className="text-gray-700 mb-6">
              If there’s one iconic casino game that comes to mind, it’s roulette. The top online casinos in New Zealand feature roulette as part of their core offering. The <strong>green felt table</strong>, the red and black numbers, and the green 0 or 00 form the classic backdrop for this timeless game.
            </p>
            <p className="text-gray-700 mb-6">
              There are three main types of roulette:

              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>European Roulette:</strong> Features a single zero (0) and 36 numbers, giving players better odds compared to other variants.
                </li>
                <li>
                  <strong>American Roulette:</strong> Includes both a single zero (0) and a double zero (00), which slightly increases the house edge.
                </li>
                <li>
                  <strong>French Roulette:</strong> Similar to European, but with special rules like “La Partage” or “En Prison” that can further improve player odds.
                </li>
              </ul>
              Roulette is easy to learn and offers a mix of luck and strategy, making it a favorite for both new and experienced players in New Zealand.

            </p>
            <h3 className="text-lg font-semibold mb-2">Poker</h3>
            <p className="text-gray-700 mb-6">
              Poker is a popular card game that combines skill, strategy, and luck. There are many variations of poker available at online casinos in New Zealand, including Texas Hold'em, Omaha, and Seven-Card Stud. Players compete against each other rather than the house, making it a unique and engaging experience.
            </p>
            <p className="text-gray-700 mb-6">
              Online poker rooms often host tournaments and cash games, allowing players to test their skills against others from around the world. Many platforms also offer tutorials and practice modes for those new to the game.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you’re a seasoned pro or a beginner, online poker provides an exciting way to enjoy this classic card game from the comfort of your home.
              <strong>Live poker</strong> is also available at many online casinos, where players can interact with real dealers and other players in real time, adding an extra layer of excitement to the game.
            </p>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/online-games.webp"
                alt="Best New Zealand Online Casino Games"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900" id="other-popular-online-casino-games-in-new-zealand">
              Other popular online casino games in New Zealand
            </h2>

            <h3 className="text-lg font-semibold mb-2">Online bingo</h3>
            <p className="text-gray-700 mb-6">
              Online bingo is based on the traditional game, where multiple players participate—bringing a social element to the experience. Depending on the version, the game is played with 60, 75, or 90 numbered balls drawn from a spinning drum.
            </p>
            <p className="text-gray-700 mb-6">
              Players purchase at least one ticket (also called a card or "bong"), which contains a set of numbered squares. A standard ticket includes 15 numbers across three rows, but layouts can vary by casino. The goal is to mark the numbers as they’re called and be the first to complete one line, two lines, or a full house—commonly known as calling “bingo”.
            </p>
            <p className="text-gray-700 mb-6">
              Online bingo often includes chat features, allowing players to interact and enjoy a more engaging experience. Some platforms also offer themed bingo rooms and special promotions, adding to the excitement.
            </p>
            <h3 className="text-lg font-semibold mb-2">Keno</h3>
            <p className="text-gray-700 mb-6">
              Keno is a lottery-style game that’s popular in New Zealand online casinos. Players select numbers on a card, and then a drawing determines the winning numbers. It’s a game of chance that offers the possibility of big payouts.
            </p>
            <p className="text-gray-700 mb-6">
              The appeal of Keno lies in its simplicity and the potential for large jackpots. Some online casinos in New Zealand offer progressive jackpot Keno, where the prize pool increases until there’s a winner.
            </p>
            <h3 className="text-lg font-semibold mb-2">Scratch cards</h3>
            <p className="text-gray-700 mb-6">
              Scratch cards are instant-win games that are based on the traditional scratch-off tickets. Players purchase a card and then scratch off the surface to reveal symbols or numbers. If they match a winning combination, they receive a prize.
            </p>
            <p className="text-gray-700 mb-6">
              These games come in a wide range of themes—from simple, classic styles to visually rich versions with bonus features. Thanks to their instant outcomes, scratch cards are perfect for players looking for fast-paced entertainment and quick wins.
            </p>

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
                    If I had to choose a favourite casino game, I honestly couldn’t pick just one. I really enjoy playing <strong>poker</strong> and <strong>bingo</strong>.

                    I turn to poker when I’m in the mood to focus and put my strategies to the test, and I choose bingo when I want something more relaxed and fun, without complex rules.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Table of Contents */}
        <aside className="lg:col-span-3">
          <TableOfContents />
        </aside>
      </div>
    </div>
  )
}
