import { Lock, CheckCircle, Fingerprint, Shield, CircleHelp, Clock, TriangleAlert } from "lucide-react"
import Image from "next/image"
import { ReactNode } from "react"

interface CardProps {
  icon: ReactNode
  title: string
  text: string
}

function SecurityCard({ icon, title, text }: CardProps) {
  return (
    <div className="bg-[#f1f7ff] border border-[#cce0ff] rounded-lg p-4">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">{icon}</div>
        <div>
          <p className="font-bold text-gray-800 mb-1">{title}</p>
          <p className="text-sm text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  )
}

function GamblingToolCard({ icon, title, text }: CardProps) {
  return (
    <div className="bg-[#f1f7ff] border border-[#cce0ff] rounded-lg p-4 text-center">
      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white flex items-center justify-center">{icon}</div>
      <p className="font-bold text-gray-800 mb-1">{title}</p>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  )
}

export default function CasinoSecuritySection() {
  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-2 p-2 mt-12 mx-auto">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0 mr-3">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold border-b-2 border-[#e91e63] pb-1">SSL encryption and data security</h3>
        </div>

        <p className="text-gray-700 mb-6">
          Regardless of its license, a new casino in 2025 will almost always adopt modern security technology to protect its players. Here are some of the security measures you can expect:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <SecurityCard icon={<Lock className="w-5 h-5 text-[#e1007a]" />} title="SSL encryption" text="All serious casinos start with HTTPS and a lock icon in the address bar. This ensures your data is encrypted and safe from interception." />
          <SecurityCard icon={<CheckCircle className="w-5 h-5 text-[#e1007a]" />} title="Fair gaming (RNG)" text="Slots and table games rely on RNG software to ensure fair outcomes, tested by independent third parties." />
          <SecurityCard icon={<Fingerprint className="w-5 h-5 text-[#e1007a]" />} title="Privacy & data security" text="New casinos must follow strict EU GDPR rules for storing and processing your personal data securely." />
          <SecurityCard icon={<Shield className="w-5 h-5 text-[#e1007a]" />} title="Payment safety" text="Trusted payment providers and 2FA options are standard among the best new casinos." />
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

        <div className="bg-[#f0f4ff] p-6 rounded-lg border border-[#c3dafe]">
          <div className="flex items-center mb-4">
            <Shield className="w-5 h-5 text-[#e91e63] mr-2" />
            <h4 className="text-base font-bold text-gray-800">Security tips for players</h4>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            <li>Use strong, unique passwords for each casino account</li>
            <li>Enable two-factor authentication where available</li>
            <li>Verify that the casino holds a valid license</li>
            <li>Read the privacy policy carefully</li>
            <li>Use secure payment methods like e-wallets</li>
          </ul>
        </div>

        <p className="text-gray-700 mt-6 text-sm">
          You can always take extra steps to stay safe: use strong passwords, activate two-factor login, and keep your account information private. Most new casinos care about your safety – but it’s smart to be proactive.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm lg:p-4 p-2 mt-12">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0 mr-3">
            <CircleHelp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold border-b-2 border-[#e91e63] pb-1">Tools for Responsible Gambling</h3>
        </div>

        <p className="text-gray-700 mb-6">
          Responsible gambling has become a key issue in the casino industry, and all reliable new casinos in 2025 have clear guidelines for it. Responsible gambling is about giving players tools and information so that gambling remains entertainment and doesn't become a problem. New casinos that are licensed (especially under the MGA) are required to offer certain features:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <GamblingToolCard icon={<Clock className="w-5 h-5 text-[#3b82f6]" />} title="Deposit Limits" text="Set daily, weekly, or monthly deposit limits" />
          <GamblingToolCard icon={<TriangleAlert className="w-5 h-5 text-[#3b82f6]" />} title="Self-Exclusion" text="Take a break or close your account permanently if needed" />
          <GamblingToolCard icon={<CircleHelp className="w-5 h-5 text-[#3b82f6]" />} title="Reality Checks" text="Reminders of how long you've played and how much you've wagered" />
        </div>

        <div className="bg-[#e8f0ff] p-6 rounded-lg border border-[#c3dafe] mb-6 mx-auto">
          <h4 className="font-bold text-gray-800 mb-2">Support Resources for Players</h4>
          <p className="text-sm text-gray-700">
            In New Zealand, regulations on gambling harm are strict, and even new online casinos operating from abroad are expected to act responsibly toward local players. Many new platforms train their support staff to identify risky behavior and may reach out or take action if something seems off.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">Gambling Helpline NZ</button>
            <button className="bg-[#e91e63] text-white px-4 py-2 rounded-md text-sm">Self-assessment test</button>
          </div>
        </div>

        <p className="text-gray-800 text-sm font-medium">
          Remember: Responsible gambling starts with you. Use the tools available and never gamble more than you can afford to lose.
        </p>
      </div>
    </>
  )
}
