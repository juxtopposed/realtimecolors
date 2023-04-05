

const primaryColor = document.getElementById('prim');
const secondaryColor = document.getElementById('sec');
const primbuttnColor = document.getElementById('primbuttn');
const secbuttnColor = document.getElementById('secbuttn');
const accentColor = document.getElementById('accent');
const randomizeButton = document.getElementById('randomize');


const colorSets = [
  {
    colors: ['#e9c46a', '#264653', '#e76f51', '#2a9d8f', '#e9c46a'],
  },

  {
    colors: ['#223d49', '#ffe08a', '#ac5039', '#fff0c7', '#2a9d8f'],
  },

  {
    colors: ['#f6f7f9', '#212428', '#00ff00', '#313130', '#00bb00'],
  },

  {
    colors: ['#0e101a', '#ffffff', '#0d8065', '#f0f2fc', '#aff2ea'],
    source: '<b>Inspiration:</b><br>Grammarly' 
  },

  {
    colors: ['#1d3557', '#f1faee', '#e63946', '#a8dadc', '#457b9d'],
  },

  {
    colors: ['#f1faee', '#1d3557', '#a8dadc', '#06446a', '#ffc7cc'],
  },

  {
    colors: ['#fffbe5', '#000814', '#ffc300', '#001d3d', '#003566'],
  },

  {
    colors: ['#344e41', '#dad7cd', '#3a5a40', '#b5c49c', '#588157'],
  },

  {
    colors: ['#2b2d42', '#edf2f4', '#d90429', '#8d99ae', '#201f33'],
  },

  {
    colors: ['#212529', '#f8f9fa', '#343a40', '#e9ecef', '#adb5bd'],
  },

  {
    colors: ['#231942', '#ffebf5', '#5e548e', '#efd9f2', '#8d73b0'],
  },

  {
    colors: ['#ffffff', '#191919', '#405bff', '#212121', '#ebff38'],
    source: '<b>Inspiration:</b><br>LaunchDarkly'
  },

  {
    colors: ['#eeeeee', '#000000', '#44d62c', '#222222', '#ff9c07'],
  },

  {
    colors: ['#eeeeee', '#000000', '#44d62c', '#222222', '#44d62c'],
    source: '<b>Inspiration:</b><br>Razer'
  },

  {
    colors: ['#ff8bff', '#193718', '#ff8bff', '#5eaa67', '#e9ffe8'],
    source: '<b>Inspiration:</b><br>OpenAI ChatGPT'
  },

  {
    colors: ['#000000', '#ffffff', '#000000', '#f2f2f2', '#000000'],
  },

  {
    colors: ['#000000', '#ffffff', '#0049db', '#f2f2f2', '#ff6bc1'],
  },

  {
    colors: ['#0f1419', '#ffffff', '#1d9bf0', '#f7f7f7', '#8ecdf7'],
    source: '<b>Inspiration:</b><br>Twitter'
  },

  {
    colors: ['#0f1419', '#ffffff', '#ffd400', '#f2f2f2', '#ffe97f'],
    source: '<b>Inspiration:</b><br>Twitter'
  },

  {
    colors: ['#fbf5d4', '#0099ab', '#5a39d0', '#006374', '#2156c0'],
    source: '<b>Inspiration:</b><br>Retro 80s Nike Jacket'
  },

  {
    colors: ['#000000', '#e7e7d7', '#006338', '#deded0', '#006338'],
    source: '<b>Inspiration:</b><br>Retro 80s Nike Jacket'
  },

  {
    colors: ['#0f1419', '#ffffff', '#f91880', '#f2f2f2', '#fc8bbf'],
    source: '<b>Inspiration:</b><br>Twitter'
  },

  {
    colors: ['#0f1419', '#ffffff', '#8756FF', '#f2f2f2', '#bbaaff'],
    source: '<b>Inspiration:</b><br>Twitter'
  },

  {
    colors: ['#0f1419', '#ffffff', '#ff7a00', '#f2f2f2', '#ffbc7f'],
    source: '<b>Inspiration:</b><br>Twitter'
  },

  {
    colors: ['#0f1419', '#ffffff', '#00ba7c', '#f2f2f2', '#7fdcbd'],
    source: '<b>Inspiration:</b><br>Twitter'
  },

  {
    colors: ['#006374', '#fbf5d4', '#5a39d0', '#cbddca', '#5a39d0'],
  },
  
];

