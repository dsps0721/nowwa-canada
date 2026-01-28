import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useI18n } from "@/contexts/I18nContext";

export default function About() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 md:py-32">
        <div className="container text-center max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t('about.subtitle')}
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
                alt="Nowwa Coffee Brand Story" 
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 -z-10" />
            </div>
            <div className="space-y-8">
              <h2 className="font-heading text-4xl font-bold tracking-tighter whitespace-pre-line">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-heading text-4xl font-bold text-primary mb-2">2019</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{t('about.story.founded')}</p>
                </div>
                <div>
                  <h4 className="font-heading text-4xl font-bold text-primary mb-2">10000+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{t('about.story.stores')}</p>
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
              <h3 className="font-heading text-3xl font-bold uppercase tracking-wide opacity-80">{t('about.mission.title')}</h3>
              <p className="text-2xl md:text-4xl font-bold leading-tight">
                {t('about.mission.desc')}
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-heading text-3xl font-bold uppercase tracking-wide opacity-80">{t('about.vision.title')}</h3>
              <p className="text-2xl md:text-4xl font-bold leading-tight">
                {t('about.vision.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30 text-center">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-4xl font-bold mb-8 tracking-tighter">{t('about.cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-10">
            {t('about.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/franchise">
              <Button variant="outline" size="lg" className="rounded-none font-bold uppercase tracking-wide">
                {t('nav.join')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
