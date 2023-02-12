console.log('Hello, Vue :)');
const app = Vue.createApp({
  data() {
    return {
      title: 'The Lord of Rings',
      author: 'JRR Tolkien',
      age: 100,
      visibility: true,
      x: 0,
      y: 0,
      books: [
        { author: 'Jack London', title: 'White Fang'},
        { author: 'Jack London', title: 'The Call of the Wild'},
        { author: 'Ernest Hemingway', title: 'The Torrents of Spring'},
      ]
    }
  },
  methods: {
    returnTitle() {
      this.title = 'The Lord of Rings';
    },
    thirdTitle(title) {
      this.title = title;
    },
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
    handleEvent(...args) {
      args.map((arg, idx) => {
        if (idx === 0) console.log(arg.type);
        else console.log(arg)
      })    
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});
app.mount('#app');
// const { createApp } = Vue

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app')