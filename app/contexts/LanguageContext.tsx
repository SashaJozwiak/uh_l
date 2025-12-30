'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage === 'en' || savedLanguage === 'ru') {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const translations: Record<Language, Record<string, string>> = {
    en: {
      // Header
      'nav.products': 'Products',
      'nav.news': 'News',
      'nav.whitepaper': 'White Paper',
      'nav.menu': 'Menu',
      'auth.signIn': 'Dashboard',
      'footer.rights': 'All rights reserved.',
      
      // Main page
      'main.title': 'We earn together',
      'main.subtitle': 'YouHold is an open-ended cryptocurrency fund managing diversified assets and a software and gaming development studio.',
      'feature.strategic.title': 'Strategic Investments',
      'feature.strategic.desc': 'Investments in development and reliable assets',
      'feature.profit.title': 'Profit Distribution',
      'feature.profit.desc': 'Returns flow back to fund token holders',
      'feature.burn.title': '50% of profits - Token Buyback & Burn',
      'feature.burn.desc': 'Sustainable tokenomics with burn mechanism',
      'button.purchase': 'Purchase Token',
      'disclaimer': '* Investment involves risk. Please read our white paper before investing.',
      
      // Fund Structure
      'structure.title': 'Fund Structure',
      'structure.fund': 'YouHold',
      'structure.fundSubtitle': 'Cryptocurrency Fund',
      'structure.sponsors': 'Sponsors',
      'structure.company': 'Software Development',
      'structure.companySubtitle': 'Company',
      'structure.profits': 'Profits',
      'structure.owner': 'Fund (Owner)',
      'structure.ownerSubtitle': 'Receives Profits',
      'structure.buyback': 'Buyback',
      'structure.tokenBuyback': 'Token Buyback',
      'structure.burn': '50% Burn',
      
      // Roadmap
      'roadmap.title': 'Roadmap',
      'roadmap.subtitle': 'Clear milestones that connect product delivery, investment growth, and token value creation.',
      'roadmap.q1.title': 'Q3 2024 · Start',
      'roadmap.q1.desc': 'Launching the mining app on balances.',
      'roadmap.q2.title': 'Q4 2024 · Game',
      'roadmap.q2.desc': 'Launching a rouglike card game in a web3 setting + mining.',
      'roadmap.q3.title': 'Q1 2025 · Airdrop',
      'roadmap.q3.desc': 'Listing on TONCO + Airdrop + launch of deposits and investment functionality for the development of other projects.',
      'roadmap.q4.title': 'Q2 2025 · Income',
      'roadmap.q4.desc': 'Launch of the first project and distribution of profits among the owners of its shares.',
      'roadmap.y2025.title': 'Q3 2025 · Develop',
      'roadmap.y2025.desc': 'Launch of other projects and share trading features. APR of all shareholders is above 20%.',
      'roadmap.y2026.title': 'Q4 2025 · Fund',
      'roadmap.y2026.desc': 'Change of jurisdiction and creation of a fund, official website and white paper.',
      'roadmap.y2026q1.title': 'Q1 2026 · Airdrop',
      'roadmap.y2026q1.desc': 'Transition to Solana, tokenomics, airdrop, presale. Legalization in a new jurisdiction.',
      'roadmap.y2026q2.title': 'Q2 2026 · Scale',
      'roadmap.y2026q2.desc': 'Development and scaling of IT products, with ongoing expansion of the fund’s diversification into BTC, RWA, ESTATE, and other.',
      
      // Products
      'products.title': 'Our Products',
      'products.description': 'Explore the range of products and services offered by YouHold Fund.',
      'products.token.title': 'Esports game «Cards»',
      'products.token.desc': 'A massive multiplayer card MOBA with compendiums, skins, a marketplace, tournaments, and streams. Web/Mobile & Desktop. Beta release ~ May 2026 (in development)',
      'products.fund.title': 'Web YouHold app',
      'products.fund.desc': `A web version of the YouHold app's functionality in the "Account/Dashboard" section of the official website, including some updated old functionality and new functionality (in development)`,
      'products.company.title': 'Soft FS-CRM',
      'products.company.desc': 'CRM with an endless referral system for small businesses selling flowers and gifts in the CIS (completed)',
      'products.company2.title': 'Mini-games',
      'products.company2.desc': '5 mini-games for online gaming platforms with ad monetization, three of which were funded through the YouHold app (completed)',
      'products.company3.title': 'Gamble "Cazik"',
      'products.company3.desc': 'The YouHold app includes slots, roulette, and lotto. Funded through the YouHold app (completed)',
      'products.company4.title': 'UH-Game',
      'products.company4.desc': 'Card-based roguelike in the cryptocurrency app You Hold (complete)',
      
      // News
      'news.title': 'Latest News',
      'news.item1.date': 'December 2025',
      'news.item1.title': 'YouHold Fund Launch',
      'news.item1.desc': `We are pleased to announce the launch of the YouHold cryptocurrency fund and its official website. You can follow the project's development since September 2024 in the @youhold Telegram channel.`,
      'news.item2.date': 'February 2024',
      'news.item2.title': 'First Software Company Partnership',
      'news.item2.desc': 'YouHold Fund has successfully partnered with its first software development company, marking a significant milestone.',
      'news.item3.date': 'March 2024',
      'news.item3.title': 'Token Buyback Program Initiated',
      'news.item3.desc': 'The first token buyback and burn cycle has been completed, demonstrating our commitment to sustainable tokenomics.',
      
      // Whitepaper
      'whitepaper.title': 'White Paper',
      'whitepaper.overview.title': 'Overview',
      'whitepaper.overview.text': `YouHold is an open-ended cryptocurrency fund managing diversified assets and a software and game development studio. Balanced tokenomics with a strict mechanism and obligations ensures the fund's stable development.`,
      'whitepaper.tokenomics.title': 'Tokenomics',
      'whitepaper.tokenomics.text': 'The YouHold token represents ownership in the fund. Profits from sponsored companies flow back to the fund, which uses a portion to buy back tokens from the market. 50% of purchased tokens are permanently burned, creating deflationary pressure and increasing value for remaining token holders.',
      'whitepaper.mechanism.title': 'Mechanism',
      'whitepaper.mechanism.text3':
  '– The Fund accumulates and diversifies assets;',

'whitepaper.mechanism.text4':
  '– finances the development of software and games by the YouHold studio and manages the revenues generated by the studio;',

'whitepaper.mechanism.text5':
  '– allocates 50% of the YouHold studio’s profits to repurchase YouHold tokens from the open market in small portions according to a smooth, predefined schedule, regardless of the token market price;',

'whitepaper.mechanism.text55':
  '– burns 50% of the repurchased tokens, while the remaining 50% may be allocated to holding, liquidity pools, farming rewards, and other ecosystem purposes;',

'whitepaper.mechanism.text6':
  '– if the token price falls below the base price of $0.01, the Fund must deploy reserve and/or additional capital to conduct extra token buybacks; the sale of tokens by the Fund or the Founder at a price below $0.01 is strictly prohibited;',

'whitepaper.mechanism.text7':
  'When registering an organization, the mechanism must be enshrined in the charter along with the utility mechanism of the token in software products.',
      'whitepaper.mechanism.text': 'The fund sponsors software development companies as the owner. These companies generate profits, which are distributed to the fund. The fund then uses these profits to buy back tokens from the market. Half of the purchased tokens are burned, while the other half may be used for further investments or held in reserve.',
      'whitepaper.risks.title': 'Risk Disclosure',
      'whitepaper.risks.text': 'Investing in cryptocurrency is risky. Token prices may fluctuate. The YouHold token is utility-only and is used exclusively to unlock additional features in games and software developed by YouHold Studio. Carefully assess your financial situation and risk tolerance before investing. This does not constitute financial advice.',
      'whitepaper.download': 'Full PDF (soon)',
    },
    ru: {
      // Header
      'nav.products': 'Продукты',
      'nav.news': 'Новости',
      'nav.whitepaper': 'Белая книга',
      'nav.menu': 'Меню',
      'auth.signIn': 'Кабинет',
      'footer.rights': 'Все права защищены.',
      
      // Main page
      'main.title': 'Зарабатываем вместе',
      'main.subtitle': 'YouHold — это открытый криптовалютный фонд управляющий диверсифицированными активами и студией разработки программного обеспечения и игр.',
      'feature.strategic.title': 'Стратегические Инвестиции',
      'feature.strategic.desc': 'Инвестиции в разработку и надежные активы',
      'feature.profit.title': 'Распределение прибыли',
      'feature.profit.desc': 'Доходы возвращаются держателям токенов фонда',
      'feature.burn.title': '50% прибыли - Выкуп и Сжигание токенов',
      'feature.burn.desc': 'Устойчивая токеномика с механизмом сжигания',
      'button.purchase': 'Купить токен',
      'disclaimer': '* Инвестирование сопряжено с рисками. Пожалуйста, прочитайте нашу белую книгу перед инвестированием.',
      
      // Fund Structure
      'structure.title': 'Структура фонда',
      'structure.fund': 'YouHold',
      'structure.fundSubtitle': 'Криптовалютный фонд',
      'structure.sponsors': 'Спонсирует',
      'structure.company': 'Разработка ПО',
      'structure.companySubtitle': 'Компания',
      'structure.profits': 'Прибыль',
      'structure.owner': 'Фонд (Владелец)',
      'structure.ownerSubtitle': 'Получает прибыль',
      'structure.buyback': 'Выкуп',
      'structure.tokenBuyback': 'Выкуп токенов',
      'structure.burn': '50% Сжигание',
      
      // Roadmap
      'roadmap.title': 'Дорожная карта',
      'roadmap.subtitle': 'Понятные этапы, соединяющие выпуск продуктов, рост инвестиций и ценность токена.',
      'roadmap.q1.title': 'Q3 2024 · Старт',
      'roadmap.q1.desc': 'Запуск приложения майнинга на балансах.',
      'roadmap.q2.title': 'Q4 2024 · Игра',
      'roadmap.q2.desc': 'Запуск карточной игры в жанре rouglike в web3 сеттинге + к майнингу.',
      'roadmap.q3.title': 'Q1 2025 · Айрдроп',
      'roadmap.q3.desc': 'Листинг на TONCO + Айрдроп + запуск депозитов и функций инвестирования в разработку.',
      'roadmap.q4.title': 'Q2 2025 · Доходы',
      'roadmap.q4.desc': 'Запуск первого проекта и распределения прибыли среди владельцев его долей.',
      'roadmap.y2025.title': 'Q3 2025 · Развитие',
      'roadmap.y2025.desc': 'Запуск других проектов и функций торговли их долями. APR всех держателей долей выше 20%.',
      'roadmap.y2026.title': 'Q4 2025 · Фонд',
      'roadmap.y2026.desc': 'Смена юрисдикции и создание фонда, официальный сайт и белая книга.',
      'roadmap.y2026q1.title': 'Q1 2026 · Айрдроп 2',
      'roadmap.y2026q1.desc': 'Переход на Solana, токеномика, айрдроп, пресейл. Легализация в новой юрисдикции.',
      'roadmap.y2026q2.title': 'Q2 2026 · Масштаб',
      'roadmap.y2026q2.desc': 'Создание и развитие продуктов, расширение диверсификации фонда - BTC, RWA, ESTATE, etc..',

      
      // Products
      'products.title': 'Наши продукты',
      'products.description': 'Изучите спектр продуктов и услуг, предлагаемых фондом YouHold.',
      'products.token.title': 'Esports игра "Cards"',
      'products.token.desc': 'Большая многопользовательская карточная моба с компендиумами, скинами, торговой площадкой, турнирами и трансляциями. Web/Mobile & Desktop. Бета версия ~ в мае 2026 года (в процессе)',
      'products.fund.title': 'Веб YouHold app',
      'products.fund.desc': 'Веб версия функционала приложения YouHold в разделе "Кабинет/Дашборд" официального вебсайта, часть обновленного старого функционала и новый (в процессе)',
      'products.company.title': 'ПО FS-CRM',
      'products.company.desc': 'CRM c бесконечной реферальной системой для малого бизнеса в сфере продаж цветы/подарки СНГ (готово)',
      'products.company2.title': 'Мини-игры',
      'products.company2.desc': '5 мини-игр для площадок онлайн игр с монетизацией через рекламу, разработка трех игр финансировалась через YouHold app (готово)',
      'products.company3.title': 'Gamble "Cazik"',
      'products.company3.desc': 'Внутри приложения YouHold слот, рулетка, лото. Финансировалось через YouHold app (готово)',
      'products.company4.title': 'UH-Game',
      'products.company4.desc': 'Карточный rougelike в криптосетинге внутри приложения YouHold (готово)',
      
      // News
      'news.title': 'Последние новости',
      'news.item1.date': 'Декабрь 2025',
      'news.item1.title': 'Запуск фонда YouHold',
      'news.item1.desc': 'Рады объявить о запуске криптовалютного фонда YouHold и официального сайта. Историю развития проекта с сентября 2024 года можно посмотреть в постах телеграм канала @youhold.',
      'news.item2.date': 'Февраль 2024',
      'news.item2.title': 'Первое партнерство с IT-компанией',
      'news.item2.desc': 'Фонд YouHold успешно заключил партнерство с первой компанией по разработке ПО, что стало важной вехой.',
      'news.item3.date': 'Март 2024',
      'news.item3.title': 'Запуск программы выкупа токенов',
      'news.item3.desc': 'Первый цикл выкупа и сжигания токенов завершен, демонстрируя нашу приверженность устойчивой токеномике.',
      
      // Whitepaper
      'whitepaper.title': 'Белая книга',
      'whitepaper.overview.title': 'Обзор',
      'whitepaper.overview.text': 'YouHold - открытый криптовалютный фонд управляющий диверсифицированными активами и студией разработки ПО и игр. Сбалансированная токеномика со строгим механизмом и обязательствами обеспечивает стабильное развитие фонда.',
      'whitepaper.overview.text2': 'Обязанности Фонда:',
      'whitepaper.overview.text3': '– Формировать и диверсифицировать активы;',
      'whitepaper.overview.text4': '– спонсировать разработку ПО и игр YouHold студии и распоряжаться ее доходами;',
      'whitepaper.overview.text5': '– на 50% прибыли YouHold студии выкупать YouHold токен малыми долями по плавному графику независимо от стоимости токена;',
      'whitepaper.overview.text55': '– половину выкупленных токенов сжигать, другую половину использовать в - hold, liquidity pools, rewards for farming, etc;',
      'whitepaper.overview.text6': '– при стоимости токена ниже базовой цены $0.01 фонд должен задействовать резервные или дополнительные средства для дополнительного выкупа, при этом продажа токена фондом или фаундером при стоимости ниже $0.01 - запрещена.',
      'whitepaper.overview.text7': 'При регистрации организации обязаности должны быть закреплены в уставе.',
      'whitepaper.tokenomics.title': 'Токеномика',
      'whitepaper.tokenomics.text': 'Токен YouHold представляет долю владения в фонде. Прибыль от спонсируемых компаний возвращается в фонд, который использует часть средств для выкупа токенов с рынка. 50% выкупленных токенов безвозвратно сжигаются, создавая дефляционное давление и увеличивая стоимость для оставшихся держателей токенов.',
      'whitepaper.mechanism.title': 'Механизм',
      'whitepaper.mechanism.text3': '– Фонд формирует и диверсифицирует активы;',
      'whitepaper.mechanism.text4': '– спонсирует разработку ПО и игр YouHold студии и распоряжается ее доходами;',
      'whitepaper.mechanism.text5': '– на 50% прибыли YouHold студии выкупает YouHold токены с рынка малыми долями по плавному графику независимо от стоимости токена;',
      'whitepaper.mechanism.text55': '– сжигает половину выкупленных токенов, использование второй половины в - hold, liquidity pools, rewards for farming, etc;',
      'whitepaper.mechanism.text6': '– при стоимости токена ниже базовой цены $0.01 фонд должен задействовать резервные и/или дополнительные средства для дополнительного выкупа, при этом продажа токена фондом или фаундером при стоимости ниже $0.01 - запрещена.',
      'whitepaper.mechanism.text7': 'При регистрации организации механизм должнен быть закреплен в уставе вместе с утилити токена в программных продуктах YouHold студии.',
      'whitepaper.mechanism.text': 'Фонд спонсирует компании по разработке ПО как владелец. Эти компании генерируют прибыль, которая распределяется в фонд. Затем фонд использует эту прибыль для выкупа токенов с рынка. Половина выкупленных токенов сжигается, а другая половина может быть использована для дальнейших инвестиций или храниться в резерве.',
      'whitepaper.risks.title': 'Раскрытие рисков',
      'whitepaper.risks.text': 'Инвестирование в криптовалюты сопряжено с рисками. Стоимость токенов может колебаться. Токен YouHold утилитарный и используется исключительно для получения дополнительных возможностей в играх и программном обеспечении производства YouHold студии. Тщательно оцените свое финансовое положение и толерантность к риску перед инвестированием. Это не является финансовой консультацией.',
      'whitepaper.download': 'Полный PDF (скоро)',
    },
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}



export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
