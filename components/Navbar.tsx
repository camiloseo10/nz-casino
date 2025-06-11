"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu } from "lucide-react"

const menuItems = [
  {
    key: "online",
    label: "Online",
    href: "/online-casinos",
    submenu: [
      { label: "Safe casinos", href: "/online-casinos/safe-casinos" },
      { label: "Mobile casinos", href: "/online-casinos/mobile-casinos" },
      { label: "Live casinos", href: "/online-casinos/live-casinos" },
    ],
  },
  {
    key: "bonuses",
    label: "Bonuses",
    href: "/bonuses",
    submenu: [
      { label: "Welcome bonus", href: "/bonuses/welcome-bonuses" },
      { label: "No wagering requirements", href: "/bonuses/no-wagering-requirements" },
      { label: "No sticky", href: "/bonuses/no-sticky" },
      { label: "No deposit", href: "/bonuses/no-deposit" },
      { label: "Free Spins", href: "/bonuses/free-spins" },
      { label: "Cashback", href: "/bonuses/cashback" },
    ],
  },
  {
    key: "games",
    label: "Games",
    href: "/casino-games",
    submenu: [
      { label: "Slots", href: "/casino-games/slots" },
      { label: "Lotto", href: "/casino-games/lotto" },
      { label: "Roulette", href: "/casino-games/roulette" },
      { label: "Scratch cards", href: "/casino-games/scratch-cards" },
      { label: "Bingo", href: "/casino-games/bingo" },
      { label: "Poker", href: "/casino-games/poker" },
    ],
  },
  {
    key: "payments",
    label: "Payment",
    href: "/payment-methods",
    submenu: [
      { label: "PaysafeCard", href: "/payment-methods/paysafecard" },
      { label: "Revolut", href: "/payment-methods/revolut" },
      { label: "Skrill", href: "/payment-methods/skrill" },
      { label: "Krypto", href: "/payment-methods/krypto" },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="bg-background text-white sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 block md:hidden lg:flex"
        >
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


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 lg:space-x-8">
          {menuItems.map((item) => (
            <div key={item.key} className="group relative">
              <div className="flex items-center space-x-1 cursor-pointer transition-colors">
                <Link href={item.href}>
                  <span className="text-sm font-medium hover:bg-[#26162F] p-2 text-[#e91e63]">{item.label}</span>
                </Link>
                {item.submenu && <ChevronDown className="w-4 h-4" />}
              </div>
              {item.submenu && (
                <div className="absolute left-0 top-full w-48 bg-[#2C3E50] mt-4 text-sm text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((sub, index) => (
                    <Link key={index} href={sub.href} className="block px-4 py-2 hover:bg-[#26162F]">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/reviews" className="text-sm font-medium hover:text-[#e91e63] transition-colors">
            Casino Reviews
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2c3e50] px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <div key={item.key}>
              <div className="w-full flex justify-between items-center">
                <Link href={item.href} onClick={handleLinkClick} className="font-semibold">
                  {item.label}
                </Link>
                {item.submenu && (
                  <button onClick={() => toggleSubmenu(item.key)}>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>
              {item.submenu && openSubmenu === item.key && (
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  {item.submenu.map((sub, index) => (
                    <Link key={index} href={sub.href} onClick={handleLinkClick}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/reviews" className="block font-semibold" onClick={handleLinkClick}>
            Reviews
          </Link>
        </div>
      )}
    </header>
  );
}
