import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 md:py-32">
        <div className="container text-center max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            我们的<span className="text-primary">故事</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            从上海到多伦多，我们始终致力于为年轻人提供一杯好喝、健康、有趣的咖啡。
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/5]">
              <img 
                src="/images/store-interior.png" 
                alt="挪瓦咖啡品牌故事" 
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 -z-10" />
            </div>
            <div className="space-y-8">
              <h2 className="font-heading text-4xl font-bold tracking-tighter">
                重新定义<br />年轻人的咖啡
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  NOWWA挪瓦咖啡成立于2019年6月，总部位于中国上海。作为全球前五大咖啡连锁品牌，我们已累计开设门店超过10000家，覆盖城市超过300座。
                </p>
                <p>
                  我们的名字"NOWWA"源自"NOW"，代表着"活在当下"的年轻态度。那匹奔跑的橙色小马，象征着活力、自信和无限可能。
                </p>
                <p>
                  我们首创"果咖"品类，将新鲜水果与优质咖啡完美融合，打破了传统咖啡的苦涩印象，让咖啡变得更好喝、更健康、更有趣。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-heading text-4xl font-bold text-primary mb-2">2019</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">品牌创立</p>
                </div>
                <div>
                  <h4 className="font-heading text-4xl font-bold text-primary mb-2">10000+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">全球门店</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl font-bold uppercase tracking-wide opacity-80">我们的使命</h3>
              <p className="text-2xl md:text-4xl font-bold leading-tight">
                让年轻人随时随地享受一杯好喝不贵的咖啡。
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-heading text-3xl font-bold uppercase tracking-wide opacity-80">我们的愿景</h3>
              <p className="text-2xl md:text-4xl font-bold leading-tight">
                成为全球年轻人最喜爱的咖啡品牌。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 md:py-32">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-16 tracking-tighter">荣誉与认可</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-secondary/20">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl">
                1
              </div>
              <h3 className="font-bold text-xl mb-4">IIAC金奖</h3>
              <p className="text-muted-foreground">连续多年荣获国际咖啡品鉴大赛金奖</p>
            </div>
            <div className="p-8 border border-border bg-secondary/20">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl">
                2
              </div>
              <h3 className="font-bold text-xl mb-4">中国高增长连锁</h3>
              <p className="text-muted-foreground">荣获中国餐饮最具商业价值品牌</p>
            </div>
            <div className="p-8 border border-border bg-secondary/20">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl">
                3
              </div>
              <h3 className="font-bold text-xl mb-4">最受年轻人喜爱</h3>
              <p className="text-muted-foreground">Z世代首选咖啡品牌TOP3</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30 text-center">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-4xl font-bold mb-8 tracking-tighter">加入我们的旅程</h2>
          <p className="text-xl text-muted-foreground mb-10">
            无论你是想品尝一杯好咖啡，还是想开启一份新事业，挪瓦咖啡都欢迎你。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="rounded-none font-bold uppercase tracking-wide">
                浏览菜单
              </Button>
            </Link>
            <Link href="/franchise">
              <Button variant="outline" size="lg" className="rounded-none font-bold uppercase tracking-wide">
                申请加盟
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
