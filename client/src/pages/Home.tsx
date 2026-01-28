import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Leaf, Star, Sparkles } from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";
import { useI18n } from "@/contexts/I18nContext";

export default function Home() {
  const { t } = useI18n();

  const featuredProducts = [
    {
      id: 1,
      name: t('products.tonton.name'),
      description: t('products.tonton.desc'),
      image: "/images/product-tonton-real.jpg",
      tags: [t('products.tonton.tag1'), t('products.tonton.tag2')]
    },
    {
      id: 2,
      name: t('products.yuzu.name'),
      description: t('products.yuzu.desc'),
      image: "/images/product-yuzu-c.png",
      tags: [t('products.yuzu.tag1'), t('products.yuzu.tag2')]
    },
    {
      id: 3,
      name: t('products.cheese.name'),
      description: t('products.cheese.desc'),
      image: "/images/product-cheese-latte.png",
      tags: [t('products.cheese.tag1'), t('products.cheese.tag2')]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Fuwa Fuwa Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FFF8F0]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 rounded-l-[100px] -z-0" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-100/50 rounded-tr-[100px] -z-0" />
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-primary border border-orange-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-bold tracking-wide uppercase">{t('hero.tag')}</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground">
              {t('hero.title.1')}<br />
              <span className="text-primary">{t('hero.title.2')}</span><br />
              {t('hero.title.3')}
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                {t('hero.desc')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/franchise">
                <Button size="lg" className="h-14 px-10 text-lg font-heading font-bold uppercase tracking-wide rounded-full shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                  {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="text-base font-bold text-gray-600">{t('hero.stats')}</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] md:h-[700px] w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="absolute inset-0 bg-[url('/images/product-tonton-real.jpg')] bg-cover bg-center rounded-[40px] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-10" />
            <div className="absolute inset-0 bg-primary/20 rounded-[40px] -rotate-3 scale-95 z-0" />
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-[3000ms] z-20">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">{t('hero.badge.sugar')}</span>
                <span className="text-xs text-gray-500 font-bold uppercase">Zero Sugar</span>
              </div>
            </div>
            <div className="absolute bottom-20 -left-10 bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-[4000ms] z-20">
              <div className="text-center">
                <span className="block text-3xl font-bold text-green-600">{t('hero.badge.calorie')}</span>
                <span className="text-xs text-gray-500 font-bold uppercase">Low Calorie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">10000+</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">{t('stats.stores')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">300+</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">{t('stats.cities')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">TOP5</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">{t('stats.chain')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">{t('hero.badge.sugar')}</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">{t('stats.concept')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Collaborations - New Section */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/10 text-white border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold tracking-wide uppercase">{t('collab.tag')}</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter">
                {t('collab.title.1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">{t('collab.title.2')}</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-md">
              {t('collab.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Genki Forest Collab */}
            <div className="group relative h-[500px] overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="absolute inset-0 bg-[url('/images/collab-genki-poster.png')] bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold">NOWWA</span>
                  <span className="text-2xl font-bold text-gray-500">x</span>
                  <span className="text-2xl font-bold">元气森林</span>
                </div>
                <h3 className="text-4xl font-heading font-bold mb-4 leading-tight">
                  {t('collab.genki.title')}<br />
                  <span className="text-primary">{t('collab.genki.subtitle')}</span>
                </h3>
                <p className="text-gray-300 mb-8 max-w-sm">
                  {t('collab.genki.desc')}
                </p>
                <div className="inline-block px-4 py-2 border border-white/30 text-white/70 text-sm uppercase tracking-widest">
                  经典案例 Archive
                </div>
              </div>
            </div>

            {/* Other Collabs Placeholder */}
            <div className="grid grid-rows-2 gap-8">
              <div className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 h-full min-h-[240px]">
                <div className="absolute inset-0 bg-[url('/images/collab-mlp.jpg')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-heading font-bold mb-2 text-white">{t('collab.mlp.title')}</h3>
                  <p className="text-gray-200 text-sm mb-4 max-w-[200px]">{t('collab.mlp.desc')}</p>
                  <span className="inline-block px-3 py-1 bg-pink-600 text-white text-xs font-bold uppercase tracking-widest w-fit">{t('collab.mlp.tag')}</span>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 h-full min-h-[240px]">
                <div className="absolute inset-0 bg-[url('/images/collab-7up-store.jpg')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-heading font-bold mb-2 text-white">{t('collab.7up.title')}</h3>
                  <p className="text-gray-200 text-sm mb-4 max-w-[200px]">{t('collab.7up.desc')}</p>
                  <span className="inline-block px-3 py-1 bg-zinc-700 text-white/80 text-xs font-bold uppercase tracking-widest w-fit">{t('collab.7up.tag')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel - Redesigned */}
      <section className="py-32 bg-secondary/30 overflow-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <div className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest mb-4">
                {t('products.tag')}
              </div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                {t('products.title.1')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">{t('products.title.2')}</span>
              </h2>
            </div>
            <div className="hidden md:block mb-2">
            </div>
          </div>
          
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl -z-10" />
            
            <ProductCarousel products={featuredProducts} />
          </div>
          
          <div className="md:hidden text-center mt-12">
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Updated with Store Photos */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary border border-orange-100">
                <span className="text-sm font-bold tracking-wide uppercase">{t('why.tag')}</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                {t('why.title.1')}<br />
                <span className="text-primary">{t('why.title.2')}</span> {t('why.title.3')}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('why.desc')}
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  {
                    title: t('why.item1.title'),
                    desc: t('why.item1.desc'),
                    icon: "💰"
                  },
                  {
                    title: t('why.item2.title'),
                    desc: t('why.item2.desc'),
                    icon: "🔥"
                  },
                  {
                    title: t('why.item3.title'),
                    desc: t('why.item3.desc'),
                    icon: "✨"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Link href="/franchise">
                  <Button size="lg" className="h-14 px-10 text-lg font-heading font-bold uppercase tracking-wide rounded-full shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                    {t('why.cta')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right: Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/5]">
                    <img 
                      src="/images/store-queue-1.jpg" 
                      alt="挪瓦咖啡门店排队盛况" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-bold">{t('why.image.queue')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img 
                      src="/images/store-interior.jpg" 
                      alt="挪瓦咖啡店内环境" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <div className="w-full h-full bg-primary flex flex-col items-center justify-center text-white p-6 text-center">
                      <span className="text-5xl font-bold mb-2">10000+</span>
                      <span className="text-sm font-medium opacity-90">{t('why.image.total')}</span>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/5]">
                    <img 
                      src="/images/store-queue-2.jpg" 
                      alt="挪瓦咖啡火爆人气" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-bold">{t('why.image.sales')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Stores Carousel Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t('stores.title')}</h2>
          <p className="text-muted-foreground">{t('stores.desc')}</p>
        </div>
        
        <div className="relative w-full">
          <div className="flex gap-6 animate-scroll hover:pause-scroll w-max px-4">
            {/* Original List */}
            {[
              { src: "/images/popular-store-8.webp", id: "1345" },
              { src: "/images/popular-store-10.webp", id: "1567" },
              { src: "/images/popular-store-new-1.jpg", id: "1678" },
              { src: "/images/popular-store-new-2.jpg", id: "1789" },
              { src: "/images/popular-store-new-3.png", id: "1890" },
              { src: "/images/popular-store-new-4.jpg", id: "1901" },
              { src: "/images/popular-store-new-5.jpg", id: "2012" }
            ].map((item, i) => (
              <div key={`original-${i}`} className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img 
                  src={item.src} 
                  alt={`人气门店 ${item.id}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">{t('stores.card.title')}</p>
                    <p className="text-sm opacity-90">Store No.{item.id}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate List for Seamless Loop */}
            {[
              { src: "/images/popular-store-8.webp", id: "1345" },
              { src: "/images/popular-store-10.webp", id: "1567" },
              { src: "/images/popular-store-new-1.jpg", id: "1678" },
              { src: "/images/popular-store-new-2.jpg", id: "1789" },
              { src: "/images/popular-store-new-3.png", id: "1890" },
              { src: "/images/popular-store-new-4.jpg", id: "1901" },
              { src: "/images/popular-store-new-5.jpg", id: "2012" }
            ].map((item, i) => (
              <div key={`duplicate-${i}`} className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img 
                  src={item.src} 
                  alt={`人气门店 ${item.id}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">{t('stores.card.title')}</p>
                    <p className="text-sm opacity-90">Store No.{item.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 80s linear infinite;
          }
          .hover\\:pause-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/orange-pattern.png')] bg-repeat opacity-20" />
        <div className="container relative z-10 text-center space-y-10">
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t('cta.desc')}
          </p>
          <Link href="/franchise">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-heading font-bold uppercase tracking-wide rounded-none shadow-2xl hover:scale-105 transition-transform">
              {t('cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
