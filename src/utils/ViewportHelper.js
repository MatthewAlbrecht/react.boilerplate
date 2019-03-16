const ViewportHelper = {
  /**
   * Check is window size matches tablet breakpoint.
   *
   * @method isTablet
   * @public
   */
  isTablet() {
    return window.matchMedia('(min-width: 750px)').matches;
  },

  /**
   * Check is window size matches large desktop breakpoint.
   *
   * @method isLargeDesktop
   * @public
   */
  isLarge() {
    return window.matchMedia('(min-width: 1024px)').matches;
  },

  /**
   * Check is window size matches large plus breakpoint.
   *
   * @method isLargePlus
   * @public
   */
  isLargePlus() {
    return window.matchMedia('(min-width: 1440px)').matches;
  },

  /**
   * Check is window size matches mobile.
   *
   * @method isMobile
   * @public
   */
  isMobile() {
    return window.matchMedia('(max-width: 749px)').matches;
  },
};

export default ViewportHelper;
