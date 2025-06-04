
export const metadata = {
  title: "Safest Mobile Casinos in New Zealand - 2025",
  description:
    "Explore the most secure mobile casinos in New Zealand for 2025. Verified licenses, data protection, and top mobile gaming experiences.",
  keywords: [
    "safe mobile casinos New Zealand",
    "NZ casino apps 2025",
    "secure mobile casinos NZ",
    "trusted casino apps NZ",
    "SSL encryption mobile casinos",
    "responsible mobile gambling NZ",
    "mobile casino registration NZ",
    "best mobile casinos NZ",
    "New Zealand gambling mobile",
    "top rated NZ mobile casinos"
  ],
  openGraph: {
    title: "Safest Mobile Casinos in New Zealand - 2025",
    description:
      "Discover secure and trusted mobile casinos in New Zealand with fast registration, encrypted data, and responsible gaming tools.",
    url: "https://nz-casino.vercel.app/safe-casinos",
    siteName: "NZCasino",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Safest Mobile Casinos in New Zealand",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safest Mobile Casinos in New Zealand - 2025",
    description:
      "Find out which mobile casinos in NZ are safest to play in 2025. Full security, licensing, and user-friendly experience.",
    images: [
      {
        url: "https://nz-casino.vercel.app/nz-online-casino-hero.png",
        width: 1200,
        height: 630,
        alt: "Safest Mobile Casinos in New Zealand",
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

export default function MobileCasinos() {
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
          <span className="text-gray-900">Mobile Casinos</span>
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
              <p className="text-base">
                Mobile gaming is becoming increasingly popular. That’s why it’s no surprise that players in New Zealand want to know which mobile casinos are the best in 2025. We’re looking for adaptability — where all features are accessible and the full casino experience can be enjoyed right from your mobile screen, no matter where you are.
              </p>
            </div>

            <div className="relative w-full h-[600px] rounded-lg overflow-hidden mb-8 ">

              <Image
                src="/nzcasino-mobile-casinos.webp"
                alt="Best New Zealand Mobile Casino"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4" id="criteria-for-creating-the-list-of-the-best-safe-casinos">Criteria for creating the list of the best safe casinos</h2>
            <p className="text-gray-700 mb-6">
              A casino can only be <strong>considered one of the safest</strong> if several important factors are taken into account—factors that ensure both player protection and game integrity.
              Below, we explore the key criteria used to determine whether an online casino is truly secure. Let’s take a look:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-border">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Criteria</th>
                    <th className="px-4 py-3 border border-border font-semibold text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Licensing and Regulation</td>
                    <td className="px-4 py-4 border border-border">
                      The casino must hold a valid license from a reputable gambling authority.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Security Measures</td>
                    <td className="px-4 py-4 border border-border">
                      Use of encryption protocols (SSL, TLS) and secure payment methods to protect player data.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Fair Gaming</td>
                    <td className="px-4 py-4 border border-border">
                      Independent audits and certifications (e.g., eCOGRA, iTech Labs) to ensure fair and unbiased results.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Responsible Gambling Practices</td>
                    <td className="px-4 py-4 border border-border">
                      Access to tools like self-exclusion, deposit limits, and links to support resources.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Player Reviews and Reputation</td>
                    <td className="px-4 py-4 border border-border">
                      Positive feedback and a strong reputation within the online casino community.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Clear Terms and Conditions</td>
                    <td className="px-4 py-4 border border-border">
                      Transparent and fair rules regarding bonuses, withdrawals, and gameplay.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Customer Support</td>
                    <td className="px-4 py-4 border border-border">
                      Accessible and responsive support through multiple channels like live chat and email.
                    </td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-border font-medium text-gray-900">Withdrawal Times and Limits</td>
                    <td className="px-4 py-4 border border-border">
                      Fast, reliable payout processing with reasonable limits and minimal fees.
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
                    "Mobile casinos are excellent options because of the convenience of accessing them wherever my smartphone has a connection. That said, I place special emphasis on two key aspects: the site’s optimization—since my experience depends on it—and the ability to play for free. Not only does this save me time, but it also helps me evaluate the operator’s transparency and reliability. So, to enjoy myself without complications, I always explore the mobile casino world first—without wagering any of my own money."
                  </p>
                  <p className="text-sm font-medium font-bold mt-2">- Freya Lind, Casino Expert</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4" id="play-mobile-casinos-via-browser-or-app">Play mobile casinos via browser or app</h2>
            <p className="text-gray-700 mb-6">
              When playing at mobile casinos, it’s worth checking out both the browser version and the dedicated app. Each has its own advantages, and the best choice depends on what you’re looking for in your gaming experience. Below, we compare the two options to help you find the one that suits you best.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-800 border-collapse border border-[#a7c3f2]">
                <thead className="bg-slate-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">Feature</th>
                    <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">Browser Version 💻</th>
                    <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">Mobile App 📱</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Accessibility</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Play directly in your browser with no downloads required.</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Requires download and installation on your device.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Storage space</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">No installation needed, which saves space on your device.</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Takes up storage space but offers excellent scalability and performance.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Updates</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Automatically updated by the provider.</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">May require manual updates, giving you more control.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Ease of use</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Easy access with no extra steps.</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Often faster and more responsive.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Game selection</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Large selection of games available instantly.</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Offers high flexibility to play from anywhere in New Zealand.</td>
                  </tr>
                  <tr className="bg-[#E1EFFF]">
                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Offline access</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Requires a constant internet connection.</td>
                    <td className="px-4 py-4 border border-[#a7c3f2]">Some features may be accessible offline.</td>
                  </tr>
                </tbody>
              </table>
            </div>



            <h2 className="text-xl font-bold text-gray-900 mb-4" id="how-to-register-at-a-mobile-casino">
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
                  Are the bonuses offered on the mobile version of the casino the same as on the desktop version?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, most mobile casinos in New Zealand offer the same welcome bonuses and promotions as their desktop counterparts. However, some platforms may have <strong>exclusive mobile-only deals</strong>, so it's worth checking both versions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Can I enjoy all the games from an online casino on my mobile device?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  In most cases, yes. Leading mobile casinos optimize their platforms to include <strong>the full range of games</strong>, including pokies, table games, and live dealer options. Make sure your device is up to date for the best experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  What should I do if the casino app isn’t working properly on my mobile device?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  First, try restarting your phone or reinstalling the app. If the issue persists, <strong>visit the casino’s mobile website</strong>, which usually offers the same features. You can also contact their support team for technical assistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  Can I access customer support from the mobile version of the casino?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Absolutely. Reputable mobile casinos in New Zealand provide <strong>full access to customer service</strong>, including live chat, email, and sometimes even phone support—right from your smartphone or tablet.
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
