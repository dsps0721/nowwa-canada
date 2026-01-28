import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Leaf, Star, Sparkles } from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "吨吨桶",
      description: "更大容量！更低热量！750ml超大杯，畅饮无负担，开启活力每一天。",
      image: "/images/product-tonton-real.jpg",
      tags: ["更大容量", "更低热量"]
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
      name: "金杏超模半熟芝士拿铁",
      description: "天然减脂成分“甘油二酯”减少脂肪吸收~ 一杯热量≈0.5个牛油果，相当于做运动30分钟。",
      image: "/images/product-cheese-latte.png",
      tags: ["减少脂肪吸收", "≈0.5个牛油果"]
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
              <span className="text-sm font-bold tracking-wide uppercase">NOWWA CANADA</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground">
              LOW SUGAR<br />
              <span className="text-primary">HEALTHY</span><br />
              COFFEE
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                低糖 · 健康 · 果咖新革命
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                拒绝高热量，拥抱轻负担。我们用天然果糖替代传统糖浆，每一杯都是对身体的温柔呵护。
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/franchise">
                <Button size="lg" className="h-14 px-10 text-lg font-heading font-bold uppercase tracking-wide rounded-full shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                  成为合伙人 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="text-base font-bold text-gray-600">10000+ 门店的选择</span>
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
                <span className="block text-3xl font-bold text-primary">0糖</span>
                <span className="text-xs text-gray-500 font-bold uppercase">Zero Sugar</span>
              </div>
            </div>
            <div className="absolute bottom-20 -left-10 bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-[4000ms] z-20">
              <div className="text-center">
                <span className="block text-3xl font-bold text-green-600">低卡</span>
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

      {/* Why Choose Us Section - Updated with Store Photos */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary border border-orange-100">
                <span className="text-sm font-bold tracking-wide uppercase">BUSINESS SUCCESS</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                开一家<br />
                <span className="text-primary">排队火爆</span> 的咖啡店
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                不仅仅是咖啡，更是经过10000+门店验证的赚钱机器。全天候客流不断，超高复购率，让你的投资快速回报。
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  {
                    title: "超高坪效，快速回本",
                    desc: "小店型大产出，极致的运营效率，让每一平米都产生价值。",
                    icon: "💰"
                  },
                  {
                    title: "全网爆款，自带流量",
                    desc: "千万级粉丝基础，新品上市即爆品，无需担心客源问题。",
                    icon: "🔥"
                  },
                  {
                    title: "保姆式扶持，轻松开店",
                    desc: "从选址到运营，总部全程陪跑，0经验也能开出火爆好店。",
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
                    立即咨询加盟政策 <ArrowRight className="ml-2 h-5 w-5" />
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
                      <p className="text-white font-bold">开业即排队</p>
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
                      <span className="text-sm font-medium opacity-90">全球门店总数</span>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/5]">
                    <img 
                      src="/images/store-queue-2.jpg" 
                      alt="挪瓦咖啡火爆人气" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-bold">单日出杯量 1000+</p>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">人气门店</h2>
          <p className="text-muted-foreground">遍布全球的火爆现场，见证挪瓦咖啡的品牌力量</p>
        </div>
        
        <div className="relative w-full">
          <div className="flex gap-6 animate-scroll hover:pause-scroll w-max px-4">
            {[
              "/images/popular-store-1.webp",
              "/images/popular-store-3.webp",
              "/images/popular-store-4.webp",
              "/images/popular-store-7.webp",
              "/images/popular-store-8.webp",
              "/images/popular-store-9.webp",
              "/images/popular-store-10.webp",
              "/images/popular-store-1.webp", // Duplicate for seamless loop
              "/images/popular-store-3.webp",
              "/images/popular-store-4.webp",
              "/images/popular-store-7.webp",
              "/images/popular-store-8.webp",
              "/images/popular-store-9.webp",
              "/images/popular-store-10.webp"
            ]
            .sort(() => Math.random() - 0.5) // Randomize order
            .map((src, i) => (
              <div key={i} className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img 
                  src={src} 
                  alt={`人气门店 ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">人气火爆</p>
                    <p className="text-sm opacity-90">Store No.{Math.floor(Math.random() * 1000) + 1000}</p>
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
            animation: scroll 40s linear infinite;
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
