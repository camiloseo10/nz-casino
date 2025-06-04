export const metadata = {
  title: "Best Live Casinos in New Zealand – 2025",
  description:
    "Discover the best live casinos in New Zealand for 2025. Real dealers, immersive experiences, and top-rated platforms for Kiwi players.",
  keywords: [
    "live casinos New Zealand",
    "best live casino NZ 2025",
    "live casino games NZ",
    "NZ online casinos with real dealers",
    "live roulette blackjack poker NZ",
    "high-quality live streaming casinos",
    "interactive live casino NZ",
    "New Zealand live casino bonuses",
    "trusted live dealer casinos",
    "Kiwi live gambling 2025"
  ],
  openGraph: {
    title: "Best Live Casinos in New Zealand – 2025",
    description:
      "Play at top-rated live casinos in New Zealand. Enjoy real-time action with professional dealers and premium bonuses.",
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
              <p className="text-base">
                <strong>In 2025</strong>, you can discover the most exciting live casinos in New Zealand, offering a unique experience with top-tier live dealers. Enjoy real-time action and exclusive bonuses—all from the comfort of your home. Keep reading to explore our curated list of the best platforms available to Kiwi players.
              </p>
            </div>

            <div className="relative w-full h-[700px] rounded-lg overflow-hidden mb-8 ">

              <Image
                src="/live-casino-hero.webp"
                alt="Best New Zealand Live Casino"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="criteria-for-creating-the-list-of-the-best-safe-casinos">
              Evaluation criteria for the best live casinos
            </h2>
            <p className="text-gray-700 mb-6">
              When choosing a live casino, we follow a set of clear criteria that not only make the selection process easier for players but also ensure a safe and enjoyable experience. Here are the key factors we consider:
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Game variety:</strong> A diverse selection is essential—especially when it comes to live casino games. The best platforms offer a wide range of options, allowing players to enjoy classic table games as well as innovative and exclusive titles from top-tier providers.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Bonuses and promotions:</strong> Every incentive matters. That’s why we recommend live casinos that feature generous welcome bonuses and ongoing promotions, as these significantly enhance the gaming experience.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Software quality:</strong> A smooth user experience is key to player satisfaction and loyalty. Leading casinos use advanced technology to deliver crystal-clear graphics, high-quality video streams, and seamless live gameplay.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Payment methods:</strong> A trustworthy casino should offer fast, secure, and modern deposit and withdrawal options. We look for platforms that support a wide variety of reliable payment methods.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Free play options:</strong> While most live casinos require players to have a balance or make a deposit, we specifically highlight those that offer free play opportunities—through demo modes, special sections, or promotional campaigns. This gives players a chance to practice, learn the rules, and build strategies before betting real money.
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
                    "I evaluate many aspects of live casinos, but I definitely prioritize those that offer both variety and quality. It’s disappointing to enter one of these platforms and find a limited game selection or poor navigation. That’s why I really appreciate when these two elements are in place—they not only ensure a fun experience but also a smooth one. I recommend looking for casinos with these features to make the most of your gaming time."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4" id="what-makes-live-casinos-special">
              What makes live casinos special?
            </h2>
            <p className="text-gray-700 mb-6">
              Live casinos offer an experience that sets them apart from traditional online casinos, with features designed to make them truly unique. Some of these elements are specifically developed to provide an unbeatable user experience.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Advantage</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Immersive experience</td>
                    <td className="px-4 py-4 border border-border">
                      Live casino platforms create an authentic environment that mimics real-life casinos using sound, visuals, and professional design, allowing Kiwi players to fully enjoy the experience.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Real dealers</td>
                    <td className="px-4 py-4 border border-border">
                      Players can interact with professional human dealers in real time, which adds excitement and builds anticipation during gameplay.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Focus and no distractions</td>
                    <td className="px-4 py-4 border border-border">
                      High-quality live streaming lets players stay concentrated and fully engaged, without interruptions that typically occur in traditional gameplay.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Interactivity</td>
                    <td className="px-4 py-4 border border-border">
                      Besides dealers, players can interact with others at the table—enhancing the social aspect and making the experience more enjoyable.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Variety</td>
                    <td className="px-4 py-4 border border-border">
                      Kiwi players can enjoy a wide selection of games, including blackjack, roulette, baccarat, and innovative live game variants.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Accessibility and convenience</td>
                    <td className="px-4 py-4 border border-border">
                      Live casinos combine the excitement of a land-based casino with the flexibility of playing from anywhere in New Zealand, on any device.
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
                    "Why do I prefer playing at live casinos? Because they give me the feeling of being in a real casino. Being able to talk to the dealer and feel the excitement from other players is a unique experience. I truly value the social interaction, which is hard to replicate when playing alone on a computer. Another factor I enjoy is the high-quality streaming in each game and the convenience of playing from home, which makes the entire experience much more enjoyable."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4" id="how-to-register-at-a-live-casino">
              How to register at a live casino in New Zealand
            </h2>

            <p className="text-gray-700 mb-6">
              Signing up at a live casino in New Zealand typically follows a standard process. While each platform may have slight variations, the steps below outline what most players can expect:
            </p>

            <h3 className="text-lg font-semibold mb-2">1. Choose a casino from our list</h3>
            <p className="text-gray-700 mb-4">
              Make sure the site offers games and bonuses that interest you before signing up.
            </p>

            <h3 className="text-lg font-semibold mb-2">2. Create your account</h3>
            <p className="text-gray-700 mb-4">
              Fill out the registration form with your personal details and create a username and password.
            </p>

            <h3 className="text-lg font-semibold mb-2">3. Verify your identity</h3>
            <p className="text-gray-700 mb-4">
              Most casinos will verify your account via email, SMS, or document upload.
            </p>

            <h3 className="text-lg font-semibold mb-2">4. Make your first deposit</h3>
            <p className="text-gray-700 mb-4">
              Choose a secure payment method available in New Zealand and fund your account.
            </p>

            <h3 className="text-lg font-semibold mb-2">5. Activate available bonuses</h3>
            <p className="text-gray-700 mb-4">
              Check for welcome bonuses and make sure to activate them before playing.
            </p>

            <h3 className="text-lg font-semibold mb-2">6. Start playing live casino games</h3>
            <p className="text-gray-700 mb-6">
              Go to the “Live Casino” section and enjoy options like blackjack, roulette, and more.
            </p>

            <h2 className="text-xl font-bold mb-4" id="types-of-live-casino-games">
              Types of live casino games
            </h2>

            <h3 className="text-lg font-semibold mb-2">Live Roulette</h3>
            <p className="text-gray-700 mb-4">
              Features a real dealer spinning a physical wheel. Includes popular variants like European, American, and French roulette.
            </p>

            <h3 className="text-lg font-semibold mb-2">Live Blackjack</h3>
            <p className="text-gray-700 mb-4">
              Real-time card dealing with live dealers and dynamic gameplay. Make your moves remotely while interacting with the table.
            </p>

            <h3 className="text-lg font-semibold mb-2">Live Poker</h3>
            <p className="text-gray-700 mb-6">
              Play against other players or the dealer, depending on the version. Live poker offers strategy, social interaction, and excitement.
            </p>

            <h2 className="text-xl font-bold mb-4" id="responsible-gaming-live-casinos">
              Responsible live casino gaming in New Zealand
            </h2>
            <p className="text-gray-700 mb-4">
              Playing live casino games is fun, but it’s important to keep things safe and responsible. Here are a few tips:
            </p>

            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
              <li><strong>Set a budget:</strong> Know your spending limit and stick to it. Never gamble more than you can afford to lose.</li>
              <li><strong>Limit your play time:</strong> Define how long you’ll play to keep gaming balanced with your daily life.</li>
              <li><strong>Avoid alcohol:</strong> Stay sharp by playing sober, which helps prevent impulsive decisions.</li>
              <li><strong>Watch for red flags:</strong> Stress, depression, or chasing losses are signs you may need a break.</li>
              <li><strong>Seek help if needed:</strong> Reach out to <a href="https://gamblinghelpline.co.nz/" className="text-primary" target="_blank" rel="noopener noreferrer">Gambling Helpline New Zealand</a> or <a href="https://pgf.nz" className="text-primary" target="_blank" rel="noopener noreferrer">Problem Gambling Foundation</a> for free support.</li>
            </ul>




            <h2 className="text-xl font-bold text-gray-900 mb-4">
              How to register at a mobile casino in New Zealand
            </h2>
            <p className="text-gray-700 mb-4">
              Players in New Zealand have come to appreciate the progress the mobile casino industry has made in recent years—both in terms of seamless smartphone experiences and simplified sign-up processes.
            </p>
            <p className="text-gray-700 mb-6">
              While some casinos may have their own requirements, most follow a standard registration flow to give you fast access to the platform:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Choose a trusted casino from our list:</strong> Start by selecting a reliable mobile casino from our recommended list. This ensures you're playing on a fully licensed and secure platform.
              </li>
              <li>
                <strong>Sign up:</strong> Once you’ve picked your casino, look for a “Join Now” or “Sign Up” button—usually clearly visible on the homepage. Click it to begin your registration.
              </li>
              <li>
                <strong>Fill out the registration form:</strong> You’ll be asked to enter basic information like your full name, email address, date of birth, and sometimes your mobile number. Make sure your details are accurate to avoid issues later.
              </li>
              <li>
                <strong>Verify your account:</strong> Most platforms will send a confirmation link to your email or ask you to verify your identity by uploading an ID or entering a code sent via text. No matter the method, activating your account is crucial.
              </li>
              <li>
                <strong>Deposit funds and start playing:</strong> Once your account is verified, choose a secure payment method available in New Zealand—such as POLi, credit cards, or e-wallets—deposit funds, and jump into your favorite games.
              </li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mb-4" id="responsible-mobile-gaming">
              Responsible mobile gaming in New Zealand
            </h3>
            <p className="text-gray-700 mb-4">
              Mobile casino gaming is fun, but it’s important to approach it responsibly. Here are a few tips to keep your experience safe and under control:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Set a budget:</strong> Decide how much you're willing to spend before you start playing and stick to that limit. Budgeting keeps your gambling in check.
              </li>
              <li>
                <strong>Set time limits:</strong> Define how long you’ll play each session. Don’t let casino excitement take time away from other meaningful activities.
              </li>
              <li>
                <strong>Avoid playing under stress:</strong> Don’t play if you’re feeling anxious, angry, or depressed. Gambling should be entertainment—not a way to escape problems.
              </li>
              <li>
                <strong>Handle losses wisely:</strong> If you hit a losing streak, don’t try to chase your losses. Accept that losses are part of the game.
              </li>
              <li>
                <strong>Use control tools:</strong> Most mobile casinos offer features like deposit limits, self-exclusion, and session timers. Use them to manage your activity.
              </li>
              <li>
                <strong>Seek help if needed:</strong> If gambling begins to affect your life or someone close to you, reach out for support. Services like <a href="https://gamblinghelpline.co.nz/" target="_blank" rel="noopener noreferrer" className="text-primary">Gambling Helpline New Zealand</a> offer free, confidential assistance.
              </li>
            </ul>

            <div className="relative w-full h-[600px] rounded-lg overflow-hidden mb-8 ">

              <Image
                src="/live-casino.webp"
                alt="Best New Zealand Live Casino"
                fill
                className="object-cover"
              />
            </div>

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
                  Do live casinos offer specific bonuses for players who choose this gaming mode?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, many live casinos offer <strong>special bonuses and promotions</strong> to attract players. These can include welcome bonuses, free spins, or loyalty rewards designed specifically for the live dealer section.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  How trustworthy are the dealers at live casinos in New Zealand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Dealers at reputable live casinos in New Zealand are <strong>highly trained professionals</strong>. These platforms work with certified providers to ensure fair gameplay and trustworthy live interactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Can I interact with other players at live casinos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, one of the key features of live casinos is <strong>real-time interaction</strong>. You can chat with the dealer and even other players at the table, making the experience more social and immersive.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Do live casinos offer the same variety of games as a traditional casino?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. Top live casinos in New Zealand offer <strong>a broad selection of classic games</strong> such as blackjack, roulette, baccarat, and poker—many with multiple variations to choose from.
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
                    As a mobile casino expert, I’ve explored many platforms. If there’s one thing I truly value and recommend, it’s casinos that offer a satisfying gaming experience while also making players feel safe and providing access to a wide variety of games. Personally, I look for mobile casinos that are user-friendly but also licensed by reputable authorities, as this guarantees my privacy and gives me peace of mind.
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
