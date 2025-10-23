# 🎬 Chainsaw Man: Reze Arc

<div align="center">

[![Chainsaw Man](https://img.shields.io/badge/Chainsaw%20Man-Reze%20Arc-8b5cf6?style=for-the-badge)](https://irenevantar.github.io/webprogramming/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

---

## 🌐 **[🔗 사이트 바로가기](https://irenevantar.github.io/webprogramming/)**

*체인소 맨 레제편 테마의 인터랙티브 웹사이트*

</div>

---

## ✨ 주요 기능

- 🎥 **YouTube 배경 영상** - 자동재생, 반복, 음소거
- 🎭 **캐릭터 소개** - 덴지, 레제, 마키마, 아키 (GSAP 3D 애니메이션)
- 🖼️ **포스터 갤러리** - 클릭하여 확대 보기
- 📱 **반응형 디자인** - 모든 디바이스 지원
- 🎨 **Purple & Cyan 테마** - 다크 모드 디자인
- ⚡ **부드러운 스크롤 애니메이션** - Framer Motion & GSAP ScrollTrigger

---

## 🛠️ 기술 스택

| Category | Technology |
|----------|------------|
| **Framework** | React 18.3.1 |
| **Build Tool** | Vite 5.4.21 |
| **Animation** | Framer Motion 11.18.2 |
| **Advanced Animation** | GSAP 3.13.0 + ScrollTrigger |
| **Deployment** | GitHub Pages |
| **Package Manager** | pnpm 10.19.0 |

---

## 🚀 설치 및 실행

### 1️⃣ 저장소 클론

```bash
git clone https://github.com/irenevantar/webprogramming.git
cd webprogramming
```

### 2️⃣ 의존성 설치

```bash
pnpm install
```

### 3️⃣ 개발 서버 실행

```bash
pnpm dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

### 4️⃣ 프로덕션 빌드

```bash
pnpm build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

---

## 📁 프로젝트 구조

```
My Website/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # YouTube 배경 영상
│   │   ├── SideNav.jsx        # 사이드 네비게이션
│   │   ├── Characters.jsx     # 캐릭터 섹션 (GSAP)
│   │   ├── Gallery.jsx        # 포스터 갤러리
│   │   ├── Story.jsx          # 스토리 섹션
│   │   ├── Footer.jsx         # 푸터
│   │   └── Loader.jsx         # 로딩 화면
│   ├── App.jsx                # 메인 앱
│   └── main.jsx               # 진입점
├── public/
│   └── assets/
│       └── images/            # 이미지 파일들
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions
└── vite.config.js             # Vite 설정
```

---

## 🎨 디자인 특징

### 색상 팔레트
- **배경:** `#000000` (Pure Black)
- **주요 색상:** `#c4b5fd`, `#a78bfa` (Purple)
- **강조 색상:** `#5eead4`, `#2dd4bf` (Cyan)

### 폰트
- **제목:** Inter (700, 800, 900)
- **본문:** Space Mono (400, 700)

### 애니메이션
- **스크롤 기반 인터랙션** - GSAP ScrollTrigger
- **3D 회전 효과** - rotateY 변환
- **부드러운 전환** - Framer Motion spring 애니메이션

---

## 📦 의존성

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.18.2",
  "gsap": "^3.13.0"
}
```

---

## 🌐 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

- **배포 URL:** https://irenevantar.github.io/webprogramming/
- **트리거:** `main` 브랜치에 푸시할 때마다
- **워크플로우:** `.github/workflows/deploy.yml`

---

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

## 👤 개발자

**Irene Vantar**
- GitHub: [@irenevantar](https://github.com/irenevantar)
- Repository: [webprogramming](https://github.com/irenevantar/webprogramming)

---

<div align="center">

**⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요! ⭐**

Made with 💜 by Irene Vantar

</div>
