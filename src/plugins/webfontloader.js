import WebFontLoader from 'webfontloader';

export async function loadFonts() {
  return new Promise((resolve, reject) => {
    WebFontLoader.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900&display=swap'],
      },
      active: resolve,
      inactive: reject,
    });
  });
}
