const primaryColor = document.getElementById('prim');
const secondaryColor = document.getElementById('sec');
const primbuttnColor = document.getElementById('primbuttn');
const secbuttnColor = document.getElementById('secbuttn');
const accentColor = document.getElementById('accent');


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



// Export button click event listener
const exportButton = document.getElementById('export');
exportButton.addEventListener('click', () => {
  // Create array of color values
  const colorValues = [
    primaryColor.value,
    secondaryColor.value,
    primbuttnColor.value,
    secbuttnColor.value,
    accentColor.value
  ];

  // Create a canvas and draw color squares
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = colorValues.length * 50;
  canvas.height = 50;
  for (let i = 0; i < colorValues.length; i++) {
    ctx.fillStyle = colorValues[i];
    ctx.fillRect(i * 50, 0, 50, 50);
  }

  // Create a blob from the canvas and save it as a palette image
  const paletteImage = canvas.toDataURL('image/png');
  const paletteBlob = dataURItoBlob(paletteImage);
  const paletteFile = new File([paletteBlob], 'palette.png', { type: 'image/png' });

  // Create a text file with color values
  const colorText = `Your selected colors:\n
    Primary: ${primaryColor.value} (RGB: ${hexToRgb(primaryColor.value)})
    Secondary: ${secondaryColor.value} (RGB: ${hexToRgb(secondaryColor.value)})
    Primary Button: ${primbuttnColor.value} (RGB: ${hexToRgb(primbuttnColor.value)})
    Secondary Button: ${secbuttnColor.value} (RGB: ${hexToRgb(secbuttnColor.value)})
    Accent: ${accentColor.value} (RGB: ${hexToRgb(accentColor.value)})\n
Thanks for using Real-time Colors!`;
  const colorBlob = new Blob([colorText], { type: 'text/plain' });
  const colorFile = new File([colorBlob], 'colors.txt', { type: 'text/plain' });

  // Create a zip file and add the palette image and color text file
  const zip = new JSZip();
  zip.file(paletteFile.name, paletteFile);
  zip.file(colorFile.name, colorFile);
  zip.generateAsync({ type: 'blob' }).then(function (blob) {
    saveAs(blob, 'colors.zip');
  });
});

// Function to convert hex color to rgb color
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




const primaryButtons = document.querySelectorAll('.primary-button');
const secondaryButtons = document.querySelectorAll('.secondary-button');
const partTwo = document.querySelectorAll('.part2');
const primbuttnColorClass = document.querySelector('.primbuttn');
const secbuttnColorClass = document.querySelector('.secbuttn');
const accentColorClass = document.querySelector('.accent');


// debounce function
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

primbuttnColor.addEventListener('change', debounce(() => {
  const primbuttnColorValue = primbuttnColor.value;

  primaryButtons.forEach(primaryButton => {
    const textColor = getComputedStyle(primaryButton).color;
    const contrastRatio = getContrastRatio(primbuttnColorValue, textColor);

    if (contrastRatio < 4.5) {
      primaryButton.style.color = 'var(--primary)';
      primbuttnColorClass.style.color = 'var(--primary)';
    }
    else {
      primaryButton.style.color = 'var(--secondary)';
      primbuttnColorClass.style.color = 'var(--secondary)';
    }
  });
}, 200)); // set the debounce wait time to 200 milliseconds


secbuttnColor.addEventListener('change', debounce(() => {
  const secbuttnColorValue = secbuttnColor.value;

  secondaryButtons.forEach(secondaryButton => {
    const textColor = getComputedStyle(secondaryButton).color;
    const contrastRatio = getContrastRatio(secbuttnColorValue, textColor);

    if (contrastRatio < 4.5) {
      secondaryButton.style.color = 'var(--primary)';
      secbuttnColorClass.style.color = 'var(--primary)';
    }
    else {
      secondaryButton.style.color = 'var(--secondary)';
      secbuttnColorClass.style.color = 'var(--secondary)';
    }
  });
}, 200)); // set the debounce wait time to 200 milliseconds


accentColor.addEventListener('change', debounce(() => {
  const accentColorValue = accentColor.value;

  partTwo.forEach(partTwo => {
    const textColor = getComputedStyle(partTwo).color;
    const contrastRatio = getContrastRatio(accentColorValue, textColor);

    if (contrastRatio < 2) {
      partTwo.style.color = 'var(--primary)';
      accentColorClass.style.color = 'var(--primary)';
    }
    else {
      partTwo.style.color = 'var(--secondary)';
      accentColorClass.style.color = 'var(--secondary)';
    }
  });
}, 200)); // set the debounce wait time to 200 milliseconds



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

// function getContrastRatio(background, foreground) {
//   const bg = parseColor(background);
//   const fg = parseColor(foreground);

//   // convert to HSL format
//   const bgHsl = rgbToHsl(bg.r, bg.g, bg.b);
//   const fgHsl = rgbToHsl(fg.r, fg.g, fg.b);

//   // calculate the difference in lightness between the two colors
//   const lightnessDiff = Math.abs(bgHsl.l - fgHsl.l);

//   // calculate the contrast ratio using the lightness difference
//   const ratio = (Math.max(bgHsl.l, fgHsl.l) + 0.05) / (Math.min(bgHsl.l, fgHsl.l) + 0.05);

//   // apply an adjustment factor based on the lightness difference
//   const adjustedRatio = ratio * (1 + 0.05 * (1 - lightnessDiff));

//   return adjustedRatio;
// }

// function rgbToHsl(r, g, b) {
//   r /= 255;
//   g /= 255;
//   b /= 255;
//   const max = Math.max(r, g, b);
//   const min = Math.min(r, g, b);
//   let h, s, l = (max + min) / 2;
//   if (max == min) {
//     h = s = 0; // achromatic
//   } else {
//     const d = max - min;
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//     switch (max) {
//       case r:
//         h = (g - b) / d + (g < b ? 6 : 0);
//         break;
//       case g:
//         h = (b - r) / d + 2;
//         break;
//       case b:
//         h = (r - g) / d + 4;
//         break;
//     }
//     h /= 6;
//   }
//   return { h, s, l };
// }


function parseColor(color) {
  // check if color is in rgb format
  const regexRgb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const matchRgb = regexRgb.exec(color);
  if (matchRgb) {
    return {
      r: parseInt(matchRgb[1]),
      g: parseInt(matchRgb[2]),
      b: parseInt(matchRgb[3])
    };
  }

  // check if color is in hex format
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

  // if color is not in rgb or hex format, throw an error
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
  }, 1000); // Change the delay (in milliseconds) as needed
}
