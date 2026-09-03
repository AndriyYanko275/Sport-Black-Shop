import type { SportCategory } from '../types'

const tones: Record<SportCategory, string> = {
  football: '#d4d4d4',
  basketball: '#b8b8b8',
  volleyball: '#ececec',
  tennis: '#9c9c9c',
  rugby: '#7a7a7a',
}

export function BallVisual({
  category,
  className = '',
}: {
  category: SportCategory
  className?: string
}) {
  const fill = tones[category]
  return (
    <div
      className={`flex aspect-square items-center justify-center bg-[#0d0d0d] ${className}`}
    >
      <svg viewBox="0 0 120 120" className="h-[58%] w-[58%]" aria-hidden>
        {category === 'rugby' ? (
          <ellipse
            cx="60"
            cy="60"
            rx="28"
            ry="42"
            fill="none"
            stroke={fill}
            strokeWidth="1.4"
          />
        ) : (
          <circle cx="60" cy="60" r="36" fill="none" stroke={fill} strokeWidth="1.4" />
        )}
        {category === 'football' && (
          <path
            d="M60 24 L78 38 L72 60 L48 60 L42 38 Z"
            fill="none"
            stroke={fill}
            strokeWidth="1"
          />
        )}
        {category === 'basketball' && (
          <>
            <path d="M24 60 H96" stroke={fill} strokeWidth="1" />
            <path d="M60 24 V96" stroke={fill} strokeWidth="1" />
            <path d="M38 32 C52 60 52 60 38 88" fill="none" stroke={fill} strokeWidth="1" />
            <path d="M82 32 C68 60 68 60 82 88" fill="none" stroke={fill} strokeWidth="1" />
          </>
        )}
        {category === 'volleyball' && (
          <>
            <path d="M36 40 C60 52 60 52 84 40" fill="none" stroke={fill} strokeWidth="1" />
            <path d="M32 68 C60 58 60 58 88 68" fill="none" stroke={fill} strokeWidth="1" />
            <path d="M60 24 V96" stroke={fill} strokeWidth="1" />
          </>
        )}
        {category === 'tennis' && (
          <>
            <path d="M38 34 C70 48 70 72 38 86" fill="none" stroke={fill} strokeWidth="1.1" />
            <path d="M82 34 C50 48 50 72 82 86" fill="none" stroke={fill} strokeWidth="1.1" />
          </>
        )}
        {category === 'rugby' && (
          <>
            <path d="M60 22 V98" stroke={fill} strokeWidth="1" />
            <path d="M44 40 H76" stroke={fill} strokeWidth="1" />
            <path d="M42 60 H78" stroke={fill} strokeWidth="1" />
            <path d="M44 80 H76" stroke={fill} strokeWidth="1" />
          </>
        )}
      </svg>
    </div>
  )
}
