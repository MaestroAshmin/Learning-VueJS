new Vue({
  el: "#vue-app",
  data: {
    name: "Ashmin",
    job: "Laravel and Vue Developer",
    website: "http://www.bonjour.com.np",
    websiteTag: '<a href="http://www.bonjour.com.np">Directive</a>',
    age: 23,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ["Mario", "Yoshi", "Ganpachiro"],
    ninjas: [
      { name: "Ryu", age: 25 },
      { name: "Yoshi", age: 35 },
      { name: "Ken", age: 40 }
    ],
    health: 100,
    ended: false,
    output: "Your favorite food"
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert("Clicked a link");
    },
    logName: function() {
      console.log("You entered your name");
    },
    logAge: function() {
      console.log("You entered your age");
    },
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    },
    readRefs: function() {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
  },
  computed: {
    addToA: function() {
      console.log("Add to A");
      return this.a + this.age;
    },
    addToB: function() {
      console.log("Add to B");
      return this.b + this.age;
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
});

var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue app 1"
  },
  methods: {},
  computed: {
    greet: function() {
      return "Hello from app 1";
    }
  }
});
var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue app 2"
  },
  methods: {
    changeTitle: function() {
      one.title = "Title changed";
    }
  },

  computed: {
    greet: function() {
      return "Hello from app 2";
    }
  }
});

two.title = "Changed from outside Vue";

Vue.component("greeting", {
  template:
    "<p>Re-usable component {{name}}.<button v-on:click='changeName'>Change name</button></p>",
  data: function() {
    return {
      name: "Ganpachiro"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Mario";
    }
  }
});
var Vue1 = new Vue({
  el: "#vue-app-1"
});
var Vue2 = new Vue({
  el: "#vue-app-2"
});
