'use client'

import { useLanguage } from '../contexts/LanguageContext'
import styles from './page.module.css'

export default function NewsPage() {
  const { t } = useLanguage()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://youhold.com'

  const newsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('news.title'),
    description: 'Latest news and updates from YouHold Fund',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'NewsArticle',
          headline: t('news.item1.title'),
          datePublished: '2025-12-01',
          description: t('news.item1.desc'),
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsJsonLd),
        }}
      />
      <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('news.title')}</h1>
        <div className={styles.content}>
          <div className={styles.newsGrid}>
            <article className={styles.newsCard}>
              <div className={styles.newsDate}>{t('news.item1.date')}</div>
              <h2 className={styles.newsTitle}>{t('news.item1.title')}</h2>
              <p className={styles.newsDesc}>{t('news.item1.desc')}</p>
            </article>
            {/* <article className={styles.newsCard}>
              <div className={styles.newsDate}>{t('news.item2.date')}</div>
              <h2 className={styles.newsTitle}>{t('news.item2.title')}</h2>
              <p className={styles.newsDesc}>{t('news.item2.desc')}</p>
            </article>
            <article className={styles.newsCard}>
              <div className={styles.newsDate}>{t('news.item3.date')}</div>
              <h2 className={styles.newsTitle}>{t('news.item3.title')}</h2>
              <p className={styles.newsDesc}>{t('news.item3.desc')}</p>
            </article> */}
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

