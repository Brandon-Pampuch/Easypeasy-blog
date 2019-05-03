'use strict'

/**
 * Dependencies
 */

const test = require('ava')
const init_page = require('../helpers/init_page')
const visit = require('../helpers/visit')
const hesitate = require('../helpers/hesitate')

/**
 * Constants
 */

const url = "http://localhost:8888"

/**
 * Assertions
 */

test("User navigation", async t => {
  const page = await init_page()
  const visit_home = await visit(page, `${url}/`)
  await hesitate(page, { delay: 300 })

  t.pass()
})
