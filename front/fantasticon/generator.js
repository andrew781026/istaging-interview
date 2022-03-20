/* eslint-disable */
const {generateFonts, FontAssetType, OtherAssetType} = require('fantasticon');
const handler = require('serve-handler');
const http = require('http');
const fs = require('fs');
const path = require('path');
const open = require('open');
const port = process.argv[2] || 3026;

const outputDir = './dist';
const vueIconsDir = path.resolve('../src/icons')

function copyFileSync(source, target) {

  let targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  let files = [];

  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)
if (!fs.existsSync(vueIconsDir)) fs.mkdirSync(vueIconsDir)

// 官方文件 : https://www.npmjs.com/package/fantasticon#api
generateFonts({
  name: 'icons',
  inputDir: './icons', // (required)
  outputDir, // (required)
  fontsUrl: '',
  fontTypes: [/* FontAssetType.EOT, FontAssetType.WOFF2,*/ FontAssetType.WOFF],
  assetTypes: [
    OtherAssetType.CSS,
    OtherAssetType.HTML
  ],
  formatOptions: {json: {indent: 2}},
  templates: {},
  pathOptions: {},
  codepoints: {},
  fontHeight: 300,
  round: undefined, // --
  descent: undefined, // Will use `svgicons2svgfont` defaults
  normalize: undefined, // --
  selector: null,
  tag: 'i',
  prefix: 'icon',
}).then(results => {

  console.log('generate Fonts successfully')

  // copy ./dist files to public folder
  copyFolderRecursiveSync(outputDir, vueIconsDir);

  const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options
    return handler(request, response, {
      "public": "dist"
    });
  })

  server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);

    // use serve and open browser with target Url
    open(`http://localhost:${port}/icons.html`)
  });
});
/* eslint-disable */