let lastSelectedColorSet = null;

randomizeButton.addEventListener('click', () => {
  removeColorSource();
  randomizeColors();
  updateSlug();

});

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    removeColorSource();
    randomizeColors();
    updateSlug();
    event.preventDefault();
  }
});

primaryColor.addEventListener('input', removeColorSource);
secondaryColor.addEventListener('input', removeColorSource);
primbuttnColor.addEventListener('input', removeColorSource);
secbuttnColor.addEventListener('input', removeColorSource);
accentColor.addEventListener('input', removeColorSource);

function removeColorSource() {
  const sourceDiv = document.querySelector('.color-source');
  if (sourceDiv) {
    sourceDiv.remove();
  }
}

function randomizeColors() {
  let randomColorSet;
  
  do {
    randomColorSet = colorSets[Math.floor(Math.random() * colorSets.length)];
  } while (randomColorSet === lastSelectedColorSet);
  
  lastSelectedColorSet = randomColorSet;

  primaryColor.value = randomColorSet.colors[0];
  secondaryColor.value = randomColorSet.colors[1];
  primbuttnColor.value = randomColorSet.colors[2];
  secbuttnColor.value = randomColorSet.colors[3];
  accentColor.value = randomColorSet.colors[4];

  document.documentElement.style.setProperty('--primary', randomColorSet.colors[0]);
  document.documentElement.style.setProperty('--secondary', randomColorSet.colors[1]);
  document.documentElement.style.setProperty('--primbuttn', randomColorSet.colors[2]);
  document.documentElement.style.setProperty('--secbuttn', randomColorSet.colors[3]);
  document.documentElement.style.setProperty('--accent', randomColorSet.colors[4]);

  if (randomColorSet.source) {
    const sourceDiv = document.createElement('div');
    sourceDiv.innerHTML = randomColorSet.source;
    sourceDiv.classList.add('color-source');
    document.body.appendChild(sourceDiv);
  }

  






  // contrast checker

  const primbuttnColorValue = primbuttnColor.value;
  
  primaryButtons.forEach(primaryButton => {
    const primaryColorValue = primaryColor.value;
    const secondaryColorValue = secondaryColor.value;

    const primaryBrightness = getBrightness(primaryColorValue);
    const secondaryBrightness = getBrightness(secondaryColorValue);

    const contrastRatio = getContrastRatio(primbuttnColorValue, primaryColorValue);

    if (primaryBrightness < secondaryBrightness) {
      if (contrastRatio < 4.5) {
        primaryButton.style.color = 'var(--secondary)';
        primbuttnColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        primaryButton.style.color = 'var(--primary)';
        primbuttnColorClass.style.color = 'var(--primary)';
      }
    }

    if (primaryBrightness > secondaryBrightness) {
      if (contrastRatio < 4.5) {
        primaryButton.style.color = 'var(--secondary)';
        primbuttnColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        primaryButton.style.color = 'var(--primary)';
        primbuttnColorClass.style.color = 'var(--primary)';
      }
    }

  });

  const secbuttnColorValue = secbuttnColor.value;
  
  faqQuestions.forEach(faqQuestion => {
    const primaryColorValue = primaryColor.value;
    const secondaryColorValue = secondaryColor.value;

    const primaryBrightness = getBrightness(primaryColorValue);
    const secondaryBrightness = getBrightness(secondaryColorValue);

    const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);

    if (primaryBrightness < secondaryBrightness) {
      if (contrastRatio < 4.5) {
        faqQuestion.style.color = 'var(--secondary)';
        secbuttnColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        faqQuestion.style.color = 'var(--primary)';
        secbuttnColorClass.style.color = 'var(--primary)';
      }
    }

    if (primaryBrightness > secondaryBrightness) {
      if (contrastRatio < 4.5) {
        faqQuestion.style.color = 'var(--secondary)';
        secbuttnColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        faqQuestion.style.color = 'var(--primary)';
        secbuttnColorClass.style.color = 'var(--primary)';
      }
    }

  });
  
  secondaryButtons.forEach(secondaryButton => {
    const primaryColorValue = primaryColor.value;
    const secondaryColorValue = secondaryColor.value;

    const primaryBrightness = getBrightness(primaryColorValue);
    const secondaryBrightness = getBrightness(secondaryColorValue);

    const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);

    if (primaryBrightness < secondaryBrightness) {
      if (contrastRatio < 4.5) {
        secondaryButton.style.color = 'var(--secondary)';
        secbuttnColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        secondaryButton.style.color = 'var(--primary)';
        secbuttnColorClass.style.color = 'var(--primary)';
      }
    }

    if (primaryBrightness > secondaryBrightness) {
      if (contrastRatio < 4.5) {
        secondaryButton.style.color = 'var(--secondary)';
        secbuttnColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        secondaryButton.style.color = 'var(--primary)';
        secbuttnColorClass.style.color = 'var(--primary)';
      }
    }

  });

  const accentColorValue = accentColor.value;

  partTwo.forEach(partTwo => {
    const primaryColorValue = primaryColor.value;
    const secondaryColorValue = secondaryColor.value;

    const primaryBrightness = getBrightness(primaryColorValue);
    const secondaryBrightness = getBrightness(secondaryColorValue);

    const contrastRatio = getContrastRatio(accentColorValue, primaryColorValue);

    if (primaryBrightness < secondaryBrightness) {
      if (contrastRatio < 4.5) {
        partTwo.style.color = 'var(--secondary)';
        accentColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        partTwo.style.color = 'var(--primary)';
        accentColorClass.style.color = 'var(--primary)';
      }
    }

    if (primaryBrightness > secondaryBrightness) {
      if (contrastRatio < 4.5) {
        partTwo.style.color = 'var(--secondary)';
        accentColorClass.style.color = 'var(--secondary)';
      }
      else if (contrastRatio > 4.5) {
        partTwo.style.color = 'var(--primary)';
        accentColorClass.style.color = 'var(--primary)';
      }
    }

  });



}






