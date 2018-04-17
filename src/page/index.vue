<template>
  <div>
    <myHeader></myHeader>
    <hr/>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <div class="article_list">
      <ul>
        <li v-for="i in list" :key="i.id">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '../components/pubHeader'
import myFooter from '../components/pubFooter'

export default {
  components: {myHeader, myFooter},
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>

<style scoped>
  .article_list {
    margin: auto;
  }
</style>
