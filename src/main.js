import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from 'vue-gtag';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCss3, faFigma, faNodeJs, faPython, faReact, faHtml5, faJs, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



const app = createApp(
  App,
  {}
  )

app.use(router)


app.config.productionTip = false;

app.use(VueGtag, {
  config: { id: process.env.VUE_APP_GA_ID }
}, router);

library.add(faCss3, faFigma, faNodeJs, faPython, faReact, faHtml5, faJs,  faGithub)
app.component('font-awesome-icon', FontAwesomeIcon)

app.directive("magnetic", {
  mounted: function (el) {
    el.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      const { offsetTop, offsetLeft, clientWidth, clientHeight, offsetParent  } = e.target;
      if(!offsetParent) return
      const {offsetLeft: offsetLeftParent, offsetTop: offsetTopParent} = offsetParent

      let x = pageX - offsetLeft - offsetLeftParent;
      let y = pageY - offsetTop - offsetTopParent;
      let newX = mapping(x, clientWidth / 2, 0, 0, 10);
      let newY = mapping(y, clientHeight / 2, 0, 0, 10);
      el.style.transform = `translate3d(${newX}px,${newY}px,${0}px) scale(1.05)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = `translate(0,0)`;
    });

    function mapping(x, max, min, targetMin, targetMax) {
      let y = targetMin + ((x - max) * (targetMax - targetMin)) / (max - min);
      return Number(y.toFixed(2));
    }
  },
});


app.mount("#app");
