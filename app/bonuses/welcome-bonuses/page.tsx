export const metadata = {
  title: "Welcome Bonus & Best Live Casinos in New Zealand – 2025",
  description:
    "Discover top live casinos in New Zealand offering generous welcome bonuses in 2025. Real dealers, trusted platforms, and an immersive experience for Kiwi players.",
  keywords: [
    "Welcome bonus New Zealand casinos",
    "live casinos New Zealand",
    "best live casino NZ 2025",
    "NZ casino welcome offers",
    "live casino games NZ",
    "NZ online casinos with real dealers",
    "live roulette blackjack poker NZ",
    "high-quality live streaming casinos",
    "interactive live casino NZ",
    "Kiwi live gambling 2025"
  ],
  openGraph: {
    title: "Welcome Bonus & Best Live Casinos in New Zealand – 2025",
    description:
      "Uncover the best welcome bonuses at New Zealand’s leading live casinos in 2025. Engage with live dealers and premium gameplay.",
    url: "https://nz-casino.vercel.app/live-casinos",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Live Casinos in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome Bonus & Best Live Casinos in New Zealand – 2025",
    description:
      "Explore top-rated NZ live casinos with exclusive welcome bonuses for 2025. Secure platforms, live dealers, and exciting real-time play.",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Live Casinos in New Zealand",
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

export default function WelcomeBonuses() {
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
          <span className="text-gray-900">Welcome Bonuses</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best welcome bonuses at New Zealand online casinos</h1>
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
              <p className="text-base">
                Claiming a welcome bonus is the first exciting step when joining an online casino. Naturally, Kiwi players want to know which casinos in New Zealand offer the most rewarding welcome bonuses. Once you've secured yours, you're set to enter a thrilling world of entertainment and excitement.
              </p>

            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/welcome-bonus.webp"
                alt="Welcome bonus online"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="evaluation-criteria-welcome-bonuses">
              Evaluation criteria for the best welcome bonuses
            </h2>
            <p className="text-gray-700 mb-6">
              Choosing the right welcome bonus can make all the difference when starting out at an online casino. For players in New Zealand, we use strict criteria to evaluate which offers truly provide value, fairness, and a great first impression. Here are the most important factors we consider:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Criteria</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Bonus amount</td>
                    <td className="px-4 py-4 border border-border">
                      We look at how much bonus money or how many free spins are offered. Bigger isn’t always better — we also assess how realistic it is to claim.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Wagering requirements</td>
                    <td className="px-4 py-4 border border-border">
                      Low wagering requirements make it easier for Kiwi players to withdraw winnings. We avoid recommending bonuses with overly strict terms.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Eligible games</td>
                    <td className="px-4 py-4 border border-border">
                      Some bonuses are limited to certain games. We prioritise offers that allow flexibility across pokies, table games, and more.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Payment compatibility</td>
                    <td className="px-4 py-4 border border-border">
                      Not all payment methods qualify for a welcome bonus. We highlight casinos that support popular options in New Zealand like credit cards, e-wallets, and prepaid cards.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Time limits</td>
                    <td className="px-4 py-4 border border-border">
                      Some bonuses expire quickly. We favour promotions that give players enough time to meet the requirements without pressure.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Transparency</td>
                    <td className="px-4 py-4 border border-border">
                      The best welcome bonuses are easy to understand, with clear terms and no hidden conditions. We avoid offers with misleading fine print.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>



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
                    "Welcome bonuses play a vital role in a player's first impression of an online casino. I always evaluate how fair, clear, and rewarding these offers truly are. It’s not just about big numbers — it’s about value. A good welcome bonus should help Kiwi players feel confident and motivated to explore the platform further. When a casino combines this with transparency and local-friendly terms, it earns my recommendation."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>


            <h2 className="text-2xl font-bold mb-4" id="what-makes-live-casinos-special">
              What makes welcome bonuses special?
            </h2>
            <p className="text-gray-700 mb-6">
              A welcome bonus is often the first thing Kiwi players look for when joining an online casino. These offers are designed to attract new users and give them a strong start — with extra funds, free spins, or both. But not all welcome bonuses are created equal.
            </p>

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
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Extra value</td>
                    <td className="px-4 py-4 border border-border">
                      Welcome bonuses boost your first deposit with extra funds or free spins, giving Kiwi players more chances to explore games without extra cost.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Risk-free exploration</td>
                    <td className="px-4 py-4 border border-border">
                      Bonuses let you try new games without committing too much of your own money — ideal for newcomers discovering online casinos.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Tailored offers</td>
                    <td className="px-4 py-4 border border-border">
                      Many welcome packages are designed specifically for players in New Zealand, with relevant payment options and game selections.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">First impression</td>
                    <td className="px-4 py-4 border border-border">
                      A generous welcome bonus sets the tone for your entire gaming experience — it shows the casino values new players and wants to build trust.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Boosted winnings</td>
                    <td className="px-4 py-4 border border-border">
                      With more funds to play, you increase your chances of winning early — and those first wins can build confidence and excitement.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Flexible formats</td>
                    <td className="px-4 py-4 border border-border">
                      Welcome bonuses come in various forms — match bonuses, no deposit offers, or free spins — so there’s something for every type of Kiwi player.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


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
                    "What sets a good online casino apart for me is how they welcome new players. A generous welcome bonus not only provides extra value but also shows that the casino is committed to creating a positive first impression. I especially appreciate bonuses that come with fair terms — it's frustrating when conditions are confusing or overly restrictive. For Kiwi players starting their journey, a clear and rewarding welcome offer can make all the difference."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4" id="how-to-claim-a-welcome-bonus">
              How to claim a welcome bonus in New Zealand
            </h2>

            <p className="text-gray-700 mb-6">
              Claiming a welcome bonus at an online casino in New Zealand is usually a straightforward process. While the details may vary from site to site, the steps below reflect the general process most Kiwi players will follow:
            </p>

            <h3 className="text-lg font-semibold mb-2">1. Select a trusted casino</h3>
            <p className="text-gray-700 mb-4">
              Make sure the casino offers a generous welcome bonus and clear terms. Our list includes top-rated sites for New Zealand players.
            </p>

            <h3 className="text-lg font-semibold mb-2">2. Create your account</h3>
            <p className="text-gray-700 mb-4">
              Register by entering your basic details such as name, email, and date of birth. Choose a strong password and keep it secure.
            </p>

            <h3 className="text-lg font-semibold mb-2">3. Verify your identity</h3>
            <p className="text-gray-700 mb-4">
              Most platforms require identity verification via email, SMS, or document upload to comply with NZ gambling regulations.
            </p>

            <h3 className="text-lg font-semibold mb-2">4. Make your first deposit</h3>
            <p className="text-gray-700 mb-4">
              Choose a payment method available in New Zealand—such as POLi, credit/debit cards, or e-wallets—and fund your account.
            </p>

            <h3 className="text-lg font-semibold mb-2">5. Activate your welcome bonus</h3>
            <p className="text-gray-700 mb-4">
              Some casinos apply the bonus automatically, while others require a code. Check the promotion details before playing.
            </p>

            <h3 className="text-lg font-semibold mb-2">6. Enjoy your bonus and start playing</h3>
            <p className="text-gray-700 mb-6">
              Use your bonus funds or free spins to explore pokies and other eligible games. Always review the wagering requirements.
            </p>

            <h2 className="text-xl font-bold mb-4" id="responsible-bonus-gaming">
              Responsible bonus gaming in New Zealand
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome bonuses are exciting, but it’s important to use them responsibly. Here are a few practical tips to help you enjoy them safely:
            </p>

            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
              <li><strong>Set a budget:</strong> Know how much you're comfortable spending, even when playing with bonus funds. Bonuses are not a guarantee of profit.</li>
              <li><strong>Read the terms:</strong> Make sure you understand the wagering requirements, game restrictions, and expiration dates before using a bonus.</li>
              <li><strong>Use time limits:</strong> Don’t let the excitement of chasing bonus wins take over your daily routine. Set play time boundaries.</li>
              <li><strong>Don’t chase losses:</strong> Even with a bonus, treat every game as entertainment. Avoid the urge to recover lost bets.</li>
              <li><strong>Seek help if needed:</strong> If gambling stops being fun or feels stressful, contact <a href="https://gamblinghelpline.co.nz/" className="text-primary" target="_blank" rel="noopener noreferrer">Gambling Helpline New Zealand</a> or <a href="https://pgf.nz" className="text-primary" target="_blank" rel="noopener noreferrer">Problem Gambling Foundation</a> for support.</li>
            </ul>


            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/welcome-bonus-casino.webp"
                alt="Welcome bonus casino"
                fill
                className="object-cover"
              />
            </div>

            <h4 className="text-lg mb-6 font-semibold">
              More useful casino content for Kiwi players:
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best welcome bonuses at NZ online casinos</a>
              </li>
              <li>
                <a href="#">How to claim a no deposit welcome bonus in New Zealand</a>
              </li>
              <li>
                <a href="#">Top free spins offers for new Kiwi players</a>
              </li>
              <li>
                <a href="#">Low wagering welcome bonuses explained</a>
              </li>
            </ul>




            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What is a welcome bonus at an online casino?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  A welcome bonus is a <strong>promotional offer</strong> given to new players when they sign up and make their first deposit. It usually includes bonus funds, free spins, or both, giving players extra value to start playing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Are welcome bonuses available to New Zealand players?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, most online casinos that accept Kiwi players provide <strong>exclusive welcome bonuses</strong> tailored to the NZ market, including NZD currency support and local payment methods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Do I need a promo code to claim a welcome bonus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Some casinos require a <strong>bonus code</strong> during registration or deposit, while others apply the offer automatically. Always check the promotion terms before signing up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  What are wagering requirements?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Wagering requirements indicate <strong>how many times</strong> you need to play through your bonus before withdrawing winnings. Lower requirements are generally more favourable for players.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-bold">
                  Can I withdraw my bonus immediately?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  No. <strong>Most welcome bonuses are subject to wagering conditions</strong> that must be met before any bonus-related winnings can be withdrawn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-bold">
                  What types of welcome bonuses can I find?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  The most common types include <strong>matched deposit bonuses</strong>, <strong>no deposit bonuses</strong>, and <strong>free spins</strong>. Some casinos offer packages that combine all three.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-bold">
                  Do welcome bonuses expire?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, most bonuses come with a <strong>time limit</strong>, often ranging from 7 to 30 days. Be sure to use the bonus within the stated period to avoid losing it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-bold">
                  Can I claim more than one welcome bonus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  No. You can usually only claim <strong>one welcome bonus per casino</strong>, per person, per household. However, you can sign up at different casinos to access new offers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left font-bold">
                  Are mobile users eligible for welcome bonuses?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. <strong>Welcome bonuses apply whether you sign up on desktop or mobile</strong>. Many casinos also offer mobile-exclusive promotions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left font-bold">
                  Is it safe to claim a welcome bonus online?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, as long as you're playing at a <strong>licensed and regulated online casino</strong>. Stick to our recommended NZ sites for secure and transparent offers.
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
                    As a mobile casino expert, I’ve tested countless platforms—and nothing sets the tone better than a well-structured welcome bonus. It’s more than just extra cash or spins; it’s a signal that the casino values new players. For Kiwi users, I always recommend choosing sites that combine generous welcome offers with clear terms, proper licensing, and smooth mobile usability. It’s about starting strong, feeling secure, and knowing exactly what you’re getting.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">
                    - Freya Lind, Casino expert, tester and writer
                  </p>
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
