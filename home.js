const query = new URLSearchParams(location.search);
const english = query.get('lang') === 'en' || (query.get('lang') !== 'ja' && !(navigator.language || 'ja').toLowerCase().startsWith('ja'));

if (english) {
  const translations = {
    navHow: 'How to play',
    navFeatures: 'Features',
    navContact: 'Contact',
    eyebrow: 'Sticker Hunt × PURI',
    title: 'Snap it. Stick it.',
    titleAccent: 'Make a photo strip.',
    description: 'Turn something you love into a sticker. Take photo strips with friends and decorate them together.',
    discover: 'See how to play',
    release: 'For iPhone · In testing',
    screenshotNote: 'Screenshots from Catchue. Tap an image to enlarge it.',
    stickerTitle: 'Sticker Hunt',
    stickerShoot: 'Choose the camera icon on the shooting screen to open Sticker Hunt, then snap a photo of something you like.',
    stickerSave: 'Check the cutout and tap Save. Find your saved sticker under Sticker in Gallery.',
    availability: 'Sticker features are available in supported test builds.',
    puriTitle: 'Photo strips in PURI',
    puriShoot: 'Swipe right from the camera to open PURI. Invite friends, take photos, and vote for which shots to use.',
    puriDecorate: 'Add drawings and stickers together. When you’re done, tap the print slot to collect your photo strip.',
    todayDetail: 'Take and post a photo in today’s featured color. Posting unlocks photos your mutual friends took that day.',
    giftsDetail: 'Send stickers you made to mutual friends. Claimed stickers go into Gallery, where you can use them in PURI and other editing tools.',
    roomsDetail: 'Create a room and invite friends to hunt for colors together. Everyone in the room can see the photos once shooting ends.',
    worksDetail: 'Get your Today collage the next morning and your PURI print after the session. Revisit your creations in the calendar.',
    collageTitle: 'Collages and Y2K',
    collageDetail: 'Choose a shape and background color for your collage. The Y2K skin adds frames such as liquid metal and hologram.',
    access: 'Shoot and edit without signing in. Sign in with Apple to share with friends.',
    privacy: 'Privacy policy',
    altStickerCamera: 'The shooting screen with Sticker Hunting mode selected.',
    deviceCutout: 'Cutout on iPhone · Japanese UI',
    altStickerCutout: 'The finished dried-flower cutout has a white border, with Preview and Save buttons at the bottom.',
    altBooth: 'The entrance to PURI, with a blue photo booth.',
    altPuriEdit: 'The PURI editor has pen and sticker tools below the photo strip.',
    altPuriPrint: 'A completed photo strip emerges from the print slot in PURI.',
    altToday: 'Today shows featured colors and posted photos.',
    altGifts: 'Gift details show a sticker preview and a button to claim it.',
    altRooms: 'Rooms shows a button to create a room and a list of joined rooms.',
    altWorks: 'Works shows artwork deliveries in a calendar.',
    altCollage: 'Y2K collage background settings show a photo preview and background, shape, and frame choices.'
  };
  document.documentElement.lang = 'en';
  document.title = 'Catchue — Sticker Hunt and PURI';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = translations[el.dataset.i18n]; });
  document.querySelectorAll('[data-alt]').forEach(el => { el.alt = translations[el.dataset.alt]; });
  document.querySelectorAll('[data-screen]').forEach(link => {
    const url = 'assets/screens/' + link.dataset.screen + '-en.webp';
    link.href = url;
    link.querySelector('img').src = url;
  });
  document.querySelector('.brand').href = '?lang=en';
  document.querySelector('.footer-brand').href = '?lang=en';
  document.querySelector('.brand').setAttribute('aria-label', 'Catchue home');
  document.querySelector('nav').setAttribute('aria-label', 'Main navigation');
  document.querySelector('[data-i18n="privacy"]').href = 'privacy/en/';
  const languageLink = document.getElementById('language-link');
  languageLink.href = '?lang=ja';
  languageLink.textContent = '日本語';
  languageLink.lang = 'ja';
}
