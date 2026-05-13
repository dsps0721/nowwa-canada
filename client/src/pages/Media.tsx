import { useI18n } from "@/contexts/I18nContext";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import articlesData from "@/data/media-articles.json";

export default function Media() {
  const { t, language } = useI18n();

  // Combine the original Xiaohongshu post with the new articles
  const originalArticle = {
    id: "nowwa-canada-launch",
    slug: "nowwa-canada-launch",
    title: language === 'zh' 
      ? "挪瓦咖啡总部官宣：携手 Novara 开启加拿大海外业务" 
      : "Nowwa Coffee HQ Announces Partnership with Novara to Launch Canadian Operations",
    source: language === 'zh' ? "小红书" : "Xiaohongshu",
    date: "2024",
    image: "/images/store-interior.png",
    summary: language === 'zh'
      ? "挪瓦咖啡总部正式宣布与 Novara 达成战略合作，共同开拓加拿大市场。我们将把高品质的果咖带给加拿大消费者，开启全球化新篇章。"
      : "Nowwa Coffee Headquarters officially announces a strategic partnership with Novara to expand into the Canadian market. We are bringing high-quality fruit coffee to Canadian consumers, marking a new chapter in our global expansion.",
    isExternal: true,
    link: "https://www.xiaohongshu.com/explore/698d8548000000000a02c565?app_platform=ios&app_version=9.17.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CB-Gjlir_feI0tPr4YB1oM0ndhx0aN-pcj3STfDK4GJS8=&author_share=1&xhsshare=WeixinSession&shareRedId=N0c6MjhKOkxLP0ZFO0o1PjxGQUxFOzdC&apptime=1770887999&share_id=84a4efd0241c43ecb60ecb16682d074d&wechatWid=f06c65319df184452752bf2d9f75414e&wechatOrigin=menu"
  };

  const formattedArticles = articlesData.map(a => ({
    id: a.id,
    slug: a.slug,
    title: a.title[language as keyof typeof a.title],
    source: a.source[language as keyof typeof a.source],
    date: a.date,
    image: a.image,
    summary: a.summary[language as keyof typeof a.summary],
    isExternal: false,
    link: `/media/${a.slug}`
  }));

  const articles = [originalArticle, ...formattedArticles];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Media Coverage | 挪瓦咖啡加拿大媒体报道</title>
        <meta name="description" content="Follow the latest updates and media coverage of Nowwa Coffee in Canada. 关注挪瓦咖啡在加拿大的最新进展与媒体声音。" />
      </Helmet>
      <h1 className="sr-only">Media Coverage of Nowwa Coffee Canada | 挪瓦咖啡加拿大媒体报道</h1>
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container text-center space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider">
            {language === 'zh' ? "最新动态" : "Latest News"}
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            {language === 'zh' ? "媒体报道" : "Media Coverage"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? "关注挪瓦咖啡在加拿大的最新进展与媒体声音" 
              : "Follow the latest updates and media coverage of Nowwa Coffee in Canada"}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const CardWrapper = article.isExternal ? 'a' : Link;
              const wrapperProps = article.isExternal 
                ? { href: article.link, target: "_blank", rel: "noopener noreferrer" }
                : { href: article.link };

              return (
              <CardWrapper 
                key={article.id} 
                {...wrapperProps}
                className="group flex flex-col h-full border border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden rounded-lg"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {article.source}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-8">
                  <div className="text-sm text-muted-foreground mb-3 font-medium">
                    {article.date}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wide mt-auto group/btn">
                    {language === 'zh' ? "阅读全文" : "Read Article"}
                    {article.isExternal ? (
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    )}
                  </div>
                </div>
              </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
