'use strict'

/**
 * Dependencies
 */

const path = require('path')
const express = require('express')
const express_react_views = require('express-react-views')

/**
 * Define app
 */

const app = express()

/**
 * Constants
 */

const title = "Easypeasy Blog"
const host = "easypeasy-blog"
const port = process.env.PORT || 8080
const env = process.env.NODE_ENV || "development"
const base = path.join(__dirname, "..")
const views = path.join(base, "client/src/components")

/**
 * Locals
 */

app.locals.title = title
app.locals.host = host
app.locals.port = port
app.locals.env = env
app.locals.base = base
app.locals.views = views

/**
 * Settings
 */

app.set("env", env)
app.disable("x-powered-by")
app.set("json spaces", 2)

/**
 * View engine
 */

app.engine('jsx', express_react_views.createEngine())
app.set('view engine', 'jsx')
app.set("views", views)

/**
 * Routes
 */

app.use("/", require("./routes/root_router")(app))

/**
 * Start server
 */

async function start_server() {
  /**
   * Set process title.
   */

  process.title = host

  /**
   * Start listening for requests.
   */

  app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
  })
}

if (module === require.main) {
  start_server()
}

/**
 * Export app
 */

module.exports = app
