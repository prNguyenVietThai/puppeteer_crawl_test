const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://prtimes.jp/');

    await page.screenshot({path: 'prtimes.png'});

    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });
    console.log('Dimensions:', dimensions);

    await browser.close();
})();