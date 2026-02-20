'use client'

import { useLanguage } from '../contexts/LanguageContext'
import styles from './FundStructure.module.css'
import bstyles from '../page.module.css'

export default function FundStructure() {
  const { t } = useLanguage()

  return (
    <div className={styles.container}>
      <div className={styles.diagram}>

      <svg
  width={350}
  height={350}
  viewBox="0 0 500 500"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <filter id="outerShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow
        dx={10}
        dy={8}
        stdDeviation={12}
        floodColor="#FFF"
        floodOpacity={0.35}
      />
    </filter>

    <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow
        dx={0}
        dy={6}
        stdDeviation={8}
        floodColor="#000000"
        floodOpacity={0.35}
      />
    </filter>

    {/* Outer gradient */}
  <radialGradient id="outerGradient" cx="50%" cy="45%" r="60%">
    <stop offset="0%" stopColor="#6b7386" />
    <stop offset="100%" stopColor="#50586a" />
  </radialGradient>

  {/* Inner gradient */}
  <radialGradient id="innerGradient" cx="45%" cy="40%" r="60%">
    <stop offset="0%" stopColor="#7fd05a" />
    <stop offset="100%" stopColor="#5aa63b" />
  </radialGradient>
  </defs>

  {/* Outer circle */}
  <circle
    cx={225}
    cy={225}
    r={180}
      fill="url(#outerGradient)"
  filter="url(#outerShadow)"
  />

  {/* Inner circle */}
  <circle
    cx={225}
    cy={225}
    r={75}
  fill="url(#innerGradient)"
  filter="url(#innerShadow)"
  />
</svg>




        {/* <div className={styles.title}>{t('structure.title')}</div>
        <div className={styles.flow}>
          
          <div className={styles.box} id={styles.fundBox}>
            <div className={styles.boxTitle}>{t('structure.fund')}</div>
            <div className={styles.boxSubtitle}>{t('structure.fundSubtitle')}</div>
          </div>

          
          <div className={styles.arrowDown}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 10L20 30M20 30L10 20M20 30L30 20" stroke="#667eea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.arrowLabel}>{t('structure.sponsors')}</span>
          </div>

          
          <div className={styles.box} id={styles.companyBox}>
            <div className={styles.boxTitle}>{t('structure.company')}</div>
            <div className={styles.boxSubtitle}>{t('structure.companySubtitle')}</div>
          </div>

          
          <div className={styles.arrowUp}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 30L20 10M20 10L10 20M20 10L30 20" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.arrowLabel}>{t('structure.profits')}</span>
          </div>

          
          <div className={styles.box} id={styles.ownerBox}>
            <div className={styles.boxTitle}>{t('structure.owner')}</div>
            <div className={styles.boxSubtitle}>{t('structure.ownerSubtitle')}</div>
          </div>

          
          <div className={styles.arrowRight}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 20L30 20M30 20L20 10M30 20L20 30" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.arrowLabel}>{t('structure.buyback')}</span>
          </div>

          
          <div className={styles.box} id={styles.tokenBox}>
            <div className={styles.boxTitle}>{t('structure.tokenBuyback')}</div>
            <div className={styles.boxSubtitle}>{t('structure.burn')}</div>
            <div className={styles.burnIcon}>🔥</div>
          </div>
        </div> */}
        
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>

      <button 
              className={bstyles.purchaseButton}
              style={{ opacity:'1'}}
              /* onClick={() => {
                // Handle token purchase - redirect to purchase page or open modal
                //window.location.href = '/purchase'
                
                console.log('purchase token')
              }} */
              onClick={() => {
                window.open('https://app.youhold.online/', '_blank')
              }}
            >
              {t('button.purchase')}
            </button>
            {/* <p className={bstyles.disclaimer}>
              {t('disclaimer')}
            </p> */}
            </div>

    </div>
  )
}

