

// Expand button for mobile

const expandButton = document.querySelector(".rolloutbutton");

expandButton.addEventListener("click", () => {
  var options = document.getElementsByClassName("option");

  for (var i = 0; i < options.length; i++) {
    if (options[i] !== expandButton) {
      options[i].classList.toggle("rollout");
    }
  }

  expandButton.classList.toggle("rotate");
});



// Highlight Toolbar


function highlightToolbar() {
  var toolbar = document.getElementById("toolbar");
  toolbar.classList.add("highlighted");
  setTimeout(function() {
    toolbar.classList.remove("highlighted");
  }, 1000);
}



// Get Suggestions

const mainColor = document.getElementById("main-color");

mainColor.addEventListener("change", function() {
  const color = mainColor.value;
  const colorScheme = generateColorScheme(color);
  const colorBlocks = document.getElementsByClassName("color-block");

  for (let i = 0; i < colorBlocks.length; i++) {
    colorBlocks[i].style.backgroundColor = colorScheme[i % colorScheme.length];
  }

  const mainBlock = document.querySelector(".main-block");
  mainBlock.style.backgroundColor = color;

  updateColorBlockCodes();
  
});

function generateColorScheme(color) {
  const hsl = hexToHsl(color);
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];
  
  const complementary = `hsl(${(h + 180) % 360}, ${s}%, ${Math.floor(Math.random() * 50 + 50)}%)`;
  const monochromatic = `hsl(${h}, ${s}%, ${Math.floor(Math.random() * 40)}%)`;
  const analogous = `hsl(${(h + 30) % 360}, ${s}%, ${Math.floor(Math.random() * 20 + 80)}%)`;
  const triadic = `hsl(${(h + 120) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  
  return [complementary, monochromatic, analogous, triadic];
}

function hexToHsl(hex) {
  const r = parseInt(hex.substring(1, 3), 16) / 255;
  const g = parseInt(hex.substring(3, 5), 16) / 255;
  const b = parseInt(hex.substring(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}



// Add HEX values

const complementary = document.querySelector('.complementary');
const main = document.querySelector('.main-block');
const monochromatic = document.querySelector('.monochromatic');
const analogous = document.querySelector('.analogous');
const triadic = document.querySelector('.triadic');

const complementaryCode = document.querySelector('#complementary-code');
const mainCode = document.querySelector('#main-code');
const monochromaticCode = document.querySelector('#monochromatic-code');
const analogousCode = document.querySelector('#analogous-code');
const triadicCode = document.querySelector('#triadic-code');

function updateColorBlockCodes() {
  complementaryCode.textContent = "#" + getComputedStyle(complementary).backgroundColor.slice(4, -1).split(',').map(x => parseInt(x.trim()).toString(16).padStart(2, '0')).join('');
  mainCode.textContent = "#" + getComputedStyle(main).backgroundColor.slice(4, -1).split(',').map(x => parseInt(x.trim()).toString(16).padStart(2, '0')).join('');
  monochromaticCode.textContent = "#" + getComputedStyle(monochromatic).backgroundColor.slice(4, -1).split(',').map(x => parseInt(x.trim()).toString(16).padStart(2, '0')).join('');
  analogousCode.textContent = "#" + getComputedStyle(analogous).backgroundColor.slice(4, -1).split(',').map(x => parseInt(x.trim()).toString(16).padStart(2, '0')).join('');
  triadicCode.textContent = "#" + getComputedStyle(triadic).backgroundColor.slice(4, -1).split(',').map(x => parseInt(x.trim()).toString(16).padStart(2, '0')).join('');
}









// Contrast Checker


const colorBlocks = document.querySelectorAll('.color-block, .main-block');
const option = document.querySelector('.option');

mainColor.addEventListener('change', function() {
  const backgroundColor = mainColor.value;
  option.style.backgroundColor = backgroundColor;
  
  const r = parseInt(backgroundColor.slice(1, 3), 16);
  const g = parseInt(backgroundColor.slice(3, 5), 16);
  const b = parseInt(backgroundColor.slice(5, 7), 16);
  
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  
  if (luminance > 0.5) {
    option.querySelector('label').style.color = 'black';
  } else {
    option.querySelector('label').style.color = 'white';
  }
  
  colorBlocks.forEach(block => {
    const computedStyle = getComputedStyle(block);
    const backgroundColor = computedStyle.backgroundColor;
    const [h, s, l] = backgroundColor.match(/\d+/g);
    const lightness = Math.round((l/255)*100);
    if (lightness > 50) {
      block.querySelector('.color-block-text').style.color = 'black';
      block.querySelector('.color-code').style.color = 'black';
    } else {
      block.querySelector('.color-block-text').style.color = 'white';
      block.querySelector('.color-code').style.color = 'white';
    }
  });
});



const randomizeBtn = document.getElementById("randomize");
randomizeBtn.addEventListener("click", function() {
  const hexChars = "0123456789abcdef";
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    randomHex += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  document.getElementById("main-color").value = randomHex;
  const event = new Event("change");
  document.getElementById("main-color").dispatchEvent(event);
});

document.addEventListener("keydown", function(event) {
  if (event.code === 'Space') {
    randomizeBtn.click();
    event.preventDefault();
  }
});





const exportButton = document.getElementById('export');
exportButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 250;
  canvas.height = 50;

  const colors = [
    getComputedStyle(complementary).backgroundColor,
    getComputedStyle(main).backgroundColor,
    getComputedStyle(monochromatic).backgroundColor,
    getComputedStyle(analogous).backgroundColor,
    getComputedStyle(triadic).backgroundColor
  ];

  for (let i = 0; i < colors.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(i * 50, 0, 50, 50);
  }

  const paletteImage = canvas.toDataURL('image/png');
  const paletteBlob = dataURItoBlob(paletteImage);
  const paletteFile = new File([paletteBlob], 'palette.png', { type: 'image/png' });

  const colorText = `Your color palette:\n\n${complementaryCode.textContent} - ${mainCode.textContent} - ${monochromaticCode.textContent} - ${analogousCode.textContent} - ${triadicCode.textContent}\n\nThanks for using Realtime Colors!`;
  const colorBlob = new Blob([colorText], { type: 'text/plain' });
  const colorFile = new File([colorBlob], 'colors.txt', { type: 'text/plain' });

  const zip = new JSZip();
  zip.file(paletteFile.name, paletteFile);
  zip.file(colorFile.name, colorFile);

  zip.generateAsync({ type: 'blob' }).then(function (blob) {
    saveAs(blob, 'colors.zip');
  });
});

function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}


// FAQ

const faqQuestions = document.querySelectorAll(".faq");
const faqAnswers = document.querySelectorAll(".faq-a");
const faqIcons = document.querySelectorAll(".faq-icon");

faqQuestions.forEach((faqQuestion, index) => {
  faqQuestion.addEventListener('click', () => {
    faqIcons[index].classList.toggle("expand");
    faqAnswers[index].classList.toggle("expand");
  });
});


function highlightToolbar() {
  var toolbar = document.getElementById("toolbar");
  toolbar.classList.add("highlighted");
  setTimeout(function() {
    toolbar.classList.remove("highlighted");
  }, 1000);
}




// TIP

const tipBar = document.getElementById('tip-bar');
const closeBtn = document.getElementById('close-btn');

function showTipBar() {
  tipBar.classList.add('show');
}

function hideTipBar() {
  tipBar.classList.remove('show');
}

closeBtn.addEventListener('click', hideTipBar);

randomizeBtn.addEventListener('click', function(event) {
  if (!localStorage.getItem('tipShown')) {
    setTimeout(showTipBar, 2000);
    localStorage.setItem('tipShown', true);
  }
});

if (localStorage.getItem('tipShown')) {
  tipBar.style.display = 'none';
}