import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Leaf } from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "超大桶美式",
      description: "750ml超大容量，唤醒一整天的活力。独特的把手设计，时尚便携。",
      image: "/images/ton-ton-bucket.png",
      tags: ["全网爆款", "750ml"]
    },
    {
      id: 2,
      name: "香水柠檬美式",
      description: "精选香水柠檬，搭配IIAC金奖咖啡豆，清爽解腻，夏日必备。",
      image: "/images/product-lemon-splash.png",
      tags: ["热销TOP1", "清爽"]
    },
    {
      id: 3,
      name: "0糖生椰拿铁",
      description: "冷榨生椰乳与浓缩咖啡的完美融合，0糖0脂，好喝轻负担。",
      image: "/images/product-coconut-velvet.png",
      tags: ["健康首选", "0糖"]
    },
    {
      id: 4,
      name: "超大桶拿铁",
      description: "750ml超大容量，奶香浓郁，快乐加倍。满足你的咖啡瘾。",
      image: "/images/ton-ton-bucket.png",
      tags: ["超值", "750ml"]
    },
    {
      id: 5,
      name: "鲜果咖啡系列",
      description: "真水果，真咖啡。每一口都是新鲜，每一杯都是惊喜。",
      image: "/images/hero-tonton-store.png",
      tags: ["创新", "果咖"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-end overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 z-10" />
          <img 
            src="/images/hero-store-queue.jpg" 
            alt="挪瓦咖啡门店排队盛况" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container relative z-20 pt-20 flex justify-end">
          <div className="max-w-xl p-8 md:p-12 bg-background/90 backdrop-blur-md shadow-2xl border-l-4 border-primary animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase">现已登陆加拿大</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-foreground mb-6">
              果咖<br />
              <span className="text-primary">新革命</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-8">
              全球1800+门店的共同选择。低卡、健康、好喝，重新定义你的咖啡体验。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/franchise">
                <Button size="lg" className="h-12 px-8 text-base font-heading font-bold uppercase tracking-wide rounded-none shadow-lg hover:shadow-primary/20 transition-all w-full sm:w-auto">
                  成为合伙人 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base font-heading font-bold uppercase tracking-wide rounded-none border-2 hover:bg-secondary/50 w-full sm:w-auto">
                  浏览菜单
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">1800+</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">全球门店</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">150+</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">覆盖城市</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">TOP3</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">外卖销量</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">0糖</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">健康理念</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest mb-4">
              全网爆款
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              大家都在喝的<span className="text-primary">人气单品</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              从超大容量的吨吨桶到清爽解腻的果咖，总有一款适合你。
            </p>
          </div>
          
          <ProductCarousel products={featuredProducts} />
          
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button size="lg" className="rounded-none font-bold uppercase tracking-wide">
                查看完整菜单
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter">
                  为什么选择<br /><span className="text-primary">挪瓦咖啡</span>?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  我们不仅仅是在卖咖啡，我们正在创造一种年轻、活力、健康的生活方式。加入我们，成为加拿大咖啡市场的新力量。
                </p>
              </div>

              <div className="grid gap-8">
                <div className="flex gap-6">
                  <div className="h-14 w-14 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">高增长潜力</h3>
                    <p className="text-muted-foreground">亚洲现象级品牌，经过市场验证的商业模式，加拿大市场潜力巨大。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-14 w-14 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">年轻化客群</h3>
                    <p className="text-muted-foreground">深受Z世代喜爱，精准锁定最具消费力的年轻群体。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-14 w-14 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Leaf className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">健康理念</h3>
                    <p className="text-muted-foreground">0糖低卡，符合当下健康饮食趋势，差异化竞争优势明显。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/20 z-0" />
              <img 
                src="/images/store-interior.png" 
                alt="挪瓦门店环境" 
                className="relative z-10 w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/orange-pattern.png')] bg-repeat opacity-20" />
        <div className="container relative z-10 text-center space-y-10">
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto">
            准备好开启你的<br />咖啡事业了吗？
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
            成为挪瓦咖啡加拿大首批城市合伙人，抢占市场先机。
          </p>
          <Link href="/franchise">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-heading font-bold uppercase tracking-wide rounded-none shadow-2xl hover:scale-105 transition-transform">
              立即申请加盟
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
