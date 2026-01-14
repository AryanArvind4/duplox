"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/clients";

export function Clients() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 md:space-y-12">
          {/* Heading */}
          <motion.div
            className="flex flex-col items-center text-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Trusted by 15+ Brands
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
            {clients.map((client, idx) => (
              <div
                key={client.id}
                className="flex min-h-[104px] items-center justify-center rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:scale-105"
              >
                {client.logo ? (
                  <div className="relative h-14 w-40 sm:h-16 sm:w-44">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 160px, 180px"
                      priority={idx < 2}
                    />
                  </div>
                ) : (
                  <h3 className="text-center text-base font-bold sm:text-lg">
                    {client.name}
                  </h3>
                )}
              </div>
            ))}
          </div>

          {/* Footer line */}
          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <p className="text-xl font-bold sm:text-2xl gradient-red-text">
              Next will be yours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
