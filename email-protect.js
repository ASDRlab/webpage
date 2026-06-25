/*
 * email-protect.js — 스팸봇 보호용 이메일 런타임 조립 스크립트
 *
 * HTML 소스에는 완전한 "user@domain" 문자열을 두지 않습니다.
 * 각 링크/요소에 아래 data 속성으로 주소를 조각내어 둡니다.
 *   data-eml-user   : 이메일 로컬 파트 (예: jihoon)
 *   data-eml-domain : 이메일 도메인 (예: kumoh.ac.kr)
 * 그리고 표시할 위치에는 빈 <span class="eml"></span> 를 둡니다.
 *
 * 런타임에 user + '@' + domain 으로 주소를 조립하여
 *   - <a> 요소면 mailto: href 를 설정하고
 *   - 내부의 .eml 슬롯이 있으면 그 텍스트로 주소를 표시합니다.
 */
(function () {
  function assemble(el) {
    var user = el.getAttribute('data-eml-user');
    var domain = el.getAttribute('data-eml-domain');
    if (!user || !domain) return;
    var addr = user + '@' + domain; // '@' 를 런타임에 결합
    if (el.tagName === 'A') {
      el.setAttribute('href', 'mailto:' + addr);
    }
    var slot = el.querySelector('.eml');
    if (slot) {
      slot.textContent = addr;
    } else if (el.hasAttribute('data-eml-show')) {
      el.textContent = addr;
    }
  }

  function init() {
    var els = document.querySelectorAll('[data-eml-user]');
    for (var i = 0; i < els.length; i++) assemble(els[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
