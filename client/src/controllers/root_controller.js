'use strict'

module.exports = () => {
  /**
   * Define controller
   */

  class RootController {
    /**
     * Render root index.
     *
     * @static @method
     * @since 0.1.0
     * @public
     */

    static index(req, res) {
      res.render("index")
    }
  }

  /**
   * Export controller
   */

  return RootController
}
