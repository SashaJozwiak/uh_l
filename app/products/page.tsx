'use client'

import { useLanguage } from '../contexts/LanguageContext'
import styles from './page.module.css'

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: t('products.title'),
            description: t('products.description'),
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'SoftwareApplication',
                  name: t('products.token.title'),
                  description: t('products.token.desc'),
                  applicationCategory: 'GameApplication',
                  operatingSystem: 'Web, Mobile, Desktop',
                },
                {
                  '@type': 'WebApplication',
                  name: t('products.fund.title'),
                  description: t('products.fund.desc'),
                  applicationCategory: 'FinanceApplication',
                },
                {
                  '@type': 'SoftwareApplication',
                  name: t('products.company.title'),
                  description: t('products.company.desc'),
                  applicationCategory: 'BusinessApplication',
                },
                {
                  '@type': 'SoftwareApplication',
                  name: t('products.company2.title'),
                  description: t('products.company2.desc'),
                  applicationCategory: 'GameApplication',
                },
                {
                  '@type': 'SoftwareApplication',
                  name: t('products.company3.title'),
                  description: t('products.company3.desc'),
                  applicationCategory: 'GameApplication',
                },
                {
                  '@type': 'SoftwareApplication',
                  name: t('products.company4.title'),
                  description: t('products.company4.desc'),
                  applicationCategory: 'GameApplication',
                },
              ],
            },
          }),
        }}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t('products.title')}</h1>
          <div className={styles.content}>
           {/*  <p className={styles.description}>{t('products.description')}</p> */}
            <div className={styles.productsGrid}>
              <div className={styles.productCard}>
                <div className={styles.productIcon}>🟡</div>
                <h2 className={styles.productTitle}>{t('products.token.title')}</h2>
                <p className={styles.productDesc}>{t('products.token.desc')}</p>
              </div>
              <div className={styles.productCard}>
                <div className={styles.productIcon}>🟡</div>
                <h2 className={styles.productTitle}>{t('products.fund.title')}</h2>
                <p className={styles.productDesc}>{t('products.fund.desc')}</p>
              </div>
              <div className={styles.productCard}>
                <div className={styles.productIcon}>🟢</div>
                <h2 className={styles.productTitle}>{t('products.company.title')}</h2>
                <p className={styles.productDesc}>{t('products.company.desc')}</p>
              </div>
              <div className={styles.productCard}>
                <div className={styles.productIcon}>🟢</div>
                <h2 className={styles.productTitle}>{t('products.company2.title')}</h2>
                <p className={styles.productDesc}>{t('products.company2.desc')}</p>
              </div>
              <div className={styles.productCard}>
                <div className={styles.productIcon}>🟢</div>
                <h2 className={styles.productTitle}>{t('products.company3.title')}</h2>
                <p className={styles.productDesc}>{t('products.company3.desc')}</p>
              </div>
              <div className={styles.productCard}>
                <div className={styles.productIcon}>🟢</div>
                <h2 className={styles.productTitle}>{t('products.company4.title')}</h2>
                <p className={styles.productDesc}>{t('products.company4.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
