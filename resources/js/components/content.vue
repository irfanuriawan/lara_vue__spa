<template>
  <div>
    <h1>{{ title }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id" >
        <!-- v-if="items && items.length > 0 && index <= limit"> -->
          <td>{{ item.id }}</td>
          <td>{{ item.title}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Laravel",
      items: {},
      limit: 9
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
          console.log(res);
          this.items = res.data.slice(0,9);
        })
        .catch(err => {
          console.log("error");
        });
    }
  }
};
</script>