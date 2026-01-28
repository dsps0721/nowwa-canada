import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
              <div className="group/card bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="aspect-square overflow-hidden bg-secondary/20 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background shadow-lg rounded-full h-12 w-12 border-2 hidden md:flex"
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background shadow-lg rounded-full h-12 w-12 border-2 hidden md:flex"
        onClick={scrollNext}
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
      
      {/* Mobile Controls */}
      <div className="flex justify-center gap-4 mt-8 md:hidden">
        <Button variant="outline" size="icon" onClick={scrollPrev}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={scrollNext}>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
