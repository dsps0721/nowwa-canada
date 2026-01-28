import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu() {
  const categories = [
    { id: "fruit-coffee", name: "鲜果咖啡系列" },
    { id: "ton-ton", name: "吨吨桶系列" },
    { id: "latte", name: "精品拿铁系列" },
    { id: "classic", name: "经典大师系列" },
  ];

  const products = [
    {
      id: 1,
      category: "fruit-coffee",
      name: "香水柠檬美式",
      description: "精选香水柠檬，搭配IIAC金奖咖啡豆，清爽解腻。",
      image: "/images/fruit-coffee-series.png",
      tags: ["热销", "推荐"]
    },
    {
      id: 2,
      category: "fruit-coffee",
      name: "生椰拿铁",
      description: "冷榨生椰乳与浓缩咖啡的完美融合，口感丝滑。",
      image: "/images/product-collection.png",
      tags: ["人气"]
    },
    {
      id: 3,
      category: "ton-ton",
      name: "超大桶美式",
      description: "750ml超大容量，唤醒一整天的活力。",
      image: "/images/ton-ton-bucket.png",
      tags: ["超值", "750ml"]
    },
    {
      id: 4,
      category: "ton-ton",
      name: "超大桶拿铁",
      description: "750ml超大容量，奶香浓郁，快乐加倍。",
      image: "/images/ton-ton-bucket.png",
      tags: ["超值", "750ml"]
    },
    {
      id: 5,
      category: "latte",
      name: "0糖生椰拿铁",
      description: "0糖0脂，好喝轻负担。",
      image: "/images/zero-sugar-latte.png",
      tags: ["0糖", "健康"]
    },
    {
      id: 6,
      category: "latte",
      name: "厚乳拿铁",
      description: "精选冷萃厚牛乳，口感醇厚浓郁。",
      image: "/images/product-collection.png",
      tags: ["醇厚"]
    },
    {
      id: 7,
      category: "classic",
      name: "标准美式",
      description: "IIAC金奖拼配豆，坚果风味，回甘持久。",
      image: "/images/product-collection.png",
      tags: ["经典"]
    },
    {
      id: 8,
      category: "classic",
      name: "澳白",
      description: "更浓郁的咖啡风味，更绵密的奶泡口感。",
      image: "/images/product-collection.png",
      tags: ["进阶"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 md:py-32">
        <div className="container text-center max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            我们的<span className="text-primary">菜单</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            探索我们的创新果咖、经典咖啡和健康饮品系列。
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products
                    .filter((p) => p.category === cat.id)
                    .map((product) => (
                      <div key={product.id} className="group bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <div className="aspect-square overflow-hidden bg-secondary/20 relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            {product.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <h3 className="font-heading text-xl font-bold">{product.name}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                
                {products.filter((p) => p.category === cat.id).length === 0 && (
                  <div className="text-center py-20 text-muted-foreground">
                    <p>该系列更多产品即将上线。</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-4xl font-bold mb-8 tracking-tighter">想把这些美味带给更多人？</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            成为挪瓦咖啡合伙人，开启你的甜蜜事业。
          </p>
          <Link href="/franchise">
            <Button size="lg" variant="secondary" className="rounded-none font-bold uppercase tracking-wide">
              了解加盟详情
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
