import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
      className="language-toggle"
      style={{
        background: 'transparent',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-3)',
        padding: '0.25rem 0.5rem',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        cursor: 'pointer',
        textTransform: 'uppercase' as const,
        transition: 'all 0.15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--color-accent)';
        e.currentTarget.style.borderColor = 'var(--color-accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--color-text-3)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      {lang === 'pt' ? 'PT' : 'EN'}
    </button>
  );
}
