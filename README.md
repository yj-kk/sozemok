# 소제목 (SOZEMOK) 랜딩 페이지

Small furniture studio & stay 브랜드 '소제목'의 랜딩 페이지입니다.

## 프로젝트 소개

이 프로젝트는 가구 스튜디오와 숙박 서비스를 제공하는 '소제목' 브랜드의 랜딩 페이지입니다. 웹 페이지는 브랜드 로고, 소개, 서비스 링크를 포함하고 있으며 모바일 환경에서도 최적화되어 있습니다.

## 기능

- 반응형 디자인 (데스크탑 및 모바일 지원)
- 서비스 항목 호버 및 클릭 효과
- 소셜 미디어 링크

## 설치 및 실행 방법

1. 저장소를 클론합니다.
```
git clone https://github.com/yourusername/sozemok-landing.git
cd sozemok-landing
```

2. 필요한 이미지 파일을 `public/images` 폴더에 추가합니다.
   - furniture.jpg - 메인 가구 이미지
   - naver-icon.png - 네이버 아이콘
   - airbnb-icon.png - 에어비앤비 아이콘
   - kakao-icon.png - 카카오톡 아이콘
   - instagram-icon.png - 인스타그램 아이콘

3. 로컬 개발 서버를 실행합니다 (예: Live Server VS Code 확장 프로그램 사용).

## 기술 스택

- HTML5
- CSS3
- JavaScript (vanilla)

## 프로젝트 구조

```
sozemok-landing/
├── index.html         # 메인 HTML 파일
├── styles.css         # 스타일시트
├── scripts.js         # 자바스크립트 파일
├── public/            # 정적 파일 디렉토리
│   └── images/        # 이미지 파일 디렉토리
└── README.md          # 프로젝트 설명
```

## 커스터마이징

- `styles.css`의 `:root` 섹션에서 색상 변수를 수정하여 테마를 변경할 수 있습니다.
- `index.html`에서 텍스트 및 링크를 수정하여 콘텐츠를 업데이트할 수 있습니다.
- `scripts.js`에서 이벤트 핸들러를 수정하여 상호작용을 조정할 수 있습니다.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 배포됩니다.
