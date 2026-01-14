"use client";

import { useState } from "react";
import { caseStudies } from "@/data/case-studies";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Social", "Ads", "Shoots", "Shopify"] as const;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredCaseStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Real results for real brands. Explore how we've helped businesses grow through strategic content, performance ads, and digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-lg bg-background/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="hover:shadow-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-background relative overflow-hidden border-b border-border">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                    {study.category === "Social" && "📱"}
                    {study.category === "Ads" && "🎯"}
                    {study.category === "Shoots" && "📸"}
                    {study.category === "Shopify" && "🛒"}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {study.category}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{study.description}</CardDescription>
                </CardHeader>
                {study.metrics && (
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-3 rounded-lg bg-muted border border-border">
                          <p className="text-2xl font-bold gradient-red-text">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    {study.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {study.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's create a success story for your brand. Book a free consultation to get started.
          </p>
          <Link href="/contact">
            <Button size="xl" className="group">
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
