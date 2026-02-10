import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });

        // Capture Landing Page
        console.log('Navigating to http://localhost:3001/...');
        await page.goto('http://localhost:3001/', { timeout: 30000 });
        console.log('Waiting 2s for animations...');
        await new Promise(r => setTimeout(r, 2000));
        console.log('Taking landing page screenshot...');
        await page.screenshot({ path: 'landing_screenshot.png', fullPage: true });

        // Capture Expedition Page
        console.log('Navigating to http://localhost:3001/expedition...');
        await page.goto('http://localhost:3001/expedition', { timeout: 30000 });
        console.log('Waiting 5s for animations...');
        await new Promise(r => setTimeout(r, 5000));
        console.log('Taking expedition page screenshot...');
        await page.screenshot({ path: 'expedition_screenshot.png', fullPage: true });

        await browser.close();
        console.log('Screenshots saved.');
    } catch (error) {
        console.error('Error taking screenshot:', error);
        process.exit(1);
    }
})();
