const query = new URLSearchParams(location.search);
const english = query.get('lang') === 'en' || (query.get('lang') !== 'ja' && !(navigator.language || 'ja').toLowerCase().startsWith('ja'));
const translations = {
  navHow: 'How to play', navFeatures: 'Features', navContact: 'Contact',
  eyebrow: 'Sticker Hunt and photo strips with friends',
  title: 'Find it.<br><span class="play-word">Make a sticker.</span>',
  description: 'Snap a photo and cut out something you love.<br>Add your sticker to a photo strip with friends.',
  discover: 'See how to play', release: 'For iPhone · Currently in testing', speech: 'Which color will you find?',
  howTitle: 'Make a sticker.<br class="mobile-break"> Add it to your photo strip.',
  step1Title: 'Go on a Sticker Hunt',
  step1Text: 'Choose Sticker Hunt in the camera and take a photo. Preview the cutout and save it to Sticker in Gallery.',
  step2Title: 'Strike a pose in PURI',
  step2Text: 'Swipe right from the camera to open PURI. Take photos with friends and vote for your favorites.',
  step3Title: 'Decorate and pick up your print',
  step3Text: 'Draw and add stickers together, then pick up the finished photo strip from the booth’s print slot.',
  availability: 'Sticker features are available in supported test builds.',
  togetherTitle: 'Shoot right away.<br>Share when you’re ready.',
  togetherText: 'Take photos, edit, make stickers, and create collages without signing in.<br>Sign in with Apple to share with friends.',
  footerNote: 'A little color, every day.', privacy: 'Privacy policy',
  featuresTitle: "What you can do in Catchue",
  skinsTitle: "Silicone and Y2K",
  todayDetail: "Post with today’s featured color to see mutual friends’ photos for the day.",
  roomsDetail: "Invite friends to a color hunt. See each other’s photos after shooting ends.",
  puriDetail: "Take photo-strip pictures, vote for your shots, decorate together, and pick up your finished print from the booth.",
  giftsDetail: "Distribute the stickers you make to mutual friends. Use stickers you claim in PURI and other sticker tools.",
  worksDetail: "Find your next-morning Today collages and PURI prints in the calendar. Eligible sticker gifts may appear in your automatic collage.",
  skinsDetail: "Switch between Silicone and Y2K. In supported test builds, decorate collages with Y2K frames and backgrounds.",
  friendsAlt: 'A white and orange cat and a blue mouse presenting a color together.', keepsakeAlt: 'A cat and a mouse holding a colorful artwork.', colorsLabel: 'Try picking a color'
};
if (english) {
  document.documentElement.lang = 'en';
  document.title = 'Catchue — Go play. Find your hue.';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = translations[el.dataset.i18n]; });
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
