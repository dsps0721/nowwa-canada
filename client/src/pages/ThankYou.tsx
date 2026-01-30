import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { Link } from "wouter";

export default function ThankYou() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">{t('nav.join')}</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            {t('franchise.title')}
          </h1>
        </div>
      </section>
      <div className="flex-1 flex items-center justify-center bg-background p-8">
        <div className="max-w-md text-center space-y-4 p-8 border border-border bg-card shadow-xl">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold font-heading">{t('franchise.form.success.title')}</h2>
          <p className="text-muted-foreground">
            {t('franchise.form.success.desc')}
          </p>
          <Link href="/">
            <Button 
              className="mt-6 w-full font-heading font-bold uppercase tracking-wide rounded-none"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
