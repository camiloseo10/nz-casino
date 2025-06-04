export const metadata = {
  title: "Best Casino Bonuses in New Zealand – Updated 2025",
  description: "Explore the top casino bonuses in New Zealand, including no deposit offers, welcome packages, free spins, and cashback deals. Updated for 2025.",
  keywords: [
    "New Zealand casino bonuses",
    "best NZ casino offers",
    "no deposit bonus NZ",
    "free spins NZ casinos",
    "cashback casino New Zealand",
    "NZ welcome bonus 2025",
    "online casino promotions NZ",
    "low wagering bonuses NZ",
    "best deals NZ casinos",
    "top online casinos New Zealand"
  ],
  openGraph: {
    title: "Best Casino Bonuses in New Zealand – Updated 2025",
    description: "Find the best welcome bonuses, free spins, and exclusive no-deposit offers at New Zealand's top online casinos.",
    url: "https://nz-casino.vercel.app/bonuses",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-casino-bonuses-hero.png",
        width: 1200,
        height: 630,
        alt: "Top Casino Bonuses NZ 2025",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Casino Bonuses in New Zealand – Updated 2025",
    description: "Discover the best NZ casino bonus offers: welcome packages, free spins, no deposit, and cashback bonuses – all in one place.",
  }
}




import Link from "next/link"
import {  Home, Calendar, User, ChevronRight, } from "lucide-react"
import Image from "next/image"
import CasinoList from "@/components/CasinoList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import TableOfContents from "@/components/TableOfContents"

