import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from '@formspree/react';
import { useI18n } from "@/contexts/I18nContext";

export default function Franchise() {
  const { t } = useI18n();
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORM_ID");

  if (state.succeeded) {
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
            <Button 
              className="mt-6 w-full font-heading font-bold uppercase tracking-wide rounded-none"
              onClick={() => window.location.reload()}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">{t('nav.join')}</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            {t('franchise.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('franchise.subtitle')}
          </p>
        </div>
      </section>

      {/* Process & Form */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Process Steps */}
          <div className="space-y-12">
            <h2 className="font-heading text-4xl font-bold mb-8">{t('franchise.process.title')}</h2>
            
            <div className="relative border-l-2 border-border pl-8 space-y-12 ml-4">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">01. {t('franchise.process.step1.title')}</h3>
                <p className="text-muted-foreground">{t('franchise.process.step1.desc')}</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">02. {t('franchise.process.step2.title')}</h3>
                <p className="text-muted-foreground">{t('franchise.process.step2.desc')}</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">03. {t('franchise.process.step3.title')}</h3>
                <p className="text-muted-foreground">{t('franchise.process.step3.desc')}</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">04. {t('franchise.process.step4.title')}</h3>
                <p className="text-muted-foreground">{t('franchise.process.step4.desc')}</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-border border-4 border-background"></span>
                <h3 className="font-heading text-xl font-bold mb-2">05. {t('franchise.process.step5.title')}</h3>
                <p className="text-muted-foreground">{t('franchise.process.step5.desc')}</p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-background p-8 md:p-10 border border-border shadow-xl">
            <h2 className="font-heading text-3xl font-bold mb-6">{t('franchise.form.title')}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('franchise.form.name')}</Label>
                  <Input id="firstName" name="firstName" placeholder="First Name" className="rounded-none border-border focus:border-primary" required />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Last Name" className="rounded-none border-border focus:border-primary" required />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t('franchise.form.email')}</Label>
                <Input id="email" type="email" name="email" placeholder="email@example.com" className="rounded-none border-border focus:border-primary" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">{t('franchise.form.phone')}</Label>
                <Input id="phone" type="tel" name="phone" placeholder="+1 (555) 000-0000" className="rounded-none border-border focus:border-primary" required />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">{t('franchise.form.city')}</Label>
                <Input id="city" name="city" placeholder="Toronto, Vancouver" className="rounded-none border-border focus:border-primary" required />
                <ValidationError prefix="City" field="city" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">{t('franchise.form.experience')}</Label>
                <Textarea id="experience" name="experience" placeholder="..." className="rounded-none border-border focus:border-primary min-h-[100px]" />
                <ValidationError prefix="Experience" field="experience" errors={state.errors} />
              </div>
              
              <Button type="submit" disabled={state.submitting} className="w-full h-12 font-heading font-bold uppercase tracking-wide rounded-none bg-primary hover:bg-primary/90 text-white">
                {state.submitting ? t('franchise.form.submitting') : t('franchise.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
