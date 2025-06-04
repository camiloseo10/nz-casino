"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <h3 className="font-bold mb-1">Information Cookies</h3>
          <p>
            We use cookies to improve your experience, analyze traffic, and for advertising purposes. By clicking
            "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={() => setIsVisible(false)}
            className="bg-[#e6007e] hover:bg-[#e6007e]/90 text-white"
          >
            Accept All
          </Button>
        </div>
      </div>
      <div className="container mx-auto mt-2">
        <Button variant="link" size="sm" className="text-blue-600 p-0 h-auto">
          Adjust Settings
        </Button>
      </div>
    </div>
  )
}
