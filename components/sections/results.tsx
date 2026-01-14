// "use client";

// import { motion } from "framer-motion";
// import { TrendingUp, Users, Zap } from "lucide-react";

// const results = [
//   {
//     icon: TrendingUp,
//     title: "Conversion Boost",
//     description: "Data-driven strategies that turn visitors into customers",
//     color: "text-primary",
//   },
//   {
//     icon: Users,
//     title: "Engagement Growth",
//     description: "Create meaningful connections that build loyal communities",
//     color: "text-accent",
//   },
//   {
//     icon: Zap,
//     title: "Efficiency Boost",
//     description: "Automated systems and integrations that save time and scale",
//     color: "text-secondary",
//   },
// ];

// export function Results() {
//   return (
//     <section className="py-24 bg-gradient-to-br from-foreground to-foreground/95 text-background">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
//             Results That Matter
//           </h2>
//           <p className="text-lg text-background/80 max-w-2xl mx-auto">
//             We don't just create content—we create outcomes. Here's what you can expect.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {results.map((result, idx) => (
//             <motion.div
//               key={result.title}
//               className="text-center p-8 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:bg-background/10 transition-all duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-6">
//                 <result.icon className={`h-8 w-8 ${result.color}`} />
//               </div>
//               <h3 className="text-2xl font-bold mb-3">{result.title}</h3>
//               <p className="text-background/80">{result.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

