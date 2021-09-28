const myApp = {
  data() {
    return {
      contador: 1,
      titulo: "a volta dos que nao foram",
    };
  },
};

Vue.createApp(myApp).mount("#counter");

const app3 = {
  data() {
    return {
      seen: true,
    };
  },
  methods: {
    changeSeenState: function () {
      if (this.seen === true) {
        return (this.seen = false);
      } else {
        return (this.seen = true);
      }
    },
  },
};

Vue.createApp(app3).mount("#app3");

//vue components
const app4 = Vue.createApp({});

app4.component("todo-item", {
  data() {
    return {
      todos: [
        { name: "fazer comida" },
        { name: "jogar videogames" },
        { name: "ser feliz" },
      ],
    };
  },
  template: `<ul>
    <li v-for="todo in todos">
        {{todo.name}}
    </li>
    </ul>`,
});

app4.mount("#app4");
