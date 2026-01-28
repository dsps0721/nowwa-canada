import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            src="/images/orange-pattern.png" 
            alt="Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold uppercase tracking-wider text-xs border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Now Recruiting Partners in Canada
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground">
              FRUIT <br/>
              <span className="text-primary">COFFEE</span> <br/>
              REVOLUTION
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              The Asian phenomenon is finally here. Low calorie, high energy, and absolutely delicious. Join the movement that's redefining coffee culture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/franchise">
                <Button size="lg" className="h-14 px-8 text-lg font-heading font-bold uppercase tracking-wide rounded-none border-2 border-primary bg-primary hover:bg-primary/90 hover:border-primary/90 transition-all">
                  Become a Partner
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-heading font-bold uppercase tracking-wide rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                  View Menu
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div className="flex flex-col">
                <span className="font-heading text-3xl font-bold text-foreground">1,800+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Global Stores</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl font-bold text-foreground">Top 10</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Coffee Chain</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right duration-1000 delay-200">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/images/hero-fruit-coffee.png" 
                alt="Nowwa Fruit Coffee" 
                className="w-full max-w-[600px] mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 p-8 border border-border hover:border-primary transition-colors group">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase">Innovative Product</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pioneered the "Fruit + Coffee" category. Our signature Orange Americano has sold over 100 million cups globally.
              </p>
            </div>
            
            <div className="space-y-6 p-8 border border-border hover:border-primary transition-colors group">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase">Health Conscious</h3>
              <p className="text-muted-foreground leading-relaxed">
                Low calorie, fresh ingredients, and premium beans. We cater to the modern consumer who wants energy without the guilt.
              </p>
            </div>
            
            <div className="space-y-6 p-8 border border-border hover:border-primary transition-colors group">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase">Proven Model</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 1,800 stores, our small-footprint, high-efficiency model is tested and ready for the Canadian market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break / Store Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="/images/store-interior.png" 
          alt="Nowwa Store Interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-3xl px-4">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
              Vibrant Spaces
            </h2>
            <p className="text-xl text-white/90">
              Designed for the modern urban lifestyle. Bright, energetic, and Instagram-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-wider">Our Menu</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
                Not Just Coffee
              </h2>
            </div>
            <Link href="/menu">
              <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background">
                View Full Menu
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <div className="flex gap-6 items-start group">
                <span className="font-heading text-4xl font-bold text-border group-hover:text-primary transition-colors">01</span>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold uppercase">Signature Orange Americano</h3>
                  <p className="text-muted-foreground">Cold-pressed orange juice meets premium espresso. The drink that started it all.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <span className="font-heading text-4xl font-bold text-border group-hover:text-primary transition-colors">02</span>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold uppercase">Coconut Latte</h3>
                  <p className="text-muted-foreground">Raw coconut milk for a silky, dairy-free, and naturally sweet experience.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <span className="font-heading text-4xl font-bold text-border group-hover:text-primary transition-colors">03</span>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold uppercase">Peach Oolong Coffee</h3>
                  <p className="text-muted-foreground">A refreshing triple layer of fruit, tea, and coffee. Perfect for summer.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform rotate-12"></div>
              <img 
                src="/images/product-collection.png" 
                alt="Nowwa Product Collection" 
                className="relative z-10 w-full drop-shadow-xl transform hover:-translate-y-2 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/orange-pattern.png" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Ready to Start?
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            Be among the first to bring this global sensation to your city. Limited territories available for early partners.
          </p>
          <Link href="/franchise">
            <Button size="lg" className="h-16 px-12 text-xl font-heading font-bold uppercase tracking-wide rounded-none bg-white text-primary hover:bg-white/90 border-none shadow-xl">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
