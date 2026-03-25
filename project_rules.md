# Project Rules & Guidelines

## 1. 업무 범위 (Scope of Work)
- 프로젝트 초기 세팅 및 폴더 구조 생성
- mock 데이터 톤앤매너 텍스트에 맞춰 일괄 생성 (`articles.ts`, `portfolio.ts`)
- 컴포넌트 보일러플레이트 반복 생성
- Server Action + Resend 연동 (`contact/actions.ts`)
- 빌드 에러 디버깅
- `package.json` 스크립트 관리

---

## 2. 기술 스택 (Tech Stack)
- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (strict mode)
- **Email**: Resend (`resend` 패키지, Server Action 경유)
- **Font**:
  - Pretendard — 본문/UI (`font-body`, `font-label`)
  - Noto Serif KR — 헤드라인 (`font-headline`)
  - Material Symbols Outlined — 아이콘 (Google CDN, ligature 방식)
- **Image**: `next/image` 컴포넌트 필수 사용

---

## 3. 폴더 구조 (Folder Structure)
```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (Navbar, Footer 포함)
│   ├── page.tsx            # 홈페이지
│   ├── globals.css         # 디자인 토큰 및 전역 스타일
│   ├── contact/
│   │   ├── page.tsx        # 문의 폼 ('use client')
│   │   └── actions.ts      # Server Action ('use server')
│   └── blog/
│       └── [slug]/
│           └── page.tsx    # 블로그 상세 페이지
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # 고정 상단 네비게이션 ('use client')
│   │   └── Footer.tsx      # 하단 푸터
│   └── ui/
│       ├── Hero.tsx        # 메인 히어로 섹션 (Article prop 수신)
│       ├── ArticleCard.tsx # 아티클 카드 컴포넌트
│       └── Carousel.tsx    # 포트폴리오 가로 스크롤 ('use client')
└── data/
    ├── articles.ts         # 아티클 목 데이터 및 Article 타입
    └── portfolio.ts        # 포트폴리오 목 데이터 및 PortfolioItem 타입
```

---

## 4. 디자인 시스템 (Design System)
- 디자인 토큰은 `globals.css`의 `@theme` 블록에 CSS 변수로 정의
- **하드코딩 hex 색상 사용 금지** — 반드시 토큰 클래스 사용
  ```
  ❌ text-[#6B5C4E]    ✅ text-primary
  ❌ bg-[#FAF9F6]      ✅ bg-surface
  ❌ text-[#1A1C1A]    ✅ text-on-surface
  ```
- 주요 토큰:
  | 토큰 | 용도 |
  |------|------|
  | `primary` | 브랜드 색상 (갈색 계열) |
  | `surface` | 배경 |
  | `on-surface` | 기본 텍스트 |
  | `on-surface-variant` | 보조 텍스트 |
  | `outline-variant` | 구분선, 테두리 |
  | `surface-container` | 카드, 입력창 배경 |
- `dark:` 클래스는 토글 기능 구현 전까지 사용하지 않는다

---

## 5. 컴포넌트 규칙 (Component Rules)

### Server Component vs Client Component
- 기본은 **Server Component** (async 가능, 데이터 직접 접근)
- `useState`, `useRef`, `useEffect`, 이벤트 핸들러가 필요한 경우에만 `'use client'` 추가
- 현재 Client Component: `Navbar`, `Carousel`, `contact/page.tsx`

### Navbar / Footer
- **각 페이지에서 직접 import 금지**
- `app/layout.tsx`에서 전역으로 렌더링됨

### 데이터 흐름
- 페이지/섹션에 필요한 데이터는 `src/data/*.ts`에서 import
- Hero 컴포넌트는 `Article` 타입을 prop으로 받음 — 하드코딩 금지
- 블로그 상세 페이지는 `articles.findIndex()`로 slug를 조회하고, 없으면 `notFound()` 호출

---

## 6. 환경 변수 (Environment Variables)
- `.env.local` 파일에 정의 (git에 커밋하지 않음)
- 코드에 API 키 또는 이메일 주소를 직접 하드코딩 금지
- **폴백 값 사용 금지** (`|| 'fallback_key'` 형태)

| 변수명 | 용도 |
|--------|------|
| `RESEND_API_KEY` | Resend 이메일 발송 API 키 |
| `CONTACT_EMAIL` | 문의 메일 수신 주소 |

---

## 7. 언어 & 커뮤니케이션 규칙 (Communication Rules)
- 모든 진행 과정, 설명, 답변은 **한국어**로 출력한다
- 코드 주석도 한국어로 작성한다
- 전문 용어는 영어 그대로 쓰되, 처음 등장할 때 괄호로 설명을 붙인다
  - 예: `Server Action (서버에서 실행되는 함수)`

---

## 8. 에러 발생 시 설명 규칙 (Error Reporting Format)
코드에서 에러가 발생했을 경우, 반드시 아래 형식으로 설명한다.

```text
형식: [에러종류]: 한 줄 요약 (한국어)

🚨 에러 발생

[ 어떤 에러인가요? ]
에러 이름과 메시지를 한 줄로 요약

[ 왜 발생했나요? ]
초보자도 이해할 수 있도록 에러의 원인을 쉬운 말로 설명
기술적인 용어는 비유나 예시를 들어 풀어서 설명

[ 어떻게 발생했나요? (단계별 과정) ]
1. 어떤 코드가
2. 어떤 상황에서
3. 왜 문제를 일으켰는지
순서대로 설명

[ 해결 방법 ]
수정할 코드와 함께 해결 방법 제시
```
