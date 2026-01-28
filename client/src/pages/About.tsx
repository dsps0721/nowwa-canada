import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">Our Story</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-foreground">
            Redefining <span className="text-primary">Coffee</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl space-y-16">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-bold text-foreground text-xl">Founded in Shanghai in 2019</span>, Nowwa Coffee has rapidly grown into one of the world's leading coffee chains with over 1,800 stores. Our mission was simple but ambitious: to create a coffee experience that is healthier, tastier, and more accessible to the younger generation.
            </p>
            <p>
              We noticed that traditional coffee was often too bitter, too heavy, or too serious. We wanted to bring <span className="text-primary font-bold">energy, color, and fruit</span> into the mix.
            </p>
            <p>
              By pioneering the "Fruit + Coffee" category, we created drinks like the Orange Americano, which became an instant viral sensation. It's not just a drink; it's a lifestyle statement—vibrant, healthy, and forward-looking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 border-l-4 border-primary">
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the world's most loved fruit coffee brand, inspiring a healthier and more vibrant lifestyle for urban youth.
              </p>
            </div>
            <div className="bg-secondary p-8 border-l-4 border-foreground">
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, Quality, Vitality, and Accessibility. We believe great coffee should be fun and affordable.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden border border-border">
            <img 
              src="/images/store-interior.png" 
              alt="Nowwa Store" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="text-center pt-8">
            <h2 className="font-heading text-3xl font-bold uppercase mb-6">Now Arriving in Canada</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are excited to bring the Nowwa experience to Canada. We believe the Canadian market is ready for a coffee revolution.
            </p>
            <Link href="/franchise">
              <Button size="lg" className="h-14 px-8 text-lg font-heading font-bold uppercase tracking-wide rounded-none bg-primary hover:bg-primary/90 text-white">
                Join Our Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
