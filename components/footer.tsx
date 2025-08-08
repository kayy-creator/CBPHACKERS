import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { WhatsappIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link
              href="https://wa.me/447903492507"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">WhatsApp</span>
              <WhatsappIcon className="h-6 w-6" />
            </Link>
            <Link
              href="tel:+13123443771"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Phone</span>
              <Phone className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:cyberpunk77220@gmail.com"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-center text-base text-muted-foreground md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} CBPHACKERS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
