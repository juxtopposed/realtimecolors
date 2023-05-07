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
  
    {
      colors: ['#0f2335', '#fdfcfa', '#0f2335', '#cce5df', '#bf2659'],
    },
  
    {
      colors: ['#0f2335', '#fdfcfa', '#be2659', '#cce5df', '#0f2335'],
    },
  
    {
      colors: ['#222222', '#ffffff', '#fc4070', '#fff3f9', '#fae0e6'],
    },
  
    {
      colors: ['#1c2541', '#ffffff', '#ff8629', '#fafafa', '#76a6da'],
    },
  
    {
      colors: ['#1c2541', '#ffffff', '#ff8629', '#e9f4ff', '#76a6da'],
    },
  
    {
      colors: ['#3e3e3f', '#ffffff', '#008977', '#fbfaf3', '#0e2d3f'],
    },
  
    {
      colors: ['#444444', '#f7f7fc', '#22baa0', '#ffffff', '#5e36ca'],
    },
  
    {
      colors: ['#03391c', '#f8f5f0', '#0a964c', '#ccdbd3', '#e19233'],
    },
  
    {
      colors: ['#2a2538', '#e9e8e4', '#7b6767', '#e7e8c3', '#bad0c9'],
    },
  
    {
      colors: ['#2a2538', '#e9e8e4', '#2a2538', '#fefff5', '#ebc5c5'],
    },
  
    {
      colors: ['#ffffff', '#321c3d', '#943222', '#5e4766', '#b14e40'],
    },
  
    {
      colors: ['#000000', '#e7cbe0', '#eb7b62', '#daa2a5', '#bd6a5e'],
    },
  
    {
      colors: ['#000000', '#ffffff', '#e5cc99', '#d7d1cb', '#bea75c'],
    },
  
    {
      colors: ['#ffffff', '#131417', '#47cf73', '#444857', '#ffdd40'],
      source: '<b>Inspiration:</b><br>CodePen'
    },
  
    {
      colors: ['#000000', '#fafafa', '#f98644', '#f4eee9', '#f78643'],
    },
  
    {
      colors: ['#201f40', '#f9f9f9', '#c3f928', '#e9e0ff', '#c0abf9'],
    },
    
    {
      colors: ['#ffffff', '#1e1e22', '#73f190', '#17181b', '#3b974e'],
    },
  
    {
      colors: ['#e3d7c6', '#2c440c', '#d75628', '#496506', '#e2904e'],
      source: '<b>Inspiration:</b><br>Lovebirds'
    },

    {
      colors: ['#1d2a25', '#ffffff', '#2f640c', '#edf3fd', '#ce467c'],
    },

    {
      colors: ['#ffffff', '#000000', '#80ff00', '#0a1400', '#b0ff61'],
    },

    {
      colors: ['#4a4a4a', '#ffffff', '#ff0083', '#fafafa', '#ececec'],
    },

    {
      colors: ['#001e1d', '#ffffff', '#ff9d94', '#f8f5f2', '#294638'],
    },

    {
      colors: ['#50354e', '#fcfdfc', '#e0e0d1', '#f1eaed', '#714b6f'],
    },

    {
      colors: ['#1d4706', '#fafffb', '#e4bdfa', '#ebffe0', '#b8d0f9'],
    },

    {
      colors: ['#000000', '#f6fdf7', '#7ed62b', '#ebddf8', '#8cb9e9'],
    },

    {
      colors: ['#000000', '#f7f6f8', '#68886c', '#e2e9e6', '#ded4dd'],
    },

    {
      colors: ['#ffffff', '#00213d', '#71fead', '#002647', '#437e60'],
    },

    {
      colors: ['#1a202c', '#ffffff', '#71fead', '#fff0f1', '#00213d'],
    },

    {
      colors: ['#1a202c', '#ffffff', '#71fead', '#f4f4f4', '#31004c'],
    },

    {
      colors: ['#ffffff', '#31004c', '#71fead', '#17191c', '#e01b2a'],
    },

    {
      colors: ['#ffffff', '#000000', '#ffffff', '#1a1a1a', '#6d8a85'],
    },

    {
      colors: ['#ffffff', '#000000', '#00d176', '#091d3e', '#789fdd'],
    },

    {
      colors: ['#ffffff', '#000000', '#370060', '#130d17', '#45007a'],
    },

    {
      colors: ['#ffffff', '#000000', '#b3c2ff', '#1d1622', '#11236f'],
    },

    {
      colors: ['#ffffff', '#000000', '#b3c2ff', '#1d1622', '#6b00b3'],
    },

    {
      colors: ['#000000', '#ffffff', '#ffb9b3', '#fff6f5', '#d1bdff'],
    },

    {
      colors: ['#0a4d1b', '#ffffff', '#ea4335', '#ebf2ff', '#fbbc04'],
    },

    {
      colors: ['#3c3c3e', '#ffffff', '#ea4335', '#ebf2ff', '#fbbc04'],
    },

    {
      colors: ['#3c3c3e', '#ffffff', '#4285f4', '#e6f3ef', '#fbbc04'],
    },

    {
      colors: ['#197158', '#ffffff', '#4285f4', '#e6f3ef', '#fbbc04'],
    },

    {
      colors: ['#026e4e', '#ffffff', '#4285f4', '#e6f3ef', '#fbbc04'],
    },

    {
      colors: ['#000000', '#f9f8f7', '#2ba77b', '#ffffff', '#403066'],
    },

    {
      colors: ['#000000', '#ffffff', '#006656', '#f8f8fb', '#000000'],
    },

    {
      colors: ['#000000', '#ffffff', '#2979ff', '#f0f6ff', '#2c66fe'],
    },

    {
      colors: ['#000000', '#ffffff', '#079cf6', '#f7faff', '#75d3ff'],
    },

    {
      colors: ['#383540', '#f4f1eb', '#211c35', '#d6d6d6', '#595378'],
    },

    {
        colors: ['#424242', '#ffffff', '#bf202e', '#f2f5f7', '#00242b'],
    },

    {
        colors: ['#ffffff', '#0e0f12', '#0094ff', '#1a1d21', '#0094ff'],
    },

    {
        colors: ['#ffffff', '#0e0f12', '#0094ff', '#1a1d21', '#1fbf75'],
    },

    {
        colors: ['#000000', '#ffffff', '#1a1a1a', '#f2ecdb', '#825f0d'],
    },

    {
        colors: ['#000000', '#f1f3f5', '#f7b43d', '#ffffff', '#03103a'],
    },

    {
        colors: ['#000000', '#ffffff', '#1060fd', '#faefea', '#ad4601'],
    },

    {
        colors: ['#222222', '#ffffff', '#7029ff', '#f1eaff', '#aa80ff'],
    },

    {
        colors: ['#222222', '#ffffff', '#7029ff', '#f1eaff', '#aa80ff'],
    },
  ];