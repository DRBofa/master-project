<template>
  <div>
    <h1>
      <center>Vuejs Validated Methods និងការហៅMethodដោយimport ពីទីតាំដើម </center>
    </h1>
    <br>
    <hr>
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
        @click="findDoc"
        class="btn btn-primary"
      >Find</button>
      {{data}}
    </div>
  </div>
</template>

<script>
import { insertFile } from "../imports/methods/fileMethods";
import json from "../doc/customers.json";
export default {
  data() {
    return {
      data: json,
      form: {
        name: "a",
        age: "b",
        gender: "c",
        email: "d"
      }
    };
  },
  mounted() {},
  methods: {
    findDoc() {
      Meteor.call("findDoc", (err, result) => {
        if (result) {
          console.log(result);
        }
      });
    },
    btnSubmit() {
      // insertFile.call((error, result) => {
      //   if (result) {
      //     this.form = JSON.parse(result);
      //     console.log(typeof JSON.parse(result), result);
      //   } else console.log(error);
      // });
      Meteor.call("insertDoc", this.form, (err, result) => {
        if (result) {
          console.log(result);
        }
      });
    }
  }
};
</script>

<style>
</style>  