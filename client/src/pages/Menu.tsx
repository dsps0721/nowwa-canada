import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu() {
  const categories = [
    { id: "fruit-coffee", name: "Fruit Coffee" },
    { id: "classic", name: "Classic Coffee" },
    { id: "tea", name: "Fruit Tea" },
    { id: "bakery", name: "Bakery" },
  ];

  const products = [
    {
      id: 1,
      name: "Orange Americano",
      category: "fruit-coffee",
      desc: "Cold-pressed orange juice + Espresso. The icon.",
      price: "$6.50",
      image: "/images/hero-fruit-coffee.png" // Placeholder reuse
    },
    {
      id: 2,
      name: "Coconut Latte",
      category: "fruit-coffee",
      desc: "Raw coconut milk + Espresso. Silky & sweet.",
      price: "$6.95",
      image: "/images/hero-fruit-coffee.png"
    },
    {
      id: 3,
      name: "Peach Oolong Americano",
      category: "fruit-coffee",
      desc: "Peach pulp + Oolong tea + Espresso.",
      price: "$6.75",
      image: "/images/hero-fruit-coffee.png"
    },
    {
      id: 4,
      name: "Classic Latte",
      category: "classic",
      desc: "Rich espresso with steamed milk.",
      price: "$5.50",
      image: "/images/hero-fruit-coffee.png"
    },
    {
      id: 5,
      name: "Americano",
      category: "classic",
      desc: "Double shot espresso with hot water.",
      price: "$4.50",
      image: "/images/hero-fruit-coffee.png"
    },
    {
      id: 6,
      name: "Strawberry Fruit Tea",
      category: "tea",
      desc: "Fresh strawberries with jasmine green tea.",
      price: "$6.25",
      image: "/images/hero-fruit-coffee.png"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">Our Menu</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-foreground">
            Taste the <span className="text-primary">Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where premium coffee meets fresh fruit. Discover our award-winning lineup.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <Tabs defaultValue="fruit-coffee" className="w-full flex flex-col items-center">
            <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent mb-16 h-auto p-0">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="px-8 py-3 rounded-none border border-border data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary font-heading font-bold uppercase tracking-wide text-lg transition-all"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {products
                    .filter((p) => p.category === cat.id)
                    .map((product) => (
                      <div key={product.id} className="group cursor-pointer">
                        <div className="relative aspect-square overflow-hidden bg-secondary mb-6 border border-border group-hover:border-primary transition-colors">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-white px-3 py-1 font-bold text-foreground shadow-sm">
                            {product.price}
                          </div>
                        </div>
                        <div className="space-y-2 text-center">
                          <h3 className="font-heading text-2xl font-bold uppercase group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {product.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                
                {products.filter((p) => p.category === cat.id).length === 0 && (
                  <div className="text-center py-20 text-muted-foreground">
                    <p>More items coming soon to this category.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
