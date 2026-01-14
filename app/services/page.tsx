import type { Metadata } from "next";
import { services } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - DUPLOX",
  description: "Full-funnel digital marketing services: Social media management, performance ads, and Shopify development. Data-driven strategies that convert.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Full-funnel presence + conversion. We don't just create content—we build digital ecosystems that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <Card key={service.id} className="overflow-hidden hover:border-primary/50 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className={`bg-gradient-to-br from-primary/10 to-background flex items-center justify-center p-16 border-b lg:border-b-0 ${idx % 2 === 1 ? 'lg:order-2 lg:border-l' : 'lg:border-r'} border-border`}>
                    <div className="text-center">
                      <h3 className="text-6xl font-bold gradient-red-text">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl mb-3">{service.title}</CardTitle>
                      <CardDescription className="text-lg">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-4 text-lg">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-primary mt-1 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Our Strategy Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We're not just posting—we're building a system: content → ads → landing/Shopify → analytics → iteration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Data-Led Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We study user behaviors to create data-informed brand narratives that resonate with your audience.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">User-Focused Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every touchpoint is optimized to serve real user needs, creating genuine connections that convert.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Omnichannel Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We meet your users across relevant digital platforms seamlessly, creating a cohesive brand experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss which services are right for your brand and create a custom strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="xl" className="group">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/work">
              <Button size="xl" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
