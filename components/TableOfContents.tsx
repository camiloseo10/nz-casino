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
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2"))
      .filter((h) => h.id)
      .map((h) => ({
        id: h.id,
        text: h.textContent || "",
      }))

    setToc(headings)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "0px 0px -70% 0px", // dispara cuando el heading entra en el 30% superior
        threshold: 0.1,
      }
    )

    const headingElements = document.querySelectorAll("h2")
    headingElements.forEach((el) => observer.observe(el))

    return () => {
      headingElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <aside className="lg:col-span-3 sticky top-20">
      <div className="bg-white rounded-2xl p-8 shadow-md max-h-[90vh]">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Table of Contents</h3>
        <nav className="space-y-4">
          {toc.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center transition-colors ${
                activeId === item.id
                  ? "text-[#e91e63] font-semibold"
                  : "text-gray-700 hover:text-[#e91e63]"
              }`}
            >
              <FileText className={`w-6 h-6 mr-3 ${
                activeId === item.id ? "text-[#e91e63]" : "text-gray-500"
              }`} />
              <span className="text-sm">{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
