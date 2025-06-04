import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CasinoCardProps {
  name: string
  image: string
  rating: number
  bonus: string
}

export function CasinoCard({ name, image, rating, bonus }: CasinoCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-border hover:border-primary/50 transition-colors">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-md flex items-center">
          <Star className="h-3 w-3 mr-1 fill-white" />
          {rating}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="bg-secondary/20 p-3 rounded-md mb-4">
          <p className="text-sm font-medium">Welcome Bonus:</p>
          <p className="text-primary font-bold">{bonus}</p>
        </div>
        <ul className="space-y-2 text-sm mb-4">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-2 text-primary"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Fast Withdrawals
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-2 text-primary"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Mobile Friendly
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-2 text-primary"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            24/7 Support
          </li>
        </ul>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="w-full bg-primary hover:bg-primary/90">Visit Casino</Button>
        <Button variant="outline" className="w-full">
          Read Review
        </Button>
      </CardFooter>
    </Card>
  )
}
