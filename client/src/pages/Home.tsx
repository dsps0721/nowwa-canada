import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Leaf, Star, Sparkles } from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "吨吨桶·红菜头紫甘蓝美式",
      description: "750ml超大容量，红菜头与紫甘蓝的奇妙碰撞，健康与美味的完美平衡。",
      image: "/images/product-tonton-real.jpg",
      tags: ["全网爆款", "750ml"]
    },
    {
      id: 2,
      name: "柚C美式",
      description: "泰国青柚与九州白柚的双重果香，搭配IIAC金奖咖啡豆。每杯约100大卡，清爽解腻！",
      image: "/images/product-yuzu-c.png",
      tags: ["百卡低卡", "IIAC金奖豆"]
    },
    {
      id: 3,
      name: "双柚0脂拿铁",
      description: "0脂乳+IIAC金奖豆！每100ml仅3.5g蛋白，一杯约160kcal，双柚香裹着咖啡香，清爽解腻。",
      image: "/images/product-orange-latte-v2.png",
      tags: ["0脂乳", "160kcal"]
    },
    {
      id: 4,
      name: "青柚和白柚果茶(控糖版)",
      description: "横州茉莉绿茶搭配青柚的酸甜和白柚浓香，低卡又清爽，不爱咖啡的宝子可以冲！",
      image: "/images/product-orange-fruit-v2.png",
      tags: ["控糖版", "茉莉茶底"]
    },
    {
      id: 5,
      name: "吨吨桶·柚C美式",
      description: "满满维C，清爽柚香。超大容量，满足你一整天的咖啡需求。",
      image: "/images/product-tonton-real.jpg",
      tags: ["维C满满", "750ml"]
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
              全球10000+门店的共同选择。低卡、健康、好喝，重新定义你的咖啡体验。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/franchise">
                <Button size="lg" className="h-12 px-8 text-base font-heading font-bold uppercase tracking-wide rounded-none shadow-lg hover:shadow-primary/20 transition-all w-full sm:w-auto">
                  成为合伙人 <ArrowRight className="ml-2 h-4 w-4" />
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
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">10000+</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">全球门店</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">300+</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">覆盖城市</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">TOP5</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">全球连锁</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">0糖</h3>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">健康理念</p>
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
                <span className="text-xs font-bold tracking-wide uppercase">品牌里程碑</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter">
                经典<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">联名回顾</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-md">
              回顾我们与全球顶尖品牌的精彩合作，见证挪瓦咖啡的无限创意与活力。
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
                  元气果咖系列<br />
                  <span className="text-primary">2023 夏日限定</span>
                </h3>
                <p className="text-gray-300 mb-8 max-w-sm">
                  当挪瓦咖啡遇上元气森林，气泡与咖啡的奇妙碰撞。曾创下全网刷屏的夏日解暑神话。
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
                  <h3 className="text-3xl font-heading font-bold mb-2 text-white">小马宝莉 My Little Pony</h3>
                  <p className="text-gray-200 text-sm mb-4 max-w-[200px]">全球 IP 梦幻联动，魔法与果咖的奇妙相遇。</p>
                  <span className="inline-block px-3 py-1 bg-pink-600 text-white text-xs font-bold uppercase tracking-widest w-fit">2024 联名回顾</span>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 h-full min-h-[240px]">
                <div className="absolute inset-0 bg-[url('/images/collab-7up-store.jpg')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-heading font-bold mb-2 text-white">七喜 7-UP</h3>
                  <p className="text-gray-200 text-sm mb-4 max-w-[200px]">清爽柠檬，透心凉。七喜联名主题店精彩瞬间。</p>
                  <span className="inline-block px-3 py-1 bg-zinc-700 text-white/80 text-xs font-bold uppercase tracking-widest w-fit">主题店回顾</span>
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
                全网爆款
              </div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                TRENDING<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">NOW</span>
              </h2>
            </div>
            <div className="hidden md:block mb-2">
              <Link href="/menu">
                <Button variant="link" className="text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors p-0">
                  View All Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl -z-10" />
            
            <ProductCarousel products={featuredProducts} />
          </div>
          
          <div className="md:hidden text-center mt-12">
            <Link href="/menu">
              <Button size="lg" className="rounded-none font-bold uppercase tracking-wide w-full">
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
