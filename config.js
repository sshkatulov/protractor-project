exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['demo.spec.js']
  };

// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['demo.spec.js'],
//     capabilities: {
//       browserName: 'firefox'
//     }
//   }

// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['demo.spec.js'],
//     multiCapabilities: [{
//       browserName: 'firefox'
//     }, {
//       browserName: 'chrome'
//     }]
//   }