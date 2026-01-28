import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, TrendingUp, Users, Leaf } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src="/images/hero-fruit-coffee.png" 
            alt="挪瓦果咖系列" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container relative z-20 pt-20">
          <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-bold tracking-wide uppercase">现已登陆加拿大</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground">
              果咖<br />
              <span className="text-primary">新革命</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
              全球1800+门店的共同选择。低卡、健康、好喝，重新定义你的咖啡体验。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/franchise">
                <Button size="lg" className="h-14 px-8 text-lg font-heading font-bold uppercase tracking-wide rounded-none shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                  成为合伙人 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-heading font-bold uppercase tracking-wide rounded-none border-2 hover:bg-secondary/50">
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

      {/* Featured Products - Ton Ton Bucket Highlight */}
      <section className="py-32 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700" />
              <img 
                src="/images/ton-ton-bucket.png" 
                alt="挪瓦吨吨桶" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest mb-4">
                全网爆款
              </div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tighter">
                超大容量<br /><span className="text-primary">吨吨桶</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                750ml超大容量，满足你一整天的咖啡需求。独特的把手设计，时尚便携，出街必备。不仅是咖啡，更是年轻人的社交货币。
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg font-medium">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  750ml 超大满足
                </li>
                <li className="flex items-center gap-3 text-lg font-medium">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  便携提手设计
                </li>
                <li className="flex items-center gap-3 text-lg font-medium">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  0糖0脂健康选择
                </li>
              </ul>
              <Link href="/menu">
                <Button size="lg" className="mt-8 rounded-none font-bold uppercase tracking-wide">
                  查看更多产品
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
              不仅是咖啡，更是<span className="text-primary">生活方式</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              我们将新鲜水果与精品咖啡完美融合，创造出前所未有的味觉体验。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group relative overflow-hidden bg-secondary/20 aspect-[4/5]">
              <img 
                src="/images/fruit-coffee-series.png" 
                alt="果咖系列" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white font-heading text-2xl font-bold mb-2">鲜果咖啡系列</h3>
                <p className="text-white/80">真水果，真咖啡，每一口都是新鲜。</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative overflow-hidden bg-secondary/20 aspect-[4/5]">
              <img 
                src="/images/zero-sugar-latte.png" 
                alt="0糖拿铁" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white font-heading text-2xl font-bold mb-2">0糖拿铁系列</h3>
                <p className="text-white/80">好喝轻负担，健康生活新选择。</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative overflow-hidden bg-secondary/20 aspect-[4/5]">
              <img 
                src="/images/product-collection.png" 
                alt="经典系列" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white font-heading text-2xl font-bold mb-2">经典大师系列</h3>
                <p className="text-white/80">IIAC金奖豆，还原咖啡本真风味。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-secondary/30">
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