primaryColor.addEventListener('input', () => {
  const primaryColorValue = primaryColor.value;
  document.documentElement.style.setProperty('--primary', primaryColorValue);
});

secondaryColor.addEventListener('input', () => {
    const secondaryColorValue = secondaryColor.value;
    document.documentElement.style.setProperty('--secondary', secondaryColorValue);
});

primbuttnColor.addEventListener('input', () => {
    const primbuttnColorValue = primbuttnColor.value;
    document.documentElement.style.setProperty('--primbuttn', primbuttnColorValue);
});

secbuttnColor.addEventListener('input', () => {
    const secbuttnColorValue = secbuttnColor.value;
    document.documentElement.style.setProperty('--secbuttn', secbuttnColorValue);
});

accentColor.addEventListener('input', () => {
    const accentColorValue = accentColor.value;
    document.documentElement.style.setProperty('--accent', accentColorValue);
});

primaryColor.addEventListener('input', checkContrast);
secondaryColor.addEventListener('input', checkContrast);
primbuttnColor.addEventListener('input', checkContrast);
secbuttnColor.addEventListener('input', checkContrast);
accentColor.addEventListener('input', checkContrast);


const exportButton = document.getElementById('export');
exportButton.addEventListener('click', () => {
  const colorValues = [
    primaryColor.value,
    secondaryColor.value,
    primbuttnColor.value,
    secbuttnColor.value,
    accentColor.value
  ];

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = colorValues.length * 50;
  canvas.height = 50;
  for (let i = 0; i < colorValues.length; i++) {
    ctx.fillStyle = colorValues[i];
    ctx.fillRect(i * 50, 0, 50, 50);
  }

  const paletteImage = canvas.toDataURL('image/png');
  const paletteBlob = dataURItoBlob(paletteImage);
  const paletteFile = new File([paletteBlob], 'palette.png', { type: 'image/png' });

  const colorText = `Your selected colors:\n
    Primary: ${primaryColor.value} (RGB: ${hexToRgb(primaryColor.value)})
    Secondary: ${secondaryColor.value} (RGB: ${hexToRgb(secondaryColor.value)})
    Primary Button: ${primbuttnColor.value} (RGB: ${hexToRgb(primbuttnColor.value)})
    Secondary Button: ${secbuttnColor.value} (RGB: ${hexToRgb(secbuttnColor.value)})
    Accent: ${accentColor.value} (RGB: ${hexToRgb(accentColor.value)})\n
Thanks for using Real-time Colors!`;
  const colorBlob = new Blob([colorText], { type: 'text/plain' });
  const colorFile = new File([colorBlob], 'colors.txt', { type: 'text/plain' });

  const zip = new JSZip();
  zip.file(paletteFile.name, paletteFile);
  zip.file(colorFile.name, colorFile);
  zip.generateAsync({ type: 'blob' }).then(function (blob) {
    saveAs(blob, 'colors.zip');
  });
});

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1,3), 16);
  const g = parseInt(hex.substring(3,5), 16);
  const b = parseInt(hex.substring(5,7), 16);
  return `${r}, ${g}, ${b}`;
}

