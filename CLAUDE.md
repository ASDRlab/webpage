# CLAUDE.md — ASDR Lab 웹사이트 관리 규칙

이 저장소는 ASDR Lab 정적 웹사이트(HTML + Tailwind CDN)입니다. 아래 규칙을 반드시 지켜
주세요.

## 절대 원칙: 디자인을 바꾸지 말 것

- **디자인, 클래스 이름, 폰트, 색을 절대 바꾸지 말 것.** Tailwind 클래스, `tailwind.config`
  색상 토큰, `font-headline`/`font-body`/`font-label` 등 폰트 설정, 기존 레이아웃을 임의로
  수정하지 않습니다.
- 콘텐츠(논문, 멤버, 텍스트)를 추가·수정할 때는 **기존 마크업 구조와 클래스를 그대로
  복사해서** 내용만 교체합니다. 새로운 스타일이나 클래스를 만들지 않습니다.

## 커밋 전 승인

- **커밋하기 전에 변경 내용을 먼저 사용자에게 보여주고 승인을 받습니다.**
- 승인 없이 `git commit` / `git push`를 실행하지 않습니다.

## publications.html — 논문 카드 규칙

### 카드 형식

- 새 논문 카드는 **기존 카드 형식을 그대로 따릅니다.** 일반 논문 리스트 카드의 구조:

  ```html
  <div class="bg-white p-6 rounded-xl border border-outline-variant/40 hover:border-primary/30 hover:shadow-lg transition-all shadow-sm pub-card">
      <h4 class="font-headline text-lg font-bold text-on-surface mb-2"><a class="hover:text-primary transition-colors" href="논문링크">논문 제목</a></h4>
      <p class="font-body text-sm text-on-surface-variant font-medium mb-3 mb-3">저자 목록</p>
      <div class="font-body text-sm font-bold text-primary/70 mt-1">저널명 (IF/JCR 정보) (연도)</div>
  </div>
  ```

- 링크가 아직 없으면 `href="#"`, 게재 상태가 미정이면 마지막 `<div>`를 `Under Review`로
  둡니다.
- Featured Publications 섹션의 하이라이트 카드는 별도의 형식(`rounded-2xl`, `Highlight`
  배지 등)을 사용하므로, 일반 카드와 혼동하지 말고 해당 섹션의 기존 카드를 그대로
  따릅니다.

### 배치 위치

- 새 항목은 **해당 연도 섹션(`<div class="... year-section" data-year="YYYY">`)의
  `<div class="space-y-4">` 안 맨 위**에 넣습니다.

### 저자 표기

- **우리 연구실 멤버의 이름은 `<u>` 태그로 밑줄 처리**합니다. 예: `<u>Dongwon Seo</u>`.
  연구실 멤버 여부는 `members.html` / `alumni.html` / `pi.html`을 기준으로 확인합니다.
- **교신저자(corresponding author)는 이름 뒤에 별표 `*`** 를 붙입니다. 예:
  `<u>Jihoon Chung*</u>`.
- **공동 제1저자(co-first author)는 이름 뒤에 단검표 `†`** 를 붙입니다. 예:
  `<u>Dongwon Seo</u>†`.
- 별표·단검표 표기는 기존 카드의 표기 방식을 그대로 유지합니다.

## 한국어 / 영어 일관성

- 페이지에 한국어와 영어 내용이 함께 있을 경우, **두 언어의 의미가 서로 일치**해야 합니다.
  한쪽만 수정하고 다른 쪽을 빠뜨리지 않습니다.

## 작업 순서 요약

1. 기존 동일 유형 카드/요소를 찾아 구조를 복사한다.
2. 디자인·클래스·폰트·색을 그대로 두고 내용만 교체한다.
3. 저자 밑줄(`<u>`)·교신저자(`*`)·공동 1저자(`†`) 표기를 적용한다.
4. 한/영 내용이 일치하는지 확인한다.
5. 변경 내용을 사용자에게 보여주고 승인을 받은 뒤 커밋한다.
