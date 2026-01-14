"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function Process() {
  return (
    <section className="bg-background py-16 md:py-20">
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
              How We Work
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              A proven 4-step method that transforms your brand from presence to
              performance.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={step.id} className="h-full">
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  {/* Top gradient bar */}
                  <div className="absolute left-0 top-0 h-1 w-full gradient-red" />

                  <CardHeader className="space-y-3 px-6 pt-6 pb-4">
                    <div className="text-5xl font-bold text-primary/20">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>

                    <CardTitle className="text-lg">
                      {step.title}
                    </CardTitle>

                    <CardDescription className="text-sm leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 pt-0">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {step.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
