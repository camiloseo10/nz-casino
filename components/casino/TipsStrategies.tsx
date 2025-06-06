"use client"

import Image from "next/image"
import { AlertCircle, BadgeCheck, FileCheck2, HandCoins, Scale, Info, Lightbulb, ShieldCheck, UserCheck, CreditCard, Gift } from "lucide-react"

export default function TipsStrategies() {
    return (
        <section id="tips-strategies" className="mb-16">
            {/* Header */}
            <div className="flex items-center mb-6 pt-14">
                <Lightbulb className="w-6 h-6 text-[#e91e63] mr-2" />
                <h2 className="lg:text-4xl text-xl font-bold text-gray-900">Tips and strategies casino in 2025</h2>
            </div>


            {/* Expert Box */}
            <div className="bg-[#e1efff] lg:p-6 p-4 rounded-xl mb-8 shadow-sm">
                <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-6 h-6 text-[#e91e63] mr-2">
                        <path d="M16.6 6C10.6 6 6 11.3 6 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Zm23 0C33.6 6 29 11.3 29 18.2c0 5.4 2.8 9.4 7.5 10.6-.5 3.2-2.2 5.6-5.5 7l1.6 3.4c7.7-2.5 11.9-8.4 11.9-16.9 0-9.1-4.4-16.3-13.9-16.3Z" />
                    </svg>
                    <h4 className="text-lg font-bold text-gray-900">Emily's expert opinion on welcome bonuses</h4>
                </div>

                <div className="flex flex-col items-center justify-center md:flex-row items-start gap-6 relative">
                    <div className="flex-shrink-0 text-center">
                        <div className="p-0.5 bg-white border border-white shadow-sm rounded-[10px]">
                            <Image src="/logos/emily-dawson.webp" alt="Emily Dawson" width={150} height={150} className="object-cover w-[150px] h-[150px] rounded-[10px]" />
                        </div>
                        <p className="font-bold mt-3 text-lg text-gray-900">Emily Dawson</p>
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

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-sm text-gray-800">
                {[
                    { icon: <ShieldCheck className="w-5 h-5 text-[#e91e63]" />, title: "Check the license first", text: "Always verify the license from MGA, UKGC or other trustworthy regulators." },
                    { icon: <FileCheck2 className="w-5 h-5 text-[#e91e63]" />, title: "Review the bonus offer", text: "Understand the wagering requirements before accepting any bonus." },
                    { icon: <BadgeCheck className="w-5 h-5 text-[#e91e63]" />, title: "Verify the game portfolio", text: "A solid casino offers a wide range of popular slots and live dealer games." },
                    { icon: <UserCheck className="w-5 h-5 text-[#e91e63]" />, title: "Test the customer service", text: "Contact support and check response time and friendliness." },
                    { icon: <Info className="w-5 h-5 text-[#e91e63]" />, title: "Read user reviews", text: "Find out what others think about the platform – transparency matters." },
                    { icon: <HandCoins className="w-5 h-5 text-[#e91e63]" />, title: "Explore payment methods", text: "Check if they support fast withdrawals and your preferred methods." }
                ].map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-[#f0f4ff] flex gap-3">
                        <div className="mt-1">{item.icon}</div>
                        <div>
                            <p className="font-bold text-[#1e3a8a] mb-1">{item.title}</p>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Strategy Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
                <div className="flex items-center mb-4">
                    <CreditCard className="w-6 h-6 text-[#e91e63] mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">Smart payment strategies</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                    <li>Use modern e-wallets and crypto for faster and secure withdrawals.</li>
                    <li>Verify your account early to avoid delays when cashing out.</li>
                    <li>Double-check minimum withdrawal limits before you play.</li>
                </ul>
            </div>

            {/* Bonus Tips */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
                <div className="flex items-center mb-4">
                    <Gift className="w-6 h-6 text-[#e91e63] mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">Maximize your bonus</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                    <li>Choose bonuses with low wagering requirements.</li>
                    <li>Look for offers that include free spins or no deposit deals.</li>
                    <li>Use bonus calendars and stay updated on seasonal promotions.</li>
                </ul>
            </div>

            {/* Final Tips */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
                <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-[#e91e63] mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">Additional useful tips</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                    <li>Always play responsibly and stick to your budget.</li>
                    <li>Try out demo versions of games before wagering real money.</li>
                    <li>Compare new casinos before registering – it pays to shop around.</li>
                </ul>
            </div>


        </section>
    )
}