// Function to convert data URI to blob
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





// 
// 
// 

// contrast checking 

function getBrightness(color) {
  let hex = color;

  if (color.substring(0, 3) === "rgb") {
    const [r, g, b] = color.match(/\d+/g);
    hex = "#" + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
  }

  if (hex === "#000000") return 0;
  if (hex === "#FFFFFF") return 100;

  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  return l * 100 / 255;
}


function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}





const primaryButtons = document.querySelectorAll('.primary-button');
const secondaryButtons = document.querySelectorAll('.secondary-button');
const partTwo = document.querySelectorAll('.part2');
const primbuttnColorClass = document.querySelector('.primbuttn');
const secbuttnColorClass = document.querySelector('.secbuttn');
const accentColorClass = document.querySelector('.accent');


// contrast checking rules

function checkContrast() {
  primbuttnColor.addEventListener('change', debounce(() => {
    const primbuttnColorValue = primbuttnColor.value;
    
    primaryButtons.forEach(primaryButton => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;

      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);

      const contrastRatio = getContrastRatio(primbuttnColorValue, primaryColorValue);

      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          primaryButton.style.color = 'var(--secondary)';
          primbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          primaryButton.style.color = 'var(--primary)';
          primbuttnColorClass.style.color = 'var(--primary)';
        }
      }

      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          primaryButton.style.color = 'var(--secondary)';
          primbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          primaryButton.style.color = 'var(--primary)';
          primbuttnColorClass.style.color = 'var(--primary)';
        }
      }

      console.log(`${contrastRatio}`);

    });
  }));


  secbuttnColor.addEventListener('change', debounce(() => {
    const secbuttnColorValue = secbuttnColor.value;
    
    faqQuestions.forEach(faqQuestion => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;

      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);

      const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);

      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          faqQuestion.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          faqQuestion.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }

      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          faqQuestion.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          faqQuestion.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }

    });
  }));


  secbuttnColor.addEventListener('change', debounce(() => {
    const secbuttnColorValue = secbuttnColor.value;
    
    secondaryButtons.forEach(secondaryButton => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;

      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);

      const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);

      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          secondaryButton.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          secondaryButton.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }

      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          secondaryButton.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          secondaryButton.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }

    });
  }));


  accentColor.addEventListener('change', debounce(() => {
    const accentColorValue = accentColor.value;
    
    partTwo.forEach(partTwo => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;

      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);

      const contrastRatio = getContrastRatio(accentColorValue, primaryColorValue);

      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          partTwo.style.color = 'var(--secondary)';
          accentColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          partTwo.style.color = 'var(--primary)';
          accentColorClass.style.color = 'var(--primary)';
        }
      }

      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          partTwo.style.color = 'var(--secondary)';
          accentColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          partTwo.style.color = 'var(--primary)';
          accentColorClass.style.color = 'var(--primary)';
        }
      }

    });
  }));
}





function getContrastRatio(background, foreground) {
  const bg = parseColor(background);
  const fg = parseColor(foreground);

  const l1 = getLuminance(bg);
  const l2 = getLuminance(fg);

  if (l1 > l2) {
    return (l1 + 0.05) / (l2 + 0.05);
  } else {
    return (l2 + 0.05) / (l1 + 0.05);
  }
}



