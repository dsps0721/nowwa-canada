import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "首页", path: "/" },
    { name: "关于我们", path: "/about" },
    { name: "产品菜单", path: "/menu" },
    { name: "加盟合作", path: "/franchise" },
    { name: "联系我们", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xl">
                N
              </div>
              <span className="font-heading text-2xl font-bold tracking-tighter text-foreground">
                NOWWA <span className="text-primary">CANADA</span>
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide ${
                    isActive(item.path) ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Link href="/franchise">
              <Button className="font-heading uppercase tracking-wide font-bold rounded-none">
                立即加盟
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a
                      className={`text-2xl font-heading font-bold uppercase transition-colors hover:text-primary ${
                        isActive(item.path) ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                <Link href="/franchise">
                  <Button 
                    className="w-full font-heading uppercase tracking-wide font-bold rounded-none mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    立即加盟
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 border-t border-border">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold">
                N
              </div>
              <span className="font-heading text-xl font-bold tracking-tighter text-background">
                NOWWA <span className="text-primary">CANADA</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              将充满活力的果咖能量带到加拿大。加入这场健康、美味、时尚的咖啡革命。
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary">探索</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">首页</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">品牌故事</a></Link></li>
              <li><Link href="/menu"><a className="hover:text-primary transition-colors">产品菜单</a></Link></li>
              <li><Link href="/franchise"><a className="hover:text-primary transition-colors">加盟合作</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary">联系方式</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Toronto, ON, Canada</li>
              <li>franchise@nowwa.ca</li>
              <li>+1 (647) 123-4567</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary">关注我们</h4>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                IG
              </div>
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="sr-only">TikTok</span>
                TT
              </div>
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="sr-only">WeChat</span>
                WC
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-white/10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} 挪瓦咖啡加拿大总代理. 版权所有.
        </div>
      </footer>
    </div>
  );
}