export default function Bonuses() {
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
          <span className="text-gray-900">Bonuses</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-4 ">
        <div className="bg-gradient-to-r from-primary to-primary2 rounded-3xl px-12 py-8 text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Casinos Bonuses in New Zealand</h1>
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
                The best online casino bonuses in New Zealand just keep getting better. That’s because so many platforms are competing to win over Kiwi players. But which ones truly stand out, and where can you actually claim them? We’ve got all the answers—read on!
              </p>
            </div>

            <div className="relative w-full h-[700px] rounded-lg overflow-hidden mb-8 ">

              <Image
                src="/bonus-casino.webp"
                alt="Best New Zealand Live Casino"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="evaluation-criteria-live-casinos">
  Evaluation criteria for the best live casinos
</h2>
<p className="text-gray-700 mb-6">
  When choosing a live casino, we follow a set of clear criteria that not only make the selection process easier for players but also ensure a safe and enjoyable experience. Here are the key factors we consider:
</p>

<h3 className="text-xl font-semibold mb-2" id="game-variety">Game variety</h3>
<p className="text-gray-700 mb-6">
  A diverse selection is essential—especially when it comes to live casino games. The best platforms offer a wide range of options, allowing players to enjoy classic table games as well as innovative and exclusive titles from top-tier providers.
</p>

<h3 className="text-xl font-semibold mb-2" id="bonuses-and-promotions">Bonuses and promotions</h3>
<p className="text-gray-700 mb-6">
  Every incentive matters. That’s why we recommend live casinos that feature generous welcome bonuses and ongoing promotions, as these significantly enhance the gaming experience.
</p>

<h3 className="text-xl font-semibold mb-2" id="software-quality">Software quality</h3>
<p className="text-gray-700 mb-6">
  A smooth user experience is key to player satisfaction and loyalty. Leading casinos use advanced technology to deliver crystal-clear graphics, high-quality video streams, and seamless live gameplay.
</p>

<h3 className="text-xl font-semibold mb-2" id="payment-methods">Payment methods</h3>
<p className="text-gray-700 mb-6">
  A trustworthy casino should offer fast, secure, and modern deposit and withdrawal options. We look for platforms that support a wide variety of reliable payment methods.
</p>

<h3 className="text-xl font-semibold mb-2" id="free-play-options">Free play options</h3>
<p className="text-gray-700 mb-6">
  While most live casinos require players to have a balance or make a deposit, we specifically highlight those that offer free play opportunities—through demo modes, special sections, or promotional campaigns. This gives players a chance to practice, learn the rules, and build strategies before betting real money.
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
                    "I like to sign up with casinos that give me multiple benefits to take advantage of. Of course, I always look for the welcome bonus, but I also find that reload bonuses and free spins on certain games are also important. After all, I only need to register once and I expect them to treat me like a regular player."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="terms-and-conditions">
              Terms and conditions for casino bonuses
            </h2>
            <p className="text-gray-700 mb-6">
              The terms and conditions of a casino—and of each bonus it offers—are extremely important aspects. They form the foundation of any promotion. These rules outline the requirements that players must meet in order to use the bonus and then withdraw any potential winnings. These conditions typically include:
            </p>

           <div className="overflow-x-auto mb-6">
  <table className="w-full text-sm text-gray-800 border-collapse border border-border">
    <thead className="bg-slate-800 text-white uppercase text-xs">
      <tr>
        <th className="px-4 py-3 border border-border font-semibold text-left">Bonus Terms</th>
        <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Wagering Requirements</td>
        <td className="px-4 py-4 border border-border">
          The number of times you must wager the bonus amount before you can withdraw your winnings.
        </td>
      </tr>
      <tr className="bg-[#E1EFFF]">
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Eligible Games</td>
        <td className="px-4 py-4 border border-border">
          Not all bonuses can be used on all games, and not all games contribute equally toward fulfilling wagering requirements.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Expiration Date</td>
        <td className="px-4 py-4 border border-border">
          The time limit for using the bonus and meeting its requirements.
        </td>
      </tr>
      <tr className="bg-[#E1EFFF]">
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Minimum Deposit</td>
        <td className="px-4 py-4 border border-border">
          The minimum amount you need to deposit to activate and use the bonus.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 border border-border font-medium text-gray-900">Withdrawal Limits</td>
        <td className="px-4 py-4 border border-border">
          Some casino offers place a maximum cap on how much you can withdraw from winnings linked to bonuses.
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
                   When considering a casino bonus, I look at two basic things: the wagering requirement and the deadlines for meeting the wagering requirements. I don't choose unrealistic offers that make it difficult to access my winnings.
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="types-of-casino-bonuses">
  Different types of bonuses in New Zealand online casinos
</h2>
<p className="text-gray-700 mb-4">
  Let’s explore the most popular casino bonuses regularly offered by online casinos in New Zealand. While each has its own terms and conditions, they share some common features:
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome bonus</h3>
<p className="text-gray-700 mb-6">
  As the name suggests, this is offered to new users who complete the registration process and make their first deposit. The platform usually rewards players with a 50%, 100%, or even 200% match bonus on the deposited amount.
</p>
<p className="text-gray-700 mb-6">
  Check out our list of the best welcome bonuses in NZ online casinos to find top deals for new players.
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-2">No wagering bonuses</h3>
<p className="text-gray-700 mb-6">
  These bonuses don’t require you to wager the bonus amount multiple times before withdrawing your winnings. In other words, they come with low or no wagering requirements, making it easier to cash out.
</p>
<p className="text-gray-700 mb-6">
  See our list of the best no wagering casino bonuses in New Zealand to find the top offers.
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-2">No-sticky bonuses</h3>
<p className="text-gray-700 mb-6">
  No-sticky bonuses are special rewards offered for selected games, often as part of seasonal promotions or to highlight new releases and attract more players.
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-2">No deposit bonuses</h3>
<p className="text-gray-700 mb-6">
  No deposit bonuses are extremely popular among Kiwi players. These are given to new users who register, with no deposit required. This is different from welcome bonuses, which do require a deposit.
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-2">Free spins</h3>
<p className="text-gray-700 mb-6">
  These bonuses give you extra rounds for free on online pokies or similar games. Offers vary, but the best free spins in New Zealand are subject to the casino’s conditions.
</p>
<p className="text-gray-700 mb-6">
  You may find 100 free spins or even 200 free spins. Try the best NZ online casinos with 100 no-deposit free spins, as we’ve listed some of them.
</p>
<p className="text-gray-700 mb-6">
  You can also have fun with the top New Zealand online casinos offering 200 no-deposit free spins, a popular incentive for attracting new players.
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-2">Cashback bonus</h3>
<p className="text-gray-700 mb-6">
  This type of bonus gives you money back based on your losses over a specific time period. Typically, the cashback is between 5% and 10% of your net losses on casino games.
</p>
<p className="text-gray-700 mb-6">
  Don’t miss out on the best cashback bonuses in New Zealand for a more complete gaming experience!
</p>

<h2 className="text-2xl font-bold text-gray-900 mb-4" id="how-to-claim-a-bonus">
  How to claim a casino bonus
</h2>
<p className="text-gray-700 mb-4">
  If you’re ready to claim a bonus, you’ll be glad to know the process is incredibly simple. Here’s what to do:
</p>
<ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
  <li>
    <strong>Choose a bonus from our list:</strong> Select a deal that best matches your playing preferences and goals.
  </li>
  <li>
    <strong>Register or log in to the casino:</strong> Sign up as a new user or log in if you already have an account.
  </li>
  <li>
    <strong>Check the terms and conditions:</strong> Make sure you understand what’s required to activate and use the bonus.
  </li>
  <li>
    <strong>Deposit the required amount:</strong> Add funds to your account using a supported method to qualify for the bonus.
  </li>
  <li>
    <strong>Enter a bonus code (if required):</strong> Some promotions may need you to enter a code during the deposit step.
  </li>
  <li>
    <strong>Enjoy your bonus:</strong> Play the eligible games and make the most of your bonus according to the terms!
  </li>
</ol>


            

            <h4 className="text-lg mb-6 font-semibold">
              More useful casino content for Kiwi players:
            </h4>
            <ul className="list-disc pl-5 text-[#E91E63] mb-6 font-bold">
              <li>
                <a href="http://localhost:3000/">Best new online casinos in New Zealand</a>
              </li>
              <li>
                <a href="http://localhost:3000/bonuses">Top casino bonuses for NZ players</a>
              </li>
              <li>
                <a href="http://localhost:3000/popular-games">Most popular casino games in NZ</a>
              </li>
              <li>
                <a href="http://localhost:3000/payment-methods">The best casino payment methods in New Zealand</a>
              </li>
            </ul>



            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-left font-bold">
      Are casino bonuses in New Zealand available for all payment methods, or are there restrictions?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      In general, a bonus is available for the payment methods accepted by the platform and within its deposit and withdrawal limits. However, this depends on the specific casino and the bonus itself. You can find all the details in the terms and conditions.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger className="text-left font-bold">
      Can different types of bonuses be combined with the same deposit?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Typically, no. Most New Zealand online casinos allow only one bonus per deposit unless otherwise specified. Always check the bonus terms before trying to stack promotions.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger className="text-left font-bold">
      Is it possible to cancel a bonus after accepting it if it’s not beneficial?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      Yes, most online casinos in New Zealand allow you to cancel a bonus before meeting the wagering requirements. You may need to contact customer support to remove it from your account.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4">
    <AccordionTrigger className="text-left font-bold">
      How can I calculate the actual value of a casino bonus before accepting it?
    </AccordionTrigger>
    <AccordionContent className="text-gray-700">
      To estimate a bonus’s value, consider the bonus amount, wagering requirements, game eligibility, and maximum withdrawal limits. A high bonus with low wagering and wide game access usually offers better value.
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
                    I’ve tested and analyzed casino bonuses in New Zealand to help you find the best offers available.
My goal is to ensure you get the most out of your gaming experience—with fair terms, great bonuses, and real benefits. Here, I’m sharing my insights so you don’t have to do all the research yourself.
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
          <div className="sticky top-6">
            <TableOfContents />
          </div>
        </aside>



      </div>
    </div>
  )
}