function parseColor(color) {
  const regexRgb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const matchRgb = regexRgb.exec(color);
  if (matchRgb) {
    return {
      r: parseInt(matchRgb[1]),
      g: parseInt(matchRgb[2]),
      b: parseInt(matchRgb[3])
    };
  }

  const regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const matchHex = regexHex.exec(color);
  if (matchHex) {
    const hex = matchHex[1];
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return {
      r,
      g,
      b
    };
  }

  throw new Error('Invalid color value: ' + color);
}

function getLuminance(color) {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;
  const luminance = 0.2126 * Math.pow(r, 2.2) + 0.7152 * Math.pow(g, 2.2) + 0.0722 * Math.pow(b, 2.2);
  return luminance;
}



// faq

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






const tipBar = document.getElementById('tip-bar');
const closeBtn = document.getElementById('close-btn');
const randomizeBtn = document.getElementById('randomize');

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















// Update the URL slug with the current color values
function updateSlug() {
  const primaryColorValue = primaryColor.value;
  const secondaryColorValue = secondaryColor.value;
  const primbuttnColorValue = primbuttnColor.value;
  const secbuttnColorValue = secbuttnColor.value;
  const accentColorValue = accentColor.value;

  const primary = primaryColorValue ? encodeURIComponent(primaryColorValue.replace('#', '')) : '';
  const secondary = secondaryColorValue ? encodeURIComponent(secondaryColorValue.replace('#', '')) : '';
  const primbuttn = primbuttnColorValue ? encodeURIComponent(primbuttnColorValue.replace('#', '')) : '';
  const secbuttn = secbuttnColorValue ? encodeURIComponent(secbuttnColorValue.replace('#', '')) : '';
  const accent = accentColorValue ? encodeURIComponent(accentColorValue.replace('#', '')) : '';

  const slug = `${primary}-${secondary}-${primbuttn}-${secbuttn}-${accent}`;

  // Update the URL with the slug
  window.history.replaceState({}, document.title, `?colors=${slug}`);
}


