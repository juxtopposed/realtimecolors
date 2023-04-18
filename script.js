
// Inputs

const primaryColor = document.getElementById('prim');
const secondaryColor = document.getElementById('sec');
const primbuttnColor = document.getElementById('primbuttn');
const secbuttnColor = document.getElementById('secbuttn');
const accentColor = document.getElementById('accent');
const randomizeButton = document.getElementById('randomize');


// Random color sets

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
  },

  {
    colors: ['#0f1419', '#ffffff', '#8756FF', '#f2f2f2', '#bbaaff'],
  },

  {
    colors: ['#0f1419', '#ffffff', '#ff7a00', '#f2f2f2', '#ffbc7f'],
  },

  {
    colors: ['#0f1419', '#ffffff', '#00ba7c', '#f2f2f2', '#7fdcbd'],
  },

  {
    colors: ['#006374', '#fbf5d4', '#5a39d0', '#cbddca', '#5a39d0'],
  },

  {
    colors: ['#0e101a', '#ffffff', '#ff686b', '#fff6f5', '#84dcc6'],
  },

  {
    colors: ['#584b53', '#fef5ef', '#9d5c63', '#ffffff', '#e4bb97'],
  },

  {
    colors: ['#424b54', '#ffffff', '#9b6a6c', '#e6eaeb', '#e2b4bd'],
  },

  {
    colors: ['#ffffff', '#1f2041', '#ffc857', '#4b3f72', '#ffc857'],
  },

  {
    colors: ['#050505', '#ffffff', '#121212', '#f6f5f4', '#ffb600'],
    source: '<b>Inspiration:</b><br>Notion'
  },

  {
    colors: ['#ffffff', '#000000', '#9d34da', '#1a1a1a', '#bd73e8'],
    source: '<b>Inspiration:</b><br>Notion AI'
  },

  {
    colors: ['#2b1c50', '#ffffff', '#565add', '#d1d1f7', '#9f92ec'],
    source: '<b>Inspiration:</b><br>Loom'
  },

  {
    colors: ['#00031f', '#ffffff', '#0b5cff', '#ffffff', '#00ede7'],
    source: '<b>Inspiration:</b><br>Zoom'
  },

  {
    colors: ['#000000', '#ffffff', '#611f69', '#f4ede4', '#ecb22e'],
    source: '<b>Inspiration:</b><br>Slack'
  },

  {
    colors: ['#171a22', '#ffffff', '#ff622d', '#f7f7f7', '#421983'],
    source: '<b>Inspiration:</b><br>SEMRush'
  },

  {
    colors: ['#000000', '#9de2d4', '#e27d5f', '#95d6d2', '#d3bbc2'],
  },

  {
    colors: ['#fffbff', '#252cbb', '#ca3f66', '#2e35c2', '#ffccda'],
  },

  {
    colors: ['#ffffff', '#4887b0', '#fbeec1', '#3f7897', '#fbeec1'],
  },

  {
    colors: ['#05396b', '#5cdb94', '#edf5e0', '#8de4af', '#05396b'],
  },

  {
    colors: ['#fcfcfc', '#151515', '#f54c28', '#1b1918', '#689775'],
  },

  {
    colors: ['#5d5c61', '#b4c6da', '#557a95', '#d0dce7', '#7a747b'],
  },

  {
    colors: ['#2e1115', '#ffffff', '#4f1b1d', '#eaeff2', '#83687b'],
  },

  {
    colors: ['#fcfcfc', '#000000', '#4201ff', '#171717', '#230090'],
  },

  {
    colors: ['#e5fffd', '#0b0c12', '#66fcf1', '#202833', '#c5c6c8'],
  },

  {
    colors: ['#2c221e', '#e3e2de', '#e10243', '#e5d1d6', '#9b1750'],
  },

  {
    colors: ['#6c6b66', '#f1f0eb', '#f13c1f', '#fff8e5', '#4056a1'],
  },

  {
    colors: ['#d6d6d6', '#272727', '#10f49c', '#424242', '#ffe401'],
  },

  {
    colors: ['#fdfffe', '#2f4455', '#da7b93', '#376f70', '#2e151b'],
  },

  {
    colors: ['#646561', '#eae8dc', '#e85a50', '#e6e2cc', '#977d59'],
  },

  {
    colors: ['#ededed', '#222546', '#29658a', '#474866', '#d1d2d6'],
  },

  {
    colors: ['#000000', '#fae053', '#000000', '#ffea61', '#fffad6'],
  },

  {
    colors: ['#000000', '#ffffff', '#ffb100', '#f5f5f5', '#d3d8de'],
  },

  {
    colors: ['#000000', '#d3d8de', '#000000', '#f5f5f5', '#fdaf1e'],
  },

  {
    colors: ['#000000', '#fff5fd', '#000000', '#fff0fc', '#ffb8f2'],
  },

  {
    colors: ['#24221b', '#e4dcc9', '#24221b', '#e4dcc9', '#24221b'],
  },

  {
    colors: ['#000000', '#ffffff', '#06522c', '#cbfdcf', '#06522c'],
  },

  {
    colors: ['#e9dfe0', '#0e0a18', '#4717f7', '#130e20', '#a43acb'],
  },

  {
    colors: ['#eceff2', '#010101', '#b92501', '#071622', '#813772'],
  },

  {
    colors: ['#e1dee2', '#140941', '#f8003f', '#260740', '#b30039'],
  },

  {
    colors: ['#474747', '#efefef', '#ff3a3f', '#fafafa', '#caebf2'],
  },

  {
    colors: ['#565656', '#d7cec9', '#763241', '#d6c6b8', '#95785b'],
  },

  {
    colors: ['#1e392a', '#fefefe', '#3cc47c', '#d9f7e7', '#e9c892'],
  },

  {
    colors: ['#b8ffc9', '#323232', '#54b46c', '#38473c', '#92f2aa'],
  },

  {
    colors: ['#dbdfff', '#323232', '#505baf', '#38473c', '#92f2aa'],
  },

  {
    colors: ['#dbdfff', '#1f2320', '#505baf', '#38473c', '#92f2aa'],
  },

  {
    colors: ['#161613', '#ffffff', '#eb6d80', '#f5e5b4', '#e9b000'],
  },

  {
    colors: ['#252326', '#fafdf8', '#0476b5', '#00784a', '#facf03'],
  },

  {
    colors: ['#273435', '#ffffff', '#4ba5cd', '#ffefc2', '#f0cb5c'],
  },

  {
    colors: ['#273435', '#ffffff', '#4b65ce', '#ffefc2', '#f0a35c'],
  },

  {
    colors: ['#4a2849', '#f9eeea', '#93628f', '#f3decd', '#4a2849'],
  },

  {
    colors: ['#222127', '#d9d9d9', '#4484ce', '#ead36c', '#f19f4d'],
  },

  {
    colors: ['#fbfefd', '#1f2531', '#d9b311', '#0b3c5d', '#328bc3'],
  },

  {
    colors: ['#4c2e15', '#ffffff', '#cf5262', '#d6e8f1', '#2b6da8'],
  },

  {
    colors: ['#0c1512', '#dedede', '#1a2930', '#e3e3e3', '#f7ce40'],
  },

  {
    colors: ['#010101', '#ffffff', '#e5e336', '#cadedd', '#ec576b'],
  },

  {
    colors: ['#01524b', '#fbfffe', '#76cad4', '#cfe7e7', '#57bc92'],
  },

  {
    colors: ['#1b2541', '#f1f1ef', '#048a95', '#9bd0d4', '#e37224'],
  },

  {
    colors: ['#f6f6f6', '#101528', '#ff533f', '#0a0e19', '#ab987a'],
  },

  {
    colors: ['#242424', '#ffffff', '#bfd8d2', '#fbf9f3', '#fedcd2'],
  },

  {
    colors: ['#485970', '#fefef6', '#f6c8c8', '#c5dbce', '#91a8d1'],
  },

  {
    colors: ['#ebebee', '#031424', '#90adbb', '#30415d', '#cf6766'],
  },

  {
    colors: ['#ece5ec', '#1a0317', '#88d317', '#262626', '#6c3667'],
  },

  {
    colors: ['#f8fedc', '#010101', '#fda781', '#003738', '#fedb43'],
  },

  {
    colors: ['#444b45', '#ebe5e9', '#8e9a8d', '#d2dbd1', '#b66355'],
  },

  {
    colors: ['#0f0e0b', '#f2eee2', '#f91c85', '#f0e4ad', '#43c0f6'],
  },

  {
    colors: ['#3d3d3d', '#ffffff', '#a6d555', '#dbeff0', '#841981'],
  },

  {
    colors: ['#303030', '#dedede', '#8abbd9', '#e9e9e9', '#9ad4e2'],
  },

  {
    colors: ['#161616', '#ffffff', '#69aa8c', '#fef7c0', '#fa7c92'],
  },

  {
    colors: ['#1f2231', '#d5d5d5', '#96858d', '#a0a5ab', '#6e7a94'],
  },

  {
    colors: ['#3d3d3d', '#f6f6f6', '#b1463e', '#ccb3b4', '#646e63'],
  },

  {
    colors: ['#e8e9db', '#646b49', '#cda34f', '#565c3d', '#393e27'],
  },

  {
    colors: ['#290521', '#f6f6f6', '#e62a6f', '#ffffff', '#685582'],
  },

  {
    colors: ['#c2bcbf', '#1b2033', '#985d6f', '#98878f', '#3a3d55'],
  },

  {
    colors: ['#d3d5d3', '#161220', '#e9c87b', '#233239', '#c27670'],
  },

  {
    colors: ['#424242', '#ffffff', '#ff695e', '#cde0cc', '#056573'],
  },

  {
    colors: ['#0f080a', '#fefefe', '#1a7b34', '#79d2bc', '#f34c4e'],
  },

  {
    colors: ['#24242e', '#e8e8ea', '#40314e', '#c0b3a0', '#30343f'],
  },

  {
    colors: ['#090909', '#ffffff', '#4d2c3d', '#f0ede5', '#5a652b'],
  },

  {
    colors: ['#06312f', '#f2f2f2', '#d58bfa', '#b3e681', '#0e8044'],
  },

  {
    colors: ['#383838', '#f4f4f4', '#c0b283', '#ddd1c1', '#b2a792'],
  },

  {
    colors: ['#465c8c', '#f0f9f4', '#94c078', '#ebf1f4', '#efe769'],
  },

  {
    colors: ['#353955', '#ffffff', '#353955', '#f5f6e6', '#54668e'],
  },

  {
    colors: ['#000000', '#fcfcfc', '#b55b12', '#f5e9e0', '#cecece'],
  },

  {
    colors: ['#30241b', '#f9f9f1', '#874c62', '#f9eae6', '#a6d1cd'],
  },

  {
    colors: ['#413f40', '#f4f4f4', '#d8de35', '#eec8e0', '#575fab'],
  },

  {
    colors: ['#444c64', '#e1f2fc', '#ffb247', '#ced5ee', '#31a1ff'],
  },

  {
    colors: ['#000000', '#ffffff', '#fe6d2a', '#ffe98a', '#453894'],
  },

  {
    colors: ['#ffffff', '#111111', '#ff602c', '#000000', '#ffffff'],
  },

  {
    colors: ['#efefef', '#101010', '#ce1c1b', '#000000', '#ce1b1b'],
  },

  {
    colors: ['#fefefd', '#15151b', '#fefe00', '#29282d', '#fdfe00'],
  },

  {
    colors: ['#fcfdfe', '#010409', '#ffffff', '#01242b', '#05b8bb'],
  },

  {
    colors: ['#e8cfb1', '#151314', '#f1be70', '#e7ceb0', '#e07534'],
  },

  {
    colors: ['#1c1c1c', '#f6f6f1', '#5c43f5', '#f5f5f0', '#fa7b6a'],
  },
  
];


