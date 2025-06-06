"use client"

import Image from "next/image"
import { CreditCard, Clock, Wallet, Smartphone, Banknote } from "lucide-react"

export default function TechnologicalSolutions() {
  return (
    <section id="technological-solutions" className="mb-16">
      <div>
        <div className="flex items-center gap-4 mb-6 mt-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-[#e91e63]" />
            </div>
            <h3 className="text-xl font-bold border-b-2 border-[#e91e63] pb-1">Payment Methods and Technological Solutions</h3>
          </div>

        <p className="text-gray-700 text-base mb-6 max-w-3xl">
          A casino isn’t much good if you can’t easily transfer money in and out. Luckily, payment methods are an area where new casinos really try to shine. They know that Kiwi players have faced challenges with transactions due to restrictions, so they strive to offer flexible solutions. Here we go through the most common deposit and withdrawal options you’ll find at new casinos in New Zealand in 2025 — including both traditional methods, e-wallets, mobile solutions and new alternatives like cryptocurrency.
        </p>

        {/* Section 1 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2 mb-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0 mr-3">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
              Traditional payment methods (VISA, MasterCard)
            </h3>
          </div>

          <p className="text-gray-700 mb-4">
            Credit and debit cards remain among the most commonly used payment methods online, and new casinos naturally support <strong>Visa</strong> and <strong>Mastercard</strong> for deposits. However, keep in mind: some New Zealand banks have been known to block direct gambling transactions due to local regulations. This means your card may be declined, even if the casino itself accepts Visa/Mastercard. Some casinos work around this by processing payments via intermediaries or virtual card services like AstroPay.
          </p>

          {/* Expert Box */}
         <div className="bg-[#e1efff] lg:p-6 p-4 rounded-xl mb-8 shadow-sm">
                     <div className="flex items-center mb-4">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-6 h-6 text-[#e91e63] mr-2">
                         <path d="M16.6 6C10.6 6 6 11.3 6 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Zm23 0C33.6 6 29 11.3 29 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Z" />
                       </svg>
                       <h4 className="text-lg font-bold text-gray-900">Freya's expert opinion on welcome bonuses</h4>
                     </div>
         
                     <div className="flex flex-col items-center justify-center md:flex-row items-start gap-6 relative">
                       <div className="flex-shrink-0 text-center">
                         <div className="p-0.5 bg-white border border-white shadow-sm rounded-[10px]">
                           <Image src="/logos/expert-experience-fryla.webp" alt="Freya Lind" width={150} height={150} className="object-cover w-[150px] h-[150px] rounded-[10px]" />
                         </div>
                         <p className="font-bold mt-3 text-lg text-gray-900">Freya Lind</p>
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

          {/* Method Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm text-gray-800">
            <div className="border rounded-lg p-3">
              <strong className="text-base">VISA</strong><br />

              Deposit:  <strong>Instant</strong> <br />
              Withdrawal: <strong>1–3 days</strong>
            </div>
            <div className="border rounded-lg p-3">
              <strong className="text-base">MasterCard</strong><br />
              Deposit: <strong>Instant</strong> <br />
              Withdrawal: <strong>1–3 days</strong>
            </div>
            <div className="border rounded-lg p-3">
              <strong className="text-base">Bank Transfer</strong><br />
              Deposit: <strong>1–3 days</strong> <br />
              Withdrawal: <strong> 2–5 days </strong>
            </div>
            <div className="border rounded-lg p-3">
              <strong className="text-base">AstroPay</strong><br />
              Deposit: <strong>Instant</strong> <br />
              Withdrawal: <strong> 1–2 days</strong>
            </div>
          </div>

          <p className="text-gray-700 text-sm">
            Direct bank transfers to casinos are often difficult due to the same restrictions. But new solutions are emerging: some casinos now offer instant transfers via third-party services like Trustly, where you log in with your bank ID and transfer via an intermediary. In New Zealand, services like Zimpler (formerly popular but now phased out), Brite, and Volt are becoming common. Some casinos even allow withdrawals to be processed differently than deposits — meaning your winnings may be paid to your account even if the deposit method failed.
          </p>


          <div className="bg-[#f0f4ff] p-2 pt-4 pb-4 mx-auto rounded-lg mt-8 border border-[#c3dafe]">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#E1007A] flex-shrink-0 mt-1 mx-4" />
              <div >
                <h4 className="font-bold text-gray-800 mb-2">Processing times for traditional methods</h4>
                <p className="text-sm text-gray-800">
                  Card transactions are typically instant for deposits, and most casinos require a minimum deposit of around NZ$10. Withdrawals to Visa/Mastercard can take several days. Many players find this too slow, which is why more are turning to e-wallets for faster payouts. Keep in mind that delays with NZ-issued cards often come from the bank side.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0 mr-3">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
              Digital wallets and modern alternatives (MiFinity, Neosurf)
            </h3>
          </div>

          <p className="text-gray-700 mb-6">
            E-wallets have long been a favorite for Kiwi casino players because they often bypass bank restrictions. New casinos in 2025 typically support a selection of these services. Some of the most common are:
          </p>



          <div className="bg-[#e8f3ff] border-l-4 border-[#8ab4f8] rounded-lg px-6 py-5 mb-8">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-10 h-10 text-[#3b82f6] mr-2 mt-1">
                <path d="M6.873 3.097C4.097 5.2 2 8.205 2 12h4c0-2.372 1.555-4.463 3.684-5.222A6.994 6.994 0 016.873 3.097zm8 0C12.097 5.2 10 8.205 10 12h4c0-2.372 1.555-4.463 3.684-5.222A6.994 6.994 0 0114.873 3.097z" />
              </svg>
              <p className="italic text-l text-gray-900">
                Sending money to a casino is now as easy as sending funds to a friend. With e-wallets, you can move money to your account in seconds — and withdraw winnings faster than most other methods.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 text-sm text-gray-800">
            <div className="border rounded-lg p-2 pt-4 pb- 2 flex gap-4">
              <div className="w-10 h-10   flex items-center justify-center mt-1">
                <Wallet className="w-5 h-5 text-[#e1007a]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Skrill & Neteller</p>
                <p>
                  These have been around forever and let you fund your casino account without using a credit card. Just top up your wallet and send it from there.<br />
                  <span className="font-semibold text-gray-700">Speed:</span> ⚡ Instant deposits, withdrawals within hours
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-2 pt-4 pb-2 flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center mt-1">
                <CreditCard className="w-5 h-5 text-[#e1007a]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">ecoPayz</p>
                <p>
                  Another global e-wallet often accepted at new casinos.<br />
                  <span className="font-semibold text-gray-700">Speed:</span> ⚡ Instant deposits, fast withdrawals
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-2 pt-4 pb-2 flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center mt-1">
                <Smartphone className="w-5 h-5 text-[#e1007a]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">MuchBetter</p>
                <p>
                  A mobile-first e-wallet that has become popular in Europe. Many new casinos now offer it for both deposits and withdrawals.<br />
                  <span className="font-semibold text-gray-700">Speed:</span> ⚡ Instant via mobile number
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-2 pt-4 pb-2 flex gap-4">
              <div className="w-10 h-10  flex items-center justify-center mt-1">
                <Banknote className="w-5 h-5 text-[#e1007a]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">MiFinity & Jeton</p>
                <p>
                  Newer e-wallets that are gaining traction at modern casinos. Often allow for IBAN-free transfers.<br />
                  <span className="font-semibold text-gray-700">Speed:</span> ⚡ Instant deposits, fast withdrawals
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
