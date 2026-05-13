import { useI18n } from "@/contexts/I18nContext";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import articlesData from "@/data/media-articles.json";

export default function MediaArticle() {
  const { language } = useI18n();
  const [, params] = useRoute("/media/:slug");
  const slug = params?.slug;

  const article = articlesData.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-col min-h-[60vh] items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <Link href="/media">
          <Button>Back to Media</Button>
        </Link>
      </div>
    );
  }

  const title = article.title[language as keyof typeof article.title];
  const content = article.content[language as keyof typeof article.content];
  const source = article.source[language as keyof typeof article.source];
  const summary = article.summary[language as keyof typeof article.summary];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>{title} | Nowwa Coffee Canada</title>
        <meta name="description" content={summary} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container relative h-full flex flex-col justify-end pb-16 z-10">
          <Link href="/media" className="inline-flex items-center text-white/80 hover:text-white mb-8 w-fit transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'zh' ? "返回媒体列表" : "Back to Media"}
          </Link>
          
          <div className="flex items-center gap-4 text-white/80 mb-4 text-sm font-medium">
            <span className="flex items-center bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
              <User className="mr-2 h-4 w-4" />
              {source}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {article.date}
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            {title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-lg md:prose-xl prose-stone dark:prose-invert max-w-none">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className={index === content.split('\n\n').length - 1 ? "text-muted-foreground italic text-base mt-12" : "leading-relaxed mb-6"}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <a 
              href={article.originalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-bold transition-colors"
            >
              {language === 'zh' ? "查看原文报道" : "View Original Article"}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            
            <div className="flex gap-4">
              <Link href="/franchise">
                <Button className="font-bold uppercase tracking-wide">
                  {language === 'zh' ? "申请加盟" : "Apply for Franchise"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
