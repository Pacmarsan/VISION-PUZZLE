import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        console.log('Navigating to http://localhost:3000/expedition...');
        try {
            await page.goto('http://localhost:3000/expedition', { timeout: 30000 });
        } catch (e) {
            console.log('Navigation error (might be okay if page loaded):', e.message);
        }

        console.log('Waiting 5s for animations...');
        await new Promise(r => setTimeout(r, 5000));

        console.log('Taking screenshot...');
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
        await browser.close();
        console.log('Screenshot saved to screenshot.png');
    } catch (error) {
        console.error('Error taking screenshot:', error);
        process.exit(1);
    }
})();
