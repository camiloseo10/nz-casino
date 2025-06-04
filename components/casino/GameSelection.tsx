"use client"

import Image from "next/image"
import { Gamepad2, Tv, Smartphone, Sparkles, Clock, Trophy, Signal } from "lucide-react"

export default function GameSelection() {
    return (
        <section id="game-selection" className="mb-16">
            {/* SECTION: Game Variety */}

            <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0 mr-3">
              <Gamepad2 className="w-6 h-6 text-[#e91e63]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
              Game selection at new casinos
            </h3>
          </div>
            <p className="text-gray-700 text-base mb-6 max-w-3xl">
                One major advantage of trying a new casino is the chance to explore a fresh game selection. Many new casinos focus on slots, and thousands of titles are available thanks to partnerships with major developers. Here's what you can expect from the best new casinos in 2025.
            </p>

            {/* SECTION: Modern Slots */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2 mb-10">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full  bg-[#e91e63]  flex items-center justify-center flex-shrink-0 mr-3">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
                        Modern slot machines and jackpot games
                    </h3>
                </div>
                <p className="text-gray-700 mb-4">
                    Slots dominate online casinos, and new platforms are no exception. You’ll find everything from classic fruit slots to video slots with cinematic graphics and bonus features.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Classic fruit slots:</strong> perfect for simple, nostalgic gameplay.</li>
                    <li><strong>Video slots:</strong> modern themes, slick graphics, and bonus mechanics.</li>
                    <li><strong>Megaways:</strong> a random-reel mechanic that offers up to 117,649 ways to win.</li>
                    <li><strong>Progressive jackpots:</strong> massive payouts in games like Mega Moolah and Divine Fortune.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    Most new casinos collaborate with several game providers to offer a wide selection. Expect to see big names like <strong>NetEnt</strong>, <strong>Play’n GO</strong>, <strong>Pragmatic Play</strong>, <strong>Yggdrasil</strong>, and others.
                </p>
                <p className="text-gray-700 mb-6">
                    Keep an eye out for <strong>exclusive games</strong> and time-limited slots that debut on new platforms before older ones.
                </p>

                {/* Game Providers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-800">
                    {/* NetEnt */}
                    <div className="border rounded-lg p-4 text-center">
                        <Image src="/logos/netent-logo.png" alt="NetEnt logo" width={100} height={100} className="mx-auto mb-2" />
                        <hr className="my-2" />
                        <p className="font-bold text-[#1e3a8a] mb-2">NetEnt</p>
                        <ul className="text-left list-disc list-inside text-sm text-gray-800 space-y-1 marker:text-[#e1007a]">
                            <li>Starburst</li>
                            <li>Gonzo’s Quest</li>
                            <li>Dead or Alive 2</li>
                        </ul>
                    </div>

                    {/* Pragmatic Play */}
                    <div className="border rounded-lg p-4 text-center ">
                        <Image src="/logos/pragmaticplay-logo.png" alt="Pragmatic Play logo" width={250} height={250} className="mx-auto mb-6" />
                        <hr className="my-2" />
                        <p className="font-bold text-[#1e3a8a] mb-2">Pragmatic Play</p>
                        <ul className="text-left list-disc list-inside text-sm text-gray-800 space-y-1 marker:text-[#e1007a]">
                            <li>Gates of Olympus</li>
                            <li>Sweet Bonanza</li>
                            <li>Wolf Gold</li>
                        </ul>
                    </div>

                    {/* Play’n GO */}
                    <div className="border rounded-lg p-4 text-center">
                        <Image src="/logos/playngo-logo.png" alt="Play'n GO logo" width={120} height={120} className="mx-auto mb-6 mt-6" />
                        <hr className="my-2" />
                        <p className="font-bold text-[#1e3a8a] mb-2">Play’n GO</p>
                        <ul className="text-left list-disc list-inside text-sm text-gray-800 space-y-1 marker:text-[#e1007a]">
                            <li>Book of Dead</li>
                            <li>Reactoonz</li>
                            <li>Rise of Olympus</li>
                        </ul>
                    </div>
                </div>


                <p className="text-gray-700 mb-4 pt-6">
                    Because new casino sites often work with a number of different game developers, you can find a varied selection from both the well-known giants and smaller niche providers. You'll see popular names like NetEnt, Play'n GO, Pragmatic Play, Microgaming (Games Global), Yggdrasil and Quickspin behind many of Norway's favorite slots. In addition, new innovative studios are constantly emerging and many new casinos are eager to include their games to offer something unique. In 2025, we hear a lot about developers like Nolimit City (known for extremely volatile and entertaining games), Relax Gaming, Hacksaw Gaming, Push Gaming and more. These are creating games with cool new features and themes that can surprise even experienced players.</p>
                <div className="bg-[#f0f4ff] p-2 pt-4 pb-4  rounded-lg mt-8 border border-[#c3dafe]">
                    <div className="flex items-start gap-3">

                        <Trophy className="w-5 h-5 text-[#E1007A] flex-shrink-0 mt-1 mx-4" />

                        <p className="text-sm text-gray-800">

                            In short, the game selection at a new casino will rarely disappoint if you love slots. Feel free to check which providers are available - a long list often indicates a wide selection. And don't forget to try some of the latest titles; new casinos are usually the first to launch and may even have some exclusive games temporarily unavailable elsewhere.
                        </p>

                    </div>
                </div>
            </div>

            {/* SECTION: Live Casino */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-2 p-2 mb-10">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full  bg-[#e91e63]  flex items-center justify-center flex-shrink-0 mr-3">
                        <Tv className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
                        Live casino and streaming technology
                    </h3>
                </div>
                <p className="text-gray-700 mb-4 pt-6">
                    Live casino has become mandatory in modern online casino and the new players in 2025 integrate this seamlessly. Live casino means playing classic table games such as blackjack, roulette, baccarat or poker with a real dealer via live video. Leading providers here are Evolution Gaming, Pragmatic Play Live, Ezugi and others, and new casino sites usually make sure to offer a solid live selection from day one.</p>
                <Image src="/nzcasino-home.webp" alt="Live Casino" width={1000} height={1000} className="rounded-lg mb-4" />
                <p className="text-gray-700 mb-6">

                    At new casinos, you can expect several variations of the popular games - e.g. different types of roulette (European, French, Double Ball, Lightning Roulette with multipliers), several types of blackjack tables with different stakes, and baccarat for those who like it. In addition, gameshows have become a big trend: These are live games with a game show format, such as Crazy Time, Monopoly Live, Lightning Dice, Dream Catcher and many others. These combine luck with entertainment and interactivity, appealing to both casino fans and people who like the TV show feel. New casinos in 2025 will almost certainly have a selection of gameshow games from Evolution or similar, as these are in high demand among players.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 mb-6">
                    {/* Lightning Roulette */}
                    <div className="flex items-start gap-4 border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                        <Image
                            src="/logos/roulette.jpg" // asegúrate que el archivo está en /public o configurado
                            alt="Lightning Roulette"
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                        />
                        <div>
                            <p className="font-bold text-[#1d4ed8]">Lightning Roulette</p>
                            <p className="text-[#e1007a] text-xs mb-1">Evolution Gaming</p>
                            <p>Classic roulette with exciting multipliers up to 500x</p>
                        </div>
                    </div>

                    {/* Crazy Time */}
                    <div className="flex items-start gap-6 border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                        <Image
                            src="/logos/crazy-time.jpg"
                            alt="Crazy Time"
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                        />
                        <div>
                            <p className="font-bold text-[#1d4ed8]">Crazy Time</p>
                            <p className="text-[#e1007a] text-xs mb-1">Evolution Gaming</p>
                            <p>Interactive game show with four bonus rounds and massive multipliers</p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-700 mb-4">

                    For those who prefer regular digital table games (RNG versions without a live dealer), there will also be plenty of alternatives: classic blackjack, roulette, video poker, craps and keno in digital variants. But the trend is clear that live dealer games have taken over much of the interest. That's why new casinos are focusing more on integrating a top live casino than having hundreds of boring video poker variants. Some new entrants are also experimenting with live tournaments or lobbies where players can join a waiting list for special tables, providing a more personalized experience.
                </p>
                <div className="bg-[#f0f4ff] p-2 pt-4 pb-4  rounded-lg mt-8 border border-[#c3dafe]">
                    <div className="flex items-start gap-3">
                        <Signal className="w-5 h-5 text-[#E1007A] flex-shrink-0 mt-1 mx-4" />
                        <p className="text-sm text-gray-800">
                            It's worth noting that the quality of live streams is better than ever in 2025 - HD video, multiple camera angles and low latency are standard. So if you haven't tried a live casino in a while, you'll probably be impressed by how smooth and realistic the experiences at the new casinos have become.
                        </p>

                    </div>
                </div>
            </div>

            {/* SECTION: Mobile casino */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full  bg-[#e91e63]  flex items-center justify-center flex-shrink-0 mr-3">
                        <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#e91e63] pb-1">
                        Mobile casinos and responsive design
                    </h3>
                </div>
                <p className="text-gray-700 mb-4">
                    Mobile optimization is a major focus for new casinos. All sites launched in 2025 are built with the latest frameworks and designed for a seamless experience on smartphones.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 mb-6">
                    <div className="border rounded-lg p-4 bg-[#F0F4FF]">
                        <strong>HTML5 technology</strong><br />
                        All games are HTML5-based for instant access without downloads and full compatibility with PC, laptop, tablet and phone.
                    </div>
                    <div className="border rounded-lg p-4 bg-[#F0F4FF]">
                        <strong>Fully mobile-ready</strong><br />
                        New sites are fully responsive, adapting to any screen size and offering easy navigation.
                    </div>

                </div>
                <p className="text-gray-700 mb-4">
                    In practice, you can sign up, deposit, play and withdraw winnings right from your smartphone without any problems. Many new casino sites run just as smoothly on mobile as on desktop. Some even offer dedicated mobile apps or so-called progressive web apps, but as a rule there's no need to download anything - in-browser play works just fine. The fact that HTML5 has taken over also offers the advantage of faster loading times and fewer crashes than in the old days. In short, new casinos are putting a lot of emphasis on being able to play anywhere, anytime, especially as the majority of Norwegian casino players now prefer mobile.
                </p>

                <div className="bg-[#f0f4ff] p-6 rounded-lg border border-[#c3dafe] flex items-center gap-4 flex-col lg:flex-row">
                    <Image src="/mobile-casino.webp" alt="Mobile Casino" width={250} height={250} className="rounded-md" />
                    <div>
                        <h4>
                            <span className="text-gray-800 font-bold ">Modern user experience</span>
                        </h4>
                        <p className="text-sm text-gray-800">
                            Modern design isn't just about looking good, it's also about user experience (UX). New casino websites are often designed by teams who have learned from their predecessors what works and what doesn't.

                            That's why you'll often see a clean and intuitive user interface in the new players. Navigation menus are clear, it's easy to filter and search for games, and all important information about bonuses, terms and conditions and customer service is presented clearly.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
