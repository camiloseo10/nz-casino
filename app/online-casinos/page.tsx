export const metadata = {
  title: "Best Welcome Bonuses in New Zealand Casinos - 2025",
  description: "Discover the top welcome bonuses offered by New Zealand's best online casinos in 2025. Compare features, offers, and expert reviews.",
  keywords: [
    "New Zealand online casinos",
    "welcome bonuses 2025",
    "best casino bonuses NZ",
    "NZ online gambling",
    "new casinos NZ"
  ],
  openGraph: {
    title: "Best Welcome Bonuses in New Zealand Casinos - 2025",
    description: "Compare the most generous welcome bonuses from top-rated NZ online casinos in 2025.",
    url: "https://nz-casino.vercel.app/welcome-bonuses",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best New Zealand Online Casino",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Welcome Bonuses in New Zealand Casinos - 2025",
    description: "Discover top bonuses at new NZ online casinos in 2025.",
    images: ["https://nz-casino.vercel.app/nz-online-casino-hero.png"],
  },
}


import Link from "next/link"
import { ChevronDown, Home, Calendar, User, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function OnlineCasinos() {
  return (
    <div>
      <Navbar />

      {/* Breadcrumb */}
      <div className="container mx-auto mt-2 px-4 py-2 bg-breadcrumb border-b border-gray-200 mb-4">
        <div className="flex flex-wrap items-center text-sm text-gray-600">
          <Home className="w-4 h-4 mr-1" />
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">Online Casinos</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best New Zealand Online Casinos</h1>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Sarah Mitchell</span>
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
              <p className="text-base">
                If you're looking for the best Norwegian online casino, we want to tell you everything you need to know about how to choose the right one. We'll give you recommendations of casinos with excellent online reputations, a wide range of games, promotions and more.
              </p>
            </div>

            <div className="relative w-full h-[600px] rounded-lg overflow-hidden mb-8 ">

              <Image
                src="/nz-online-casino-hero.png"
                alt="Best New Zealand Online Casino"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-[#2c3e50]/70 flex justify-center items-start pt-12">

                <div className="text-center text-white">
                  <h2 className=" font-bold mb-4">
                    <span className="lg:text-4xl text-2xl text-[#E65260] ">THE BEST NEW ZEALAND</span>
                    <br />
                    <span className="text-white lg:text-7xl text-4xl ">ONLINE CASINO</span>
                  </h2>
                </div>

                <div className="absolute bottom-0 left-0 right-0 text-center pb-4 text-white">
                  <div className="text-center text-white">
                    <h2 className=" font-bold mb-4">
                      <span className="lg:text-5xl text-white text-3xl ">NZCASINO</span>

                      <span className=" text-[#e91e63] lg:text-4xl text-1xl">.COM</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4" id="how-do-we-rate">How do we rate the best New Zealand casinos for our list?</h2>
            <p className="text-gray-700 mb-6">
              We only recommend casinos that meet our strict criteria. Our team of experts evaluates each casino based
              on several important factors to ensure we only recommend the best options for New Zealand players.
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Licensing</h3>
                <p className="text-gray-700">
                  We only list casinos with valid licenses. Licensing is the most important factor for safe and fair
                  gambling. We prioritize casinos licensed by reputable authorities like the Malta Gaming Authority, UK
                  Gambling Commission, and Gibraltar Regulatory Authority.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">2. Security</h3>
                <p className="text-gray-700">
                  All casinos must have strong security measures. We check for SSL encryption, secure payment
                  processing, and data protection policies. We also verify that the casino uses certified random number
                  generators (RNGs) to ensure fair gameplay.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">3. Payment Methods</h3>
                <p className="text-gray-700">
                  We evaluate the variety and reliability of payment options. The best New Zealand online casinos offer
                  multiple deposit and withdrawal methods, including credit cards, e-wallets, bank transfers, and
                  sometimes cryptocurrencies. We also check processing times and fees.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">4. Bonuses and Promotions</h3>
                <p className="text-gray-700">
                  We analyze bonus offers for value and fairness. This includes welcome bonuses, free spins, loyalty
                  programs, and ongoing promotions. We pay special attention to the terms and conditions, wagering
                  requirements, and time limits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">5. Game Selection</h3>
                <p className="text-gray-700">
                  We look for casinos with a wide variety of high-quality games from top software providers. This
                  includes pokies (slots), table games, live dealer games, and specialty games. We also check if the
                  casino regularly updates its game library.
                </p>
              </div>
            </div>

            {/* Expert Opinion */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8  border border-white sshadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {/* Imagen con borde blanco redondo */}
                <div className="relative w-[100px] h-[100px] sm:w-28 sm:h-28 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/female-casino-expert.png"
                    alt="Sarah Mitchell"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Contenido */}
                <div className="text-center sm:text-left max-w-[600px]">
                  <h3 className="text-lg font-bold text-[#1E46B0]">Expert Opinion</h3>
                  <p className="mt-4">
                    "When evaluating online casinos for New Zealand players, I always check the license, security
                    measures, and payment options first. These are the foundation of a trustworthy casino experience.
                    Then I look at game variety, bonus terms, and customer support quality."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Sarah Mitchell, Casino Expert</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[768px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/NZcasino.webp"
                alt="Best New Zealand Online Casino"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/50 to-[#2c3e50]/70 flex justify-center items-start pt-12">
                <div className="text-center text-white"></div>
                <div className="absolute bottom-0 left-0 right-0 text-center pb-4 text-white">
                  <div className="absolute bottom-0 left-0 right-0 text-center pb-4 text-white">
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="the-legal-situation">
              The legal situation in the Norwegian casino sector</h2>
            <p className="text-gray-700 mb-6">

              It is common for many players to be unsure about the legality of playing at international online casinos. However, it is important to clarify that it is not illegal to play at these casinos. There is no law prohibiting Norwegian players from using platforms with secure foreign licenses, such as those from the EU and Curaçao, which means you can play freely and without legal concerns.
            </p>
            <p className="text-gray-700 mb-6">
              There is some debate surrounding the issue, as some believe that only national operators should offer gambling to Norwegian players. However, many international operators and a large part of the population believe that there are no clear restrictions preventing this. In addition, as Norway is part of the European Economic Area (EEA), the free flow of services, including online gambling, is guaranteed.
            </p>
            <p className="text-gray-700 mb-6">
              In short, Norwegian players can play at online casinos with an international license without worrying about legal issues. However, for extra security, it is recommended to play at casinos that have respected gaming licenses.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="online-casino">
              Online casino in Norway and responsible gambling</h2>
            <p className="text-gray-700 mb-6">
              At all Norwegian casinos, gambling is regulated according to the principle of <strong>social responsibility</strong>. Therefore, there are casino sites that insist on caution when it comes to gambling.
            </p>
            <p className="text-gray-700 mb-6">
              If you are playing at a <strong>Norwegian online casino</strong>, it is advisable to pay attention. Remember that these are not cheap casinos! The betting schemes are cumulative, and the RTP is highly advantageous for the house. For example, slot machines are progressive: they increase your prize but at the same time reduce your chances of winning!
            </p>
            <p className="text-gray-700 mb-6">
              On the other hand, it is possible to complain if problems arise at Norwegian casinos. The regulations require casinos to have warning systems and protocols for responsible gaming.
            </p>
            <p className="text-gray-700 mb-6">
              You can contact the following responsible gambling organizations in Norway:
            </p>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6">
              <li >
                <a href="https://lottstift.no/">Lotteri- og stiftelsestilsynet</a>
              </li>
              <li>
                <a href="http://frivillig.no/">Frivillig.no</a>
              </li>
            </ul>

            <div className="relative w-full h-[768px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/online-casinos.webp"
                alt="Best New Zealand Online Casino"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-[#2c3e50]/70 flex justify-center items-start pt-12">

                <div className="text-center text-white">
                  <h2 className=" font-bold lg:mx-4">
                    <span className="lg:text-6xl text-4xl text-[#E68B87] ">HOW TO START PLAYING AT A NORWEGIAN CASINO?</span>

                  </h2>
                </div>

                <div className="absolute bottom-0 left-0 right-0 text-center pb-4 text-white">
                  <div className="absolute bottom-0 left-0 right-0 text-center pb-4 text-white">
                    <div className="text-center text-white">
                      <h2 className=" font-bold mb-4">
                        <span className="lg:text-5xl text-white text-3xl ">NZCASINO</span>

                        <span className=" text-[#e91e63] lg:text-4xl text-1xl">.COM</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className=" text-lg mb-6 ">
              Other useful content about online casinos
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li >
                <a href="https://nyecasino.com/nettcasino/"> Best games at online casinos in Norway</a>
              </li>
              <li>
                <a href="https://nyecasino.com/bonus/">Best casino bonuses in Norway</a>
              </li>
              <li>
                <a href="https://nyecasino.com/betaling/">All payment methods for casinos</a>
              </li>
              <li>
                <a href="https://nyecasino.com/omtaler/">All casino reviews</a>
              </li>
            </ul>


            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What are the most popular casino games in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Pokies (slot machines) are by far the most popular casino games in New Zealand. Table games like
                  blackjack and roulette, as well as live dealer games, are also very popular among Kiwi players.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Which payment methods can I use at New Zealand online casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  New Zealand players can use credit/debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill,
                  Neteller), bank transfers, POLi, and increasingly, cryptocurrencies. Always check the casino's banking
                  page for specific options and any associated fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Is it safe to play at online casinos from New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, it's safe to play at licensed and regulated online casinos. Look for casinos with licenses from
                  reputable authorities like the Malta Gaming Authority, UK Gambling Commission, or Gibraltar Regulatory
                  Authority. These ensure the casino follows strict standards for fair play and security.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">

                  Is it possible to play for free at Norwegian online casinos before depositing money?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">

                  Yes, Norwegian casinos allow demo games, so players can test out certain games (especially slots) without making a deposit. However, the demo mode has several limitations.
                  In addition, some casinos have a “free play” section, which is very popular with international players. This is recommended for those who want to try out the casino before betting money.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Expert Opinion */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8  border border-white sshadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300 lg:mt-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {/* Imagen con borde blanco redondo */}
                <div className="relative w-[100px] h-[100px] sm:w-28 sm:h-28 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/female-casino-expert.png"
                    alt="Sarah Mitchell"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Contenido */}
                <div className="text-center sm:text-left max-w-[600px]">
                  <h3 className="text-lg font-bold text-[#1E46B0]">Expert Opinion</h3>
                  <p className="mt-4">

                    Having tried several online casinos over the years, I can confidently say that Norwegian casinos are among the best options. They offer a fantastic gaming experience: the platforms are well designed, safe and easy to use. The protection of your data is guaranteed, as they use advanced encryption, so you can play without worries.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Sarah Mitchell,
                    Casino expert, tester and writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
                <aside className="lg:col-span-3">
                  <div className="sticky top-6">
                    <TableOfContents />
                  </div>
                </aside>
      </div>
    </div>
  )
}
