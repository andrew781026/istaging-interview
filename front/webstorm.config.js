// 參考資料 : https://medium.com/@l02162010/%E8%A8%AD%E5%AE%9Awebstorm-vue-config-f271f75be8fd

const path = require('path');

const resolve = dir => path.join(__dirname, '.', dir);

module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            // '@views': resolve('src/views'),
            // '@comp': resolve('src/components'),
            // '@core': resolve('src/core'),
            // '@utils': resolve('src/utils')
        }
    }
}