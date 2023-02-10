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
    handleEvent(...arg) {
      console.log(arg[0].type)
      if(arg[1]) console.log(arg[1])
      if(arg[2]) console.log(arg[2])
      if(arg[3]) console.log(arg[3])
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