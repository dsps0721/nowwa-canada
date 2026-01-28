import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="font-bold uppercase tracking-wide gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? '中文' : 'EN'}
    </Button>
  );
}
