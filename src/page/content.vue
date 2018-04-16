<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text="dat.title"></h2>
    <p v-if="dat">作者：{{dat.author.loginname}}&nbsp;&nbsp;&nbsp;&nbsp;发表于：{{$utils.goodTime(dat.create_at)}}</p>
    <hr>
    <article v-html="dat.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in dat.replies" :key="i.create_at">
        <p>评论者：{{i.author.loginname}}&nbsp;&nbsp;&nbsp;&nbsp;评论于：{{$utils.goodTime(i.create_at)}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
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
      id: this.$route.params.id,
      dat: {
        author: {}
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
        this.dat = r.data
      })
    }
  }
}
</script>
