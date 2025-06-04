"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"

interface TocItem {
  id: string
  text: string
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([])

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2"))
      .filter((h) => h.id)
      .map((h) => ({
        id: h.id,
        text: h.textContent || "",
      }))

    setToc(headings)
  }, [])

  return (
    <aside className="lg:col-span-3 w-full">
      <div className="bg-white rounded-2xl p-8 shadow-md sticky top-8 max-h-[90vh]">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Table of Contents</h3>
        <nav className="space-y-4">
          {toc.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center text-gray-700 hover:text-[#e91e63] transition-colors"
            >
              <FileText className="w-6 h-6 mr-3 text-[#E71E62]" />
              <span className="text-sm">{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
