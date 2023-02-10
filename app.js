console.log('Hello, Vue :)');
const app = Vue.createApp({
  data() {
    return {
      title: 'The Lord of Rings',
      author: 'JRR Tolkien',
      age: 100
    }
  },
  methods: {
    returnTitle() {
      this.title = 'The Lord of Rings';
    },
    thirdTitle(title) {
      this.title = title;
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