export const metadata = {
  title: "Online Casino Reviews New Zealand – Expert Ratings 2025",
  description:
    "Explore trusted online casino reviews in New Zealand. Compare top platforms, bonuses, games, and payment methods with expert analysis.",
  keywords: [
    "Online casino reviews New Zealand",
    "Best online casinos NZ 2025",
    "Top rated NZ casinos",
    "Honest casino reviews NZ",
    "New Zealand online gambling sites",
    "Casino bonuses NZ",
    "Trusted NZ casinos",
    "Expert casino ratings New Zealand",
    "Compare online casinos NZ",
    "Real money online casinos NZ"
  ],
  openGraph: {
    title: "Online Casino Reviews New Zealand – Honest & Expert Ratings 2025",
    description:
      "Find the most reliable online casino reviews in New Zealand. Discover expert evaluations of bonuses, games, payments, and user safety.",
    url: "https://nz-casino.vercel.app/casino-reviews",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Top Online Casino Reviews New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Casino Reviews New Zealand – Honest & Expert Ratings 2025",
    description:
      "Compare the best online casinos in New Zealand with trusted reviews. Bonus insights, game variety, and payment safety—all in one place.",
    
  },
};




import Link from "next/link"
import { ChevronDown, Home, Calendar, User, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Reviews() {
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
          <span className="text-gray-900">Reviews</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Online casino reviews and expert ratings in New Zealand</h1>
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
                <strong>Find unbiased reviews of online casinos </strong> and expert insights to help you choose the best sites in New Zealand. Compare games, features, and bonuses to make the right choice!
              </p>
            </div>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/online-casino-reviews.webp"
                alt="Best New Zealand Online Casino"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4" id="how-we-review-nz-casinos">
              How we rank and review online casinos in New Zealand
            </h2>
            <p className="text-gray-700 mb-6">
              When we recommend online casinos to players in New Zealand, we follow a detailed and transparent evaluation process based on several key factors. Our goal is to help you find platforms that are safe, legal, and truly entertaining.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              1. Safety and legality
            </h3>
            <p className="text-gray-700 mb-4">
              Your safety is our top priority. We only recommend casinos that are fully licensed and use secure technologies to protect your data and transactions. A trustworthy platform should:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Hold licenses from recognized authorities like the <strong>Malta Gaming Authority</strong>, <strong>UK Gambling Commission</strong>, or <strong>Curaçao eGaming</strong>.</li>
              <li>Use advanced <strong>SSL encryption</strong> to safeguard personal and financial information.</li>
              <li>Be audited by independent agencies to ensure <strong>fairness and transparency</strong> in game outcomes.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              2. Popularity and reputation
            </h3>
            <p className="text-gray-700 mb-6">
              A casino’s reputation in the player community is a strong indicator of trust. We:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Analyze player feedback, including complaints and positive reviews.</li>
              <li>Look into comments from forums, social media, and expert review sites.</li>
              <li>Check how long the casino has been operating and review its software partners.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              3. Bonuses and promotions
            </h3>
            <p className="text-gray-700 mb-4">
              We assess whether the bonuses are valuable and fair for Kiwi players. That includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Generous welcome bonuses with reasonable wagering conditions.</li>
              <li>Ongoing promotions, tournaments, and well-structured VIP programs.</li>
              <li>Clear and transparent terms without hidden restrictions or traps.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              4. Game selection
            </h3>
            <p className="text-gray-700 mb-4">
              A casino’s appeal strongly depends on the variety and quality of its games. We consider:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>A wide range of slots, table games, live casino titles, and jackpots.</li>
              <li>Partnerships with top-tier providers like <strong>NetEnt</strong>, <strong>Microgaming</strong>, <strong>Play’n GO</strong>, and <strong>Evolution Gaming</strong>.</li>
              <li>High-quality graphics, smooth functionality, and consistent game performance.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              5. Payment methods
            </h3>
            <p className="text-gray-700 mb-4">
              Fast, secure, and flexible payment options are essential for a great casino experience. We evaluate:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Availability of popular methods like credit/debit cards, e-wallets, and cryptocurrencies.</li>
              <li>Deposit and withdrawal processing times.</li>
              <li>Transparency around fees and potential hidden charges.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              6. User experience and design
            </h3>
            <p className="text-gray-700 mb-4">
              A user-friendly interface enhances your enjoyment. We look at:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Ease of navigation and responsiveness on both desktop and mobile.</li>
              <li>Clean layout and modern design.</li>
              <li>Cross-browser and mobile compatibility for seamless play.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              7. Customer support
            </h3>
            <p className="text-gray-700 mb-4">
              A responsive support team can make all the difference. We check:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Availability of <strong>live chat</strong>, email, and phone support.</li>
              <li>Response speed and quality of assistance.</li>
              <li>Whether support is available <strong>24/7</strong> or during specific hours (clearly stated).</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              8. Responsible gambling
            </h3>
            <p className="text-gray-700 mb-4">
              We only promote platforms that support responsible gaming. That includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Options for setting deposit limits, session time limits, and self-exclusion.</li>
              <li>Access to helpful resources and support organizations for problem gambling.</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Thanks to our thorough evaluation process, we make sure you discover safe, fair, and entertaining online casinos tailored to New Zealand players.
            </p>

            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/reviews-casino.webp"
                alt="Reviews Casino"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4" id="why-trust-our-casino-reviews">
              Why you can trust our online casino reviews
            </h2>

            <p className="text-gray-700 mb-6">
              The online casino industry in New Zealand offers countless options—but not all of them are honest or trustworthy. That’s why our reviews are based on real user experiences and are regularly updated to provide the most accurate, relevant, and up-to-date information possible.
            </p>

            <p className="text-gray-700 mb-6">
              Here’s why Kiwi players can confidently rely on our assessments:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Evaluation criteria</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Experienced experts</td>
                    <td className="px-4 py-4 border border-border">
                      Our reviews are conducted by a team of professionals with years of hands-on experience in the online casino industry.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Real gameplay testing</td>
                    <td className="px-4 py-4 border border-border">
                      We test each casino in actual play mode to evaluate the user experience from a true player’s perspective.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Frequent updates</td>
                    <td className="px-4 py-4 border border-border">
                      Our reviews are regularly updated with the latest information on bonuses, game selections, and platform policies.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Objective evaluations</td>
                    <td className="px-4 py-4 border border-border">
                      We highlight both the pros and cons of each casino without bias or influence—giving Kiwi players honest, trustworthy insights.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="how-to-choose-the-best-casino">
              How to choose the right online casino in New Zealand
            </h2>

            <p className="text-gray-700 mb-6">
              Our goal is to give you a fair, honest, and transparent review so you can choose the best casino with total confidence.
            </p>

            <p className="text-gray-700 mb-6">
              Choosing the right online casino can be the difference between a fun experience and a frustrating one. Here are some essential factors Kiwi players should consider:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Website speed and performance
            </h3>
            <p className="text-gray-700 mb-6">
              A fast-loading casino site is crucial. Whether you're on desktop or mobile, the platform should run smoothly, with no frequent delays or server crashes.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Technological innovation
            </h3>
            <p className="text-gray-700 mb-4">
              Casinos that stay up-to-date with modern technology provide a more immersive and secure experience. Look for platforms that:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Use new tech like Virtual Reality (VR) or Augmented Reality (AR) in their games.</li>
              <li>Offer modern payment methods, including cryptocurrencies.</li>
              <li>Provide strong data protection, excellent UX, and adaptive design.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Rewards and loyalty programs
            </h3>
            <p className="text-gray-700 mb-6">
              Look for casinos that offer VIP benefits such as high cashback rates, exclusive bonuses, and personalized gifts. These programs reward regular players and enhance the overall experience.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Geographic availability
            </h3>
            <p className="text-gray-700 mb-6">
              It's important to confirm that the casino accepts players from New Zealand and offers support for local currencies and payment methods. Check for any regional restrictions.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Privacy policy
            </h3>
            <p className="text-gray-700 mb-6">
              Make sure the casino has a strong privacy policy in place and does not share your personal information with third parties without your consent.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Know Your Customer (KYC) process
            </h3>
            <p className="text-gray-700 mb-6">
              Evaluate how the casino handles verification. Key aspects include the required documents, how long the process takes, and whether it’s simple, fast, and non-invasive.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Flexible betting limits
            </h3>
            <p className="text-gray-700 mb-6">
              Having adjustable betting limits is ideal for accommodating all types of players—from beginners to high rollers. Look for casinos that let you set custom limits to match your playstyle.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Demo or free play mode
            </h3>
            <p className="text-gray-700 mb-6">
              If you're new to online casinos, choose platforms that offer free play or demo modes. This lets you test the games and get comfortable before wagering real money—an ideal feature for beginners.
            </p>

            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/reviews-casinos-online.webp"
                alt="Reviews Casino"
                fill
                className="object-cover"
              />
            </div>






            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What makes an online casino trustworthy in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  A reliable online casino must have valid licenses from <strong>recognized regulatory authorities</strong>, use <strong>SSL encryption technology</strong> to protect your data and financial transactions, and maintain a <strong>strong reputation within the industry</strong>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  How often do you update your online casino reviews?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  We regularly update our reviews to ensure players in New Zealand receive <strong>accurate and up-to-date information</strong> about bonuses, payment options, game libraries, and any changes in terms or licensing status.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  What are the benefits of reading casino reviews on a trusted site?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Trusted casino review sites help Kiwi players <strong>avoid scams and make informed decisions</strong>. Our detailed analysis highlights the best platforms based on safety, bonuses, game variety, and customer support—saving you time and money.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  What factors disqualify a casino from being recommended?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  We do not recommend casinos that show signs of <strong>unfair practices</strong>, lack valid licensing, have unresolved complaints, use <strong>manipulative bonus terms</strong>, or fail to protect player data. Our priority is to promote safe and reputable platforms for players in New Zealand.
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
