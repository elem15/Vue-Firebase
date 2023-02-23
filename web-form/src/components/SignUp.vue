<template>
  <form @submit.prevent="handleSubmit">
    <label for="">Email</label>
    <input type="email" v-model="email" required />
    <label for="">Password</label>
    <input type="current-password" v-model="password" required />
    <div class="error">{{ passwordError }}</div>
    <label for="">Role</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label for="">Accept term and conditions</label>
    </div>
    <div class="skills">
      <label for="">Skills</label>
      <input type="input" v-model="tempSkill" @keyup.alt="addSkill" />
      <label for="">press "Alt + Comma" to add skill to list</label>
    </div>
    <span v-for="skill in skills" :key="skill" class="pill">
      {{ skill }}
    </span>
    <div class="submit">
      <button>Send Form</button>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms ? "Yes" : "No" }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (
        e.key === "," &&
        this.tempSkill &&
        !this.skills.includes(this.tempSkill)
      ) {
        this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },
    handleSubmit() {
      this.passwordError =
        this.password.length < 6
          ? "Password length must be at least 6 characters"
          : "";
      if (!this.passwordError) {
        console.log(this.email);
        console.log(this.password);
        console.log(this.role);
        console.log(this.skills);
      }
    },
  },
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
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  color: white;
  margin-top: 20px;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.pill {
  display: inline-block;
  margin: 0 20px 20px 0;
  background: #e9e6e6;
  color: #555;
  border-radius: 20px;
  font-size: 0.8em;
  padding: 8px 13px;
}
.error {
  color: red;
  font-size: 0.7em;
}
</style>