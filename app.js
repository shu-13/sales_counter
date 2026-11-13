(() => {
  'use strict';

  const isLocalhost = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  if (!('serviceWorker' in navigator) || (location.protocol !== 'https:' && !isLocalhost)) return;

  navigator.serviceWorker.register('./sw.js').catch((error) => {
    console.error('販売カウンターのオフライン機能を有効にできませんでした。', error);
    const notice = document.querySelector('#appNotice');
    if (notice) {
      notice.textContent = 'オフライン機能を有効にできませんでした。ページを再読み込みしてください。';
      notice.classList.add('show');
    }
  });
})();
