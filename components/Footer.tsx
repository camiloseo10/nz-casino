import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#e91e63] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
                  <circle cx="12" cy="12" r="6" fill="white" />
                  <circle cx="12" cy="12" r="2" fill="#e91e63" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                NZCASINO<span className="text-[#e91e63]">.com</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your reliable guide to the best online casinos, bonuses and games in New Zealand.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#e91e63] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#e91e63] rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#e91e63] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#e91e63] rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Casino Games */}
          <div>
            <h3 className="text-lg font-bold mb-4">Casino Games</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://nz-casino.vercel.app/casino-games" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Slot machines
                </Link>
              </li>
              <li>
                <Link href="https://nz-casino.vercel.app/live-casinos" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Live Casino
                </Link>
              </li>
              <li>
                <Link href="https://nz-casino.vercel.app/roulette" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Roulette
                </Link>
              </li>
              <li>
                <Link href="https://nz-casino.vercel.app/poker" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Poker
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://nz-casino.vercel.app/bonuses" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Casino Bonuses
                </Link>
              </li>
              <li>
                <Link href="https://nz-casino.vercel.app/payment-methods" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#e91e63] mr-3" />
                <Link
                  href="mailto:contact@nzcasino.com"
                  className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm"
                >
                  contact@nzcasino.com
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-[#e91e63] mr-3" />
                <span className="text-gray-300 text-sm">Auckland, New Zealand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">© 2025 NZCASINO. All rights reserved.</p>
            <div className="space-y-2">
              <p className="text-gray-400 text-xs">
                NZCASINO promotes responsible gambling. Gambling can be addictive. Please gamble responsibly.
              </p>
              <p className="text-gray-400 text-xs">18+ only. Please check the laws in your jurisdiction.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
