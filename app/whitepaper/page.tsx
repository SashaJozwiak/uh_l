'use client'

import { useLanguage } from '../contexts/LanguageContext'
import styles from './page.module.css'

export default function WhitepaperPage() {
  const { t } = useLanguage()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://youhold.com'

  const whitepaperJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('whitepaper.title'),
    description: t('whitepaper.overview.text'),
    author: {
      '@type': 'Organization',
      name: 'YouHold',
    },
    publisher: {
      '@type': 'Organization',
      name: 'YouHold',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: '2025-12-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/whitepaper`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(whitepaperJsonLd),
        }}
      />
      <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('whitepaper.title')}</h1>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('whitepaper.overview.title')}</h2>
            <p className={styles.sectionText}>{t('whitepaper.overview.text')}</p>
            {/* <br />
            <p style={{color:'white', fontWeight:'800'}} className={styles.sectionText}>{t('whitepaper.overview.text2')}</p>
            <br />
            <p className={styles.sectionText}>{t('whitepaper.overview.text3')}</p>
            <p className={styles.sectionText}>{t('whitepaper.overview.text4')}</p>
            <p className={styles.sectionText}>{t('whitepaper.overview.text5')}</p>
            <p className={styles.sectionText}>{t('whitepaper.overview.text55')}</p>
            <p className={styles.sectionText}>{t('whitepaper.overview.text6')}</p>
            <br />
            <p style={{fontStyle:'italic', color:'white'}} className={styles.sectionText}>{t('whitepaper.overview.text7')}</p> */}
          </div>

          <div className={styles.section}>
  <h2 className={styles.sectionTitle}>
    {t('whitepaper.tokenomics.title')}
  </h2>

  <div className={styles.tokenomicsGrid}>
    {/* Header */}
    <div className={styles.row + ' ' + styles.header}>
      <div>%</div>
      <div>Type</div>
      <div>Lock / Years</div>
      <div>Tokens</div>
    </div>

    {/* Rows */}
    <div className={styles.row}>
      <div>25%</div>
      <div>Drop/Presale/Farm</div>
      <div>Free</div>
      <div>5 000 000</div>
    </div>

    <div className={styles.row}>
      <div>20%</div>
      <div>Start Liquidity</div>
      <div>Lock / ~</div>
      <div>4 000 000</div>
    </div>

    {/* <div className={styles.row}>
      <div>5%</div>
      <div>DEX Farming</div>
      <div>Free</div>
      <div>1 000 000</div>
    </div> */}

    <div className={styles.row}>
      <div>20%</div>
      <div>Marketing</div>
      <div>Lock / 2</div>
      <div>4 000 000</div>
    </div>

    <div className={styles.row}>
      <div>20%</div>
      <div>Found</div>
      <div>Lock / 3</div>
      <div>4 000 000</div>
    </div>

    <div className={styles.row}>
      <div>10%</div>
      <div>Team</div>
      <div>Lock / 3</div>
      <div>2 000 000</div>
    </div>

    <div className={styles.row}>
      <div>5%</div>
      <div>Founder</div>
      <div>Lock / 3</div>
      <div>1 000 000</div>
    </div>

    {/* Total */}
    <div className={styles.row + ' ' + styles.total}>
      <div>100%</div>
      <div>Total</div>
      <div></div>
      <div>20 000 000</div>
    </div>
  </div>

  {/* <p className={styles.sectionText}>
    {t('whitepaper.tokenomics.text')}
  </p> */}
</div>


          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('whitepaper.mechanism.title')}</h2>
            <p className={styles.sectionText}>{t('whitepaper.mechanism.text3')}</p>
            <p className={styles.sectionText}>{t('whitepaper.mechanism.text4')}</p>
            <p className={styles.sectionText}>{t('whitepaper.mechanism.text5')}</p>
            <p className={styles.sectionText}>{t('whitepaper.mechanism.text55')}</p>
            <p className={styles.sectionText}>{t('whitepaper.mechanism.text6')}</p>
            <br />
            <p  style={{fontStyle:'italic', color:'white'}} className={styles.sectionText}>{t('whitepaper.mechanism.text7')}</p>
            {/* <p className={styles.sectionText}>{t('whitepaper.mechanism.text')}</p> */}
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('whitepaper.risks.title')}</h2>
            <p className={styles.sectionText}>{t('whitepaper.risks.text')}</p>
          </div>
          {/* <div className={styles.downloadSection}>
            <button className={styles.downloadButton}>
              {t('whitepaper.download')}
            </button>
          </div> */}
        </div>
      </div>
    </main>
    </>
  )
}

