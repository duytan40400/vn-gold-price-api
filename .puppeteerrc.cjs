const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    // Thay đổi thư mục cache cho Puppeteer
    cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
