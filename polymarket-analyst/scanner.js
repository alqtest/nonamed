const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');
puppeteer.use(StealthPlugin());

(async () => {
  const logFile = '/home/osboxes/clawd/polymarket-analyst/history.jsonl';
  
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1200 });
    
    await page.goto('https://polymarket.com/', { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 15000));

    const data = await page.evaluate(() => {
      // Intentar pillar por selectores de precios comunes
      const markets = [];
      const cards = Array.from(document.querySelectorAll('div')).filter(d => d.innerText.includes('%') || d.innerText.includes('¢'));
      
      // Buscamos enlaces que contienen títulos de mercados
      const links = Array.from(document.querySelectorAll('a[href*="/event/"]'));
      
      return links.map(link => {
          const parent = link.closest('div');
          const priceMatch = parent?.innerText.match(/[0-9]{1,2}%|[0-9]{1,2}\.[0-9]¢/);
          return {
              title: link.innerText.split('\n')[0].trim(),
              price: priceMatch ? priceMatch[0] : 'N/A',
              url: link.href
          };
      }).filter(m => m.title.length > 10).slice(0, 20);
    });

    const entry = {
        timestamp: new Date().toISOString(),
        markets: data
    };

    fs.appendFileSync(logFile, JSON.stringify(entry) + '\n');
    process.stdout.write(`Escaneados ${data.length} mercados.`);
    await browser.close();
  } catch (error) {
    process.stderr.write("Error: " + error.message);
  }
})();
