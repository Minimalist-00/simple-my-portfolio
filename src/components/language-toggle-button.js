import { useRouter } from 'next/router'

export const LanguageToggleButton = () => {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router

  const toggleLanguage = () => {
    const nextLocale = locale === 'ja' ? 'en' : 'ja'
    router.push({ pathname, query }, asPath, { locale: nextLocale })
  }

  const isJa = locale === 'ja'

  return (
    <button
      className="relative inline-flex items-center gap-0 rounded-full p-1 cursor-pointer transition-all duration-300 hover:opacity-80"
      style={{
        backgroundColor: isJa ? '#FFA500' : '#805AD5' // Orange for JA, Purple for EN
      }}
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {/* JP Text */}
      <div
        className="relative z-[2] flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 font-bold text-xs"
        style={{
          backgroundColor: isJa ? 'white' : 'transparent',
          color: isJa ? '#FFA500' : 'rgba(255, 255, 255, 0.7)',
          transform: isJa ? 'scale(1)' : 'scale(0.8)'
        }}
      >
        JP
      </div>

      {/* EN Text */}
      <div
        className="relative z-[2] flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 font-bold text-xs"
        style={{
          backgroundColor: !isJa ? 'white' : 'transparent',
          color: !isJa ? '#805AD5' : 'rgba(255, 255, 255, 0.7)',
          transform: !isJa ? 'scale(1)' : 'scale(0.8)'
        }}
      >
        EN
      </div>
    </button>
  )
}
