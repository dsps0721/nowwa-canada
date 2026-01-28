import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">Get in Touch</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-foreground">
            Contact <span className="text-primary">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold uppercase">Head Office</h2>
              <p className="text-muted-foreground text-lg">
                Have questions about our menu, locations, or just want to say hi? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Yonge Street, Suite 456<br/>
                    Toronto, ON M5B 1N8<br/>
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    General: hello@nowwa.ca<br/>
                    Franchise: franchise@nowwa.ca
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (647) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/10 p-8 md:p-10 border border-border">
            <h2 className="font-heading text-3xl font-bold uppercase mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" className="rounded-none border-border focus:border-primary bg-background" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="rounded-none border-border focus:border-primary bg-background" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" className="rounded-none border-border focus:border-primary bg-background" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." className="rounded-none border-border focus:border-primary min-h-[150px] bg-background" />
              </div>
              
              <Button type="submit" className="w-full h-12 font-heading font-bold uppercase tracking-wide rounded-none bg-foreground hover:bg-foreground/90 text-background">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
