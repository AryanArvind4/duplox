"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background md:min-h-[85vh]">
      {/* Static red glow background elements - removed animations for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl opacity-30" />
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            className="mx-auto flex max-w-5xl flex-col items-center text-center space-y-8 md:space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Focus on <span className="gradient-red-text">profits</span>,<br />
              we'll handle <span className="gradient-red-text">presence</span>
            </h1>

            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              DUPLOX is a next-gen creative and media agency built for brands that
              want impact, not just attention. We blend strategy, storytelling,
              and smart design to create digital ecosystems that convert.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="group rounded-full px-8">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/work">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-xl grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
                <p className="text-4xl font-bold gradient-red-text">100K+</p>
                <p className="text-sm text-muted-foreground">
                  People reached monthly
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-lg">
                <Users className="h-6 w-6 text-primary" />
                <p className="text-4xl font-bold gradient-red-text">15+</p>
                <p className="text-sm text-muted-foreground">Brands elevated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
