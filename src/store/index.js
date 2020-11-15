import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        bucketId: 2,
        productId: 3,
        transactionId: 3,
        x: 1,
        y: 3,
        z: 5,
        buckets: [
            {
                id: 0,
                name: 'Pedro',
            },
            {
                id: 1,
                name: 'Luchiano',
            },
        ],
        products: [
            {
                id: 0,
                name: 'tomato',
            },
            {
                id: 1,
                name: 'onion',
            },
            {
                id: 2,
                name: 'cucumber',
            },
        ],
        bucketsToProducts: [
            {
                id: 0,
                bucketId: 0,
                productId: 2,
            },
            {
                id: 1,
                bucketId: 0,
                productId: 1,
            },
            {
                id: 2,
                bucketId: 1,
                productId: 2,
            },
        ],
    },
    getters: {
        getBuckets: (state) => {
            return state.buckets;
        },
        getProducts: (state) => {
            return state.products;
        },
        getTransactions: (state) => {
            return state.bucketsToProducts;
        },
        getZ: (state) => {
            return state.z;
        },
    },
    mutations: {
        addBucket: (state, bucketName) => {
            state.buckets.push({
                id: state.bucketId,
                name: bucketName,
            });
            state.bucketId ++;
        },
        addProduct: (state, productName) => {
            state.products.push({
                id: state.productId,
                name: productName,
            });
            state.productId ++;
        },
        addTransaction: (state, payload) => {
            state.bucketsToProducts.push({
                id: state.transactionId,
                bucketId: payload.bucketId,
                productId: payload.productId,
            });
            state.transactionId ++;
        },

        /*
        addProduct:
        addTransaction:
        removeBucket
        removeProduct
        removeTransaction
        */
    },
    actions: {
        addBucket: (context, bucketName) => {
            context.commit('addBucket', bucketName)
        },
        addProduct: (context, productName) => {
            context.commit('addProduct', productName)
        },
        addTransaction: (context, payload ) => {
            context.commit('addTransaction', payload)
        },
    },
});