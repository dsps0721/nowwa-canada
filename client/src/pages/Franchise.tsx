import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, DollarSign, MapPin, Users } from "lucide-react";

export default function Franchise() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">成为合伙人</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            加入<span className="text-primary">橙色风暴</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            寻找充满激情的合作伙伴，共同开拓加拿大市场。
            成熟的商业模式，强大的品牌支持，巨大的市场潜力。
          </p>
        </div>
      </section>

      {/* Why Nowwa */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold mb-3">全球品牌影响力</h3>
              <p className="text-muted-foreground text-sm">
                依托全球10000+门店和数百万忠实用户的品牌势能，快速打开本地市场。
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <DollarSign className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold mb-3">高效单店模型</h3>
              <p className="text-muted-foreground text-sm">
                小店型（300-500平方英尺），低投入，高坪效，优化的运营流程助力快速回本。
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold mb-3">全方位支持</h3>
              <p className="text-muted-foreground text-sm">
                从选址评估、店面设计、人员培训到供应链配送、市场营销，全程保驾护航。
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card hover:shadow-lg transition-all">
              <MapPin className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold mb-3">黄金市场机遇</h3>
              <p className="text-muted-foreground text-sm">
                抢占多伦多、温哥华、蒙特利尔等加拿大核心城市的首发优势。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Form */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Process Steps */}
          <div className="space-y-12">
            <h2 className="font-heading text-4xl font-bold mb-8">加盟流程</h2>
            
            <div className="relative border-l-2 border-border pl-8 space-y-12 ml-4">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">01. 提交申请</h3>
                <p className="text-muted-foreground">填写右侧表格，提交您的加盟意向。</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">02. 初步审核</h3>
                <p className="text-muted-foreground">我们的团队将审核您的资料，并与您联系进行初步沟通。</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">03. 面谈考察</h3>
                <p className="text-muted-foreground">受邀参加品牌说明会，品尝产品，深入了解合作细节及FDD文件。</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">04. 选址签约</h3>
                <p className="text-muted-foreground">协助您评估并确定最佳店址，正式签署特许经营协议。</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">05. 开业筹备</h3>
                <p className="text-muted-foreground">店面装修、设备安装、人员培训及开业营销策划。</p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-background p-8 md:p-10 border border-border shadow-xl">
            <h2 className="font-heading text-3xl font-bold mb-6">立即申请</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">名</Label>
                  <Input id="firstName" placeholder="San" className="rounded-none border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">姓</Label>
                  <Input id="lastName" placeholder="Zhang" className="rounded-none border-border focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">电子邮箱</Label>
                <Input id="email" type="email" placeholder="zhangsan@example.com" className="rounded-none border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">联系电话</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-none border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">意向城市</Label>
                <Input id="city" placeholder="例如：多伦多, 温哥华" className="rounded-none border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">相关经验</Label>
                <Textarea id="experience" placeholder="请简要描述您的商业背景或餐饮行业经验..." className="rounded-none border-border focus:border-primary min-h-[100px]" />
              </div>
              
              <Button type="submit" className="w-full h-12 font-heading font-bold uppercase tracking-wide rounded-none bg-primary hover:bg-primary/90 text-white">
                提交申请
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                提交表格即表示您同意挪瓦咖啡加拿大团队与您联系。
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
