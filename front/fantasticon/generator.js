const {generateFonts, FontAssetType, OtherAssetType} = require('fantasticon');
const handler = require('serve-handler');
const http = require('http');
const open = require('open');
const port = process.argv[2] || 3026 ;

// 官方文件 : https://www.npmjs.com/package/fantasticon#api
generateFonts({
  name: 'icons',
  inputDir: './icons', // (required)
  outputDir: './dist', // (required)
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
  prefix: 'tree',
}).then(results => {

  console.log('generate Fonts')

  const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options
    return handler(request, response,{
      "public": "dist"
    });
  })

  server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);

    // use serve and open browser with target Url
    open(`http://localhost:${port}/icons.html`)
  });
});
