import puppeteer, { Browser, Page } from 'puppeteer';
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../react.html'), 'utf8');

describe("login", () => {
    let browser: Browser = null;
    let page: Page = null;

    beforeEach(async () => {
        browser = await puppeteer.launch({ headless: 'new' });
        page = await browser.newPage();
        await page.setContent(html);
    }, 90000);

    afterEach(async () => {
        await browser.close();
    });

    it("Uppercase letters", async () => {
        const stringIsIncluded = await page.evaluate(() => {
            const string = 'Hello';
            const selector = 'a[href]';
            return document.querySelector<HTMLLinkElement>('#root').innerText.includes(string);
        });
        expect(stringIsIncluded).toBeTruthy();
    });
});
