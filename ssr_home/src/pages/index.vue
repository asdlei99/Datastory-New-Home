<template>
  <div id="container">
    <index-banner></index-banner>
    <index-solution></index-solution>
    <tech-advantage></tech-advantage>
    <user-case></user-case>
    <partner></partner>
    <site-footer></site-footer>
  </div>
</template>

<script>
import IndexBanner from '../components/index/IndexBanner'
import IndexSolution from '../components/index/IndexSolution'
import TechAdvantage from '../components/index/TechAdvantage'
import UserCase from '../components/index/UserCase'
import Partner from '../components/index/Partner'
import SiteFooter from '../components/SiteFooter'

export default {
  mounted: function() {
    // prevent drag event
    document.ondragstart = function(e) {
      e = e || window.event;
      e.preventDefault();
      return false;
    }
  },
  components: {
    IndexBanner,
    IndexSolution,
    TechAdvantage,
    UserCase,
    Partner,
    SiteFooter
  }
}
</script>
