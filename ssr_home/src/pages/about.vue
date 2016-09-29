<template>
  <div id="container">
    <curtain></curtain>
    <intro></intro>
    <team></team>
    <news></news>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Curtain from '../components/Curtain'
import Intro from '../components/about/Intro'
import Team from '../components/about/Team'
import News from '../components/about/news'
import SiteFooter from '../components/SiteFooter'
import { pageReadyAndGoAnchor } from '../components/util'
export default {
  mounted: function() {
    // prevent drag event
    document.ondragstart = function(e) {
      e = e || window.event;
      e.preventDefault();
      return false;
    }

    pageReadyAndGoAnchor();
  },
  components: {
    Curtain,
    Intro,
    Team,
    News,
    SiteFooter
  }
}
</script>
