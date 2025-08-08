import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KeyRound, Wallet, ShieldAlert } from "lucide-react";

const services = [
  {
    icon: <KeyRound className="h-10 w-10 text-primary" />,
    title: "Account & Asset Recovery",
    description: "We specialize in helping you regain access to your locked wallets and accounts through advanced, secure methods.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-primary" />,
    title: "Wallet Setup & Security",
    description: "Receive expert guidance on setting up new wallets, securing your seed phrases, and implementing best practices to protect your crypto assets.",
  },
  {
    icon: <ShieldAlert className="h-10 w-10 text-primary" />,
    title: "Fraud Investigation",
    description: "If you've been a victim of a scam or hack, our team can trace transactions and analyze blockchain data to help you understand what happened.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a range of specialized services to solve your crypto challenges.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
