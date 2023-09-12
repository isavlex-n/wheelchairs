<template>
  <div>
    <h2>Home</h2>
  </div>
</template>

<script>
  import { databases } from '../server/appwrite/appwriteConfig'
  export default {
    data() {
      return {
        products: []
      }
    },
    methods: {
      loadProducts() {
        const products = databases.listDocuments('650027fbd887f0edb021')
        products.then(
          function(res) {
            this.products = res.documents
            console.log(this.products)
          },
          function(error) {
            console.log(error)
          }
        )
      }
    },
    created() {
      console.log('created')
      this.loadProducts()
    }
  }
</script>

<style lang="scss" scoped>

</style>