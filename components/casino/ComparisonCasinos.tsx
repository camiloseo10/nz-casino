"use client"

import Image from "next/image"
import { Brain, Eye, UserCheck, Zap, Smartphone, Lightbulb, Scale, Star } from "lucide-react"

export default function ComparisonCasinos() {
    return (
        <section id="comparison-casinos" className="mb-16">
            <div>
                <div className="flex items-center mb-6 pt-14">
                    <Scale className="w-6 h-6 text-[#e91e63] mr-2" />
                    <h2 className="lg:text-4xl text-xl font-bold text-gray-900">Comparison: New vs. established casinos</h2>
                </div>

                <p className="text-gray-700 text-base mb-6 max-w-3xl">

                    When faced with the choice between a brand new casino or an established player that has been in the market for years, which should you choose? Here we compare the pros and cons of both options, so you can make an informed choice based on what's most important to you as a player.
                </p>

                {/* AI Overview Section */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2 mb-10">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full  bg-[#e91e63]  flex items-center justify-center flex-shrink-0 mr-3">
                            <Scale className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
                            Pros and Cons of New Casinos
                        </h3>
                    </div>

                    <p className="text-gray-700 mb-4">
                        Let's set up a comparative table to clarify the differences between new and established casinos:
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-gray-800 border-collapse border border-[#a7c3f2]">
                            <thead className="bg-slate-800 text-white uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">Factor</th>
                                    <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">New casinos 2025</th>
                                    <th className="px-4 py-3 border border-[#a7c3f2] font-semibold text-left">Established casinos</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Bonuses</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        Often offer <strong>generous welcome packages</strong> to attract new players. May include up to 200% match bonuses or large amounts of free spins.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        Generally more moderate, but may include <strong>better loyalty programs</strong> for long-term players.
                                    </td>
                                </tr>
                                <tr className="bg-[#E1EFFF]">
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Game selection</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        May start with fewer games, but often include the <strong>newest titles</strong> and innovative mechanics.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        <strong>Extensive libraries</strong> with thousands of games, but may lack the latest innovations.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Technology</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        Built on <strong>modern platforms</strong>, often HTML5-optimized from day one with better mobile performance.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        May rely on older systems, even if upgraded—sometimes with less effective results.
                                    </td>
                                </tr>
                                <tr className="bg-[#E1EFFF]">
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Reliability</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        Untested, often lack long-term history proving stability and fair play.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        Have <strong>built up trust</strong> through years of operation and established reputations among players.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Payment methods</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        Often more open to <strong>new solutions</strong> like crypto and modern e-wallets.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        May be slower to adopt new payment tech, but often offer <strong>stable and proven systems</strong>.
                                    </td>
                                </tr>
                                <tr className="bg-[#E1EFFF]">
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Customer service</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        May have less experienced teams, but often show <strong>high motivation</strong> to impress new players.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        <strong>Experienced support agents</strong> with thorough training, though may have longer wait times due to higher volumes.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">Promotions</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        <strong>Creative and innovative</strong> promotions to stand out in the market.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        More <strong>predictable and regulated</strong> campaigns that have been tested over time.
                                    </td>
                                </tr>
                                <tr className="bg-[#E1EFFF]">
                                    <td className="px-4 py-4 border border-[#a7c3f2] font-medium text-gray-900">VIP program</td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        Often <strong>ambitious programs</strong> that may lack depth or experience in delivering VIP treatment.
                                    </td>
                                    <td className="px-4 py-4 border border-[#a7c3f2]">
                                        <strong>Well-established and proven</strong> VIP systems with dedicated account managers for high rollers.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <p className="text-gray-700 mb-4 pt-4">

                        As you can see from the table, new casinos have their clear strengths, especially when it comes to bonuses, technology and innovation. On the other hand, established players provide a security and predictability that some players appreciate.
                    </p>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* AR Box */}
                        <div className="bg-[#2250CB] text-white p-6 rounded-md shadow-sm">
                            <div className="flex items-center mb-2">
                                <span className="text-white mr-2">👍</span>
                                <h4 className="font-bold text-white">
                                    Advantages of new casinos</h4>
                            </div>
                            <ul className="list-disc list-inside text-sm  space-y-2">
                                <li>Bigger welcome bonuses and generous promotions</li>
                                <li>Latest technology and modern user interfaces</li>
                                <li>Innovative game concepts and gamification</li>
                                <li>Often better mobile experience from the start</li>
                            </ul>

                        </div>

                        {/* Desventajas Box */}
                        <div className="bg-[#e1007a] text-white p-6 rounded-md shadow-sm">
                            <div className="flex items-center mb-2">
                                <span className="text-white mr-2">👎</span>
                                <h4 className="font-bold text-white">
                                    Disadvantages of new casinos</h4>
                            </div>
                            <ul className="list-disc list-inside text-sm  space-y-2">
                                <li>Lack of documentation and long-term history</li>
                                <li>May have less experienced customer service teams</li>
                                <li>Potential "teething problems" in the platform</li>
                                <li>Fewer user reviews to base choices on</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* SECTION: Future */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-10">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0 mr-3">
                            <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
                            The future of new casinos in Norway
                        </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Looking ahead to the end of 2025 and into 2026, there are several interesting developments to be aware of in the Norwegian casino world:
                    </p>
                    <ul className="list-disc list-inside text-gray-800 space-y-3">
                        <li>
                            <span className="font-bold">Increased focus on responsible gambling:</span> New casinos are expected to implement more advanced tools to detect and prevent problematic gambling behavior.
                        </li>
                        <li>
                            <span className="font-bold">More personalized experiences:</span> With AI, the casino experience will be more tailored, including games, bonuses, and features.
                        </li>
                        <li>
                            <span className="font-bold">Rising social features:</span> Casino games will be more social, with ways to play together, share wins, or interact in real-time.
                        </li>
                        <li>
                            <span className="font-bold">Sustainability becomes important:</span> Many new casinos show social responsibility with carbon neutrality and charitable support.
                        </li>
                    </ul>



                </div>

                {/* SECTION: Future */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-10">
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#e91e63] flex items-center justify-center mr-3">
                            <Star className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
                            Conclusion
                        </h3>
                    </div>
                    <p className="mb-4">
                        New Casino 2025 represents an exciting blend of innovation, generosity and technological advancement. They bring with them fresh ideas, competitive bonuses and modern gaming experiences that challenge the established players and benefit you as a player.
                    </p>
                    <p className="mt-4 mb-4">When embarking on a new casino, remember to:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Check the license information to ensure you are playing at a safe and regulated site.
                        </li>
                        <li>
                            Carefully read the bonus terms and conditions to understand what you actually get.
                        </li>
                        <li>
                            Thoroughly explore the game selection to find your new favorites.
                        </li>
                    </ul>
                    <p className="mt-4">
                        With the knowledge from this guide, you'll be well equipped to navigate the ever-growing landscape of new Norwegian casinos in 2025. Whether you're looking for the best bonuses, the latest in gaming technology, or just a safe and entertaining gaming experience, there's bound to be a new casino out there that's perfect for you.
                    </p>
                    <p className="mt-4 font-bold">
                        Good luck with your gaming, and remember that the most important thing is always to have fun!</p>


                </div>
            </div>
        </section>
    )
}
