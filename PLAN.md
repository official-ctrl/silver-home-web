# 불곡산숲실버홈 웹사이트 제작 기획안

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 프로젝트명 | 불곡산숲실버홈 프리미엄 웹사이트 구축 |
| 목적 | 요양원 신뢰도 제고 및 보호자 전용 소통 채널(블로그) 제공 |
| 디자인 컨셉 | Tesla/Apple 스타일 미니멀리즘, 풀스크린 이미지 중심 |
| 메인 컬러 | Green `#4a7c59` (자연), Warm White `#fafafa` |
| 대상 사용자 | (1) 일반 방문객/잠재 입소 가족 (2) 보호자(인증 필요) |
| 배포 환경 | Vercel (무료 티어) |
| 예산 | $0 (전 스택 무료 티어 활용) |

## 2. 기술 스택

| 영역 | 기술 | 선정 이유 |
|---|---|---|
| 프레임워크 | Next.js 14+ (App Router) + TypeScript | SSR/SSG로 SEO 최적화, 타입 안정성 |
| 스타일링 | Tailwind CSS | 빠른 개발, 디자인 일관성 |
| 애니메이션 | Framer Motion | 부드러운 스크롤 인터랙션 |
| 아이콘 | lucide-react | 가벼운 SVG 아이콘셋 |
| 인증/DB | Supabase | 무료 티어, 즉시 사용 가능한 Auth + Postgres |
| 배포 | Vercel | GitHub 연동 자동 배포, 무료 |
| 버전관리 | GitHub (Private repo 권장) | 개인정보·사진 포함 가능성으로 비공개 권장 |

## 3. 정보구조 (IA)

```
/                 메인 랜딩 (풀스크린 히어로 + 시설 소개)
/about            시설 소개 (불곡산 숲길, 시설 둘러보기)
/programs         프로그램/케어 서비스 안내
/contact          상담 신청 / 위치 안내
/login            보호자 로그인
/blog             보호자 전용 블로그 (인증 필요, 미인증 시 서버 단에서 차단)
  /blog/[id]      게시글 상세 (사진/일상 공유)
```

## 4. 디렉토리 구조

```
silver-home-web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── contact/page.tsx
│   ├── login/page.tsx
│   └── blog/
│       ├── layout.tsx        # 서버 단 인증 가드
│       ├── page.tsx
│       └── [id]/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── FeatureSection.tsx
│   └── BlogCard.tsx
├── lib/
│   └── supabase.ts
├── public/images/
└── PLAN.md
```

## 5. 보안 요구사항 (CRITICAL)

- 보호자 블로그는 **localStorage 인증 금지** — 서버(Middleware/Server Component)에서 세션 검증 후 미인증 시 리다이렉트
- 어르신 개인정보·사진은 인증된 보호자만 열람 가능
- Supabase Row Level Security(RLS)로 본인 가족 게시글만 조회 가능하도록 제한
- 환경변수(API Key 등)는 `.env.local`에만 저장, 절대 커밋 금지 → `.gitignore` 필수

## 6. 단계별 개발 로드맵

| 단계 | 작업 | 산출물 |
|---|---|---|
| 1단계 | 프로젝트 초기 셋업 + 메인 페이지(Hero, 숲길 소개) | `app/page.tsx`, 핵심 컴포넌트 |
| 2단계 | 보호자 `/login`, `/blog` 페이지 UI | 인증 전 더미 UI |
| 3단계 | Supabase 연동 (Auth + DB + RLS) | 실제 로그인/블로그 동작 |
| 4단계 | About/Programs/Contact 페이지 | 정보 페이지 완성 |
| 5단계 | 반응형 점검 + 성능/SEO 최적화 | Lighthouse 90+ |
| 6단계 | GitHub 푸시 → Vercel 배포 | 운영 URL |

## 7. 완료 기준 (Acceptance Criteria)

- [ ] 모바일/태블릿/데스크톱 반응형 깨짐 없음
- [ ] 미인증 사용자가 `/blog` 직접 접근 시 서버에서 차단·리다이렉트됨
- [ ] Lighthouse 성능/SEO 점수 90점 이상
- [ ] 하드코딩된 시크릿 없음 (환경변수만 사용)
- [ ] 주요 페이지 5개(메인/소개/프로그램/문의/블로그) 정상 동작

## 8. 다음 액션

1. 본 기획안을 GitHub 비공개 저장소에 `PLAN.md`로 커밋
2. 1단계(메인 페이지) 구현 착수 — Claude Code 프롬프트로 진행
3. 단계별 완료 후 본 문서의 체크리스트 업데이트
