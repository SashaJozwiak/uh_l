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
                <div className={styles.featureIcon}>💼</div>
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
                <div className={styles.featureIcon}>🔥</div>
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
