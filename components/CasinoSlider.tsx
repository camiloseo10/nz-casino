"use client"

import { useEffect, useState } from "react"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"

const casinos = [
  {
    id: 1,
    name: "Valhalla Wins",
    bonus: "40,000 NZD + 4000 FREE SPINS",
    features: ["Casino & Sports", "VIP-Club", "Cashback"],
    payments: ["Visa", "Mastercard", "Myfinity", "Apple Pay"],
    extraPayments: ["+1"],
    badge: null,
    logo: "/logos/logo-valhalla-wins-casino.webp",
    Link: "https://es.casino.guru/gates-of-valhalla-jugar-gratis",
  },
  {
    id: 2,
    name: "Winbay Casino",
    bonus: "5000 NZD + 200 FREE SPINS",
    features: ["Casino & Sport", "Many Campaigns", "Casino boutique"],
    payments: ["Visa", "Mastercard", "Skrill", "Bank Transfer"],
    extraPayments: ["+2"],
    badge: "10% CASHBACK",
    logo: "/logos/winbay.webp",
    Link: "https://winbay3.com/es/",
  },
  {
    id: 3,
    name: "LaraBet Casino",
    bonus: "5000 NZD + 200 FREE SPINS",
    features: ["Casino & Sport", "25% Cashback", "2000kr Sportbonus"],
    payments: ["Visa", "Mastercard", "Apple Pay", "Crypto"],
    extraPayments: ["+1"],
    badge: null,
    logo: "/logos/logo-larabet-casino.webp",
    Link: "https://larabet1.com/registration",
  },
  {
    id: 4,
    name: "Winz Casino",
    bonus: "100,000 NZD + 35% Cashback",
    features: ["Many campaigns", "Crypto", "+7000 Games"],
    payments: ["Visa", "Mastercard", "Crypto", "Myfinity"],
    extraPayments: [],
    badge: null,
    logo: "/logos/winz-logo.webp",
    Link: "https://winz.io/es",
  },
  {
    id: 5,
    name: "Lucky Days",
    bonus: "1500 NZD + 100 FREE SPINS",
    features: ["Fast Withdrawals", "Weekend Bonus", "24/7 Support"],
    payments: ["Visa", "Mastercard", "Skrill", "Neteller"],
    extraPayments: ["+3"],
    badge: "NEW",
    logo: "/logos/lucky-logo.png",
    Link: "https://luckydays.com/?btag=654515_15f4ac1b3f604f6096543ffc127e0f88",
  },
]

export default function CasinoSlider() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Detecta el ancho de ventana
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Mientras no se haya detectado aún el ancho de ventana
  const fallbackVisibleCards = 4 // Asume 4 por defecto para desktop
  const visibleCards =
    windowWidth === null
      ? fallbackVisibleCards
      : windowWidth >= 1024
        ? 4
        : windowWidth >= 768
          ? 2
          : 1

  const maxIndex = Math.max(0, casinos.length - visibleCards)

  const scrollLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const scrollRight = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(casinos.length / visibleCards) * 100}%`,
            transform: `translateX(-${(100 / casinos.length) * currentIndex}%)`,
          }}
        >
          {casinos.map((casino) => (
            <div
              key={casino.id}
              className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              style={{ flexBasis: `${100 / casinos.length}%` }}
            >
              <div className="h-full border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between">
                <div className="flex justify-between mb-2">
                  <div className="bg-[#e91e63] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {casino.id}
                  </div>
                  {casino.badge && (
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full border border-green-400">
                      {casino.badge}
                    </div>
                  )}
                </div>

                {/* 👇 Nuevo bloque del logo */}
                {casino.logo && (
                  <div className="flex justify-center mb-4">
                    <img
                      src={casino.logo}
                      alt={`${casino.name} Logo`}
                      className="w-[150px] h-[150px] object-contain"
                    />
                  </div>
                )}

                <h3 className="text-center font-bold text-lg mb-2">{casino.name}</h3>
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="text-center text-[#e91e63] font-bold mb-4">{casino.bonus}</div>
                <div className="space-y-2 mb-4">
                  {casino.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {casino.payments.concat(casino.extraPayments).map((p, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-xs rounded border border-gray-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                {casino.Link && (
                  <a href={casino.Link} target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-[#e91e63] hover:bg-[#e91e63]/90 text-white py-3 rounded-md font-medium">
                      PLAY NOW
                    </button>
                  </a>
                )}
                <div className="text-center text-xs text-gray-500 mt-2">
                  18+ | Terms and conditions apply.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"
          }`}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollRight}
        className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"
          }`}
        disabled={currentIndex === maxIndex}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>


  )
}
