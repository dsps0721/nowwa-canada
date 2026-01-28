import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, DollarSign, MapPin, Users } from "lucide-react";

export default function Franchise() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">Partner With Us</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-foreground">
            Join the <span className="text-primary">Orange</span> Wave
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are looking for passionate partners to expand Nowwa Coffee across Canada. 
            Proven model, strong support, and massive potential.
          </p>
        </div>
      </section>

      {/* Why Nowwa */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Global Brand</h3>
              <p className="text-muted-foreground text-sm">
                Leverage the power of a brand with 1,800+ stores and millions of loyal customers worldwide.
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <DollarSign className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">High Efficiency</h3>
              <p className="text-muted-foreground text-sm">
                Small footprint (300-500 sqft), low capex, and optimized operations for faster ROI.
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Full Support</h3>
              <p className="text-muted-foreground text-sm">
                From site selection to training, supply chain, and marketing. We are with you every step.
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <MapPin className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Prime Territories</h3>
              <p className="text-muted-foreground text-sm">
                First-mover advantage in major Canadian cities including Toronto, Vancouver, and Montreal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Form */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Process Steps */}
          <div className="space-y-12">
            <h2 className="font-heading text-4xl font-bold uppercase mb-8">Application Process</h2>
            
            <div className="relative border-l-2 border-border pl-8 space-y-12 ml-4">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">01. Submit Inquiry</h3>
                <p className="text-muted-foreground">Fill out the form on this page to express your interest.</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">02. Initial Screening</h3>
                <p className="text-muted-foreground">Our team will review your profile and contact you for a preliminary discussion.</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">03. Discovery Day</h3>
                <p className="text-muted-foreground">Meet the team, taste the products, and review the FDD (Franchise Disclosure Document).</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">04. Site Selection</h3>
                <p className="text-muted-foreground">We help you find and approve the perfect location for your store.</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">05. Grand Opening</h3>
                <p className="text-muted-foreground">Construction, training, and marketing launch.</p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-background p-8 md:p-10 border border-border shadow-xl">
            <h2 className="font-heading text-3xl font-bold uppercase mb-6">Apply Now</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="rounded-none border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="rounded-none border-border focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="rounded-none border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-none border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">Preferred City</Label>
                <Input id="city" placeholder="e.g. Toronto, Vancouver" className="rounded-none border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea id="experience" placeholder="Tell us briefly about your business or F&B experience..." className="rounded-none border-border focus:border-primary min-h-[100px]" />
              </div>
              
              <Button type="submit" className="w-full h-12 font-heading font-bold uppercase tracking-wide rounded-none bg-primary hover:bg-primary/90 text-white">
                Submit Application
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Nowwa Coffee Canada regarding franchise opportunities.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
