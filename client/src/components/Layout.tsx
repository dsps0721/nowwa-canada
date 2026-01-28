import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.franchise'), path: "/franchise" },
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
              <img src="/images/logo.png" alt="Nowwa Coffee" className="h-10 w-auto" />
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
            <LanguageSwitcher />
            <Link href="/franchise">
              <Button className="font-heading uppercase tracking-wide font-bold rounded-none">
                {t('nav.join')}
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
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Link href="/franchise">
                  <Button 
                    className="w-full font-heading uppercase tracking-wide font-bold rounded-none mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.join')}
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
              <img src="/images/logo.png" alt="Nowwa Coffee" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary">{t('footer.explore')}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">{t('nav.home')}</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">{t('nav.about')}</a></Link></li>
              <li><Link href="/franchise"><a className="hover:text-primary transition-colors">{t('nav.franchise')}</a></Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex justify-start md:justify-end">
            <div className="flex flex-col items-center md:items-end">
              <h4 className="font-heading font-bold text-lg mb-4 text-primary">{t('footer.contact')}</h4>
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/images/contact-qr.png" 
                  alt="Contact Manager" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{t('footer.scan')}</p>
            </div>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-white/10 text-center text-xs text-muted-foreground">
          {t('footer.copyright')}
        </div>
      </footer>
    </div>
  );
}
