"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
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
              What We Do
            </h2>
            <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
              Full-funnel presence + conversion. We’re not just about posts — we
              build systems that drive results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {services.map((service) => (
              <div key={service.id}>
                <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  <CardHeader className="flex flex-col items-center space-y-4 p-8 text-center">
                    <CardTitle className="text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="group border-primary/50 hover:border-primary"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
