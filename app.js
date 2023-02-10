console.log('Hello, Vue :)');
const app = Vue.createApp({
  data() {
    return {
      title: 'The Lord of Rings',
      author: 'JRR Tolkien'
    }
  },
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