import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from 'vue-gtag';




const app = createApp(
  App,
  {}
  )

app.use(router)


app.config.productionTip = false;

app.use(VueGtag, {
  config: { id: process.env.VUE_APP_GA_ID }
}, router);


app.directive("magnetic", {
  created: function (el) {
    el.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      const offsetTopParent = e.target.offsetParent.offsetTop;
      const offsetLeftParent = e.target.offsetParent.offsetLeft;

      const { offsetTop, offsetLeft, clientWidth, clientHeight } = e.target;
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
