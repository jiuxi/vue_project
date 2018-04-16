<template>
  <div>
    <Header></Header>
    <div>
      <ul>
        <li><input type="text" placeholder="输入密码" v-model="token1"></li>
        <li>
          <button @click="btnClick">确定</button>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/pubHeader'
import Footer from '../components/pubFooter'

export default {
  components: {Header, Footer},
  data () {
    return {
      token1: ''
    }
  },
  methods: {
    btnClick () {
      if (this.token1 !== '') {
        localStorage.setItem('token1', this.token1)
        // 登陆成功进入之前想要进入页面
        this.$router.push(this.$route.query.redirect || '/')
      } else {
        alert('请输入内容')
      }
    }
  }
}
</script>
