const query = new URLSearchParams(location.search);
const english = query.get('lang') === 'en' || (query.get('lang') !== 'ja' && !(navigator.language || 'ja').toLowerCase().startsWith('ja'));
const translations = {
  navHow: 'How to play', navContact: 'Contact', eyebrow: 'A little color in your everyday.',
  title: 'Go play.<br><span class="play-word">Find your hue.</span>',
  description: 'Find today’s color with a cat and a mouse.<br>A camera for the little discoveries around you.',
  discover: 'Meet Catchue', release: 'For iPhone · Currently in testing', speech: 'Which color will you find?',
  howTitle: 'Little colors.<br class="mobile-break"> Lasting memories.', step1Title: 'Find a color.',
  step1Text: 'Blue skies. Pink flowers.<br>Find today’s color in your everyday.', step2Title: 'Make it your hue.',
  step2Text: 'Tune your colors with one tap.<br>Or take your time with detailed editing.', step3Title: 'Keep the day.',
  step3Text: 'Your posted photos arrive as a collage.<br>Keep your color discoveries in Works.',
  togetherTitle: 'On your own.<br>With your friends.',
  togetherText: 'Collect your own color discoveries,<br>or chase the same color in a private room.<br>Different perspectives, one little artwork.',
  tag: 'And a cat and a mouse, of course.', footerNote: 'A little color, every day.', privacy: 'Privacy policy',
  friendsAlt: 'A white and orange cat and a blue mouse presenting a color together.', keepsakeAlt: 'A cat and a mouse holding a colorful artwork.', colorsLabel: 'Try picking a color'
};
if (english) {
  document.documentElement.lang = 'en';
  document.title = 'Catchue — Go play. Find your hue.';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = translations[el.dataset.i18n]; });
  document.querySelectorAll('[data-alt]').forEach(el => { el.alt = translations[el.dataset.alt]; });
  document.querySelectorAll('[data-label]').forEach(el => { el.setAttribute('aria-label', translations[el.dataset.label]); });
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
