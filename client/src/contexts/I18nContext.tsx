import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.franchise': 'Franchise',
    'nav.join': 'Join Now',
    
    // Hero
    'hero.tag': 'NOWWA CANADA',
    'hero.title.1': 'LOW SUGAR',
    'hero.title.2': 'HEALTHY',
    'hero.title.3': 'COFFEE',
    'hero.subtitle': 'Low Sugar · Healthy · Fruit Coffee Revolution',
    'hero.desc': 'Reject high calories, embrace light burden. We use natural fruit sugar instead of traditional syrup, every cup is a gentle care for your body.',
    'hero.cta': 'Become a Partner',
    'hero.stats': 'Chosen by 10,000+ Stores',
    'hero.badge.sugar': 'Zero Sugar',
    'hero.badge.calorie': 'Low Calorie',
    
    // Stats
    'stats.stores': 'Global Stores',
    'stats.cities': 'Cities Covered',
    'stats.chain': 'Global Chain',
    'stats.concept': 'Healthy Concept',
    
    // Products
    'products.title.1': 'TRENDING',
    'products.title.2': 'NOW',
    'products.tag': 'Best Sellers',
    'products.view_menu': 'View All Menu',
    'products.tonton.name': 'Ton Ton Bucket',
    'products.tonton.desc': 'Larger Capacity! Lower Calories! 750ml super cup, drink freely without burden, start a vibrant day.',
    'products.tonton.tag1': 'Larger Capacity',
    'products.tonton.tag2': 'Lower Calories',
    'products.yuzu.name': 'Yuzu C Americano',
    'products.yuzu.desc': 'Double fruit aroma of Thai Green Pomelo and Kyushu White Pomelo, paired with IIAC Gold Medal coffee beans. About 100 kcal per cup, refreshing!',
    'products.yuzu.tag1': '100 kcal Low Calorie',
    'products.yuzu.tag2': 'IIAC Gold Medal Bean',
    'products.cheese.name': 'Apricot Cheese Latte',
    'products.cheese.desc': 'Natural fat-reducing ingredient "Diacylglycerol" reduces fat absorption~ One cup calories ≈ 0.5 avocado, equivalent to 30 minutes of exercise.',
    'products.cheese.tag1': 'Reduce Fat Absorption',
    'products.cheese.tag2': '≈0.5 Avocado',
    
    // Why Choose Us
    'why.tag': 'BUSINESS SUCCESS',
    'why.title.1': 'Open a',
    'why.title.2': 'Queuing',
    'why.title.3': 'Coffee Shop',
    'why.desc': 'Not just coffee, but a money-making machine verified by 10,000+ stores. All-day customer flow, super high repurchase rate, making your investment return quickly.',
    'why.item1.title': 'High Efficiency, Fast Return',
    'why.item1.desc': 'Small store size, large output, extreme operational efficiency, making every square meter valuable.',
    'why.item2.title': 'Viral Products, Natural Traffic',
    'why.item2.desc': 'Millions of fans, new products become hits immediately, no need to worry about customers.',
    'why.item3.title': 'Full Support, Easy Opening',
    'why.item3.desc': 'From site selection to operation, headquarters accompanies the whole process, 0 experience can also open a hot shop.',
    'why.cta': 'Consult Franchise Policy',
    'why.image.queue': 'Opening Day Queue',
    'why.image.sales': 'Daily Sales 1000+',
    'why.image.total': 'Global Stores Total',
    
    // Popular Stores
    'stores.title': 'Popular Stores',
    'stores.desc': 'Hot scenes all over the world, witnessing the brand power of Nowwa Coffee',
    'stores.card.title': 'Super Popular',
    
    // CTA
    'cta.title': 'Ready to Start Your Coffee Business?',
    'cta.desc': 'Become one of the first city partners of Nowwa Coffee Canada and seize the market opportunity.',
    'cta.button': 'Apply for Franchise',
    
    // Footer
    'footer.desc': 'Bringing vibrant fruit coffee energy to Canada. Join this healthy, delicious, and fashionable coffee revolution.',
    'footer.explore': 'Explore',
    'footer.contact': 'Contact Manager',
    'footer.scan': 'Scan to Consult',
    'footer.copyright': '© 2026 Nowwa Coffee Canada. All rights reserved.',
    
    // Franchise Page
    'franchise.title': 'Join the Coffee Revolution',
    'franchise.subtitle': 'Partner with the fastest-growing coffee chain. Low investment, high return, full support.',
    'franchise.form.title': 'Franchise Application',
    'franchise.form.name': 'Full Name',
    'franchise.form.phone': 'Phone Number',
    'franchise.form.email': 'Email Address',
    'franchise.form.city': 'Preferred City',
    'franchise.form.budget': 'Investment Budget',
    'franchise.form.experience': 'Do you have F&B experience?',
    'franchise.form.experience.yes': 'Yes',
    'franchise.form.experience.no': 'No',
    'franchise.form.message': 'Message (Optional)',
    'franchise.form.submit': 'Submit Application',
    'franchise.form.submitting': 'Submitting...',
    'franchise.form.success.title': 'Application Submitted!',
    'franchise.form.success.desc': 'Thank you for your interest. Our franchise manager will contact you shortly.',
    'franchise.form.error': 'Something went wrong. Please try again.',
    'franchise.process.title': 'Process',
    'franchise.process.step1.title': 'Submit Application',
    'franchise.process.step1.desc': 'Fill out the form to submit your interest.',
    'franchise.process.step2.title': 'Review',
    'franchise.process.step2.desc': 'Our team will review your application and contact you.',
    'franchise.process.step3.title': 'Meeting',
    'franchise.process.step3.desc': 'Join our brand presentation and taste our products.',
    'franchise.process.step4.title': 'Signing',
    'franchise.process.step4.desc': 'Sign the agreement and start your journey.',
    'franchise.process.step5.title': 'Opening',
    'franchise.process.step5.desc': 'Prepare for the grand opening.',
    
    // About Page
    'about.title': 'Our Story',
    'about.subtitle': 'Redefining coffee with health and vitality.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To provide healthy, low-sugar, and delicious coffee to everyone.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To become the world\'s leading fruit coffee brand.',
    'about.story.title': 'Redefining\nCoffee for Youth',
    'about.story.p1': 'Founded in June 2019 in Shanghai, NOWWA Coffee has grown into one of the world\'s top 5 coffee chains, with over 10,000 stores across 300+ cities.',
    'about.story.p2': 'Our name "NOWWA" comes from "NOW", representing the "Live in the Moment" attitude. The running orange pony symbolizes vitality, confidence, and infinite possibilities.',
    'about.story.p3': 'We pioneered the "Fruit Coffee" category, perfectly blending fresh fruits with premium coffee, breaking the traditional bitter impression of coffee, making it tastier, healthier, and more fun.',
    'about.story.founded': 'Founded',
    'about.story.stores': 'Global Stores',
    'about.cta.title': 'Join Our Journey',
    'about.cta.desc': 'Whether you want to taste a good cup of coffee or start a new business, Nowwa Coffee welcomes you.',
    
    // Collabs
    'collab.tag': 'Brand Milestones',
    'collab.title.1': 'Classic',
    'collab.title.2': 'Collaborations',
    'collab.desc': 'Review our exciting collaborations with top global brands, witnessing the infinite creativity and vitality of Nowwa Coffee.',
    'collab.genki.title': 'Genki Forest Series',
    'collab.genki.subtitle': '2023 Summer Limited',
    'collab.genki.desc': 'When Nowwa Coffee meets Genki Forest, a wonderful collision of bubbles and coffee. Created a summer heat relief myth across the web.',
    'collab.mlp.title': 'My Little Pony',
    'collab.mlp.desc': 'Global IP dream linkage, a wonderful encounter between magic and fruit coffee.',
    'collab.mlp.tag': '2024 Collab Review',
    'collab.7up.title': '7-UP',
    'collab.7up.desc': 'Refreshing lemon, cool to the heart. 7-UP theme store wonderful moments.',
    'collab.7up.tag': 'Theme Store Review',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.franchise': '加盟合作',
    'nav.join': '立即加盟',
    
    // Hero
    'hero.tag': 'NOWWA CANADA',
    'hero.title.1': 'LOW SUGAR',
    'hero.title.2': 'HEALTHY',
    'hero.title.3': 'COFFEE',
    'hero.subtitle': '低糖 · 健康 · 果咖新革命',
    'hero.desc': '拒绝高热量，拥抱轻负担。我们用天然果糖替代传统糖浆，每一杯都是对身体的温柔呵护。',
    'hero.cta': '成为合伙人',
    'hero.stats': '10000+ 门店的选择',
    'hero.badge.sugar': '0糖',
    'hero.badge.calorie': '低卡',
    
    // Stats
    'stats.stores': '全球门店',
    'stats.cities': '覆盖城市',
    'stats.chain': '全球连锁',
    'stats.concept': '健康理念',
    
    // Products
    'products.title.1': 'TRENDING',
    'products.title.2': 'NOW',
    'products.tag': '全网爆款',
    'products.view_menu': '查看完整菜单',
    'products.tonton.name': '吨吨桶',
    'products.tonton.desc': '更大容量！更低热量！750ml超大杯，畅饮无负担，开启活力每一天。',
    'products.tonton.tag1': '更大容量',
    'products.tonton.tag2': '更低热量',
    'products.yuzu.name': '柚C美式',
    'products.yuzu.desc': '泰国青柚与九州白柚的双重果香，搭配IIAC金奖咖啡豆。每杯约100大卡，清爽解腻！',
    'products.yuzu.tag1': '百卡低卡',
    'products.yuzu.tag2': 'IIAC金奖豆',
    'products.cheese.name': '金杏超模半熟芝士拿铁',
    'products.cheese.desc': '天然减脂成分“甘油二酯”减少脂肪吸收~ 一杯热量≈0.5个牛油果，相当于做运动30分钟。',
    'products.cheese.tag1': '减少脂肪吸收',
    'products.cheese.tag2': '≈0.5个牛油果',
    
    // Why Choose Us
    'why.tag': 'BUSINESS SUCCESS',
    'why.title.1': '开一家',
    'why.title.2': '排队火爆',
    'why.title.3': '的咖啡店',
    'why.desc': '不仅仅是咖啡，更是经过10000+门店验证的赚钱机器。全天候客流不断，超高复购率，让你的投资快速回报。',
    'why.item1.title': '超高坪效，快速回本',
    'why.item1.desc': '小店型大产出，极致的运营效率，让每一平米都产生价值。',
    'why.item2.title': '全网爆款，自带流量',
    'why.item2.desc': '千万级粉丝基础，新品上市即爆品，无需担心客源问题。',
    'why.item3.title': '保姆式扶持，轻松开店',
    'why.item3.desc': '从选址到运营，总部全程陪跑，0经验也能开出火爆好店。',
    'why.cta': '立即咨询加盟政策',
    'why.image.queue': '开业即排队',
    'why.image.sales': '单日出杯量 1000+',
    'why.image.total': '全球门店总数',
    
    // Popular Stores
    'stores.title': '人气门店',
    'stores.desc': '遍布全球的火爆现场，见证挪瓦咖啡的品牌力量',
    'stores.card.title': '人气火爆',
    
    // CTA
    'cta.title': '准备好开启你的咖啡事业了吗？',
    'cta.desc': '成为挪瓦咖啡加拿大首批城市合伙人，抢占市场先机。',
    'cta.button': '立即申请加盟',
    
    // Footer
    'footer.desc': '将充满活力的果咖能量带到加拿大。加入这场健康、美味、时尚的咖啡革命。',
    'footer.explore': '探索',
    'footer.contact': '联系招商经理',
    'footer.scan': '扫码咨询加盟详情',
    'footer.copyright': '© 2026 挪瓦咖啡加拿大总代理. 版权所有.',
    
    // Franchise Page
    'franchise.title': '加入咖啡革命',
    'franchise.subtitle': '与增长最快的咖啡连锁品牌合作。低投资，高回报，全程扶持。',
    'franchise.form.title': '加盟申请',
    'franchise.form.name': '姓名',
    'franchise.form.phone': '电话号码',
    'franchise.form.email': '电子邮箱',
    'franchise.form.city': '意向城市',
    'franchise.form.budget': '投资预算',
    'franchise.form.experience': '是否有餐饮经验？',
    'franchise.form.experience.yes': '是',
    'franchise.form.experience.no': '否',
    'franchise.form.message': '留言 (可选)',
    'franchise.form.submit': '提交申请',
    'franchise.form.submitting': '提交中...',
    'franchise.form.success.title': '申请已提交！',
    'franchise.form.success.desc': '感谢您的兴趣。我们的招商经理将尽快与您联系。',
    'franchise.form.error': '出错了，请重试。',
    'franchise.process.title': '加盟流程',
    'franchise.process.step1.title': '提交申请',
    'franchise.process.step1.desc': '填写表单以提交您的加盟意向。',
    'franchise.process.step2.title': '审核评估',
    'franchise.process.step2.desc': '我们的团队将审核您的申请并与您联系。',
    'franchise.process.step3.title': '面谈考察',
    'franchise.process.step3.desc': '参加品牌宣讲会并品尝我们的产品。',
    'franchise.process.step4.title': '签约合作',
    'franchise.process.step4.desc': '签署合作协议，开启您的创业旅程。',
    'franchise.process.step5.title': '开业筹备',
    'franchise.process.step5.desc': '准备盛大开业。',
    
    // About Page
    'about.title': '品牌故事',
    'about.subtitle': '用健康与活力重新定义咖啡。',
    'about.mission.title': '我们的使命',
    'about.mission.desc': '为每个人提供健康、低糖、美味的咖啡。',
    'about.vision.title': '我们的愿景',
    'about.vision.desc': '成为全球领先的果咖品牌。',
    'about.story.title': '为年轻人\n重新定义咖啡',
    'about.story.p1': 'NOWWA 挪瓦咖啡于 2019 年 6 月成立于上海，现已成长为全球前五大咖啡连锁品牌之一，在 300 多个城市拥有超过 10,000 家门店。',
    'about.story.p2': '我们的名字 "NOWWA" 源自 "NOW"，代表着“活在当下”的态度。奔跑的橙色小马象征着活力、自信和无限可能。',
    'about.story.p3': '我们开创了“果咖”品类，将新鲜水果与优质咖啡完美融合，打破了咖啡传统的苦涩印象，让咖啡更好喝、更健康、更有趣。',
    'about.story.founded': '成立年份',
    'about.story.stores': '全球门店',
    'about.cta.title': '加入我们的旅程',
    'about.cta.desc': '无论您是想品尝一杯好咖啡，还是开启一份新事业，挪瓦咖啡都欢迎您的加入。',
    
    // Collabs
    'collab.tag': '品牌里程碑',
    'collab.title.1': '经典',
    'collab.title.2': '联名回顾',
    'collab.desc': '回顾我们与全球顶尖品牌的精彩合作，见证挪瓦咖啡的无限创意与活力。',
    'collab.genki.title': '元气果咖系列',
    'collab.genki.subtitle': '2023 夏日限定',
    'collab.genki.desc': '当挪瓦咖啡遇上元气森林，气泡与咖啡的奇妙碰撞。曾创下全网刷屏的夏日解暑神话。',
    'collab.mlp.title': '小马宝莉 My Little Pony',
    'collab.mlp.desc': '全球 IP 梦幻联动，魔法与果咖的奇妙相遇。',
    'collab.mlp.tag': '2024 联名回顾',
    'collab.7up.title': '七喜 7-UP',
    'collab.7up.desc': '清爽柠檬，透心凉。七喜联名主题店精彩瞬间。',
    'collab.7up.tag': '主题店回顾',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
