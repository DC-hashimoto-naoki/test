const puppeteer = require('puppeteer');

const scrapeing_proengineer = async () => {
  const browser = await launch();

  // プロエンジニアのエンジニア転職ガイドを開く
  const page = await browser.newPage();
  const url = 'https://proengineer.internous.co.jp/content/career/';
  await page.goto(url,{ waitUntil: 'domcontentloaded' });

  // 各記事のタイトルを取得
  const target = '#CONT_AREA > ul > li > div > div > h3';
  const links = await page.$$eval(target, links => {
    return links.map(link => link.textContent);
  });

  // 各記事のタイトルを一覧で出力しブラウザを閉じる
  links.forEach( function( item ) {
    console.log( item );
  });
  browser.close();
}
scrapeing_proengineer();