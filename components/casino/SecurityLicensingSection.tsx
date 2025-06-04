"use client"

import Image from "next/image"
import { Shield, FileText, AlertTriangle } from "lucide-react"

export default function SecurityLicensingSection() {
  return (
    <section id="security-licensing" className="mb-16">
      <div className="max-w-full lg:p-2 p-2">
        <div className="flex items-center mb-6 pt-14">
          <Shield className="w-6 h-6 text-[#e91e63] mr-2" />
          <h2 className="lg:text-4xl text-xl font-bold text-gray-900">Security, Licensing and Responsible Gaming</h2>
        </div>

        <p className="text-gray-700 text-base mb-6 max-w-3xl">
          When trying out a new online casino, it's essential to make sure the site is safe and legal. Fortunately, the vast majority of new casinos for Norwegian players are licensed in reputable jurisdictions and take security very seriously. In this section of the guide, we look at why license status is important, the differences between the most common licenses (MGA and Curacao), and what security and responsible gambling measures you can expect in 2025. We also briefly discuss the new DNS blocking that affects access to foreign casinos from Norway.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0 mr-3">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold border-b-2 border-[#e91e63] pb-1">
              Licensing authorities (MGA, Curacao, etc.)
            </h3>
          </div>

          <p className="text-gray-700 mb-4">
            Almost all new casinos offer a <strong>welcome bonus</strong> to new players. This typically means that the casino matches the amount you deposit with a certain percentage up to a maximum amount.
          </p>

          <p className="text-gray-700 mb-8">
            Competition for players means that the total amount you can get in bonuses is often higher at new operators than at established casinos. It's not uncommon to see offers like "100% up to NZ$5,000" or even "200% up to NZ$10,000".
          </p>

          <div className="bg-[#e8f3ff] border-l-4 border-[#8ab4f8] rounded-lg px-6 py-5 mb-8">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-10 h-10 text-[#3b82f6] mr-2 mt-1">
                <path d="M6.873 3.097C4.097 5.2 2 8.205 2 12h4c0-2.372 1.555-4.463 3.684-5.222A6.994 6.994 0 016.873 3.097zm8 0C12.097 5.2 10 8.205 10 12h4c0-2.372 1.555-4.463 3.684-5.222A6.994 6.994 0 0114.873 3.097z" />
              </svg>
              <p className="italic text-l text-gray-900">
                The license is the casino's credential. An MGA license is like a premium passport, while a Curacao license is more like a standard passport. Both allow you to travel, but with different privileges and security levels.
              </p>
            </div>
            <div className="mt-4 text-right text-sm">
              <p className="font-bold text-[#1d4ed8]">Ole Johansen</p>
              <p className="text-[#3b82f6]">Regulatorisk ekspert</p>
            </div>
          </div>

          <div className="bg-[#e1efff] lg:p-6 p-4 rounded-xl mb-8 shadow-sm">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-6 h-6 text-[#e91e63] mr-2">
                <path d="M16.6 6C10.6 6 6 11.3 6 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Zm23 0C33.6 6 29 11.3 29 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Z" />
              </svg>
              <h4 className="text-lg font-bold text-gray-900">Sarah's expert opinion on welcome bonuses</h4>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row items-start gap-6 relative">
              <div className="flex-shrink-0 text-center">
                <div className="p-0.5 bg-white border border-white shadow-sm rounded-[10px]">
                  <Image src="/female-casino-expert.png" alt="Sarah Mitchell" width={150} height={150} className="object-cover w-[150px] h-[150px] rounded-[10px]" />
                </div>
                <p className="font-bold mt-3 text-lg text-gray-900">Sarah Mitchell</p>
              </div>

              <div className="flex-1 relative">
                <div className="absolute -top-4 -left-5 opacity-10 text-[#e91e63] text-[90px] leading-none select-none z-0 mx-8">
                  &ldquo;
                </div>
                <div className="relative z-10">
                  <p className="text-gray-800 italic text-sm leading-relaxed mx-auto">
                    Don't be blinded by large welcome bonuses with high percentages. The most important thing is always to check the wagering requirement. A 100% bonus with 25x wagering requirement is much better than a 300% bonus with 50x requirement. I always recommend choosing casinos that offer 'parachute bonuses' where you can withdraw your own money at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-800 border-collapse border border-[#a7c3f2]">
              <thead className="bg-slate-800 text-white uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">Criterion </th>
                  <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">MGA license (Malta)</th>
                  <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">Curacao license</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Level of regulation</td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    Strictly regulated (EU standard).
                  </td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    More lightly regulated.
                  </td>
                </tr>
                <tr className="bg-[#E1EFFF]">
                  <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Player protection</td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    Strong requirements for responsible gaming, complaint schemes and deposit limits.
                  </td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    Fewer requirements for responsible gaming, varies between operators.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Reputation</td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    Very high - MGA is considered a "gold standard" for safety.
                  </td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    Okay reputation, but varying. Serious operators exist, but historically more rogue operators under Curacao.
                  </td>
                </tr>
                <tr className="bg-[#E1EFFF]">
                  <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Payment solutions</td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    Usually offers regular currencies (NOK, EUR) and traditional payment methods. Cryptocurrency is rarely allowed under the MGA.
                  </td>
                  <td className="px-4 py-4 border border-[#a7c3f2]">
                    Often allows cryptocurrency and has flexibility on payment methods. NOK is supported by many, but transactions often go via international solutions.
                  </td>
                </tr>

              </tbody>
            </table>

          </div>

          <p className="text-gray-700 mb-4 mt-8">
            As the table above suggests, an MGA license generally provides the greatest security for you as a player. MGA-licensed casinos must meet strict requirements for fair gaming and responsible operations. On the other hand, a Curacao license doesn't necessarily mean that the casino is unsafe - many new casinos with a Curacao license are serious operators with good products. What's important is to make sure that the casino has a valid license at all. Steer clear of sites that don't provide any licensing information; these operate without government oversight, which can put you at risk of fraud or trouble.
          </p>

          <div className="bg-[#f0f4ff] p-6 rounded-lg mt-8 border border-[#c3dafe]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#E1007A] flex-shrink-0 mt-1 lg:mx-4 mx-auto" />
              <p className="text-sm text-gray-800">
                An additional thing to note for Norwegian players is that winnings won at casinos licensed within the EU/EEA (such as MGA) can be tax-free under Norwegian rules, while winnings from Curacao (outside the EEA) are formally taxable above a certain amount. Most hobby gamblers may not actively consider this, but it's worth being aware of.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
