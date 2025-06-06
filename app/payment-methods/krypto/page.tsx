export const metadata = {
  title: "Best krypto casinos in New Zealand",
  description:
    "Discover the best krypto casinos in New Zealand for 2025. Real dealers, immersive experiences, and top-rated platforms for Kiwi players.",
  keywords: [
    "krypto casinos New Zealand",
    "best krypto casino NZ 2025",
    "krypto casino games NZ",
    "NZ online casinos with krypto",
    "krypto roulette blackjack poker NZ",
    "high-quality krypto streaming casinos",
    "interactive krypto casino NZ",
    "New Zealand krypto casino bonuses",
    "trusted krypto dealer casinos",
    "Kiwi krypto gambling 2025"
  ],
  openGraph: {
    title: "Best Krypto Casinos in New Zealand – 2025",
    description:
      "Play at top-rated krypto casinos in New Zealand. Enjoy real-time action with professional dealers and premium bonuses.",
    url: "https://nz-casino.vercel.app/krypto-casinos",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Best Krypto Casinos in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Live Casinos in New Zealand – 2025",
    description:
      "Top live casinos in NZ for 2025. Licensed platforms, immersive gameplay, and exclusive live dealer experiences.",
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

export default function Krypto() {
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
          <span className="text-gray-900">Krypto</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best New Zealand Krypto</h1>
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
              <h2 className="text-3xl font-bold mb-4" id="why-krypto-casinos-are-gaining-popularity">Why krypto casinos are gaining popularity in New Zealand</h2>
              <p className="text-gray-700 mb-6">
                Crypto casinos have become increasingly popular in New Zealand for several reasons. Firstly, they are a favourite among blockchain enthusiasts who enjoy making online transactions with digital currencies.
              </p>
              <p className="text-gray-700 mb-6">
                Secondly, these casinos offer a level of security and privacy that traditional online casinos often lack. Players can enjoy their favourite games without worrying about their personal information being compromised.
              </p>
              <p className="text-gray-700 mb-6">
                Finally, crypto casinos often provide faster transaction times and lower fees compared to traditional banking methods. This makes them an attractive option for players looking for a more efficient gaming experience.
              </p>
              <p className="text-gray-700 mb-6">
                Overall, the rise of krypto <strong>casinos in New Zealand</strong> reflects a broader trend towards digital currencies and blockchain technology. As more players seek out these innovative platforms, we can expect to see continued growth and evolution in the online gaming landscape.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="how-we-ranked-the-best-crypto-casinos">How we ranked the best crypto casinos</h2>
            <p className="text-gray-700 mb-6">
              Interested in playing at top-rated crypto casinos in New Zealand? Don’t worry—you don’t have to search endlessly. Our team has already done the hard work for you. We’ve selected the platforms that offer the best features, based on the following criteria:
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">1. Supported cryptocurrencies</h3>
            <p className="text-gray-700 mb-6">
              The casinos we recommend accept a variety of popular cryptocurrencies, including <strong>Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), Binance Coin (BNB), Dogecoin (DOGE), USDT, Solana (SOL), Shiba Inu (SHIB), Cardano (ADA), and Bitcoin Cash (BCH).</strong>
            </p>
            <p className="text-gray-700 mb-6">
Deposits are processed quickly to ensure convenience, and most casinos also support near-instant withdrawals—not only for crypto, but for alternative payment methods as well.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">2. Bonuses and promotions</h3>
            <p className="text-gray-700 mb-6">
              Crypto-friendly casinos on our list stand out by offering a wide range of bonuses and promotions, available to both new players and loyal users. These offers enhance the gaming experience and increase your chances of winning with every session.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">3. Licensing and regulation</h3>
            <p className="text-gray-700 mb-6">
              One of the most important factors we consider is licensing. All recommended casinos are <strong> fully licensed by respected authorities </strong>, such as those based in Gibraltar, Malta, the UK, or Curaçao—ensuring transparency, fairness, and security.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">4. Game variety</h3>
            <p className="text-gray-700 mb-6">
              A key element in our selection is the <strong>diversity</strong> of available games. Not all players enjoy the same content, so we ensure the featured casinos offer everything from slots and poker to blackjack, baccarat, roulette, and live casino games hosted by real dealers.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">5. Mobile compatibility</h3>
            <p className="text-gray-700 mb-6">
              Mobile devices are now essential tools for daily life—and gaming is no exception. That's why mobile optimisation is a must. Every casino we recommend offers fully responsive websites and, in many cases, dedicated apps for both Android and iOS.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">6. Customer support</h3>
            <p className="text-gray-700 mb-6">
              Fast and helpful customer support is critical—especially when something goes wrong mid-game. The best crypto casinos provide <strong>24/7</strong> technical assistance, ensuring that your questions or issues are resolved promptly and professionally.
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
                    I'm a crypto and casino enthusiast. I enjoy investing in BTC, ADA, and DOGE, and I regularly play blackjack and online slots. Being able to play and pay quickly—with no risk of hacking or identity theft—is something I truly value.
                  </p>
                  <p className="mt-4">
                    That’s why I choose platforms that allow me to do both. They’re secure, reliable, feature my favourite games, and run entirely on <strong>decentralized</strong> blockchain technology. I highly recommend these casinos to anyone looking for a trustworthy and seamless crypto gaming experience.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4" id="how-to-use-cryptocurrency">
              How to use cryptocurrency at New Zealand online casinos
            </h2>
            <p className="text-gray-700 mb-6">
              If you want to start playing at a crypto casino that supports deposits and withdrawals in digital currencies, simply follow these steps:
            </p>
            <h3 className="text-lg font-semibold mb-2">How to make a deposit using cryptocurrency</h3>
            <p className="text-gray-700 mb-4">
              Making a deposit at a crypto casino is a straightforward process. Here’s how it works:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Verify your account (if required):</strong> Some crypto casinos offer registration-free play, allowing you to deposit and withdraw using only cryptocurrencies. In those cases, identity verification may not be needed.
              </li>
              <li>
                <strong>Go to the “Deposit” section:</strong> elect your preferred cryptocurrency and enter the amount you want to deposit. The system will generate a unique deposit address.
              </li>
              <li>
                <strong>Send the funds:</strong> Open your crypto wallet, select “Send,” and paste the deposit address provided by the casino.
              </li>
              <li>
                <strong>Confirm the transaction:</strong> Double-check all the details before confirming. Enter the amount and complete the payment.
              </li>
              <li>
                <strong>Wait for confirmation:</strong> The transaction will be processed by the blockchain network, usually within seconds. Once confirmed, the funds will appear in your casino account.
              </li>
              </ol>

            <h3 className="text-lg font-semibold mb-2">How to withdraw your winnings using cryptocurrency</h3>
            <p className="text-gray-700 mb-4">
              Withdrawing your winnings in cryptocurrency is just as easy. Here’s how to do it:
            </p>

            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                Navigate to the <strong>“Withdraw”</strong> section of your account.
              </li>
              <li>
                Choose the same cryptocurrency you used for the deposit.
              </li>
              <li>
                Enter the <strong>wallet address</strong> where you want to receive your funds.
              </li>
              <li>
                Specify the <strong>amount</strong> to withdraw.
              </li>
              <li>
                Confirm the transaction and wait for the blockchain to process it.
              </li>
              <li>
                Once confirmed, your crypto will appear in your wallet—often within minutes.
              </li>
            </ol>

            <h2 className="text-xl font-bold mb-4" id="pros-and-cons-of-using-cryptocurrency">
              Pros and cons of using cryptocurrency as a payment method
            </h2>
            <p className="text-gray-700 mb-6">
              Crypto casinos offer several benefits, but there are also a few drawbacks to keep in mind. Here are some of the key points:
            </p>

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
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">✅ They allow instant and secure transactions, with no intermediaries involved.</td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Cryptocurrencies are highly volatile, and price fluctuations can affect your balance when converting to or
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">✅ Full anonymity is possible—especially if you also withdraw using cryptocurrency.</td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Winnings from crypto gambling may be subject to taxation under New Zealand law.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">✅ Many platforms offer a wide range of games and bonuses, with <strong>user-friendly and intuitive interfaces.</strong></td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Unlike traditional methods, crypto transactions are irreversible, meaning errors can’t be undone once the payment is sent.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">✅ Many platforms offer a wide range of games and bonuses, with <strong>user-friendly and intuitive interfaces.</strong></td>
                    <td className="px-4 py-4 border border-border">
                      ❌ Unlike traditional methods, crypto transactions are irreversible, meaning errors can’t be undone once the payment is sent.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg mb-6 font-semibold">
              Other useful content about online casinos
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="#">Best Paysafecard casinos in New Zealand</a>
              </li>
              <li>
                <a href="#">Top online casinos that accept Revolut</a>
              </li>
              <li>
                <a href="#">Best Skrill-friendly casinos for Kiwi players</a>
              </li>
            </ul>



            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What are the minimum and maximum deposit amounts when using crypto?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  This depends on each casino’s policy. Some platforms accept minimum deposits as low as €1 or $1, while others may require $20–$30. Maximum limits can range from $100 to over $10,000, depending on the operator.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  What types of casino games can I play at crypto casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  You’ll find a full range of games, including slots, blackjack, roulette, poker, baccarat, and live dealer games—just like at traditional online casinos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Are there any minimum or maximum bets when using cryptocurrency?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, most crypto casinos have minimum and maximum bet limits, but these vary by game and platform. Typically, you can start with very small stakes, and high rollers will also find games with generous upper limits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Am I eligible for bonuses if I deposit using cryptocurrency?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, <strong>most crypto casinos do offer bonuses for players who deposit with digital currencies</strong>. However, it's always important to check the terms and conditions, as some platforms may exclude certain payment methods from specific promotions.
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
                    I enjoy playing at crypto casinos because they offer all my favourite slots and poker games, and I can make payments instantly—without exposing my bank details.
                  </p>
                  <p className="mt-4">
                    On top of that, <strong>blockchain technology</strong> gives me peace of mind, along with the flexibility to exchange digital currencies for other financial products, depending on my needs while playing.
                  </p>
                  <p className="mt-4">
                    I highly recommend this modern and secure experience.
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
