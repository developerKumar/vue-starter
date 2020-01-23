import Vue from "vue";
import Router from "vue-router";
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "Foo"
      }
    },
    {
      path: "/foo",
      name: "Foo",
      component: Foo
    },
    {
      path: "/bar",
      name: "Bar",
      component: Bar
    }
  ]
});
