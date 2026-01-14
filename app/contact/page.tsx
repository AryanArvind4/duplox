"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    goals: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        goals: "",
        budget: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to grow your brand? Get in touch and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form and we'll get back to you within 24 hours. Or reach out directly through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email Us</CardTitle>
                        <CardDescription>
                          <a href="mailto:hello@duplox.in" className="hover:text-primary transition-colors">
                            hello@duplox.in
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Call Us</CardTitle>
                        <CardDescription>
                          <a href="tel:+91XXXXXXXXXX" className="hover:text-primary transition-colors">
                            +91 XXXXX XXXXX
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">WhatsApp</CardTitle>
                        <CardDescription>
                          <a 
                            href="https://wa.me/91XXXXXXXXXX" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            Chat with us instantly
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Location</CardTitle>
                        <CardDescription>
                          India
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold mb-4">Why Choose DUPLOX?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>100K+ people reached monthly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>15+ brands elevated and growing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Data-driven strategies that convert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Dedicated team of experts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold mb-2">
                      Business/Brand Name *
                    </label>
                    <Input
                      id="business"
                      name="business"
                      type="text"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold mb-2">
                      What are your goals?
                    </label>
                    <Input
                      id="goals"
                      name="goals"
                      type="text"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="e.g., Increase sales, build brand awareness"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <option value="">Select a range</option>
                      <option value="30-50k">₹30,000 - ₹50,000/month</option>
                      <option value="50-75k">₹50,000 - ₹75,000/month</option>
                      <option value="75k+">₹75,000+/month</option>
                      <option value="custom">Custom requirement</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project..."
                      rows={4}
                    />
                  </div>

                  {submitMessage && (
                    <div className="p-4 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      {submitMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
