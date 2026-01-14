import type { Metadata } from "next";
import { processSteps } from "@/data/process";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Users as UsersIcon, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - DUPLOX",
  description: "Meet DUPLOX. We're a next-gen creative and media agency focused on building digital ecosystems that convert.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              About DUPLOX
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              We're a next-gen creative and media agency built for brands that want impact, not just attention.
            </p>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              <div className="text-center">
                <p className="text-4xl font-bold gradient-red-text">100K+</p>
                <p className="text-muted-foreground">People Reached Monthly</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold gradient-red-text">15+</p>
                <p className="text-muted-foreground">Brands Elevated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We blend strategy, storytelling, and smart design to grow brands online and create digital ecosystems that convert.
              Our promise is simple: <span className="font-semibold gradient-red-text">Focus on profits, we'll handle presence.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data-Led Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We study user behaviors to create data-informed brand narratives that truly resonate with your target audience.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>User-Focused Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every touchpoint is optimized to serve real user needs, creating meaningful connections that convert.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Omnichannel Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We meet your users across relevant digital platforms seamlessly, building a cohesive brand experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-step method that transforms brands from presence to performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <Card key={step.id} className="relative overflow-hidden hover:border-primary/50 transition-all h-full">
                <div className="absolute top-0 left-0 w-full h-1 gradient-red" />
                <CardHeader className="pb-4 pt-6 px-6">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6 px-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {step.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 gradient-red">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Let's create something amazing together. Book a free consultation to discuss your goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="group shadow-xl bg-white text-primary hover:bg-white/90">
              Book a Free Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

