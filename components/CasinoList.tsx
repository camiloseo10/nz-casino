"use client"

import { Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const casinos = [
  {
    id: 1,
    name: "Valhalla Wins",
    logo: "/logos/logo-valhalla-wins-casino.webp",
    rating: 5,
    bonus: "NZ$20,000 + 2000 FREE SPINS",
    features: ["Casino & Sports", "VIP Club", "Cashback"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Myfinity"],
    extraPayments: ["+1"],
    trustScore: 98,
    withdrawalTime: "0-24 hours",
    link: "https://es.casino.guru/gates-of-valhalla-jugar-gratis"
  },
  {
    id: 2,
    name: "Winbay Casino",
    logo: "/logos/winbay.webp",
    rating: 5,
    bonus: "NZ$2,500 + 100 FREE SPINS",
    features: ["Casino & Sport", "Many Campaigns", "Casino boutique"],
    payments: ["Visa", "Mastercard", "Skrill", "Bank Transfer"],
    extraPayments: ["+2"],
    trustScore: 96,
    withdrawalTime: "0-24 hours",
    link: "https://winbay3.com/es/"
  },
  {
    id: 3,
    name: "LaraBet Casino",
    logo: "/logos/logo-larabet-casino.webp",
    rating: 5,
    bonus: "NZ$2,500 + 100 FREE SPINS",
    features: ["Casino & Sport", "25% Cashback", "NZ$1000 Sports Bonus"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Crypto"],
    extraPayments: ["+1"],
    trustScore: 95,
    withdrawalTime: "0-24 hours",
    link: "https://lara-bet.com/es/"
  },
  {
    id: 4,
    name: "Winz Casino",
    logo: "/logos/winz-logo.webp",
    rating: 5,
    bonus: "NZ$50,000 + 35% Cashback",
    features: ["Many campaigns", "Crypto", "+3000 Games"],
    payments: ["Visa", "Mastercard", "Crypto", "Myfinity"],
    extraPayments: [],
    trustScore: 94,
    withdrawalTime: "0-24 hours",
    link: "https://winz.io/es"
  },
  {
    id: 5,
    name: "Betway Casino",
    logo: "/logos/betway-casino.png",
    rating: 5,
    bonus: "NZ$6,000 + 60% CASHBACK",
    features: ["Many campaigns", "Tournaments", "Live Casino"],
    payments: ["Visa", "Mastercard", "Skrill", "Neteller"],
    extraPayments: ["+3"],
    trustScore: 93,
    withdrawalTime: "0-24 hours",
    link: "https://www.divaagen.com/betway-ruleta-y-casino-en-vivo/"
  },
  {
    id: 6,
    name: "Stake Casino",
    logo: "/logos/stake-logo.png",
    rating: 5,
    bonus: "NZ$3,000 + 100 FREE SPINS",
    features: ["VIP Club", "Tournaments", "Cashback"],
    payments: ["Visa", "Mastercard", "POLi", "Bank Transfer"],
    extraPayments: ["+2"],
    trustScore: 92,
    withdrawalTime: "0-24 hours",
    link: "https://stake.com.co/es/promociones/Bienvenida-T&C?btag=654979_71dab61a5f974b62a7ed68db0f6dcf3b"
  },
  {
    id: 7,
    name: "PlayOJO",
    logo: "/logos/playojo-logo.png",
    rating: 5,
    bonus: "NZ$5,000 BONUS + 100 FREE SPINS",
    features: ["Online Bonus Bonus", "Online Bonus Bonus", "Casino & Slots"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    extraPayments: ["+4"],
    trustScore: 91,
    withdrawalTime: "0-24 hours",
    link: "https://www.playuzu.com/"
  },
  {
    id: 8,
    name: "Jackpot Casino",
    logo: "/logos/jackpotcity.png",
    rating: 5,
    bonus: "NZ$2,000 + NZ$50 FREE SPINS",
    features: ["Casino & Sport", "25% Cashback", "Weekly Tournaments"],
    payments: ["Visa", "Mastercard", "Skrill", "Crypto"],
    extraPayments: ["+2"],
    trustScore: 90,
    withdrawalTime: "0-24 hours",
    link: "https://www.jackpotcity.com/cl/"
  },
  {
    id: 9,
    name: "Boomerang Casino",
    logo: "/logos/boomerang-logo.png",
    rating: 5,
    bonus: "NZ$2,500 BONUS",
    features: ["VIP Club", "Tournaments", "Free Games"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Bank Transfer"],
    extraPayments: ["+3"],
    trustScore: 89,
    withdrawalTime: "0-24 hours",
    link: "https://www.irishluck.ie/boomerang-casino"
  },
  {
    id: 10,
    name: "Spin Palace Casino",
    logo: "/logos/spin-casino.svg",
    rating: 5,
    bonus: "NZ$2,500 + 200 FREE SPINS",
    features: ["Casino & Sport", "Many Campaigns", "Virtual Sports"],
    payments: ["Visa", "Mastercard", "Skrill", "Neteller"],
    extraPayments: ["+2"],
    trustScore: 88,
    withdrawalTime: "0-24 hours",
    link: "https://www.spinpalace.com/cl/"
  },
  {
    id: 11,
    name: "Kingmaker Casino",
    logo: "/logos/kingmaker.webp",
    rating: 5,
    bonus: "NZ$1,000 + 150 FREE SPINS",
    features: ["VIP Club", "Tournaments", "Live Dealer"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    extraPayments: ["+1"],
    trustScore: 87,
    withdrawalTime: "0-24 hours",
    link: "https://kingmakercasino.bet/es-ES/"
  },
  {
    id: 12,
    name: "Casino Joy",
    logo: "/logos/casino-joy-logo.svg",
    rating: 5,
    bonus: "NZ$1,500 + 200 FREE SPINS",
    features: ["Casino & Sport", "Many Campaigns", "Live Casino"],
    payments: ["Visa", "Mastercard", "Skrill", "Neteller"],
    extraPayments: ["+3"],
    trustScore: 86,
    withdrawalTime: "0-24 hours",
    link: "https://www.supercasinosites.com/casino-apps/casino-joy-mobile-app/"
  },
  {
    id: 13,
    name: "Thunderkick Casino",
    logo: "/logos/thunderkick-logo.png",
    rating: 5,
    bonus: "NZ$1,500 + 75 FREE SPINS",
    features: ["Free Games", "Casino & Sport", "Many Campaigns"],
    payments: ["Visa", "Mastercard", "Skrill", "Apple Pay"],
    extraPayments: ["+3"],
    trustScore: 85,
    withdrawalTime: "0-24 hours",
    link: "https://www.thunderkick.com/"
  },
  {
    id: 14,
    name: "FreshBet Casino",
    logo: "/logos/freshbet-logo.webp",
    rating: 5,
    bonus: "NZ$2,000 + 2000 FREE SPINS",
    features: ["Casino & Sport", "VIP Club", "Many Campaigns"],
    payments: ["Visa", "Mastercard", "Crypto", "Bank Transfer"],
    extraPayments: ["+1"],
    trustScore: 84,
    withdrawalTime: "0-24 hours",
    link: "https://freshbet.com/en"
  },
  {
    id: 15,
    name: "Thunderbolt Casino",
    logo: "/logos/thunderbolt-casino-logo.png",
    rating: 5,
    bonus: "NZ$3,000 + 100 FREE SPINS",
    features: ["Cashback", "Tournaments", "Casino & Sport"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    extraPayments: ["+2"],
    trustScore: 83,
    withdrawalTime: "0-24 hours",
    link: "https://www.thunderboltcasino.com/"
  },
  {
    id: 16,
    name: "Zodiac Casino",
    logo: "/logos/zodiac-logo.png",
    rating: 5,
    bonus: "NZ$5,000 + 100 FREE SPINS",
    features: ["Many Campaigns", "Casino Club", "Tournaments"],
    payments: ["Visa", "Mastercard", "Skrill", "Neteller"],
    extraPayments: ["+3"],
    trustScore: 82,
    withdrawalTime: "0-24 hours",
    link: "https://www.casinorewards.com/es/casinos/zodiac-casino/"
  },
  {
    id: 17,
    name: "Kiwi Casino",
    logo: "/logos/Kiwis-Treasure-Casino-Logo.webp",
    rating: 5,
    bonus: "NZ$5,000 + 100 FREE SPINS",
    features: ["Casino & Sport", "Tournaments", "Cashback"],
    payments: ["Visa", "Mastercard", "POLi", "Apple Pay"],
    extraPayments: ["+2"],
    trustScore: 81,
    withdrawalTime: "0-24 hours",
    link: "https://www.kiwistreasure.com/"
  },
  {
    id: 18,
    name: "Spin Genie Casino",
    logo: "/logos/Spingenie-logo.webp",
    rating: 5,
    bonus: "NZ$2,500 BONUS + 100 FREE SPINS",
    features: ["Cashback", "Cashback over NZ$50 on Fridays", "Expanding Slots"],
    payments: ["Visa", "Mastercard", "Skrill", "Bank Transfer"],
    extraPayments: ["+1"],
    trustScore: 80,
    withdrawalTime: "0-24 hours",
    link: "https://www.spingenie.com/"
  },
  {
    id: 19,
    name: "Game Twist Casino",
    logo: "/logos/gametwist-logo.png",
    rating: 5,
    bonus: "NZ$2,500 BONUS + NZ$50 SPORTS BONUS",
    features: ["Opening Soon", "Casino & Sport", "Many Campaigns"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    extraPayments: ["+3"],
    trustScore: 79,
    withdrawalTime: "0-24 hours",
    link: "https://www.gametwist.com/es/tragaperras/lucky-spin-jackpots/"

  },
  {
    id: 20,
    name: "WildTornado",
    logo: "/logos/wildtornado-casino-logo.png",
    rating: 5,
    bonus: "NZ$3,000 FIRST BONUS + NZ$50 FREE SPINS",
    features: ["Opening Soon", "Tournaments", "Casino & Sport"],
    payments: ["Visa", "Mastercard", "Crypto", "Skrill"],
    extraPayments: ["+2"],
    trustScore: 78,
    withdrawalTime: "0-24 hours",
    link: "https://www.wildtornado.casino/en"
  },
]

export default function CasinoList() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-4">
      {casinos.map((casino) => (
        <div key={casino.id} className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Ranking Number */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#e91e63] text-white rounded-full flex items-center justify-center font-bold text-lg">
                {casino.id}
              </div>
            </div>

            {/* Casino Logo and Info */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    width={120}
                    height={60}
                    className="rounded-md"
                  />
                </div>

                {/* Casino Details */}
                <div className="flex-grow">
                  <h2 className="text-xl font-bold mb-2">{casino.name}</h2>

                  {/* Rating */}
                  <div className="flex items-center mb-3">{renderStars(casino.rating)}</div>

                  {/* Bonus */}
                  <div className="text-[#e91e63] font-bold text-lg mb-4">{casino.bonus}</div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {casino.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        <Check className="w-3 h-3 mr-1" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Payment Methods */}
                  <div className="flex flex-wrap gap-2">
                    {casino.payments.map((method, index) => (
                      <div key={index} className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-700">
                        {method}
                      </div>
                    ))}
                    {casino.extraPayments.map((extra, index) => (
                      <div key={index} className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-700">
                        {extra}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Score and Action */}
            <div className="flex-shrink-0 text-center">
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Trust Score</div>
                <div className="text-2xl font-bold text-green-600">{casino.trustScore}</div>
                <div className="text-xs text-gray-500">Excellent</div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Withdrawal</div>
                <div className="text-sm font-medium">{casino.withdrawalTime}</div>
              </div>


              <a
  href={casino.link}
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-[#e91e63] hover:bg-[#e91e63]/90 text-white py-3 px-6 rounded-lg font-bold text-sm text-center transition-colors min-w-[120px]">
  PLAY NOW
</a>

              <div className="text-xs text-gray-500 mt-2">18+ | Terms and conditions apply</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
