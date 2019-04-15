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

test('Root page title', with_page, async (t, page) => {
  t.pass()
})
