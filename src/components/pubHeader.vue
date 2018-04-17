<template>
  <div>
    <h1>The number is:{{$store.state.num.count}}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  computed: {
    num () {
      return this.$store.state.count
    }
  },
  watch: {
    num (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
