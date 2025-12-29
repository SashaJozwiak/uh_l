'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './LanguageSelector.module.css'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (lang: 'en' | 'ru') => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        className={styles.langButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {language.toUpperCase()}
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none"
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={`${styles.dropdownItem} ${language === 'en' ? styles.active : ''}`}
            onClick={() => handleSelect('en')}
          >
            EN
          </button>
          <button
            className={`${styles.dropdownItem} ${language === 'ru' ? styles.active : ''}`}
            onClick={() => handleSelect('ru')}
          >
            RU
          </button>
        </div>
      )}
    </div>
  )
}