function applyColorsFromSlug() {
  const searchParams = new URLSearchParams(window.location.search);
  const slug = searchParams.get('colors');

  if (slug) {
    const [primary, secondary, primbuttn, secbuttn, accent] = slug.split('-');

    primaryColor.value = `#${decodeURIComponent(primary)}`;
    secondaryColor.value = `#${decodeURIComponent(secondary)}`;
    primbuttnColor.value = `#${decodeURIComponent(primbuttn)}`;
    secbuttnColor.value = `#${decodeURIComponent(secbuttn)}`;
    accentColor.value = `#${decodeURIComponent(accent)}`;

    document.documentElement.style.setProperty('--primary', primaryColor.value);
    document.documentElement.style.setProperty('--secondary', secondaryColor.value);
    document.documentElement.style.setProperty('--primbuttn', primbuttnColor.value);
    document.documentElement.style.setProperty('--secbuttn', secbuttnColor.value);
    document.documentElement.style.setProperty('--accent', accentColor.value);
  } else {
    // If there's no slug, use the default color values from the inputs
    const primaryColorValue = primaryColor.value;
    const secondaryColorValue = secondaryColor.value;
    const primbuttnColorValue = primbuttnColor.value;
    const secbuttnColorValue = secbuttnColor.value;
    const accentColorValue = accentColor.value;

    const defaultSlug = `${encodeURIComponent(primaryColorValue.replace('#', ''))}-${encodeURIComponent(secondaryColorValue.replace('#', ''))}-${encodeURIComponent(primbuttnColorValue.replace('#', ''))}-${encodeURIComponent(secbuttnColorValue.replace('#', ''))}-${encodeURIComponent(accentColorValue.replace('#', ''))}`;

    // Update the URL with the default slug
    window.history.replaceState({}, document.title, `?colors=${defaultSlug}`);
  }

  



    // contrast checker

    const primbuttnColorValue = primbuttnColor.value;
  
    primaryButtons.forEach(primaryButton => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;
  
      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);
  
      const contrastRatio = getContrastRatio(primbuttnColorValue, primaryColorValue);
  
      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          primaryButton.style.color = 'var(--secondary)';
          primbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          primaryButton.style.color = 'var(--primary)';
          primbuttnColorClass.style.color = 'var(--primary)';
        }
      }
  
      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          primaryButton.style.color = 'var(--secondary)';
          primbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          primaryButton.style.color = 'var(--primary)';
          primbuttnColorClass.style.color = 'var(--primary)';
        }
      }
  
    });
  
    const secbuttnColorValue = secbuttnColor.value;
    
    faqQuestions.forEach(faqQuestion => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;
  
      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);
  
      const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);
  
      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          faqQuestion.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          faqQuestion.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }
  
      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          faqQuestion.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          faqQuestion.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }
  
    });
    
    secondaryButtons.forEach(secondaryButton => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;
  
      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);
  
      const contrastRatio = getContrastRatio(secbuttnColorValue, primaryColorValue);
  
      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          secondaryButton.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          secondaryButton.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }
  
      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          secondaryButton.style.color = 'var(--secondary)';
          secbuttnColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          secondaryButton.style.color = 'var(--primary)';
          secbuttnColorClass.style.color = 'var(--primary)';
        }
      }
  
    });
  
    const accentColorValue = accentColor.value;
  
    partTwo.forEach(partTwo => {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;
  
      const primaryBrightness = getBrightness(primaryColorValue);
      const secondaryBrightness = getBrightness(secondaryColorValue);
  
      const contrastRatio = getContrastRatio(accentColorValue, primaryColorValue);
  
      if (primaryBrightness < secondaryBrightness) {
        if (contrastRatio < 4.5) {
          partTwo.style.color = 'var(--secondary)';
          accentColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          partTwo.style.color = 'var(--primary)';
          accentColorClass.style.color = 'var(--primary)';
        }
      }
  
      if (primaryBrightness > secondaryBrightness) {
        if (contrastRatio < 4.5) {
          partTwo.style.color = 'var(--secondary)';
          accentColorClass.style.color = 'var(--secondary)';
        }
        else if (contrastRatio > 4.5) {
          partTwo.style.color = 'var(--primary)';
          accentColorClass.style.color = 'var(--primary)';
        }
      }
  
    });

    updateColors();

}

// Apply the colors from the URL slug on page load
applyColorsFromSlug();

// Update the URL slug as the user changes the color inputs
primaryColor.addEventListener('change', updateSlug);
secondaryColor.addEventListener('change', updateSlug);
primbuttnColor.addEventListener('change', updateSlug);
secbuttnColor.addEventListener('change', updateSlug);
accentColor.addEventListener('change', updateSlug);

// Update the color inputs and colors on the page as the user changes the colors
function updateColors() {
  const primaryColorValue = primaryColor.value.replace(/#|%23/g, '');
  const secondaryColorValue = secondaryColor.value.replace(/#|%23/g, '');
  const primbuttnColorValue = primbuttnColor.value.replace(/#|%23/g, '');
  const secbuttnColorValue = secbuttnColor.value.replace(/#|%23/g, '');
  const accentColorValue = accentColor.value.replace(/#|%23/g, '');

  const slug = `${primaryColorValue}-${secondaryColorValue}-${primbuttnColorValue}-${secbuttnColorValue}-${accentColorValue}`;

  // Update the URL with the new colors
  window.history.replaceState({}, document.title, `?colors=${slug}`);
  
  // Update the colors on the page
  document.documentElement.style.setProperty('--primary', `#${primaryColorValue}`);
  document.documentElement.style.setProperty('--secondary', `#${secondaryColorValue}`);
  document.documentElement.style.setProperty('--primbuttn', `#${primbuttnColorValue}`);
  document.documentElement.style.setProperty('--secbuttn', `#${secbuttnColorValue}`);
  document.documentElement.style.setProperty('--accent', `#${accentColorValue}`);  
}
  
// Apply the updated colors as the user changes the color inputs
primaryColor.addEventListener('change', updateColors);
secondaryColor.addEventListener('change', updateColors);
primbuttnColor.addEventListener('change', updateColors);
secbuttnColor.addEventListener('change', updateColors);
accentColor.addEventListener('change', updateColors);





