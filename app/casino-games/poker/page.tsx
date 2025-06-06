export const metadata = {
  title: "Top Poker Online Sites in New Zealand",
  description:
    "Play poker online at the best sites in New Zealand for 2025. Find trusted Kiwi platforms with real-money games, tournaments, and generous bonuses.",
  keywords: [
    "poker online New Zealand",
    "best poker sites NZ",
    "online poker for Kiwis",
    "real money poker NZ",
    "trusted poker platforms NZ",
    "top online poker rooms",
    "NZ poker tournaments 2025",
    "play poker online NZ",
    "mobile poker sites New Zealand",
    "safe online poker NZ"
  ],
  openGraph: {
    title: "Top Poker Online Sites in New Zealand",
    description:
      "Join the best poker online sites in New Zealand. Enjoy secure platforms, live tournaments, mobile access, and real cash games.",
    url: "https://nz-casino.vercel.app/casino-games/poker",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-bingo.webp", // Actualiza esta imagen si tienes una específica para poker
        width: 1200,
        height: 630,
        alt: "Top Poker Online Sites in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Poker Online Sites in New Zealand",
    description:
      "Explore the top sites for poker online in NZ. Play real-money games, access exclusive bonuses, and join competitive tournaments.",
    images: [
      {
        url: "https://nz-casino.vercel.app/online-bingo.webp", // Igual aquí, si hay una imagen de poker, convendría actualizar
        width: 1200,
        height: 630,
        alt: "Top Poker Online Sites in New Zealand",
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

export default function Poker() {
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
          <span className="text-gray-900">Poker</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best poker online sites in New Zealand </h1>
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
                Looking for the best poker online sites in New Zealand? You’re in the right spot. Poker remains one of the most strategic and thrilling card games enjoyed by Kiwi players. With <strong>real-money tables, exciting tournaments, and live dealers</strong>, it offers a competitive and rewarding experience.
              </p>
              <p className="text-gray-700">
                Stick with us as we uncover where to play poker online safely, with top-notch bonuses and trusted platforms tailored for New Zealand players.
              </p>
            </div>




            <h2 className="text-2xl font-bold mb-4" id="How-we-evaluate-online-scratchcard">
              How we evaluate the best poker online sites
            </h2>
            <p className="text-gray-700 mb-6">
              We’ve selected the top-rated poker online platforms in New Zealand using a detailed and careful evaluation process. From game variety and table limits to security and payment speed—here’s what we look for:
            </p>

            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Licensing and safety:</strong> Every site we recommend is licensed by trusted regulators like the UK Gambling Commission or Malta Gaming Authority, ensuring a secure and fair poker environment.
              </li>
              <li>
                <strong>Variety of poker games:</strong> We prioritise platforms offering Texas Hold’em, Omaha, and other popular formats with both cash games and tournament options.
              </li>
              <li>
                <strong>Flexible stakes and payments:</strong> Kiwi players should be able to join tables with a range of buy-ins and use payment methods like cards, e-wallets, and even crypto.
              </li>
              <li>
                <strong>Fast and fair withdrawals:</strong> Trusted poker sites ensure quick and straightforward access to your winnings with no unnecessary delays.
              </li>
              <li>
                <strong>Bonuses and promotions:</strong> Top poker platforms offer welcome packages, rakeback deals, freerolls, and ongoing promotions for loyal players.
              </li>
              <li>
                <strong>Player support and experience:</strong> We value sites with excellent customer support, smooth mobile gameplay, and active communities for a more enjoyable experience.
              </li>
            </ul>




            <h2 className="text-2xl font-bold mb-4" id="types-lottery-games">
              Types of online poker games
            </h2>
            <p className="text-gray-700 mb-6">
              Online poker offers a wide variety of formats and gameplay styles for Kiwi players. Whether you’re a beginner or a seasoned player, here are the main types of poker games available at New Zealand online casinos:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">
                      Poker Variant
                    </th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Texas Hold’em
                    </td>
                    <td className="px-4 py-4 border border-border">
                      The most popular poker variant worldwide. Each player gets two hole cards and combines them with five community cards to make the best hand.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Omaha
                    </td>
                    <td className="px-4 py-4 border border-border">
                      Similar to Texas Hold’em, but players receive four hole cards and must use exactly two, combined with three of the five community cards.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Seven-Card Stud
                    </td>
                    <td className="px-4 py-4 border border-border">
                      A classic version of poker with no community cards. Players receive a mix of face-up and face-down cards over multiple betting rounds.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      Live Dealer Poker
                    </td>
                    <td className="px-4 py-4 border border-border">
                      Offers a real casino atmosphere with professional dealers streamed live. Interact in real time while playing at authentic poker tables.
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
                    I know very well how essential it is to find an online casino that offers a smooth and rewarding experience with <strong>poker games</strong>. I say this from experience, having played poker online across numerous platforms for years.
                  </p>
                  <p className="mt-4">
                    One of the main features I value in a poker site is the interface—it should be user-friendly—and the <strong>game speed and visual clarity</strong> that enhance the atmosphere at the table. These aspects truly shape the online poker experience for Kiwi players.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino expert and poker player</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/poker-online.webp"
                alt="Poker online"
                fill
                className="object-cover"
              />
            </div>


            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" id="types-of-poker">
                Different types of poker games
              </h2>
              <p className="text-gray-700 mb-6">
                There are many ways to enjoy poker online. Software providers have developed countless variations, but they generally fall into two main categories: <strong>online casino poker</strong> and <strong>video poker</strong>.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Online casino poker
              </h3>
              <p className="text-gray-700 mb-4">
                In this format, players face each other at a virtual table with real dealers and opponents. These rooms are designed to replicate the atmosphere of land-based casinos in places like Las Vegas, Monte Carlo, or Macau.
              </p>
              <p className="text-gray-700 mb-4">
                To succeed, you’ll need to apply real strategy. You can read your opponents’ moves based on their folds and play using your knowledge of hand rankings and betting patterns. It’s a game of skill as much as luck.
              </p>
              <p className="text-gray-700 mb-4">
                The action takes place in a studio designed to provide an immersive, TV-style experience. Many online casinos also host poker tournaments, adding a social and competitive element to the game as you play alongside others and interact with live dealers.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Video poker
              </h3>
              <p className="text-gray-700 mb-4">
                Video poker is ideal for beginners or those who prefer a more relaxed poker experience. You play solo against a machine or algorithm, not in a live environment.
              </p>
              <p className="text-gray-700 mb-4">
                It combines elements of classic poker with slot mechanics. There are no opponents to beat—your only goal is to make the best possible hand with the cards dealt by the system, following traditional poker rules.
              </p>
              <p className="text-gray-700">
                It’s faster than live poker, often available in free demo mode, and doesn’t require complex strategy or social interaction. Just pure, straightforward poker fun.
              </p>
            </section>





            <h4 className="text-lg mb-6 font-semibold">
              Other useful content about online poker and casino games
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Top poker online platforms in New Zealand</a>
              </li>
              <li>
                <a href="#">How to choose the best poker rooms for Kiwi players</a>
              </li>
              <li>
                <a href="#">Best mobile poker apps in NZ</a>
              </li>
              <li>
                <a href="#">Tips to improve your online poker game</a>
              </li>
              <li>
                <a href="#">Real money poker vs free poker games</a>
              </li>
            </ul>






            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Can I win real money playing poker online in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, licensed online poker sites accepting Kiwi players offer real-money games. Winnings are added to your account and can be withdrawn securely.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Is online poker legal and fair in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. Top poker platforms are regulated by trusted bodies such as the UK Gambling Commission and the Malta Gaming Authority to ensure fair play and security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  What types of poker games are available online?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Players can enjoy Texas Hold’em, Omaha, Seven-Card Stud, and more. Many sites also host tournaments and offer both cash tables and sit & go games.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Can I play poker online on my mobile device?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, most poker platforms are optimised for mobile use or offer dedicated apps, allowing you to play on your smartphone or tablet anytime, anywhere.
                </AccordionContent>
              </AccordionItem>
            </Accordion>



            {/* Expert Opinion */}
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
                    In New Zealand, poker online is a favourite among players seeking a mix of skill and excitement. When choosing a site from our recommendations, be sure it offers a good range of poker variants, generous bonuses, and strong security measures.
                  </p>
                  <p className="mt-4">
                    These elements are essential for an experience that’s not only safe, but also enjoyable and competitive—whether you’re playing for fun or real money.
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