// Randomization

let lastSelectedColorSet = null;
let shuffledColors = shuffleArray(colorSets);
let colorSetIndex = 0;

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
  
  if (colorSetIndex >= shuffledColors.length) {
    // If all color sets have been used, shuffle the array again
    shuffledColors = shuffleArray(colorSets);
    colorSetIndex = 0;
  }
  
  randomColorSet = shuffledColors[colorSetIndex];
  colorSetIndex++;
  
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


function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}




// COLOR INPUT 


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





// EXPORT

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

// CONTRAST CHECKER

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






// CONTRAST CHECKING RULES

const primaryButtons = document.querySelectorAll('.primary-button');
const secondaryButtons = document.querySelectorAll('.secondary-button');
const partTwo = document.querySelectorAll('.part2');
const primbuttnColorClass = document.querySelector('.primbuttn');
const secbuttnColorClass = document.querySelector('.secbuttn');
const accentColorClass = document.querySelector('.accent');


function checkContrast() {
  primbuttnColor.addEventListener('input', debounce(() => {
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


  secbuttnColor.addEventListener('input', debounce(() => {
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


  secbuttnColor.addEventListener('input', debounce(() => {
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


  accentColor.addEventListener('input', debounce(() => {
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



// CONTRAST CHECKING FUNCTION

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













// SLUG update based on selected colors

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
  } 
  else {
    const primaryColorValue = primaryColor.value;
    const secondaryColorValue = secondaryColor.value;
    const primbuttnColorValue = primbuttnColor.value;
    const secbuttnColorValue = secbuttnColor.value;
    const accentColorValue = accentColor.value;

    const defaultSlug = `${encodeURIComponent(primaryColorValue.replace('#', ''))}-${encodeURIComponent(secondaryColorValue.replace('#', ''))}-${encodeURIComponent(primbuttnColorValue.replace('#', ''))}-${encodeURIComponent(secbuttnColorValue.replace('#', ''))}-${encodeURIComponent(accentColorValue.replace('#', ''))}`;

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

applyColorsFromSlug();

primaryColor.addEventListener('change', updateSlug);
secondaryColor.addEventListener('change', updateSlug);
primbuttnColor.addEventListener('change', updateSlug);
secbuttnColor.addEventListener('change', updateSlug);
accentColor.addEventListener('change', updateSlug);

function updateColors() {
  const primaryColorValue = primaryColor.value.replace(/#|%23/g, '');
  const secondaryColorValue = secondaryColor.value.replace(/#|%23/g, '');
  const primbuttnColorValue = primbuttnColor.value.replace(/#|%23/g, '');
  const secbuttnColorValue = secbuttnColor.value.replace(/#|%23/g, '');
  const accentColorValue = accentColor.value.replace(/#|%23/g, '');

  const slug = `${primaryColorValue}-${secondaryColorValue}-${primbuttnColorValue}-${secbuttnColorValue}-${accentColorValue}`;

  window.history.replaceState({}, document.title, `?colors=${slug}`);
  
  document.documentElement.style.setProperty('--primary', `#${primaryColorValue}`);
  document.documentElement.style.setProperty('--secondary', `#${secondaryColorValue}`);
  document.documentElement.style.setProperty('--primbuttn', `#${primbuttnColorValue}`);
  document.documentElement.style.setProperty('--secbuttn', `#${secbuttnColorValue}`);
  document.documentElement.style.setProperty('--accent', `#${accentColorValue}`);  
}
  
primaryColor.addEventListener('change', updateColors);
secondaryColor.addEventListener('change', updateColors);
primbuttnColor.addEventListener('change', updateColors);
secbuttnColor.addEventListener('change', updateColors);
accentColor.addEventListener('change', updateColors);








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



// SHARE

function copyPageUrl() {
  const pageUrl = window.location.href;

  navigator.clipboard.writeText(pageUrl);

  const shareButton = document.querySelector('.share-link-buttn');
  shareButton.textContent = 'Copied!';
  shareButton.classList.add('copied');

  setTimeout(function() {
    shareButton.textContent = 'Share';
    shareButton.classList.remove('copied');
  }, 2000);
}
