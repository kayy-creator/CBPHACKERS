"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    comment: "I thought I'd lost access to my life savings forever. CBPHACKERS was professional, patient, and helped me get back into my wallet. I can't thank them enough!",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    comment: "After being targeted by a phishing scam, I was devastated. Their investigation team traced the funds and gave me the data I needed for my report. Incredible service.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    comment: "They helped me set up a hardware wallet and understand security best practices. I finally feel confident that my assets are safe. Highly recommended.",
    rating: 5,
  },
    {
    name: "Jessica Davis",
    comment: "The team was so responsive and understanding. They explained everything clearly without technical jargon. A huge weight off my shoulders.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl lg:text-5xl font-headline">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from people we've helped.
          </p>
        </div>
        <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full bg-background shadow-lg">
                        <CardContent className="flex flex-col items-start gap-4 p-6">
                            <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                          <p className="text-base text-muted-foreground italic">"{testimonial.comment}"</p>
                          <span className="font-semibold text-foreground font-headline mt-auto pt-4">{testimonial.name}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  )
}
