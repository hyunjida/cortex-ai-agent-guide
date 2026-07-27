# Cortex XSIAM Starter Guide

보안 입문자를 위한 Cortex XSIAM 한국어 인터랙티브 가이드입니다.
React, TypeScript, Vite를 사용하며 화면, 데이터, 상호작용을 컴포넌트 단위로 분리했습니다.

## 배포 사이트

**[Cortex XSIAM POC 가이드 바로가기](https://hyunjida.github.io/cortex-ai-agent-guide/)**

## 로컬에서 보기

```bash
npm install
npm run dev
```

## 구조

```text
src/
├── components/  # 공통 UI와 레이아웃
├── data/        # 화면에서 사용하는 콘텐츠 데이터
├── sections/    # 가이드의 독립적인 섹션
├── types/       # 공유 TypeScript 모델
├── App.tsx
└── main.tsx
```

## GitHub Pages 배포

1. `npm install` 후 생성된 `package-lock.json`을 함께 커밋합니다.
2. 변경 사항을 `main` 브랜치에 push합니다.
3. GitHub 저장소의 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 선택합니다.
4. Actions 탭의 배포 작업이 끝나면 URL을 확인합니다.

기본 배포 주소는 다음과 같습니다.

```text
https://hyunjida.github.io/cortex-ai-agent-guide/
```

## 참고

- 이 사이트는 비공식 학습 자료입니다.
- 실제 메뉴, 권한, 데이터셋과 필드명은 테넌트 구성·라이선스·제품 버전에 따라 달라질 수 있습니다.
- 제품 정보는 [Cortex XSIAM 공식 문서](https://docs-cortex.paloaltonetworks.com/r/Cortex-XSIAM/Cortex-XSIAM-3.x-Documentation)와 [공식 제품 페이지](https://www.paloaltonetworks.com/cortex/cortex-xsiam)를 확인하세요.
