// Metadata for Skrill-focused page in New Zealand
export const metadata = {
  title: "Best Skrill Casinos in New Zealand – 2025",
  description:
    "Find top New Zealand online casinos that accept Skrill in 2025. Fast, secure, and trusted e-wallet payments for Kiwi players.",
  keywords: [
    "Skrill casinos New Zealand",
    "NZ online casinos with Skrill",
    "Skrill payment method NZ",
    "best Skrill casino 2025",
    "Skrill gambling NZ",
    "Kiwi Skrill casino bonuses",
    "fast Skrill withdrawals NZ",
    "Skrill casino deposits NZ",
    "trusted Skrill casinos",
    "e-wallet casinos New Zealand"
  ],
  openGraph: {
    title: "Best Skrill Casinos in New Zealand – 2025",
    description:
      "Explore secure and fast Skrill casinos for Kiwi players. Enjoy instant deposits, easy withdrawals, and top-tier casino platforms.",
    url: "https://nz-casino.vercel.app/skrill",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Skrill Casinos in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Skrill Casinos in New Zealand – 2025",
    description:
      "Top NZ casinos accepting Skrill. Trusted e-wallet payments, fast withdrawals, and generous bonuses for 2025.",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Skrill Casinos in New Zealand",
      },
    ],
  },
};

import Link from "next/link"
import { ChevronDown, Home, Calendar, User, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Skrill() {
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
          <span className="text-gray-900">Skrill</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Skrill casinos in New Zealand – 2025</h1>
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
               <p className="text-gray-700 mt-2">
                If you're looking for fast, secure, and trusted <strong>Skrill</strong> payment methods at online casinos, Skrill stands out as one of the <strong>best choices for Kiwi players</strong>. It’s an e-wallet known for its speed, privacy, and convenience—making it ideal for deposits and withdrawals at New Zealand casinos. In this guide, we’ve shortlisted the top online casinos in New Zealand that accept Skrill. These platforms are fully licensed, offer generous welcome bonuses, and support quick, hassle-free payments.
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-4" id="criteria-for-creating-the-list-of-the-best-safe-casinos">
              How we rank and evaluate the best Skrill casinos in New Zealand
            </h2>
            <p className="text-gray-700">
              We know Kiwi players want to enjoy their favourite games with full peace of mind.
              That's why we’ve compiled a list of criteria we’ve used to assess and recommend the top Skrill casinos in New Zealand.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                Fast transactions
              </h3>
              <p className="text-gray-700 mt-2">
                Skrill is known for processing deposits and withdrawals quickly. We’ve reviewed transaction speed carefully to ensure these casinos offer swift and reliable payments. We also look for platforms that support other standard payment methods, such as debit/credit cards and bank transfers. Kiwi players expect secure and efficient options with broad availability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                Security and data protection
              </h3>
              <p className="text-gray-700 mt-2">
                It's essential that every casino uses high-grade 128-bit SSL encryption, certified by VeriSign. This protects users’ personal and financial data. All recommended casinos clearly follow data protection regulations and are regularly audited to guarantee fair play and prevent fraud.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                Licensing
              </h3>
              <p className="text-gray-700 mt-2">
                Every casino we list holds a valid licence from a recognised regulatory body, such as the Curaçao Gaming Commission. These licences are known for enforcing strict oversight with a focus on player protection.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                Game variety and software
              </h3>
              <p className="text-gray-700 mt-2">
                Our recommended Skrill casinos offer a wide range of games, including pokies, table games (like blackjack, roulette, and baccarat), video poker, live dealer games, and bingo. This ensures there's something for every player. These games are powered by leading software providers such as NetEnt, Microgaming, Play’n GO, and Evolution Gaming.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                Bonuses and promotions
              </h3>
              <p className="text-gray-700 mt-2">
                We understand how important it is for players to have fun while also having the chance to win. That’s why we assess welcome bonuses, free spins, cashback deals, tournaments, and loyalty rewards—along with the fairness of their wagering requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                Customer support
              </h3>
              <p className="text-gray-700 mt-2">
                These casinos provide reliable support through live chat, email, and phone. Some even offer service in multiple languages. We prioritise platforms that offer helpful and responsive support tailored for New Zealand players.
              </p>
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
                    "I'm truly passionate about online casinos, and I greatly appreciate the level of thoroughness used in evaluating these platforms. Information about licensing, security, and game variety is essential to help players make informed decisions when choosing where to play."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[750px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/skrill.webp"
                alt="Best New Zealand Skrill Casino"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4" id="pros-and-cons-of-using-skrill">
              Pros and cons of using Skrill as a payment method
            </h2>
            <p className="text-gray-700 mb-6">
              Skrill is a widely used and trusted option at many online casinos. It offers several advantages that appeal to Kiwi players, though there are also a few <strong>drawbacks</strong> worth considering.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Pros </th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Cons </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      ✅ Authorised and regulated by the UK's Financial Conduct Authority (FCA)
                    </td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Identity verification is required before withdrawals—ID and proof of address must be submitted.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      ✅ Instant deposits and fast withdrawals
                    </td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Some transactions may incur fees, despite Skrill being known for competitive rates.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      ✅ Low minimum deposit (100 currency units)
                    </td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Monthly withdrawal limit of 20,000 currency units applies.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      ✅ Free account closure if balance is 0.00
                    </td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Inactive accounts (6+ months) with balance under €6 may incur up to €5 monthly fee.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">
                      ✅ No closure fee for linked cards or bank accounts
                    </td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Closing your account results in loss of loyalty points and deactivation of your Skrill card.
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
                    "Skrill is an excellent option, but it's important to be aware of the verification requirements. That said, I personally prefer this method because it offers complete peace of mind and 100% security.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg mb-6 font-semibold">
              Other useful content about online casinos:
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best Paysafecard online casinos in New Zealand</a>
              </li>
              <li>
                <a href="#">Top Revolut casinos for Kiwi players</a>
              </li>
              <li>
                <a href="#">Best crypto-friendly online casinos</a>
              </li>

            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Is it safe to use Skrill at online casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, Skrill is a proven and trusted payment platform that ensures secure transactions for players.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Are there any fees when using Skrill?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  While many transactions are free, some fees may apply depending on the type of transfer or withdrawal. It's best to check the latest fee structure on Skrill's official website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  What are the minimum and maximum deposit limits with Skrill?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  The minimum deposit is typically 100 currency units, while the monthly withdrawal limit may be capped at 20,000 units. However, this can vary depending on the casino.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  What types of casino games can I play at Skrill casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  You can enjoy a wide range of games, including slots, blackjack, roulette, baccarat, and live dealer tables—just like with any other top-tier online casino.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Expert Opinion */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8  border border-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-300 lg:mt-8">
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
                    Once I’ve chosen a casino that allows me to use Skrill, I can enjoy the experience fully—without worrying about security or speed. It adds an extra layer of excitement to my gameplay. When I’m playing, the last thing I want is to deal with concerns or distractions.
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
