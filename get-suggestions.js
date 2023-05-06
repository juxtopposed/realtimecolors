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

function updateColorSchemes() {
  const color = mainColor.value;
  const colorSchemes = generateColorSchemes(color);

  // Update analogous colors
  const analogousBlocks = document.querySelectorAll(".analogous");
  analogousBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[0][index];
  });

  // Update monochromatic colors
  const monochromaticBlocks = document.querySelectorAll(".monochromatic");
  monochromaticBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[1][index];
  });

  // Update triadic colors
  const triadicBlocks = document.querySelectorAll(".triadic");
  triadicBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[2][index];
  });

  // Update complementary colors
  const complementaryBlocks = document.querySelectorAll(".complementary");
  complementaryBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[3][index];
  });

  // Update split complementary colors
  const splitComplementaryBlocks = document.querySelectorAll(".split-complementary");
  splitComplementaryBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[4][index];
  });

  // Update double complementary colors
  const doubleComplementaryBlocks = document.querySelectorAll(".double-complementary");
  doubleComplementaryBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[5][index];
  });

  // Update square colors
  const squareBlocks = document.querySelectorAll(".square-colors");
  squareBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[6][index];
  });

  // Update compound colors
  const compoundBlocks = document.querySelectorAll(".compound-colors");
  compoundBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[7][index];
  });

  // Update shades colors
  const shadesBlocks = document.querySelectorAll(".shades-colors");
  shadesBlocks.forEach(function(block, index) {
    block.style.backgroundColor = colorSchemes.allSchemes[8][index];
  });

  // updateColorBlockCodes();
}

mainColor.addEventListener("change", updateColorSchemes);

// Call the updateColorSchemes function when the page loads
window.addEventListener("load", updateColorSchemes);







function generateColorSchemes(color) {
  const hsl = hexToHsl(color);
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];

  const analogous = generateAnalogousColors(h, s, l);
  const monochromatic = generateMonochromaticColors(h, s, l);
  const triadic = generateTriadicColors(h, s, l);
  const complementary = generateComplementaryColors(h, s, l);
  const splitComplementary = generateSplitComplementaryColors(h, s, l);
  const doubleSplitComplementary = generateDoubleSplitComplementaryColors(h, s, l);
  const square = generateSquareColors(h, s, l);
  const compound = generateCompoundColors(h, s, l);
  const shades = generateShadesColors(h, s, l);
  const allSchemes = [analogous, monochromatic, triadic, complementary, splitComplementary, doubleSplitComplementary, square, compound, shades];
  
  console.log('allSchemes:', allSchemes);
  return { allSchemes };

}



function generateAnalogousColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const analogous1 = `hsl(${(h + 30) % 360}, ${s}%, ${Math.floor(Math.random() * 20 + 60)}%)`;
  const analogous2 = `hsl(${(h + 15) % 360}, ${s}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const analogous3 = `hsl(${(h - 15 + 360) % 360}, ${s}%, ${Math.floor(Math.random() * 20 + 60)}%)`;
  const analogous4 = `hsl(${(h - 30 + 360) % 360}, ${s}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  return [main, analogous1, analogous2, analogous3, analogous4];
}

function generateMonochromaticColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const monochromatic1 = `hsl(${h}, ${s}%, ${Math.floor(Math.random() * 40)}%)`;
  const monochromatic2 = `hsl(${h}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const monochromatic3 = `hsl(${h}, ${Math.floor(s * 0.5)}%, ${Math.floor(Math.random() * 20 + 30)}%)`; 
  const monochromatic4 = `hsl(${h}, ${Math.floor(s * 0.25)}%, ${Math.floor(Math.random() * 20 + 10)}%)`;
  return [  main, monochromatic2, monochromatic3, monochromatic1, monochromatic4];
}

function generateTriadicColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const triadic1 = `hsl(${(h + 120) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const triadic2 = `hsl(${(h + 240) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const triadic3 = `hsl(${(h + 240) % 360}, ${Math.floor(s * 0.5)}%, ${Math.floor(Math.random() * 20 + 30)}%)`;
  const triadic4 = `hsl(${(h + 240) % 360}, ${Math.floor(s * 0.25)}%, ${Math.floor(Math.random() * 20 + 10)}%)`;
  return [main, triadic1, triadic2, triadic3, triadic4];
}
  
function generateComplementaryColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const complementary1 = `hsl(${(h + 180) % 360}, ${s}%, ${Math.floor(Math.random() * 50 + 50)}%)`;
  const complementary2 = `hsl(${(h + 60) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const complementary3 = `hsl(${(h + 60) % 360}, ${Math.floor(s * 0.5)}%, ${Math.floor(Math.random() * 20 + 30)}%)`;
  const complementary4 = `hsl(${(h + 60) % 360}, ${Math.floor(s * 0.25)}%, ${Math.floor(Math.random() * 20 + 10)}%)`;
  return [main, complementary1, complementary2, complementary3, complementary4];
}

function generateSplitComplementaryColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const splitComplementary1 = `hsl(${(h + 150) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const splitComplementary2 = `hsl(${(h + 210) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const splitComplementary3 = `hsl(${(h + 60) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const splitComplementary4 = `hsl(${(h + 60) % 360}, ${Math.floor(s * 0.5)}%, ${Math.floor(Math.random() * 20 + 30)}%)`;
  return [main, splitComplementary1, splitComplementary2, splitComplementary3, splitComplementary4];
}

function generateDoubleSplitComplementaryColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const doubleSplitComplementary1 = `hsl(${(h + 150) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const doubleSplitComplementary2 = `hsl(${(h + 210) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const doubleSplitComplementary3 = `hsl(${(h + 270) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const doubleSplitComplementary4 = `hsl(${(h + 30) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  return [main, doubleSplitComplementary1, doubleSplitComplementary2, doubleSplitComplementary3, doubleSplitComplementary4];
}


function generateSquareColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const square1 = `hsl(${(h + 90) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const square2 = `hsl(${(h + 180) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const square3 = `hsl(${(h + 270) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const square4 = `hsl(${(h + 45) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  return [main, square1, square2, square3, square4];
  }
  
  
  function generateCompoundColors(h, s, l) {
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  const compound1 = `hsl(${(h + 30) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  const compound2 = `hsl(${(h + 150) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const compound3 = `hsl(${(h + 210) % 360}, ${s}%, ${Math.floor(Math.random() * 30 + 70)}%)`;
  const compound4 = `hsl(${(h + 330) % 360}, ${Math.floor(s * 0.75)}%, ${Math.floor(Math.random() * 20 + 50)}%)`;
  return [main, compound1, compound2, compound3, compound4];
  }
  
  
  function generateShadesColors(h, s, l) {
  const shades1 = `hsl(${h}, ${Math.floor(s * 0.25)}%, ${Math.floor(l * 0.25)}%)`;
  const shades2 = `hsl(${h}, ${Math.floor(s * 0.5)}%, ${Math.floor(l * 0.5)}%)`;
  const shades3 = `hsl(${h}, ${Math.floor(s * 0.75)}%, ${Math.floor(l * 0.75)}%)`;
  const shades4 = `hsl(${h}, ${Math.floor(s * 0.9)}%, ${Math.floor(l * 0.9)}%)`;
  const main = `hsl(${h}, ${s}%, ${l}%)`;
  return [main, shades4, shades3, shades2, shades1 ];
  }




function hexToHsl(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }

  r /= 255, g /= 255, b /= 255;
  const cmax = Math.max(r, g, b), cmin = Math.min(r, g, b);
  const delta = cmax - cmin;
  let h = 0, s = 0, l = 0;

  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}













// Randomize
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

});




// Export
const exportButton = document.getElementById('export');
exportButton.addEventListener('click', exportPalettes);


function exportPalettes() {
  const schemes = ["analogous", "monochromatic", "triadic", "complementary", "split-complementary", "double-complementary", "square-colors", "compound-colors", "shades-colors"];
  const schemeNames = ["Analogous", "Monochromatic", "Triadic", "Complementary", "Split Complementary", "Double Split Complementary", "Square", "Compound", "Shades"];
  const zip = new JSZip();
  let text = "Your selected palettes:\n";
  schemes.forEach((scheme, index) => {
    const schemeName = schemeNames[index];
    const schemeColors = document.querySelectorAll(`.${scheme}`);
    let paletteText = `${schemeName}:`;
    const palette = new CanvasPalette(500, 100);
    schemeColors.forEach((colorBlock, colorIndex) => {
      const color = colorBlock.style.backgroundColor;
      const hex = rgbToHex(color);
      palette.setColor(colorIndex, color);
      paletteText += ` ${hex.toUpperCase()}`;
    });
    zip.file(`${schemeName}.png`, palette.toDataURL().split(',')[1], { base64: true });
    text += `\n- ${paletteText}`;
  });
  zip.file("Selected Palettes.txt", text + "\n\nThank you for using RealtimeColors.com!");
  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "palettes.zip");
  });
}

function rgbToHex(rgb) {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const hex = ((r << 16) | (g << 8) | b).toString(16);
  return "#" + hex.padStart(6, '0');
}

class CanvasPalette {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
  }

  setColor(index, color) {
    const x = index * this.canvas.width / 5;
    const y = 0;
    const width = this.canvas.width / 5;
    const height = this.canvas.height;
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  }

  toDataURL() {
    return this.canvas.toDataURL();
  }
}







// show hex values
document.addEventListener('DOMContentLoaded', () => {
  const colorBlocks = document.querySelectorAll('.color-block');

  colorBlocks.forEach(colorBlock => {
    const bgColor = getComputedStyle(colorBlock).getPropertyValue('background-color');

    const hexColor = rgbToHex(bgColor);

    colorBlock.querySelector('.color-code').textContent = hexColor;

    const observer = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const newBgColor = getComputedStyle(colorBlock).getPropertyValue('background-color');
          const newHexColor = rgbToHex(newBgColor);
          colorBlock.querySelector('.color-code').textContent = newHexColor;
          break;
        }
      }
    });
    observer.observe(colorBlock, { attributes: true });
  });
});

function rgbToHex(rgbColor) {
  const [r, g, b] = rgbColor.slice(4, -1).split(',').map(x => parseInt(x.trim()));

  const hexValue = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

  return '#' + hexValue;
}




// Copy HEX codes

document.addEventListener('DOMContentLoaded', () => {
  const colorBlocks = document.querySelectorAll('.color-block');

  colorBlocks.forEach(colorBlock => {
    const colorCode = colorBlock.querySelector('.color-code');

    colorBlock.addEventListener('click', () => {
      const tempElement = document.createElement('textarea');
      tempElement.value = colorCode.textContent;

      document.body.appendChild(tempElement);

      tempElement.select();

      document.execCommand('copy');

      colorCode.textContent = "Copied!";

      setTimeout(() => {
        colorCode.textContent = tempElement.value;
      }, 2000);

      document.body.removeChild(tempElement);
    });
  });
});














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




// updating links based on slug

function updateLinks(slug) {
  const links = document.querySelectorAll('a:not([href^="#"])');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('https://realtimecolors.com')) {

      const url = new URL(href);
      url.searchParams.set('colors', slug);
      link.setAttribute('href', url.toString());
    } else if (!href.startsWith('https://') && !href.startsWith('mailto:')) {

      const url = new URL(href, window.location.origin);
      url.searchParams.set('colors', slug);
      link.setAttribute('href', url.toString());
    }
  });
}


let currentSlug = '';
const checkForUpdates = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const newSlug = urlParams.get('colors');
  if (newSlug && newSlug !== currentSlug) {
    currentSlug = newSlug;
    updateLinks(currentSlug);
  }
  setTimeout(checkForUpdates, 100);
};
checkForUpdates();
      




// hamburger menu 

if (window.innerWidth < 1100) {
  const hamburger = document.querySelector('#hamburger');
  const mobileMenu = document.querySelector('.menu');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('hide')
  });
}