import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { WhatsappIcon } from "./icons";

export function Hero() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Expert Cryptocurrency Support When You Need It Most
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Struggling with wallet access, lost funds, or security concerns? Our team of specialists is here to provide professional, reliable assistance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="https://wa.me/447903492507" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-5 w-5" />
                WhatsApp
              </Link>
            </Button>
            <Button asChild size="lg" variant="default">
              <Link href="tel:+13123443771">
                <Phone className="mr-2 h-5 w-5" />
                Call or Text Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="mailto:cyberpunk77220@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
