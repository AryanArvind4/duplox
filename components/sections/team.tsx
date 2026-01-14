// "use client";

// import { motion } from "framer-motion";
// import { team } from "@/data/team";
// import { Card, CardContent, CardHeader } from "../ui/card";
// import { User } from "lucide-react";

// export function Team() {
//   return (
//     <section className="py-24 bg-muted/30">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
//             Meet the Team
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             The creative minds and strategic thinkers behind every campaign.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {team.map((member, idx) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 <CardHeader className="pb-4">
//                   <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center mb-4">
//                     <User className="h-10 w-10 text-white" />
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <h3 className="font-bold text-lg mb-1">{member.name}</h3>
//                   <p className="text-sm text-muted-foreground">{member.role}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

