const StyleDictionary = require('style-dictionary').extend(__dirname + '/config.json');
const fs = require('fs');
const _ = require('lodash');


console.log('Build started...');
console.log('\n==============================================');

// Register custom formats
StyleDictionary.registerFormat({
  name: 'css/custom/atlas',
  formatter: _.template(fs.readFileSync(__dirname + '/templates/atlas-css.template'))
});


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
