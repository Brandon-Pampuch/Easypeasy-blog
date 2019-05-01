'use strict'

/**
 * Dependencies
 */

const test = require('ava')
const with_page = require('../helpers/with_page')
const hesitate = require('../helpers/hesitate')

/**
 * Constants
 */

const url = "http://localhost:8888"

/**
 * Assertions
 */

test('Title is "Eazy Peazy Blog"', with_page, async (t, page) => {
  /**
   * Visit the root page.
   */

  await page.goto(`${url}/`, { waitUntil: "domcontentloaded" })
  await hesitate(page, { delay: 300 })

  /**
   * Ensure root page has correct title.
   */

  t.is(await page.title(), 'Eazy Peazy Blog')
})
