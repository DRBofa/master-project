<template>
  <div>
    <h1>
      <center>Vuejs Validated Methods និងការហៅMethodដោយimport ពីទីតាំដើម </center>
    </h1>
    <br>
    <hr>
    <!-- form -->
    <div>
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="form.name"
          class="form-control"
          placeholder="Enter name"
        >
        <small class="form-text text-muted">Type your name!</small>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input
          v-model.number="form.age"
          class="form-control"
          placeholder="Enter age"
        >
        <small class="form-text text-muted">Enter the number It can't be string !</small>
      </div>

      <div class="form-group">
        <label>Gender</label>
        <input
          v-model="form.gender"
          class="form-control"
          placeholder="Enter gender"
        >
        <small class="form-text text-muted">the value M or F</small>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          placeholder="Enter Email"
        >
        <small class="form-text text-muted">Type of emails</small>
      </div>

      <button
        @click="btnSubmit"
        class="btn btn-primary"
      >Submit</button>
      <button
        @click="btnGetUser"
        class="btn btn-primary"
      >Get User</button>
      <button
        @click="btnDestroy"
        class="btn btn-outline-danger"
      >Destroy</button>

    </div>
    <!-- End Form -->
    <!-- Table -->
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <td>{{user.doc.name}}</td>
            <td>{{user.doc.age}}</td>
            <td>{{user.doc.gender}}</td>
            <td>{{user.doc.email}}</td>
            <td>
              <button
                @click="btnDelete(user.doc)"
                class="btn btn-danger"
              >Delete</button>
              <button
                @click="btnEdit(user.doc)"
                class="btn btn-primary"
              >Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- end Table -->
  </div>
</template>

<script>
import { User } from "../imports/methods/localData";
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
        gender: "",
        email: ""
      },
      users: []
    };
  },
  mounted() {
    this.btnGetUser();
  },
  methods: {
    async btnDestroy() {
      let success = await User.destroy();
      if (success) {
        this.users = [];
      }
    },
    clearForm() {
      this.form = {
        name: "",
        age: "",
        gender: "",
        email: ""
      };
    },
    btnSubmit() {
      if (this.form._id) {
        User.update(this.form);
        console.log("updated");
      } else {
        User.insert(this.form);
      }
      this.btnGetUser();
      this.clearForm();
    },
    async btnGetUser() {
      let users = await User.find();
      this.users = users;
    },
    btnDelete(user) {
      User.delete(user);
      this.btnGetUser();
    },
    btnEdit(user) {
      this.form = user;
    }
  }
};
</script>

<style>
</style>