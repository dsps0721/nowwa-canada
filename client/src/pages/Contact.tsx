import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">联系我们</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            保持<span className="text-primary">联络</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold">加拿大总部</h2>
              <p className="text-muted-foreground text-lg">
                无论您是对我们的菜单感兴趣，还是想咨询加盟事宜，我们都期待听到您的声音。
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">地址</h3>
                  <p className="text-muted-foreground">
                    123 Yonge Street, Suite 456<br/>
                    Toronto, ON M5B 1N8<br/>
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">电子邮箱</h3>
                  <p className="text-muted-foreground">
                    通用咨询: hello@nowwa.ca<br/>
                    加盟咨询: franchise@nowwa.ca
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">联系电话</h3>
                  <p className="text-muted-foreground">
                    +1 (647) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/10 p-8 md:p-10 border border-border">
            <h2 className="font-heading text-3xl font-bold mb-6">发送消息</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name">姓名</Label>
                <Input id="name" placeholder="您的姓名" className="rounded-none border-border focus:border-primary bg-background" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">电子邮箱</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="rounded-none border-border focus:border-primary bg-background" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">主题</Label>
                <Input id="subject" placeholder="您想咨询什么？" className="rounded-none border-border focus:border-primary bg-background" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">留言内容</Label>
                <Textarea id="message" placeholder="请输入您的留言..." className="rounded-none border-border focus:border-primary min-h-[150px] bg-background" />
              </div>
              
              <Button type="submit" className="w-full h-12 font-heading font-bold uppercase tracking-wide rounded-none bg-foreground hover:bg-foreground/90 text-background">
                发送消息
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
