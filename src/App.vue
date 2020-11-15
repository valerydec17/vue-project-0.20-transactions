<template>
  <div id="app">
    <div>{{ getBuckets }}</div>
    <div>{{ getProducts }}</div>
    <div>{{ getTransactions }}</div>
    <div>
      <h3>Add new bucket</h3>
      <button v-on:click="addBucket(name)">set bucket</button>
      Name: {{ name }}
      <input v-model="name" placeholder="print bucket name ..." />
    </div>
    <div>
      <h3>Add new product</h3>
      <button v-on:click="addProduct(product)">set product</button>
      Product: {{ product }}
      <input v-model="product" placeholder="print product name" />
    </div>
    <div>
      <h3>Add new transaction</h3>
      <!-- select product -->
      <!-- select transaction -->
      <div>
        <select v-model="selectedBucket">
          <option disabled value="-1">Select a bucket</option>
          <option v-for="item in getBuckets" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
        <select v-model="selectedProduct">
          <option disabled value="-1">Select a product</option>
          <option v-for="item in getProducts" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
        <button v-on:click="addTransaction({ bucketId: selectedBucket, productId: selectedProduct})">
          set transaction
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data: function () {
    return {
      name: "Louise",
      product: "potato",
      selectedBucket: -1,
      selectedProduct: -1,
      selectedTransaction: -1,
    };
  },
  computed: {
    ...mapGetters(["getBuckets", "getProducts", "getTransactions"]),
  },
  methods: {
    ...mapActions(["addBucket", "addProduct", "addTransaction"]),
    getAllBuckets: function () {
      return this.$store.getters.getBuckets.map((item) => item.name);
    },
    getAllProducts: function () {
      return this.$store.getters.getProducts.map((item) => item.name);
    },
    getAllTransactions: function () {
      return this.$store.getters.getTransactions;
    },
  },
};
</script>

<style>
</style>
