import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueMeta);

Vue.directive("magnetic", {
  bind: function(el) {
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

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
