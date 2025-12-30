'use client'

import FundStructure from './components/FundStructure'
import { useLanguage } from './contexts/LanguageContext'
import styles from './page.module.css'

export default function Home() {
  const { t, language } = useLanguage()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://youhold.com'

  const homepageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}#webpage`,
    url: siteUrl,
    name: t('main.title'),
    description: t('main.subtitle'),
    inLanguage: language === 'ru' ? 'ru' : 'en',
    isPartOf: {
      '@id': `${siteUrl}#website`,
    },
    about: {
      '@id': `${siteUrl}#organization`,
    },
    mainEntity: {
      '@id': `${siteUrl}#organization`,
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: 'YouHold',
    description: t('main.subtitle'),
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
    inLanguage: ['en', 'ru'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h1 className={styles.title}>
              {t('main.title')}
            </h1>
            <p className={styles.subtitle}>
              {t('main.subtitle')}
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>{/* 💼 */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={'3rem'} className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>
                </div>
                <div className={styles.featureText}>
                  <strong>{t('feature.strategic.title')}</strong>
                  <span>{t('feature.strategic.desc')}</span>
                </div>
              </div>
              {/* <div className={styles.feature}>
                <div className={styles.featureIcon}>📈</div>
                <div className={styles.featureText}>
                  <strong>{t('feature.profit.title')}</strong>
                  <span>{t('feature.profit.desc')}</span>
                </div>
              </div> */}
              <div className={styles.feature}>
                <div className={styles.featureIcon}>{/* 🔥 */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={'3rem'} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>
                </div>
                <div className={styles.featureText}>
                  <strong>{t('feature.burn.title')}</strong>
                  <span>{t('feature.burn.desc')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <FundStructure />
          </div>
        </div>

        <section className={styles.roadmapSection}>
          <div className={styles.roadmapHeader}>
            <div style={{margin:'0 auto'}}>
              {/* <p className={styles.eyebrow}>Roadmap</p> */}
              <h2  className={styles.roadmapTitle}>{t('roadmap.title')}</h2>
              {/* <p className={styles.roadmapSubtitle}>{t('roadmap.subtitle')}</p> */}
            </div>
            {/* <div className={styles.roadmapLegend}>
              <span className={styles.legendDot} /> {t('feature.burn.title')}
            </div> */}
          </div>

          <div className={styles.roadmapGrid}>
            <div className={styles.milestone}>
              <div className={styles.milestoneDate}>🟢</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.q1.title')}</h3>
              <p>{t('roadmap.q1.desc')}</p>
            </div>
            <div className={styles.milestone}>
              <div className={styles.milestoneDate}>🟢</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.q2.title')}</h3>
              <p>{t('roadmap.q2.desc')}</p>
            </div>
            <div className={styles.milestone}>
              <div className={styles.milestoneDate}>🟢</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.q3.title')}</h3>
              <p>{t('roadmap.q3.desc')}</p>
            </div>
            <div className={styles.milestone}>
              <div className={styles.milestoneDate}>🟢</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.q4.title')}</h3>
              <p>{t('roadmap.q4.desc')}</p>
            </div>
            <div className={styles.milestone}>
              <div className={styles.milestoneDate}>🟢</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.y2025.title')}</h3>
              <p>{t('roadmap.y2025.desc')}</p>
            </div>
            <div className={styles.milestone}>
              <div className={styles.milestoneDate}>🟢</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.y2026.title')}</h3>
              <p>{t('roadmap.y2026.desc')}</p>
            </div>
            <div className={styles.milestontoday}>
              <div className={styles.milestoneDate}>🟡</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.y2026q1.title')}</h3>
              <p>{t('roadmap.y2026q1.desc')}</p>
            </div>
            <div className={styles.milestonfuture}>
              <div className={styles.milestoneDate}>⚪</div>
              <h3 style={{borderBottom:'1px solid gray'}}>{t('roadmap.y2026q2.title')}</h3>
              <p>{t('roadmap.y2026q2.desc')}</p>
            </div>
          </div>
          {language === 'ru' ? (
  <p style={{ marginTop: '1rem' }}>
    Полную историю развития YouHold можно посмотреть в постах{' '}
    <a
    className={styles.externalLink}
      href="https://t.me/youhold"
      target="_blank"
      rel="noopener noreferrer"
    >
      официального Telegram-канала
    </a>.
  </p>
) : (
  <p style={{ marginTop: '1rem' }}>
    The full history of YouHold's development can be found in posts on the{' '}
    <a
    className={styles.externalLink}
      href="https://t.me/youhold"
      target="_blank"
      rel="noopener noreferrer"
    >
      official Telegram channel
    </a>.
  </p>
)}
        </section>
      </main>
    </>
  )
}
