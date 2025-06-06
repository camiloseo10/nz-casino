
export const metadata = {
  title: "Best Online Casino Payment Methods in New Zealand – 2025",
  description:
    "Discover the safest and fastest payment methods for online casinos in New Zealand. Compare fees, withdrawal limits, and top banking options.",
  keywords: [
    "online casino payment methods New Zealand",
    "best casino payment options NZ",
    "NZ online casino banking 2025",
    "fast withdrawals NZ casinos",
    "casino deposit methods New Zealand",
    "Paysafecard NZ casinos",
    "Revolut casino New Zealand",
    "Skrill online casino NZ",
    "crypto payments NZ casinos",
    "secure payment options NZ casinos"
  ],
  openGraph: {
    title: "Best Online Casino Payment Methods in New Zealand – 2025",
    description:
      "Explore trusted and fast payment methods for NZ online casinos. From Paysafecard to crypto, find the perfect option for secure deposits and withdrawals.",
    url: "https://nz-casino.vercel.app/payment-methods",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Casino Payment Methods New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Casino Payment Methods in New Zealand – 2025",
    description:
      "Find the top online casino payment methods in New Zealand. Compare speed, security, and availability with our expert guide.",

  },
};



import Link from "next/link"
import { ChevronDown, Home, Calendar, User, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function PaymentMethods() {
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
          <span className="text-gray-900">Payment Methods</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best New Zealand mobile casino</h1>
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
              <h2 className="text-2xl font-bold mb-4" id="best-payment-methods-nz">
                Best online casino payment methods in New Zealand
              </h2>
              <p className="text-gray-700 mb-6">
                With the growing popularity of online casinos in New Zealand, choosing the right payment method can make a big difference in your overall experience. Whether you're looking for fast withdrawals, low fees, or privacy-focused solutions, this guide covers the most reliable and secure options available to Kiwi players in 2025.
              </p>
              <p className="text-gray-700 mb-6">
                In this guide, we focus on popular methods like <strong>Paysafecard</strong>, <strong>Revolut</strong>, <strong>Skrill</strong>, <strong>cryptocurrency</strong>, and traditional options like <strong>credit/debit cards</strong>. We break down their pros, cons, fees, and availability so you can choose with confidence.
              </p>


            </div>

            <div className="relative w-full h-[200px] lg:h-[600px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8 ">

              <Image
                src="/nzcasino-mobile-casinos.webp"
                alt="Best New Zealand Mobile Casino"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="paysafecard-nz">
              Paysafecard for NZ online casinos
            </h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Why Paysafecard is a top prepaid method
            </h3>
            <p className="text-gray-700 mb-6">
              Paysafecard is a widely accepted prepaid solution that allows players to deposit instantly without sharing sensitive banking details. In New Zealand, it's especially favored for its simplicity, anonymity, and no-fee usage. You simply purchase a prepaid code and use it to fund your casino account securely.
            </p>

            <h4 className="text-lg font-bold mb-3 text-gray-900">Pros and cons of using Paysafecard</h4>
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
                    <td className="px-4 py-4 border border-border">Instant payments with no delays</td>
                    <td className="px-4 py-4 border border-border">Prepaid limit—does not allow large transactions</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">No need to share banking or credit card details</td>
                    <td className="px-4 py-4 border border-border">Not ideal for frequent or recurring deposits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">No processing fees at most casinos</td>
                    <td className="px-4 py-4 border border-border">You pay a top-up fee when loading the card</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-2xl font-bold mb-4" id="revolut-nz">
              Using Revolut for online casinos in New Zealand
            </h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              A modern e-wallet with high limits and security
            </h3>
            <p className="text-gray-700 mb-6">
              Revolut is a digital banking solution that acts as a secure middleman between your bank account and the online casino. Launched in 2015 and officially licensed in the EU, Revolut gives players in New Zealand access to a virtual Visa/Mastercard, currency exchange, and fast transactions.
            </p>

            <h4 className="text-lg font-bold mb-3 text-gray-900">Pros and cons of using Revolut</h4>
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
                    <td className="px-4 py-4 border border-border">Instant payments with zero fees</td>
                    <td className="px-4 py-4 border border-border">Requires account funding before use</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">Does not expose personal bank info</td>
                    <td className="px-4 py-4 border border-border">Transaction limits apply to free accounts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">Supports large casino payments</td>
                    <td className="px-4 py-4 border border-border">Revolut may block suspicious gambling activity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="skrill-nz">
              Skrill for New Zealand online casinos
            </h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Fast, reliable digital wallet backed by Paysafe Group
            </h3>
            <p className="text-gray-700 mb-6">
              Skrill is a well-established e-wallet service widely used at online casinos across the globe, including New Zealand. It allows for quick deposits, supports many casino bonuses, and offers a secure payment gateway with strong encryption. As part of the Paysafe Group, it’s a solid choice for Kiwi players.
            </p>

            <h4 className="text-lg font-bold mb-3 text-gray-900">Pros and cons of using Skrill</h4>
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
                    <td className="px-4 py-4 border border-border">Instant transactions with quick access to funds</td>
                    <td className="px-4 py-4 border border-border">Transfer fees apply on most transactions</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">Compatible with most casino bonuses</td>
                    <td className="px-4 py-4 border border-border">Security checks may temporarily block payments</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">Highly secure encryption system</td>
                    <td className="px-4 py-4 border border-border">May be restricted in some countries (not NZ)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="crypto-nz">
              Cryptocurrency payments at NZ online casinos
            </h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              A decentralized and flexible way to pay
            </h3>
            <p className="text-gray-700 mb-6">
              Cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Tether (USDT) are gaining ground among Kiwi casino players. Crypto payments are fast, secure, and don’t require bank intermediaries—making them ideal for privacy-conscious users and international transfers.
            </p>

            <h4 className="text-lg font-bold mb-3 text-gray-900">Pros and cons of using crypto</h4>
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
                    <td className="px-4 py-4 border border-border">Instant transfers with no banking required</td>
                    <td className="px-4 py-4 border border-border">Not all casinos accept crypto payments</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">No exchange fees or middlemen involved</td>
                    <td className="px-4 py-4 border border-border">High volatility—prices can fluctuate rapidly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">100% digital and anonymous</td>
                    <td className="px-4 py-4 border border-border">Transactions are irreversible—no chargebacks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="cards-nz">
              Credit and debit cards at NZ casinos
            </h2>
            <p className="text-gray-700 mb-6">
              Credit and debit cards are still among the most common payment methods at online casinos in New Zealand. They're widely accepted, fast, and convenient. However, for international transactions, they may expose your banking information and incur fees.
            </p>

            <h4 className="text-lg font-bold mb-3 text-gray-900">Pros and cons of using cards</h4>
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
                    <td className="px-4 py-4 border border-border">Direct payments with quick processing</td>
                    <td className="px-4 py-4 border border-border">Sensitive data can be exposed</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">No middleman—funds move from bank to casino</td>
                    <td className="px-4 py-4 border border-border">Not ideal for international payments (currency fees)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">Accepted at nearly all NZ online casinos</td>
                    <td className="px-4 py-4 border border-border">Credit cards may lead to overspending or debt</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="other-methods-nz">
              Other online casino payment methods in New Zealand
            </h2>
            <p className="text-gray-700 mb-6">
              In addition to the popular options like Skrill, Paysafecard, Revolut, and crypto, there are other payment methods available to Kiwi players. These include bank transfers and digital wallets like Neteller, EntroPay, and RapidTransfer. Each offers unique benefits, and may be useful depending on your preferences and location.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Payment Method</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Bank Transfer</td>
                    <td className="px-4 py-4 border border-border">Secure method but slower—may take up to 3–5 business days and may not be available with all banks.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Neteller</td>
                    <td className="px-4 py-4 border border-border">Fast and safe e-wallet; part of the Paysafe Group. VIP program available. Not supported in all countries.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">EntroPay</td>
                    <td className="px-4 py-4 border border-border">Virtual Visa-based wallet, widely used in online casinos. Easy to use but not accepted everywhere.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">RapidTransfer</td>
                    <td className="px-4 py-4 border border-border">Bank-to-casino transfers powered by Skrill. Supports 170+ banks globally, with instant transactions.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="compare-nz-payments">
              Compare the best NZ casino payment methods
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Method</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Fees</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Minimum Deposit</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Withdrawals</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border">Paysafecard</td>
                    <td className="px-4 py-4 border border-border">None</td>
                    <td className="px-4 py-4 border border-border">NZ$10–20</td>
                    <td className="px-4 py-4 border border-border">❌ Not available</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">Revolut</td>
                    <td className="px-4 py-4 border border-border">None</td>
                    <td className="px-4 py-4 border border-border">Varies (often NZ$10)</td>
                    <td className="px-4 py-4 border border-border">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">Skrill</td>
                    <td className="px-4 py-4 border border-border">Transfer fees apply</td>
                    <td className="px-4 py-4 border border-border">NZ$5</td>
                    <td className="px-4 py-4 border border-border">✅ Yes (fees may apply)</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border">Crypto</td>
                    <td className="px-4 py-4 border border-border">Blockchain fees only</td>
                    <td className="px-4 py-4 border border-border">NZ$20+</td>
                    <td className="px-4 py-4 border border-border">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border">Credit/Debit Cards</td>
                    <td className="px-4 py-4 border border-border">May apply for intl. use</td>
                    <td className="px-4 py-4 border border-border">NZ$10</td>
                    <td className="px-4 py-4 border border-border">✅ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>


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
                    "My advice for players in New Zealand: have multiple payment options available, but use one consistently per casino. While you can technically use different methods for deposits and withdrawals, using the same one for both often speeds up processing and ensures fewer verification issues."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind,
                    Casino expert, tester and writer</p>
                </div>
              </div>
            </div>



            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  Can I deposit with one method and withdraw with another?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, but it depends on the casino’s policies. For example, if you deposit using Paysafecard (which doesn’t support withdrawals), you’ll need to select a different method for cashing out, such as a bank transfer or e-wallet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  What should I consider when choosing a payment method?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  You should evaluate speed, security, privacy, fees, and whether the method is accepted for both deposits and withdrawals at your chosen NZ casino.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  What is the safest casino payment method in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  E-wallets like Skrill and Revolut are considered very secure due to encryption and two-step verification. Cryptocurrencies are also highly secure, but not all casinos accept them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Which method has the fastest withdrawals?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Crypto payments and e-wallets like Skrill typically offer the fastest withdrawals—often within minutes to a few hours, depending on the casino’s processing times.
                </AccordionContent>
              </AccordionItem>
            </Accordion>





          </div>
        </div>


        {/* Sidebar with TOC */}
        <aside className="lg:col-span-3">
          <div className="sticky top-20">
            <TableOfContents />
          </div>
        </aside>


      </div>
    </div>
  )
}
