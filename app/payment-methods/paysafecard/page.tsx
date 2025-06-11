export const metadata = {
  title: "Paysafecard Casinos NZ – Secure Deposits in 2025",

  description:
    "Explore top Paysafecard casinos in New Zealand. Learn how this prepaid method works, its benefits, and which trusted NZ casinos accept it in 2025.",
  keywords: [
    "Paysafecard casinos New Zealand",
    "NZ Paysafecard online casinos",
    "best Paysafecard casino NZ 2025",
    "how to use Paysafecard NZ",
    "instant casino deposits Paysafecard",
    "prepaid casino payment NZ",
    "secure NZ casino payment options",
    "Paysafecard voucher New Zealand",
    "casino no bank NZ",
    "trusted NZ Paysafecard casinos"
  ],
  openGraph: {
    title: "Top Paysafecard Casinos in New Zealand – 2025 Guide",
    description:
      "Looking for secure and anonymous casino deposits in NZ? Discover the best Paysafecard casinos for Kiwi players and how to use them safely.",
    url: "https://nz-casino.vercel.app/payment-methods/paysafecard",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/images/paysafecard-nz-casino-guide.webp",
        width: 1200,
        height: 630,
        alt: "Paysafecard NZ Casino Guide",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysafecard Casinos NZ – Best 2025 Sites for Prepaid Deposits",
    description:
      "Compare the top Paysafecard online casinos for Kiwi players. Instant deposits, secure payments, and trusted NZ platforms.",
    images: [
      {
        url: "https://nz-casino.vercel.app/images/paysafecard-nz-casino-guide.webp",
      },
    ],
  },
};



import Link from "next/link"
import { ChevronDown, Home, Calendar, User, ChevronRight, } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function PaySafe() {
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
          <span className="text-gray-900">PaySafe</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Paysafecard at online casinos in New Zealand </h1>
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


            <div className="relative w-full h-[200px] lg:h-[600px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8 ">

              <Image
                src="/paysafecard.webp"
                alt="paysafecard"
                fill
                className="object-cover"
              />
           
            </div>
            

            <p className="text-gray-700 mb-6">
              Paysafecard is one of the most popular prepaid payment methods among Kiwi players looking for secure and anonymous transactions at online casinos. In this guide, we explore how Paysafecard works in New Zealand, its pros and cons, what to expect when using it for deposits and withdrawals, and how it compares with other popular options.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="what-is-paysafecard">
              What is Paysafecard and how does it work in New Zealand?
            </h2>

            <p className="text-gray-700 mb-6">
              Paysafecard is a prepaid voucher-based payment system that allows users to make secure online payments without needing a bank account or credit card. In New Zealand, Paysafecard vouchers can be purchased at selected retail locations or online. Each voucher contains a 16-digit code used to fund your online casino account instantly. It is a favourite among Kiwi players for its simplicity and reliability.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="benefits-of-paysafecard">
              Benefits of using Paysafecard at NZ casinos
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li><strong>Privacy:</strong> No need to share banking details with the casino.</li>
              <li><strong>Security:</strong> Transactions are PIN-based and don’t expose sensitive information.</li>
              <li><strong>Availability:</strong> Easy to find online or at local retailers in NZ.</li>
              <li><strong>Instant deposits:</strong> Funds are transferred to your casino account immediately.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4" id="downsides-of-paysafecard">
              Downsides to consider
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li><strong>No direct withdrawals:</strong> Most casinos in New Zealand don’t allow Paysafecard withdrawals. You may need an alternative method for cashing out, such as a bank transfer or e-wallet.</li>
              <li><strong>Limited denominations:</strong> You can only deposit the amount on your voucher unless using a registered MyPaysafe account.</li>
              <li><strong>Possible fees:</strong> Monthly maintenance fees may apply to unused balances after a year.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4" id="how-to-use-paysafecard">
              How to use Paysafecard at NZ online casinos
            </h2>
            <ol className="list-decimal list-inside text-gray-700 mb-6">
              <li>Buy a Paysafecard voucher from an authorised NZ retailer or online.</li>
              <li>Go to the deposit section of your preferred online casino and choose Paysafecard.</li>
              <li>Enter the 16-digit code and the amount you wish to deposit.</li>
              <li>Funds will appear instantly in your account. Start playing!</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4" id="comparison-table">
              Paysafecard vs other casino payment methods
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Method</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Deposit Time</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Withdrawal</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Fees</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Privacy</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Paysafecard</td>
                    <td className="px-4 py-4 border border-border">Instant</td>
                    <td className="px-4 py-4 border border-border">Not available</td>
                    <td className="px-4 py-4 border border-border">No deposit fees, monthly fee after 12 months</td>
                    <td className="px-4 py-4 border border-border">High – no personal banking info shared</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Credit/Debit Cards</td>
                    <td className="px-4 py-4 border border-border">Instant</td>
                    <td className="px-4 py-4 border border-border">Yes</td>
                    <td className="px-4 py-4 border border-border">Possible bank fees</td>
                    <td className="px-4 py-4 border border-border">Low – requires card details</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Bank Transfer</td>
                    <td className="px-4 py-4 border border-border">1–3 days</td>
                    <td className="px-4 py-4 border border-border">Yes</td>
                    <td className="px-4 py-4 border border-border">Bank processing fees may apply</td>
                    <td className="px-4 py-4 border border-border">Moderate</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">E-wallets (Skrill, Neteller)</td>
                    <td className="px-4 py-4 border border-border">Instant</td>
                    <td className="px-4 py-4 border border-border">Yes</td>
                    <td className="px-4 py-4 border border-border">Low to none</td>
                    <td className="px-4 py-4 border border-border">High</td>
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
                    As an online casino expert, I recognise Paysafecard as an excellent option for fast and secure deposits. Its strong emphasis on privacy and safety makes it a top choice for me—particularly for Kiwi players who prefer not to share banking details online. That said, I always take into account its limitations for direct withdrawals. In such cases, I tend to combine Paysafecard with bank transfers or e-wallets for a more complete and seamless experience.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind,
                    Casino expert, tester and writer</p>
                </div>
              </div>
            </div>

              
              <h4 className="text-lg mb-6 font-semibold">
                Other Useful Content About Online Casinos
              </h4>
              <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
                <li>
                  <a href="#">Best Revolut casinos</a>
                </li>
                <li>
                  <a href="#">List of the best Skrill casinos</a>
                </li>
                <li>
                  <a href="#">Best online casinos with crypto payments</a>
                </li>
               
              </ul>



              <h2 className="text-2xl font-bold mb-4" id="faqs">
                Frequently asked questions about Paysafecard in NZ
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-bold">
                    Can I withdraw winnings using Paysafecard in New Zealand?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    In most cases, <strong>Paysafecard does not support direct withdrawals</strong>. You may need to choose an alternative method such as bank transfer or e-wallet.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-bold">
                    Where can I buy a Paysafecard voucher in NZ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    You can purchase Paysafecard vouchers at participating convenience stores, petrol stations, and online through the official Paysafecard website.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-bold">
                    Are there fees associated with Paysafecard?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    There are <strong>no fees for making deposits</strong> at online casinos. However, unused balances may incur a maintenance fee after 12 months.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-bold">
                    Is Paysafecard safe to use in New Zealand?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes. Paysafecard is a secure and regulated payment method that protects user privacy and is widely accepted by licensed online casinos in New Zealand.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
