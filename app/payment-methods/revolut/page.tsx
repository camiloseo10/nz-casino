// Updated metadata for Revolut-focused page
export const metadata = {
  title: "Best Revolut Casinos in New Zealand – 2025",
  description:
    "Explore top online casinos in New Zealand that accept Revolut in 2025. Safe, fast and secure payments for Kiwi players.",
  keywords: [
    "Revolut casinos New Zealand",
    "online casinos accepting Revolut NZ",
    "Revolut payment casino 2025",
    "best Revolut casino NZ",
    "Revolut gambling sites NZ",
    "Kiwi Revolut casino bonuses",
    "fast withdrawals Revolut casinos",
    "Revolut safe casino method",
    "mobile casinos with Revolut NZ",
    "trusted Revolut casinos 2025"
  ],
  openGraph: {
    title: "Best Revolut Casinos in New Zealand – 2025",
    description:
      "Discover safe and fast Revolut casinos for New Zealand players. Enjoy instant deposits and secure gameplay.",
    url: "https://nz-casino.vercel.app/revolut",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Revolut Casinos in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Revolut Casinos in New Zealand – 2025",
    description:
      "Top-rated Revolut casinos for Kiwi players. Fast payments, safe gaming and exclusive bonuses.",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Revolut Casinos in New Zealand",
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

export default function Revolut() {
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
          <span className="text-gray-900">Revolut</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Revolut casinos in New Zealand</h1>
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
                Looking for a fast, secure and modern way to pay at online casinos in New Zealand? <strong>Revolut</strong> is gaining popularity among Kiwi players thanks to its ease of use, instant transfers, and advanced security. Below, we break down the best Revolut casinos in NZ, how it works, and what to expect when using this payment method.
              </p>
            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">

              <Image
                src="/betaling-revolut.webp"
                alt="Revolut payment method"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="why-use-revolut-at-online-casinos">
              Why use Revolut at New Zealand online casinos?
            </h2>

            <p className="text-gray-700 mb-6">
              Revolut is a digital banking alternative that offers instant deposits, high-level encryption, and full mobile control. It’s ideal for players who value speed, transparency and privacy while gambling online.
            </p>

            <h3 className="text-lg font-semibold mb-2">Key advantages of Revolut:</h3>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>Instant deposits and quick withdrawals</li>
              <li>Top-tier security with 2FA and encryption</li>
              <li>Excellent exchange rates and multi-currency support</li>
              <li>Full control over transactions via the mobile app</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4" id="how-to-use-revolut">
              How to use Revolut at NZ online casinos
            </h2>

            <h3 className="text-lg font-semibold mb-2">Depositing funds</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2 mb-6">
              <li>Open the Revolut app and log in.</li>
              <li>Top up your Revolut account using your preferred method.</li>
              <li>Go to your chosen casino and select Revolut as payment.</li>
              <li>Enter the amount and confirm the transaction.</li>
            </ol>

            <h3 className="text-lg font-semibold mb-2">Withdrawing funds</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2 mb-6">
              <li>Visit the withdrawal section of your casino account.</li>
              <li>Select Revolut as the method and enter your details.</li>
              <li>Confirm and wait 1–3 days depending on the casino policy.</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4" id="pros-and-cons-revolut">
              Pros and cons of using Revolut
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Pros</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Cons</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border">Fast transactions and top security</td>
                    <td className="px-4 py-4 border border-border">Not accepted by all casinos</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">Low exchange fees and real-time control</td>
                    <td className="px-4 py-4 border border-border">May have withdrawal limits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">Works perfectly via mobile</td>
                    <td className="px-4 py-4 border border-border">Some users report KYC delays</td>
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
                    Security and transaction speed are key factors I consider when choosing a payment method. Revolut offers both—along with full control from your phone. For me, it's the perfect blend of innovation and trust.",
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Is Revolut safe to use at New Zealand online casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, Revolut is highly secure. It uses <strong>advanced encryption and two-factor authentication</strong> to protect all transactions, making it one of the safest options for Kiwi players.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Are there any fees when using Revolut at online casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Most transactions are free, but Revolut may <strong>charge small fees</strong> for currency exchange or withdrawals depending on your plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Can I claim bonuses when depositing with Revolut?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. Most NZ casinos allow players using Revolut to <strong>claim welcome bonuses and ongoing promotions</strong>—just check the terms and conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Do all NZ casinos accept Revolut?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Not yet. While Revolut is growing in popularity, it's <strong>still not available at every online casino</strong>. We recommend checking our curated list of trusted Revolut casinos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-bold">
                  Is Revolut better than traditional bank transfers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  In most cases, yes. Revolut offers <strong>faster transfers, better exchange rates, and greater convenience</strong> for mobile users in New Zealand.
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
                    “As an expert in online casinos, I’ve learnt that the key to a rewarding gaming experience is choosing secure payment methods backed by strong reputations and financial stability. Revolut is my top recommendation—not only is it an innovative option, but it also ensures highly reliable transactions.”
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
