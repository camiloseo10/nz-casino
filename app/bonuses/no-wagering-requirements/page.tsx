export const metadata = {
  title: "No Wagering Requirements & Best Live Casinos in New Zealand",
  description:
    "Discover New Zealand’s top live casinos in 2025 offering no wagering requirements. Play with real dealers on trusted, immersive platforms.",
  keywords: [
    "no wagering requirements",
    "live casinos New Zealand",
    "no wagering bonus NZ",
    "best live casino NZ 2025",
    "real dealer casino NZ",
    "NZ online casinos 2025",
    "live casino offers no wagering",
    "trusted Kiwi casino sites",
    "no playthrough bonuses NZ",
    "best bonus terms New Zealand casinos"
  ],
  openGraph: {
    title: "No Wagering Requirements & Best Live Casinos in New Zealand – 2025",
    description:
      "Experience the best live casinos in New Zealand with no wagering requirements. Enjoy real dealers, instant bonuses, and secure play.",
    url: "https://nz-casino.vercel.app/live-casinos",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "No Wagering Live Casinos in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Wagering Requirements & Best Live Casinos in New Zealand – 2025",
    description:
      "Play at New Zealand’s best live casinos with no wagering requirements. Top platforms, live dealers, and real rewards.",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "No Wagering Live Casinos in New Zealand",
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

export default function NoWagering() {
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
          <span className="text-gray-900">No wagering requirements</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best New Zealand casinos with no wagering requirements</h1>
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
  Claiming a welcome bonus is the first exciting step when joining an online casino. For Kiwi players, casinos in New Zealand that offer bonuses with <strong>no wagering requirements</strong> are especially appealing. Once you've secured yours, you're ready to dive into a thrilling world of fair play and real rewards.
</p>


            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/no-wagering-boonus.webp"
                alt="No wagering bonus"
                fill
                className="object-cover"
              />
            </div>
          <h2 className="text-2xl font-bold mb-4" id="what-are-no-wagering-bonuses">
  What are no wagering requirements bonuses?
</h2>
<p className="text-gray-700 mb-4">
  A <strong>no wagering requirements bonus</strong> allows you to play and withdraw your winnings straight away, without having to meet any complicated playthrough conditions. Unlike traditional bonuses, which require you to wager your bonus amount several times, these offers give you full control from the start.
</p>
<p className="text-gray-700 mb-4">
  This type of bonus is especially valued by Kiwi players who want hassle-free rewards and a transparent gaming experience. With no strings attached, you’re free to enjoy your wins instantly.
</p>

<h3 className="text-xl font-semibold mb-3">Why choose a no wagering bonus?</h3>
<ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
  <li>You can withdraw your winnings at any time, without waiting to meet wagering targets.</li>
  <li>You have the freedom to explore a wide range of games — pokies, live tables, or scratchcards — without restrictions.</li>
  <li>You reduce the risk of losing your bonus before meeting strict conditions.</li>
  <li>You get full value from the promotion, as your rewards belong to you from the start.</li>
</ul>

<p className="text-gray-700 mb-6">
  Always make sure to read the bonus terms and conditions. The best offers are clear, easy to understand, and don’t hide confusing clauses that could affect your winnings.
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
        "Welcome bonuses play a vital role in shaping a player's first impression of an online casino. It’s not just about the amount — it’s about fairness and clarity. Bonuses with <strong>no wagering requirements</strong> stand out because they offer real value from the start. For Kiwi players, this means greater trust and more freedom to enjoy their winnings without restrictions. Casinos that embrace this approach earn my full recommendation."
      </p>
      <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
    </div>
  </div>
</div>


<h2 className="text-2xl font-bold mb-4" id="bonus-terms-no-wagering">
  Standard terms of no wagering requirements bonuses
</h2>
<p className="text-gray-700 mb-6">
  Bonuses with <strong>no wagering requirements</strong> are known for their simplicity. Still, it's important for Kiwi players to understand the standard terms that may apply:
</p>
<ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
  <li>Some bonuses require a minimum deposit to be activated.</li>
  <li>There may be a cap on the maximum amount you can withdraw from your winnings.</li>
  <li>Certain bonuses may be limited to specific games or categories (e.g. pokies or live casino).</li>
</ul>

<h3 className="text-xl font-semibold mb-3">Types of no wagering bonuses</h3>
<div className="overflow-x-auto mb-6">
  <table className="w-full text-sm text-gray-800 border-collapse border border-border">
    <thead className="bg-slate-800 text-white uppercase text-xs">
      <tr>
        <th className="px-4 py-3 border border-border font-semibold text-left">Bonus Type</th>
        <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Free spins</td>
        <td className="px-4 py-4 border border-border">
          Play selected pokies with no wagering requirements and win real money from your spins.
        </td>
      </tr>
      <tr className="bg-[#E1EFFF]">
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Welcome bonus</td>
        <td className="px-4 py-4 border border-border">
          A no wagering welcome bonus given to new players after signing up and making a qualifying deposit.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Reload bonus</td>
        <td className="px-4 py-4 border border-border">
          A no wagering bonus offered to existing players making additional deposits.
        </td>
      </tr>
      <tr className="bg-[#E1EFFF]">
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Cashback</td>
        <td className="px-4 py-4 border border-border">
          A refund of a percentage of your losses over a certain period — with no wagering needed on the cashback received.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h3 className="text-xl font-semibold mb-3">How to claim a no wagering casino bonus</h3>
<ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
  <li>Explore our list of offers and choose a no wagering bonus that suits you.</li>
  <li>Sign up at the casino to create your account and log in.</li>
  <li>If required, make the minimum deposit to activate the bonus.</li>
  <li>Follow the casino's instructions to activate the offer on your account.</li>
  <li>Start playing your favourite games.</li>
  <li>Withdraw your winnings whenever you’re ready — no playthrough needed!</li>
</ol>

<div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/wagering-requeriment.webp"
                alt="wagering requeriment"
                fill
                className="object-cover"
              />
            </div>


            <h4 className="text-lg mb-6 font-semibold">
  More useful casino content for Kiwi players:
</h4>
<ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
  <li>
    <a href="#">Top NZ casinos with no wagering requirements</a>
  </li>
  <li>
    <a href="#">How to claim a no deposit bonus in New Zealand</a>
  </li>
  <li>
    <a href="#">Best free spins with no wagering for Kiwi players</a>
  </li>
  <li>
    <a href="#">Low wagering and no wagering bonuses explained</a>
  </li>
</ul>





            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-left font-bold">
      What is a welcome bonus at an online casino?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      A welcome bonus is a <strong>promotional offer</strong> given to new players when they sign up and make their first deposit. It usually includes bonus funds, free spins, or both.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger className="text-left font-bold">
      Are welcome bonuses available to New Zealand players?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Yes, most online casinos that accept Kiwi players offer <strong>tailored welcome bonuses</strong> in NZD and with local-friendly payment methods.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger className="text-left font-bold">
      Do I need a promo code to claim a welcome bonus?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Sometimes. <strong>Some casinos require a bonus code</strong> during registration or deposit, while others apply the offer automatically.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4">
    <AccordionTrigger className="text-left font-bold">
      What are wagering requirements?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Wagering requirements indicate <strong>how many times</strong> you must wager the bonus before withdrawing any winnings. Offers with <strong>no wagering requirements</strong> let you cash out instantly.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5">
    <AccordionTrigger className="text-left font-bold">
      Can I withdraw my bonus immediately?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Only if it’s a <strong>no wagering bonus</strong>. Traditional bonuses require meeting wagering conditions first.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-6">
    <AccordionTrigger className="text-left font-bold">
      What types of welcome bonuses can I find?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      The most popular types include <strong>deposit match bonuses</strong>, <strong>no deposit bonuses</strong>, and <strong>free spins</strong>. Some are also offered with <strong>no wagering requirements</strong>.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-7">
    <AccordionTrigger className="text-left font-bold">
      Do welcome bonuses expire?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Yes. Most bonuses have a <strong>validity period</strong>, typically between 7 and 30 days. Use them before they expire.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-8">
    <AccordionTrigger className="text-left font-bold">
      Can I claim more than one welcome bonus?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Usually, you can only claim <strong>one welcome bonus per casino</strong>. But you can sign up at multiple NZ casinos to enjoy different offers.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-9">
    <AccordionTrigger className="text-left font-bold">
      Are mobile users eligible for welcome bonuses?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Absolutely. <strong>All welcome bonuses are available on mobile</strong>, and some casinos even offer exclusive mobile-only promotions.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-10">
    <AccordionTrigger className="text-left font-bold">
      Is it safe to claim a welcome bonus online?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Yes, as long as you use a <strong>licensed and regulated casino</strong>. We recommend safe and reputable sites for Kiwi players.
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
        As a mobile casino expert, I’ve tested countless platforms—and nothing makes a better first impression than a welcome bonus with <strong>no wagering requirements</strong>. It’s not just about getting extra spins or funds; it’s about transparency and fairness. For Kiwi players, I always recommend choosing casinos that combine clear terms, proper licensing, and genuine flexibility. Starting with a bonus you can actually withdraw from sets the tone for a trusted gaming experience.
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
