<template>
  <form action="">
    <label for="">Email</label>
    <input type="email" v-model="email" required />
    <label for="">Password</label>
    <input type="current-password" v-model="password" required />
    <label for="">Role</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label for="">Accept term and conditions</label>
    </div>
    <div class="names">
      <input type="checkbox" value="Maria" v-model="names" />
      <label for="">Maria</label>
      <br />
      <input type="checkbox" value="James" v-model="names" />
      <label for="">James</label>
      <br />
      <input type="checkbox" value="Andrea" v-model="names" />
      <label for="">Andrea</label>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms ? "Yes" : "No" }}</p>
  <p>Selected names: {{ names.join(", ") }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      names: [],
    };
  },
  methods: {},
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  top: 2px;
  margin: 0 20px 0 0;
  position: relative;
}
</style>