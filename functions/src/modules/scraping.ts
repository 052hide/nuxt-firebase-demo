import * as functions from 'firebase-functions'
import * as puppeteer from 'puppeteer'

module.exports = functions.https.onRequest(async (_req, _res) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.metro.tokyo.lg.jp/')
  await page.waitForSelector('#tmp_top_news_cnt')
  const elm = (
    await (
      await (await page.$$('#tmp_top_news_cnt .datatable tbody tr'))[0].$$('td')
    )[1].$$('p')
  )[0]
  const text = (await (
    await elm.getProperty('textContent')
  ).jsonValue()) as string
  console.info(text) // eslint-disable-line

  await page.close()
  await browser.close()

  _res.status(200).send('success scraping')
})
