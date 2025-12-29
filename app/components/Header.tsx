'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import styles from './Header.module.css'

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <h1
            >YouHold</h1>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link
            href="/news"
            className={`${styles.navLink} ${isActive('/news') ? styles.active : ''}`}
          >
            {t('nav.news')}
          </Link>

          <Link
            href="/products"
            className={`${styles.navLink} ${isActive('/products') ? styles.active : ''}`}
          >
            {t('nav.products')}
          </Link>

          <Link
            href="/whitepaper"
            className={`${styles.navLink} ${isActive('/whitepaper') ? styles.active : ''}`}
          >
            {t('nav.whitepaper')}
          </Link>
        </nav>

        <div className={styles.mobileMenu} ref={menuRef}>
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {t('nav.menu')}
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none"
              className={`${styles.menuArrow} ${isMenuOpen ? styles.menuArrowOpen : ''}`}
            >
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {isMenuOpen && (
            <div className={styles.mobileDropdown}>
              <Link
                href="/news"
                className={`${styles.mobileNavLink} ${isActive('/news') ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.news')}
              </Link>
              <Link
                href="/products"
                className={`${styles.mobileNavLink} ${isActive('/products') ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link
                href="/whitepaper"
                className={`${styles.mobileNavLink} ${isActive('/whitepaper') ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.whitepaper')}
              </Link>
            </div>
          )}
        </div>

        <div className={styles.authSection}>
          <LanguageSelector />
          <button
            className={styles.authButton}
            onClick={() => (/* window.location.href = '/account' */ console.log('auth'))}
          >
            {t('auth.signIn')}
          </button>
        </div>
      </div>
    </header>
  )
}
