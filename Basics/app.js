console.log('Hello, Vue :)');
const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com',
      title: 'The Lord of Rings',
      author: 'JRR Tolkien',
      age: 100,
      visibility: true,
      x: 0,
      y: 0,
      books: [
        { author: 'Jack London', title: 'White Fang', img: 'assets/parrot.png', isFav: true },
        { author: 'Jack London', title: 'The Call of the Wild', isFav: false },
        { author: 'Ernest Hemingway', title: 'The Torrents of Spring', isFav: false },
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
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    }
  }, 
  computed: {
    favoriteBooks() {
      return this.books.filter(book => book.isFav)
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