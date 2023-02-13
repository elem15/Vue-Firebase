<template>
  <div class="dark-drop">
    <div class="modal">
      <h1>Modal title</h1>      
      <p class="content">modal content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  width: 400px;
  height: 200px;
  margin: 200px auto;
  background: whitesmoke;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.dark-drop {
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: green;
  border: none;
  padding: 0;
}

</style>
