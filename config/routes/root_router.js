'use strict'

module.exports = (app) => {
  /**
   * Dependencies
   */

  const base = app.locals.base
  const express = require('express')
  const RootController = require(base + "/client/src/controllers/root_controller")(app)

  /**
   * Initialize router.
   */

  const router = express.Router()

  /**
   * Routes
   */

  // GET /
  router.route("/")
    .get(RootController.index)

  /**
   * Export router.
   */

  return router
}
