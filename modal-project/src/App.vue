<template>
  <h1>{{ title }}</h1>
  <div>
    <input type="text" ref="name" />
    <button @click="handleEvent">Click me</button>
  </div>
  <p>{{ text }}</p>
  <div>
    <button @click.ctrl="toggleModal">Open Modal (with CTRL)</button>
    <button @click="toggleModalTwo">Open Modal Two</button>
  </div>
  <teleport to="#modals" v-if="isModal">
    <Modal :header="header" :footer="footer" theme="dark" @close="toggleModal">
      <h2>Info from SLOT</h2>
      <template v-slot:links>
        <div class="actions">
          <a href="#">sign in</a> <a href="#">more info</a>
        </div>
      </template>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="isModalTwo">
  <Modal
    :header="header"
    :footer="footer"
    theme="sale"
    @close="toggleModalTwo"
  >
    <h2>Modal TWO</h2>
    <template v-slot:links>
      <div class="actions">
        <a href="#">sign in</a> <a href="#">more info</a>
      </div>
    </template>
  </Modal>
  </teleport>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first Vue App :)",
      text: "",
      header: "Modal",
      footer: "All rights register",
      isModal: false,
      isModalTwo: false,
    };
  },
  methods: {
    handleEvent() {
      const input = this.$refs.name;
      console.log(input.value);
      input.className = "active";
      input.focus();
      this.text = input.value;
    },
    toggleModal() {
      this.isModal = !this.isModal;
    },
    toggleModalTwo() {
      this.isModalTwo = !this.isModalTwo;
    },
  },
};
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.active {
  border-color: green;
}
.actions a {
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid blueviolet;
  border-radius: 3px;
}
.actions :last-child {
  margin-left: 30px;
}
</style>
