// FONTS

// Headings
const h1Tags = document.getElementsByTagName('h1');
const h2Tags = document.getElementsByTagName('h2');
const fontUploadHeadings = document.getElementById('font-upload-headings');
const headingLabelSpan = document.getElementById('heading-label-span');
const headingsFontsLabel = document.querySelector('#headings-fonts-label');
const headingFontName = 'custom-heading-font';


let currentFont;
let file;

fontUploadHeadings.addEventListener('change', () => {
  const file = fontUploadHeadings.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fontUrl = reader.result;
      const fontName = 'custom-font';
      const fontFace = new FontFace(headingFontName, `url(${fontUrl})`);
      document.fonts.add(fontFace);
      const headings = document.querySelectorAll('h1, h2');
      headings.forEach(heading => {
        heading.style.fontFamily = `${headingFontName}, sans-serif`;
        heading.style.letterSpacing = "normal";
      });
      const headingLabelSpan = document.querySelector('#heading-label-span');
      const fileName = file.name;
      headingLabelSpan.innerText = fileName;
      headingsFontsLabel.style.fontFamily = `${fontName}, sans-serif`;
    }
  }
});

const resetFontButtonHeading = document.querySelector('.reset-font-heading');
resetFontButtonHeading.addEventListener('click', () => {
  const headings = document.querySelectorAll('h1, h2');
  headings.forEach(heading => {
    heading.style.fontFamily = "Inter";
    heading.style.letterSpacing = "-2px";
  });
  headingLabelSpan.innerText = `Upload`;
  headingsFontsLabel.style.fontFamily = "Inter";
  file = null;
  fontUploadHeadings.value = '';
});





// Text
const paragraphTags = document.getElementsByTagName('p');
const hrefTags = document.getElementsByTagName('a');
const h3Tags = document.getElementsByTagName('h3');
const fontUploadTexts = document.getElementById('font-upload-texts');
const textLabelSpan = document.getElementById('text-label-span');
const textsFontsLabel = document.querySelector('#texts-fonts-label');
const textFontName = 'custom-text-font';

fontUploadTexts.addEventListener('change', () => {
  const file = fontUploadTexts.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fontUrl = reader.result;
      const fontName = 'custom-font';
      const fontFace = new FontFace(textFontName, `url(${fontUrl})`);
      document.fonts.add(fontFace);
      const texts = document.querySelectorAll('p, a, h3');
      texts.forEach(text => {
        text.style.fontFamily = `${textFontName}, sans-serif`;
        text.style.letterSpacing = "normal";
      });
      const textLabelSpan = document.querySelector('#text-label-span');
      const fileName = file.name;
      textLabelSpan.innerText = fileName;
      textsFontsLabel.style.fontFamily = `${fontName}, sans-serif`;
    }
  }
});

const resetFontButtonText = document.querySelector('.reset-font-text');
resetFontButtonText.addEventListener('click', () => {
  const texts = document.querySelectorAll('p, a, h3');
  texts.forEach(text => {
    text.style.fontFamily = "Inter";
  });
  textLabelSpan.innerText = `Upload`;
  textsFontsLabel.style.fontFamily = "Inter";
  file = null;
  fontUploadTexts.value = '';
});