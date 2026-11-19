const query = new URLSearchParams(location.search);
const english = query.get('lang') === 'en' || (query.get('lang') !== 'ja' && !(navigator.language || 'ja').toLowerCase().startsWith('ja'));
const translations = {
  navHow: 'How to play', navFeatures: 'Features', navContact: 'Contact',
  eyebrow: 'Sticker Hunt × PURI',
  title: 'Snap it. Stick it.', titleAccent: 'Make a photo strip.',
  discover: 'See how to play', release: 'For iPhone · In testing', speech: 'Which color will you find?',
  step1: 'Snap a favorite',
  step2: 'Cut out and save',
  step3: 'Pose with friends',
  step4: 'Decorate and collect',
  availability: 'Stickers are available in supported test builds.',
  localAccess: 'Shoot and edit without signing in',
  sharingAccess: 'Sign in with Apple to share',
  privacy: 'Privacy policy',
  skinsTitle: 'Silicone / Y2K',
  todayDetail: 'Share photos in today’s color',
  roomsDetail: 'Find colors with friends',
  puriDetail: 'Make photo strips together',
  giftsDetail: 'Send and receive stickers',
  worksDetail: 'Revisit your creations',
  skinsDetail: 'Switch your skin',
  friendsAlt: 'A white and orange cat and a blue mouse presenting a color together.',
  colorsLabel: 'Try picking a color'
};
if (english) {
  document.documentElement.lang = 'en';
  document.title = 'Catchue — Go play. Find your hue.';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = translations[el.dataset.i18n]; });
  document.querySelectorAll('[data-alt]').forEach(el => { el.alt = translations[el.dataset.alt]; });
  document.querySelectorAll('[data-label]').forEach(el => { el.setAttribute('aria-label', translations[el.dataset.label]); });
  document.querySelector('.brand').href = '?lang=en';
  document.querySelector('.footer-brand').href = '?lang=en';
  document.querySelector('.brand').setAttribute('aria-label', 'Catchue home');
  document.querySelector('.hero-playground').setAttribute('aria-label', 'Pick a color with our cat and mouse');
  document.querySelector('nav').setAttribute('aria-label', 'Main navigation');
  document.querySelector('[data-i18n="privacy"]').href = 'privacy/en/';
  document.querySelectorAll('.color-choice').forEach(el => { el.setAttribute('aria-label', el.dataset.name); });
  const languageLink = document.getElementById('language-link');
  languageLink.href = '?lang=ja'; languageLink.textContent = '日本語'; languageLink.lang = 'ja';
}
document.querySelectorAll('.color-choice').forEach(button => {
  button.addEventListener('click', () => {
    document.documentElement.style.setProperty('--play-color', button.dataset.color);
    document.getElementById('color-name').textContent = button.dataset.name;
    document.querySelectorAll('.color-choice').forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
  });
});
