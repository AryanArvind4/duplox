"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import { clients } from "@/data/clients";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const clientLogos = clients.reduce<Record<string, string | undefined>>(
  (acc, client) => {
    acc[client.name.toLowerCase()] = client.logo;
    return acc;
  },
  {}
);

export function FeaturedWork() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 md:space-y-12">
          {/* Heading */}
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured Work
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Real results for real brands. See how we've helped businesses grow.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {caseStudies.slice(0, 4).map((study, idx) => {
              const logo = clientLogos[study.client.toLowerCase()];
              return (
                <div key={study.id}>
                  <Card className="group h-full cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                    {/* Thumbnail */}
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-primary/5 to-background">
                      {logo ? (
                        <div className="relative h-16 w-40 sm:h-20 sm:w-48">
                          <Image
                            src={logo}
                            alt={study.client}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 180px, 220px"
                            priority={idx < 2}
                          />
                        </div>
                      ) : (
                        // No emojis fallback: keep it clean
                        <div className="h-10 w-40 rounded-md bg-white/5 border border-white/10" />
                      )}
                    </div>

                    <CardHeader className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {study.category}
                        </span>
                      </div>

                      <CardTitle className="text-xl transition-colors group-hover:text-primary">
                        {study.title}
                      </CardTitle>

                      <CardDescription className="text-sm leading-relaxed">
                        {study.description}
                      </CardDescription>
                    </CardHeader>

                    {study.metrics && (
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="grid grid-cols-2 gap-4">
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="rounded-lg border border-border bg-muted p-4 text-center"
                            >
                              <p className="text-2xl font-bold gradient-red-text">
                                {metric.value}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link href="/work">
              <Button size="lg" className="group">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
