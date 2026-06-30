# 불곡산숲실버홈 디자인 시스템 (확정본)

> Gemini 초안 + 접근성 검증(WCAG AA) 후 보완. 구현 시 본 문서를 기준으로 한다.

## 1. Color Palette

| 용도 | 컬러명 | Hex | Tailwind 클래스 | 비고 |
|---|---|---|---|---|
| Main Background | Warm White | `#FAFAFA` | `bg-[#FAFAFA]` | |
| Surface (Card) | Pure White | `#FFFFFF` | `bg-white` | |
| Primary (Brand) | Forest Green | `#4A7C59` | `bg-[#4A7C59] text-[#4A7C59]` | 대비 4.86:1, 텍스트/버튼 모두 안전 |
| Primary Dark | Deep Pine | `#2D4F38` | `bg-[#2D4F38]` | 푸터/다크 섹션 |
| Primary Light | Soft Sage | `#E8F0EA` | `bg-[#E8F0EA]` | 뱃지, 선택 상태 |
| Text Primary | Charcoal | `#222222` | `text-[#222222]` | 제목 |
| Text Secondary | Muted Gray | `#666666` | `text-[#666666]` | 대비 5.50:1, 본문 안전 |
| Accent (배지/테두리 전용) | Champagne Gold | `#D4AF37` | `bg-[#D4AF37]`, `border-[#D4AF37]` | **텍스트 색상으로 사용 금지** (대비 2.0:1, WCAG AA 미달) |
| Accent (텍스트 필요 시) | Dark Gold | `#9C7A1F` | `text-[#9C7A1F]` | 골드 텍스트가 꼭 필요한 경우 대체 색상 |

### ⚠️ 보완 사항 1: Gold는 텍스트로 쓰지 않는다
`#D4AF37`는 흰 배경에서 대비 2.0~2.1:1로 WCAG AA(4.5:1) 기준에 크게 미달한다.
인증마크/별점 등은 **아이콘 채움색·배지 배경·테두리**로만 사용하고, 텍스트가 필요하면 `#9C7A1F`를 쓴다.

## 2. Typography

Pretendard 폰트 사용. (기존 가이드 유지)

| 계층 | 사이즈 | Weight | Tailwind 예시 |
|---|---|---|---|
| Hero Title (H1) | 48~64px | Bold | `text-5xl md:text-6xl font-bold tracking-tight leading-tight` |
| Section Title (H2) | 32~40px | SemiBold | `text-3xl md:text-4xl font-semibold tracking-tight` |
| Card Title (H3) | 20~24px | Medium | `text-xl font-medium tracking-tight` |
| Body Large | 18px | Regular | `text-lg text-[#666666] leading-relaxed` |
| Body Regular | 16px | Regular | `text-base text-[#666666] leading-relaxed` |
| Caption/Badge | 13~14px | Medium | `text-sm text-[#4A7C59] font-medium tracking-wide uppercase` |

## 3. Spacing & Components

- 섹션 간 여백: `py-24 md:py-32`, `gap-8 md:gap-16`
- 버튼(Primary): `bg-[#4A7C59] text-white rounded-full px-8 py-4 hover:bg-[#3d6649] transition-colors`
- 카드: `bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8`
- 터치 타겟: 모든 버튼/링크 최소 `h-12 w-12`(48px) 이상

### ⚠️ 보완 사항 2: 헤더 Glassmorphism → 불투명도 상향
기존: `bg-white/70 backdrop-blur-md`
변경:
```
bg-white/95 backdrop-blur-sm border-b border-gray-100/50
```
- 배경 이미지 위에서도 텍스트 대비를 안정적으로 보장하기 위해 불투명도를 70%→95%로 올리고 blur는 보조 효과로만 사용
- `@supports (backdrop-filter: blur(1px))` 분기로 미지원 브라우저는 솔리드 화이트로 자동 폴백

### ⚠️ 보완 사항 3: 로그인 카드 — Glass 카드 제거
기존: 블러 배경 위 글래스 카드
변경: backdrop-blur 없는 **솔리드 화이트 카드** (`bg-white rounded-2xl shadow-lg p-10`) + 배경은 정적 이미지(저채도 처리)
- 이유: 보안 신뢰감이 핵심인 화면에서 흐릿한 UI는 신뢰도를 낮추고, 구형 브라우저에서 레이아웃 깨짐 위험

## 4. Motion Guide (Framer Motion)

```js
// Scroll Fade-in (기본)
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

### ⚠️ 보완 사항 4: 모든 모션에 reduced-motion 가드 필수
```tsx
const shouldReduceMotion = useReducedMotion()
const variants = shouldReduceMotion
  ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
  : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }
```
- 전정기관 민감 사용자를 위해 `prefers-reduced-motion: reduce` 시 페이드/패럴랙스/마스크 리빌 모두 비활성화

### ⚠️ 보완 사항 5: 히어로 영상은 점진적 향상으로 구현
- 기본: `next/image` 정적 이미지 (priority, LCP 대상)
- 향상: `<video autoplay muted loop playsInline preload="none" poster="...">` — WebM, 5MB 이하로 압축
- 모바일 데이터 절약 모드(`navigator.connection.saveData`) 감지 시 영상 비활성화하고 이미지만 노출

## 5. 페이지별 UX 구조 (변경 없음, Gemini 초안 유지)

- `/` 메인: Hero → Philosophy → Key Values(3단 Grid) → Visual Tour(Sticky Scroll) → CTA
- `/about`: Hero → Story → Gallery(Masonry) → Trust(인증/연혁)
- `/programs`: Hero → Daily Care Flow(Timeline) → Medical & Rehab → Dining
- `/contact`: 좌측 정보 / 우측 Progressive Disclosure 폼
- `/login`: 정적 배경 이미지 + 솔리드 화이트 카드 (보완 사항 3 적용)
- `/blog`: 프라이빗 앨범형 피드, 날짜별 카드

## 6. 접근성 체크리스트 (WCAG AA)

- [x] Text Secondary on Warm White: 5.50:1 ✅
- [x] Primary Green text/button: 4.86:1 ✅
- [ ] ~~Gold 텍스트~~ → 사용 금지로 변경, 배지/테두리만 허용
- [ ] 모든 motion에 `useReducedMotion` 가드
- [ ] 헤더/로그인 카드 불투명도 95% 이상 또는 솔리드 처리
- [ ] 터치 타겟 48px 이상
- [ ] 폼 focus-visible 링: `focus:ring-2 focus:ring-[#4a7c59] focus:outline-none`
