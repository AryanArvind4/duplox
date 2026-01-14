"use client";

import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function PricingPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your growth stage. No hidden fees, just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className={`h-full ${plan.highlighted ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-xl">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.currency}{plan.price.toLocaleString()}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-base mt-4">{plan.goal}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.slice(0, 5).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 5 && (
                      <li className="text-sm text-muted-foreground">
                        +{plan.features.length - 5} more features...
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/pricing" className="w-full">
                    <Button 
                      className="w-full" 
                      size="lg"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      View Full Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button size="lg" variant="outline" className="group">
              Need Custom Solution?
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

