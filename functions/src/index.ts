import * as functions from 'firebase-functions'
import * as puppeteer from 'puppeteer'

let __page: puppeteer.Page

const __directNavigationOptions: puppeteer.DirectNavigationOptions = {
  waitUntil: 'networkidle0',
  timeout: 300000
}

const getBrowserPage = async (): Promise<puppeteer.Page> => {
  // const isDebug = process.env.NODE_ENV !== 'production'

  const launchOptions: puppeteer.LaunchOptions = {
    // headless: !isDebug,
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
      '--single-process'
    ]
  }

  const browser = await puppeteer.launch(launchOptions)
  return browser.newPage()
}

const fetchPage = async () => {
  await __page.goto('https://www.metro.tokyo.lg.jp/', __directNavigationOptions)

  await __page.waitForSelector('#tmp_top_news_cnt')
  const res: string = (await (
    await (await __page.$$('.datatable'))[0]?.getProperty('textContent')
  ).jsonValue()) as string
  return res
}

const runtimeOptions: functions.RuntimeOptions = {
  timeoutSeconds: 300,
  memory: '1GB'
}

module.exports = functions
  .runWith(runtimeOptions)
  .https.onRequest(async (_req, _res) => {
    __page = await getBrowserPage()
    await __page.setRequestInterception(true)
    const res = fetchPage()
    console.log(res)
    __page.close()
    _res.status(200).send('success scraping')
  })
