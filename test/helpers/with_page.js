'use strict'

/**
 * Dependencies
 */

const puppeteer = require('puppeteer')

/**
 * Define test helper
 */

async function with_page(t, run) {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()

  try {
    await run(t, page)
  } finally {
    await page.close()
    await browser.close()
  }
}

/**
 * Export test helper
 */

module.exports = with_page
